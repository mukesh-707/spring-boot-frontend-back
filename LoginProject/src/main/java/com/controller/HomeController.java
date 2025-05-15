package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.jdbc.Testingjdbc;

@Controller
public class HomeController {
	
	@RequestMapping("index")
	public String home() {
		return "index";
	}
	
	@RequestMapping("login")
	public String login() {
		return "Login";
	}
	
	@RequestMapping(value = "save",method = RequestMethod.POST)
	public String submit(
			@RequestParam("email") String email,
			@RequestParam("password") String password)
	{
		
		Testingjdbc t=new Testingjdbc(email,password);
		return "data-added";
	}

}
