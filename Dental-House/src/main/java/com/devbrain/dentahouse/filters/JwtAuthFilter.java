package com.devbrain.dentahouse.filters;

import com.devbrain.dentahouse.security.JwtService;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Arrays;

@AllArgsConstructor
@Slf4j
public class JwtAuthFilter extends OncePerRequestFilter {

    private JwtService jwtService;


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        log.info("Authenticating Access Credentials..");
        String at = FilterHelper.extractCookie("at", request.getCookies());

        if(at != null){
            log.info("Access token extracted");
            String username = null;

            try{
                log.info("Extracting username...");
                username = jwtService.extractUsername(at);
            } catch (ExpiredJwtException ex){
                log.info("Jwt token is expired");
                FilterHelper.handleException(response, "Failed to authenticate");
            } catch (JwtException ex) {
                log.info("Invalid Jwt token");
                FilterHelper.handleException(response, "Authentication Failed | " + ex.getMessage());
            }

            if(username != null){
                log.info("username extracted");
                FilterHelper.setAuthentication(username, request);
            } else log.info("Username not found");


        } else log.info("Access token not found");

        filterChain.doFilter(request, response);
    }
}
