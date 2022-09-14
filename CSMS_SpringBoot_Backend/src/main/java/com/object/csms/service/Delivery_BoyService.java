package com.object.csms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.object.csms.entity.Delivery_Boy;
import com.object.csms.entity.Vehicles_Details;
import com.object.csms.repository.Delivery_BoyRepository;
import com.object.csms.repository.VehicleRepository;

@Service
public class Delivery_BoyService {
	@Autowired
	Delivery_BoyRepository repo;
	
	public Iterable<Delivery_Boy> listAll() 
	{
        return this.repo.findAll();
    }
	
	public void saveOrUpdate(Delivery_Boy Delivery)  
	{  
		repo.save(Delivery); 		
	}
	
	public Delivery_Boy getDelivery_BoyById(int id)  
	{  
		return repo.findById(id).get();  
	}	
	 
	public void delete(int id)  
	{  
		repo.deleteById(id);  
	}

	public List<Delivery_Boy> getDelivery_BoyByCompany_Id(int id) {
		
		return repo.findByCompany_Id(id);
	}
}
