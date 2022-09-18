package com.object.csms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.object.csms.entity.Orders;
@Repository
public interface OrdersRepository extends JpaRepository<Orders, Integer> {

}
