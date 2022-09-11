package com.object.csms.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.object.csms.entity.User;
import com.object.csms.service.UserService;

@RestController
@CrossOrigin(origins="*")
public class UserController {

	@Autowired
	UserService services;
	
	@GetMapping("/getall")
	public Iterable<User> getUsers()
	{
		return services.listAll();    
	}
	 
	@PostMapping(value = "/save")
	private int saveUser(@RequestBody User user)  
	{  
		services.saveOrUpdate(user);  
		return  user.getUser_Id();  
	}
	
	@PostMapping(value="/login")
	public ResponseEntity<User> loginUser(@RequestBody User users,HttpServletResponse res)
	{
		
		User temp = services.getUserByName(users.getUser_Username());
		if(temp.getUser_Username().equalsIgnoreCase(users.getUser_Username())&& temp.getUser_Password().equalsIgnoreCase(users.getUser_Password()))
		{
			Cookie cookie = new Cookie("username",temp.getUser_Username());
					res.addCookie(cookie);
			User resp = new User(temp.getUser_Id(), temp.getUser_Role(), temp.getUser_Username());
	
			return new ResponseEntity<User>(resp,(HttpStatus.OK));
		}
		else
			return new ResponseEntity<User>(HttpStatus.BAD_REQUEST);
	}
	  
	@RequestMapping("/user/{id}")  
	private User getUsers(@PathVariable(name = "id") int userid)  
	{  
		return services.getUserById(userid) ;
	}  
	    
	@PutMapping("/update/{id}")	 
    private User update(@RequestBody User users,@PathVariable int id)  
    {  
		users.setUser_Id(id);
		services.saveOrUpdate(users); 
		return users;  
    }  
	 
	@DeleteMapping("/delete/{id}")  
	private void deleteUser(@PathVariable("id") int id)  
	{  
		services.delete(id);  
	}  
	
}
