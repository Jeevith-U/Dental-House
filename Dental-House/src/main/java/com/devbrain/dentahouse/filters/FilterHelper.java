package com.devbrain.dentahouse.filters;

import com.devbrain.dentahouse.util.SimpleResponseStructure;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetails;

import java.io.IOException;
import java.util.Arrays;

public class FilterHelper {

    private FilterHelper() {
        /*
         * Created private constructor to avoid Instantiation of class
         * */
    }

    public static String extractCookie(String cookieName, Cookie[] cookies){
        return Arrays.stream(cookies).filter(cookie -> cookie.getName().equals(cookieName))
                .map(Cookie::getValue)
                .toList()
                .get(0);
    }

    public static void setAuthentication(String username, HttpServletRequest request){
        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(username,
                    null, null);
            token.setDetails(new WebAuthenticationDetails(request));
            SecurityContextHolder.getContext().setAuthentication(token);
        }
    }

    public static void handleException(HttpServletResponse response, String message) throws IOException {
        response.setStatus(HttpStatus.UNAUTHORIZED.value());
        response.setContentType("Application/json");
        response.setHeader("error", message);
        SimpleResponseStructure structure = new SimpleResponseStructure()
                .setStatus(HttpStatus.UNAUTHORIZED.value())
                .setMessage(message);
        new ObjectMapper().writeValue(response.getOutputStream(), structure);
    }
}

