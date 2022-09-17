package com.object.csms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.object.csms.entity.CategoryPrice;
import com.object.csms.entity.Complaint;
import com.object.csms.entity.Feedback;
import com.object.csms.repository.ComplaintRepository;

@Service 
public class ComplaintService {
	@Autowired
	ComplaintRepository repo;
	
	public List<Complaint> getAll()
	{
		return repo.findAll();
	}
	
	public Complaint getComplaint(int id)
	{
		return repo.findById(id).get();
	}

	public List<Complaint> getByComplaintId(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	public void updateComplaintStatus(Complaint update) {
		// TODO Auto-generated method stub
		 repo.save(update);
	}	
	public void saveOrUpdate(Complaint savecomplaint)  
	{  
		repo.save(savecomplaint); 		
	}
}
