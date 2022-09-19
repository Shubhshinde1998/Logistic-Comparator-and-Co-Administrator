package com.object.csms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.object.csms.entity.Orders;
import com.object.csms.service.OrdersService;

@RestController
@CrossOrigin(origins="*")
public class OrdersController {

	@Autowired
	OrdersService services;
	
	@GetMapping("/getorder")
	public List<Orders> getOrders()
	{
		return services.getOrder();
	}
	
	@PostMapping("/orderrequest")
	public int saveOrder(@RequestBody Orders order)
	{
		 services.saveOrder(order);
		 return order.getCourierDetailsId();
		 
	}
}
