package com.object.csms.service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.object.csms.entity.Orders;
import com.object.csms.repository.OrdersRepository;

@Service
public class OrdersService {

	
	@Autowired
	OrdersRepository repo;
	
	public List<Orders> getOrder()
	{
		return repo.findAll();
	}
	
	public void saveOrder(Orders order)
	{
		repo.save(order);
	}
}
