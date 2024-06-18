package com.devbrain.dentahouse.filters;

import com.devbrain.dentahouse.security.JwtService;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Slf4j
@AllArgsConstructor
public class JwtRefreshFilter extends OncePerRequestFilter {

    private final JwtService jwtService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        log.info("Authenticating Access Credentials..");
        String rt = JwtAuthenticationHelper.extractCookie("rt", request.getCookies());

        if(rt != null){
            log.info("Refresh Token extracted");
            String username = null;

            try{
                username = jwtService.extractUsername(rt);
            } catch (ExpiredJwtException ex){
                log.info("Refresh Token is expired");
                JwtAuthenticationHelper.handleException(response, "Failed to authenticate");
            } catch (JwtException ex) {
                log.info("Invalid Refresh Token");
                JwtAuthenticationHelper.handleException(response, "Authentication Failed | " + ex.getMessage());
            }
            if(username != null){
                log.info("username extracted");
                JwtAuthenticationHelper.setAuthentication(username, request);
            } else log.info("Username not found");


        } else log.info("Refresh token not found");

        filterChain.doFilter(request, response);
    }
}
