package com.dao;

import com.entity.LoginEntity;
import com.entity.Signup;

public interface UserDao {
	
	public int login(LoginEntity l);
	public int signup(Signup s);
}
