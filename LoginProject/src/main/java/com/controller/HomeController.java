package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import com.jdbc.SignupJDBC;
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
	
	@RequestMapping("signup")
	public String signup() {
		return "Signup";
	}
	
	@RequestMapping(value = "save",method = RequestMethod.POST)
	public String login(
			@RequestParam("email") String email,
			@RequestParam("password") String password)
	{
		
		Testingjdbc t=new Testingjdbc(email,password);
		return "data-added";
	}
	
	@RequestMapping(value = "final",method = RequestMethod.POST)
	public String signup(
			@RequestParam("name") String name,
			@RequestParam("email") String email,
			@RequestParam("password") String password) 
	{
		SignupJDBC s=new SignupJDBC(name, email, password);
		return "signup-data-added";
	}
}
