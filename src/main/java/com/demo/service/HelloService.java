package com.demo.service;

import org.springframework.stereotype.Service;

@Service
public class HelloService {
    
    public String greetings(){
        return "Hello, from server";
    }
}
