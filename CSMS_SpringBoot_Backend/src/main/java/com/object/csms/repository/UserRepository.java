package com.object.csms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.object.csms.entity.User;
@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

	@Query("select d from User d where User_Username = :username and User_Password = :password")
	public User checkLogin(String username,String password);

}
