package com.object.csms.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.object.csms.entity.Feedback;
@Repository
public interface FeedbackRepository extends JpaRepository<Feedback,Integer> {
	//public List<Feedback> getByCustomerId(int id);
}
