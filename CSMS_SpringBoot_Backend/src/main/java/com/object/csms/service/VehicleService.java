package com.object.csms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.object.csms.entity.Vehicles_Details;
import com.object.csms.repository.VehicleRepository;

@Service
public class VehicleService {

	@Autowired
	VehicleRepository repo;
	
	public Iterable<Vehicles_Details> listAll() 
	{
        return this.repo.findAll();
    }
	
	public void saveOrUpdate(Vehicles_Details vehicle)  
	{  
		repo.save(vehicle); 		
	}
	
	public Vehicles_Details getVehicleById(int id)  
	{  
		return repo.findById(id).get();  
	}	
	 
	public void delete(int id)  
	{  
		repo.deleteById(id);  
	}

	public List<Vehicles_Details> getVehicleByCompany_Id(int id) {
		
		return repo.findByCompany_Id(id);
	}
	
}
