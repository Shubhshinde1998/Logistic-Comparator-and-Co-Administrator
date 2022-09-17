package com.object.csms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.object.csms.entity.CategoryPrice;
import com.object.csms.entity.Complaint;

@Repository
public interface ComplaintRepository extends JpaRepository<Complaint, Integer>{

	//public List<Complaint> getByComplaintId(int id);
}