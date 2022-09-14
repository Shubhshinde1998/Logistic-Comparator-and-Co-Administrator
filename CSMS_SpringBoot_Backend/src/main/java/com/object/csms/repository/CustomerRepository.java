package com.object.csms.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.object.csms.entity.Company;
import com.object.csms.entity.Customer;
@Repository
public interface CustomerRepository extends CrudRepository<Customer, Integer> {

	@Query("select d from Customer d where User_Id=:id")
	public Optional<Customer> findByUser_Id(int id);
}
