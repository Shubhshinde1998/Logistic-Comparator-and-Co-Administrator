package com.object.csms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.object.csms.entity.Delivery_Boy;
import com.object.csms.entity.Vehicles_Details;
@Repository
public interface Delivery_BoyRepository extends JpaRepository<Delivery_Boy, Integer> {
	@Query("select c from Delivery_Boy c where company_id=:id")
	List<Delivery_Boy> findByCompany_Id(int id);

}
