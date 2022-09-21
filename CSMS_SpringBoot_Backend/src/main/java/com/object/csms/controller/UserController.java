package com.object.csms.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.object.csms.entity.User;
import com.object.csms.requestbean.LoginRequest;
import com.object.csms.service.UserService;

@RestController
@CrossOrigin(origins="*")
public class UserController {

	@Autowired
	UserService services;
	
	@GetMapping("/getall")
	public ResponseEntity<Iterable<User>> getUsers()
	{
		throw new RuntimeException("Test getuser runtime exception");
		//return new ResponseEntity<>(services.listAll(),HttpStatus.OK);    
	}
	 
	@PostMapping("/save")
	public int saveUser(@RequestBody User user)  
	{  
		services.saveOrUpdate(user);
		return  user.getUserId();  
	}
	
	@PostMapping("/login")
	public Object checkLogin(@RequestBody LoginRequest users)
	{	
		return services.checkLogin(users.getUsername(), users.getPassword());
	}
	  
	@GetMapping("/user/{id}")  
	public User getUsers(@PathVariable("id") int userid)  
	{  
		return services.getUserById(userid) ;
	}  
	    
	@PutMapping("/update/{id}")	 
    public User update(@RequestBody User users,@PathVariable int id)  
    {  
		users.setUserId(id);
		services.saveOrUpdate(users); 
		return users;  
    }  
	 
	@DeleteMapping("/{id}/delete")  
	public ResponseEntity<HttpStatus> deleteUser(@PathVariable("id") int id)  
	{  
		services.delete(id);  
		return new ResponseEntity<>(HttpStatus.OK);
	}  
	@ExceptionHandler
	public ResponseEntity<Object> handleException (Exception e)
	{
		return new ResponseEntity<>("Something went wrong!!" ,HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	//get count of pending request of company for Admin
	@GetMapping("/getpendingcount")
	public int getPendingCount()
	{
		return services.getPendingCount();
	}
	
}
