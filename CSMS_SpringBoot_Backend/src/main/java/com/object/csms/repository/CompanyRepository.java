package com.object.csms.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.object.csms.entity.Company;
import com.object.csms.entity.User;
@Repository
public interface CompanyRepository extends CrudRepository<Company, Integer> {

	@Query("select d from Company d where User_Id=:id")
	public Optional<Company> findByUserId(int id);
	
	@Modifying
	//@Query(value="DELETE from Company c where c.Company_Id =:id")
	public void deleteById(int id);
	
	@Query("select d from Company d where User_Id=:id")
	public Company findByUserIdd(int id);

	
	//@Query(value="select d.* from company d join users u on u.user_id = d.user_id where u.user_status= 'false'",nativeQuery=true)
	//public List<Company> findPendingCompany();
}
