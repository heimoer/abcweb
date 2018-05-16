package com.web.abc.service.impl;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.abc.dao.UserDAO;
import com.web.abc.model.UserModel;
import com.web.abc.service.UserService;

@Service
public class UserServiceImpl implements UserService{
	
	Logger logger=Logger.getLogger(UserServiceImpl.class);
	
	@Autowired
	private UserDAO userDAO;

	@Override
	public int insert(UserModel model) {
		return userDAO.insert(model);
	}
	
  
}
