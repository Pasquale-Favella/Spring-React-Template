package com.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.service.HelloService;

@RestController
@RequestMapping("api")
public class HelloController {

    @Autowired
    HelloService helloService;

	@GetMapping("/greetings")
    public String hello() {
        return helloService.greetings();
    }

}
