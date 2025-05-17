package com.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import org.springframework.jdbc.core.JdbcTemplate;

import com.entity.LoginEntity;
import com.entity.Signup;
import com.jdbc.Testingjdbc;

public class UserDaoImplemented implements UserDao{
	
	private JdbcTemplate jdbctemplate;
	
	
	public JdbcTemplate getJdbctemplate() {
		return jdbctemplate;
	}


	public void setJdbctemplate(JdbcTemplate jdbctemplate) {
		this.jdbctemplate = jdbctemplate;
	}
	
	@Override
	public int login(LoginEntity l) {
		// TODO Auto-generated method stub
		String query="insert into LoginEntity(email,password) values(?,?)";
		return this.jdbctemplate.update(query,l.getEmail(),l.getPassword());
	}


	@Override
	public int signup(Signup s) {
		// TODO Auto-generated method stub
		String query="insert into signup(name,email,password) values(?,?,?)";
		return this.jdbctemplate.update(query,s.getName(),s.getEmail(),s.getPassword());
	}

}
