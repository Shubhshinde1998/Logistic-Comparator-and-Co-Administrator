package com.object.csms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.object.csms.entity.User;
import com.object.csms.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository repo;
	
	public Iterable<User> listAll() {
        return this.repo.findAll();
    }

	public void saveOrUpdate(User users)  
	{  
		repo.save(users);  
	}
	
	public User getUserById(int id)  
	{  
		return repo.findById(id).get();  
	}
	
	public void update(User users, int id)  
	{  
		repo.save(users);  
	}  
	 
	public void delete(int id)  
	{  
		repo.deleteById(id);  
	} 
		
}
