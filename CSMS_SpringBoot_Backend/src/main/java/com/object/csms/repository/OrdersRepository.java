package com.object.csms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.object.csms.entity.Orders;
@Repository
public interface OrdersRepository extends JpaRepository<Orders, Integer> {

	public List<Orders> findByCompanyId(int id);

	@Query("SELECT d FROM Orders d where customerId =:id and courierDetailsId=:orderId")
	public Orders findForInvoice(int id, Integer orderId);

}
