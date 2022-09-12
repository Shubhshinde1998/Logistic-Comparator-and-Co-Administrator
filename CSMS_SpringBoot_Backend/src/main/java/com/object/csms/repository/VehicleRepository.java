package com.object.csms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.object.csms.entity.Vehicles_Details;
@Repository
public interface VehicleRepository extends JpaRepository<Vehicles_Details, Integer> {

	//@Query("insert into Vehicles_Details (vehicles_details_no,company_id) select:vehicles_details_no,:company_id from company")
	//void saveVehicle(int vehicles_details_no, Company company);

}
