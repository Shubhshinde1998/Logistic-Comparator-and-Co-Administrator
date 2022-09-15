package com.object.csms.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.object.csms.entity.Company;
@Repository
public interface CompanyRepository extends CrudRepository<Company, Integer> {

	@Query("select d from Company d where User_Id=:id")
	public Optional<Company> findByUser_Id(int id);
	
	@Modifying
	//@Query(value="DELETE from Company c where c.Company_Id =:id")
	public void deleteById(int id);
}
