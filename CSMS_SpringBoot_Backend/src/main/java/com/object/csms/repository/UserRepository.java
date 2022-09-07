package com.object.csms.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.object.csms.entity.User;
@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

}
