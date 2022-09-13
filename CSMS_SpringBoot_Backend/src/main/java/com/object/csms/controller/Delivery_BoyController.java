package com.object.csms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.object.csms.entity.Delivery_Boy;
import com.object.csms.entity.Vehicles_Details;
import com.object.csms.service.Delivery_BoyService;
import com.object.csms.service.VehicleService;

@RestController
@CrossOrigin(origins="*")
public class Delivery_BoyController {
	@Autowired
	Delivery_BoyService services;
	
	@GetMapping("/getalldeliveryboy")
	public Iterable<Delivery_Boy> getDelivery_Boy()
	{
		Iterable<Delivery_Boy> deli = services.listAll();
		return deli;    
	}
	
	@GetMapping("/{id}/getdeliverydetails")
	public List<Delivery_Boy> getDeliveryDetails(@PathVariable(name="id")int id)
	{
		List<Delivery_Boy> resp = services.getDelivery_BoyByCompany_Id(id);
		return resp;
	}
	
	@PostMapping(value = "/deliveryboyregister")
	private int saveVehicle (@RequestBody Delivery_Boy delivery)  
	{  
		services.saveOrUpdate(delivery);  
		return delivery.getDelivery_boy_id();
	}
	
	@RequestMapping("/deliveryboy/{id}")  
	private Delivery_Boy  getDelivery_Boy(@PathVariable(name = "id") int id)  
	{  
		return services.getDelivery_BoyById(id);
	}  

	@DeleteMapping("/deletedeliveryboy/{id}")  
	private void deleteDelivery_Boy(@PathVariable("id") int id)  
	{  
		services.delete(id);
	}
}
