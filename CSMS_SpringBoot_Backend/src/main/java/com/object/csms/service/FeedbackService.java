package com.object.csms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.object.csms.entity.CategoryPrice;
import com.object.csms.entity.DeliveryBoy;
import com.object.csms.entity.Feedback;
import com.object.csms.repository.CategoryPriceRepository;
import com.object.csms.repository.FeedbackRepository;

@Service
public class FeedbackService {
	@Autowired
	FeedbackRepository repo;
	public List<Feedback> getAll()
	{
		return repo.findAll();
	}
	//public List<Feedback> getByCustomerId(int id)
	//{
	//	return repo.getByCustomerId(id);
	//}
	public Feedback getfeedback(int id)
	{
		return repo.findById(id).get();
	}	
	public void saveOrUpdate(Feedback savefeedback)  
	{  
		repo.save(savefeedback); 		
	}
	public List<Feedback> getFeedbackByCompanyId(Integer id) {
		// TODO Auto-generated method stub
		return repo.findByCompanyId(id);
	}
	public List<Feedback> getFeedbackByCustomerId(Integer id) {
		// TODO Auto-generated method stub
		return repo.findByCustomerId(id);
	}
	

}
