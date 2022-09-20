package com.object.csms.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.object.csms.entity.DeliveryBoy;
import com.object.csms.entity.Feedback;
import com.object.csms.service.FeedbackService;

@RestController
@CrossOrigin(origins="*")
public class FeedbackController {
	@Autowired
	FeedbackService services;
	
	@GetMapping("/getfeedback")
	public List<Feedback> getAll()
	{
		return services.getAll();
	}
	@GetMapping("/{id}/getfeedback")
	public Feedback findById(@PathVariable(name="id") int id)
	{
		return services.getfeedback(id);
	}
	@PostMapping("/feedbackregister")
	private int savefeedback (@RequestBody Feedback feedback)  
	{  
		services.saveOrUpdate(feedback);  
		return feedback.getFeedbackId();
	}
	
	@GetMapping("/{id}/getfeedbackresponse")
	public List<Feedback> getfeedback(@PathVariable(name="id")Integer id)
	{
		List<Feedback> resp = services.getFeedbackByCompanyId(id);
		return resp;
	}
	
	@GetMapping("/{id}/getfeedbackcustomer")
	public List<Feedback> getfeedbackcustomer(@PathVariable(name="id")Integer id)
	{
		List<Feedback> resp = services.getFeedbackByCustomerId(id);
		return resp;
	}
	
}
