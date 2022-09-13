package com.object.csms.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.object.csms.entity.Vehicles_Details;
import com.object.csms.service.VehicleService;

@RestController
@CrossOrigin(origins="*")
public class VehicleController {

	@Autowired
	VehicleService services;
	
	@GetMapping("/getallvehicle")
	public Iterable<Vehicles_Details> getVehicle()
	{
		Iterable<Vehicles_Details> vehi = services.listAll();
		return vehi;    
	}
	
	@GetMapping("/{id}/getvehicledetails")
	public List<Vehicles_Details> getVehicleDetails(@PathVariable(name="id")int id)
	{
		List<Vehicles_Details> resp = services.getVehicleByCompany_Id(id);
		return resp;
	}
	
	@PostMapping(value = "/vehicleregister")
	private int saveVehicle (@RequestBody Vehicles_Details vehicle)  
	{  
		services.saveOrUpdate(vehicle);  
		return  vehicle.getVehicles_details_id();
	}
	
	@RequestMapping("/vehicle/{id}")  
	private Vehicles_Details getVehicle(@PathVariable(name = "id") int id)  
	{  
		return services.getVehicleById(id) ;
	}  

	@DeleteMapping("/deletevehicle/{id}")  
	private void deleteVehicle(@PathVariable("id") int id)  
	{  
		services.delete(id);
	}
}
