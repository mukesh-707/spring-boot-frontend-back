package com.jdbc;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.dao.UserDao;
import com.entity.LoginEntity;

public class Testingjdbc {
		
		public Testingjdbc(String email,String password) {
			LoginEntity le=new LoginEntity();
			le.setEmail(email);
			le.setPassword(password);
			
			ApplicationContext context=new ClassPathXmlApplicationContext("Config.xml");
			UserDao u=context.getBean("userDao",UserDao.class);
			u.login(le);
			
		}
}
