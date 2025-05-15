package com.dao;

import org.springframework.jdbc.core.JdbcTemplate;

import com.entity.LoginEntity;

public class UserDaoImplemented implements UserDao{
	
	private JdbcTemplate jdbctemplate;
	
	
	public JdbcTemplate getJdbctemplate() {
		return jdbctemplate;
	}


	public void setJdbctemplate(JdbcTemplate jdbctemplate) {
		this.jdbctemplate = jdbctemplate;
	}


	@Override
	public int insert(LoginEntity l) {
		// TODO Auto-generated method stub
		String query="insert into LoginEntity(email,password) values(?,?)";
		return this.jdbctemplate.update(query,l.getEmail(),l.getPassword());
	}
}
