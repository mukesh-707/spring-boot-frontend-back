package com.jdbc;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.dao.UserDao;
import com.entity.Signup;

public class SignupJDBC {
	
	public SignupJDBC(String name,String email,String password) {
		Signup su=new Signup();
		su.setName(name);
		su.setEmail(email);
		su.setPassword(password);
		
		ApplicationContext context=new ClassPathXmlApplicationContext("Config.xml");
		UserDao ud=context.getBean("userDao",UserDao.class);
		ud.signup(su);
	}

}
