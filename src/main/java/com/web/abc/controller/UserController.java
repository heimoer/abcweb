package com.web.abc.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.web.abc.model.UserModel;
import com.web.abc.service.UserService;

@Controller
@RequestMapping("user")
public class UserController extends BaseController<UserController>{
	Logger logger=Logger.getLogger(UserController.class);
	
	@Autowired
	private UserService userService;
	/**
	 * 保存试听信息
	 * @param page
	 * @param rows
	 * @param user
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="/shitinginsert",method=RequestMethod.POST)
	public Map<String,String> shitinginsert(UserModel model){
		Map<String,String> req = new HashMap<String,String>();
		model.setCreateDate(new Date());
		userService.insert(model);
		req.put("code", "88");
		req.put("msg", "成功");
		return req;
	}
	
	
	
}
