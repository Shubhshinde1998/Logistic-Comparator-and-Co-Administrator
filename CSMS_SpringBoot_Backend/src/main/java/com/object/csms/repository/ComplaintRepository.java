package com.object.csms.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.object.csms.entity.Complaint;

@Repository
public interface ComplaintRepository extends JpaRepository<Complaint, Integer>{

	List<Complaint> findByCompanyId(Integer id);

	List<Complaint> findByCustomerId(Integer id);

	//public List<Complaint> getByComplaintId(int id);
}