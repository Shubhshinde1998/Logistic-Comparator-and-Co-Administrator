package com.object.csms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.object.csms.entity.Vehicles_Details;
@Repository
public interface VehicleRepository extends JpaRepository<Vehicles_Details, Integer> {

	@Query("select d from Vehicles_Details d where company_id=:id")
	List<Vehicles_Details> findByCompany_Id(int id);

	public void deleteById(int id);
}
