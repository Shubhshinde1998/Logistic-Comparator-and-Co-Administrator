package com.object.csms.service;

import java.util.*;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.object.csms.entity.CategoryPrice;
import com.object.csms.entity.Company;
import com.object.csms.entity.Customer;
import com.object.csms.entity.DeliveryBoy;
import com.object.csms.entity.Orders;
import com.object.csms.entity.VehicleDetails;
import com.object.csms.repository.CategoryPriceRepository;
import com.object.csms.repository.CompanyRepository;
import com.object.csms.repository.CustomerRepository;
import com.object.csms.repository.DeliveryBoyRepository;
import com.object.csms.repository.OrdersRepository;
import com.object.csms.repository.VehicleRepository;
import com.object.csms.requestbean.OrderApproveRequest;
import com.object.csms.responsebean.InvoiceResponse;
import com.object.csms.responsebean.OrderDetails;

@Service
public class OrdersService {

	
	@Autowired
	OrdersRepository repo;
	@Autowired
	CompanyRepository companyrepo;
	@Autowired
	CustomerRepository customerrepo;
	@Autowired
	DeliveryBoyRepository deliveryboyrepo;
	@Autowired
	VehicleRepository vehiclerepo;
	@Autowired
	CategoryPriceRepository categorypricerepo;
	
	public List<Orders> getOrder()
	{
		return repo.findAll();
	}
	
	public void saveOrder(Orders order)
	{
		repo.save(order);
	}

	//gives the list of order with companyId
	@Transactional
	public List<OrderDetails> companyOrder(int id) 
	{
		List<Orders> order = repo.findByCompanyId(id);
		List<OrderDetails> resp= new ArrayList<>();
		for(Orders list : order)
		{
			Customer customer = customerrepo.findById(list.getCustomerId()).get();
			CategoryPrice categoryprice = categorypricerepo.findById(list.getCategoryPricingId()).get();
			if(list.getDeliveryBoyId()!=null && list.getVehiclesDetailsId()!=null) 
			{
				DeliveryBoy deliveryBoy = deliveryboyrepo.findById(list.getDeliveryBoyId()).get();
				VehicleDetails vehicleDetails = vehiclerepo.findById(list.getVehiclesDetailsId()).get();
				resp.add( new OrderDetails(customer, deliveryBoy, vehicleDetails, categoryprice, list));
			}
			else
				resp.add(new OrderDetails(list, customer, categoryprice));
							
		}
		
		return resp;
	}
	@Transactional
	public int approveOrder(OrderApproveRequest order, int id) {
		Orders or = repo.findById(id).get();
		or.setDeliveryBoyId(order.getDeliveryBoyId());
		or.setVehiclesDetailsId(order.getVehiclesDetailsId());
		repo.save(or);		
		return or.getCourierDetailsId();
	}
	
	//Invoice send in Response according to customerId
	@Transactional
	public InvoiceResponse invoiceGenerate(int customerId,Integer orderId)
	{
		Orders order = repo.findForInvoice(customerId,orderId);
		Company company = companyrepo.findById(order.getCompanyId()).get();
		Customer customer = customerrepo.findById(order.getCustomerId()).get();
		CategoryPrice categoryprice = categorypricerepo.findById(order.getCategoryPricingId()).get();
		DeliveryBoy deliveryBoy = deliveryboyrepo.findById(order.getDeliveryBoyId()).get();
		VehicleDetails vehicleDetails = vehiclerepo.findById(order.getVehiclesDetailsId()).get();
		
		OrderDetails details = new OrderDetails(company, customer, deliveryBoy, vehicleDetails, categoryprice);
		
		InvoiceResponse resp = new InvoiceResponse(order.getCourierDetailsId(),
				details.getCustomer().getCustomerName(), details.getCustomer().getCustomerEmail(),
				details.getCustomer().getCustomerContactNo(), details.getCompany().getCompanyName(),
				details.getCompany().getCompanyEmail(), details.getCompany().getCompanyContactNo(),
				details.getDeliveryBoy().getDeliveryBoyName(), details.getDeliveryBoy().getDeliveryBoyEmail(),
				details.getDeliveryBoy().getDeliveryBoyContactNo(), details.getVehicleDetails().getVehiclesDetailsNo(),
				details.getCategoryPrice().getCategory().getCategoryName(), details.getCategoryPrice().getCategoryPrice(),
				order.getPickupAddress(),order.getReceiverName(),order.getDeliveryAddress(),
				order.getPaymentStatus(),order.getTrackingStatus(),order.getRequestTime());
		return resp;
	}

	public int trackingStatus(OrderApproveRequest order,int id) {
		Orders or = repo.findById(id).get();
		or.setTrackingStatus(order.getTrackingStatus());
		repo.save(or);
		return or.getCourierDetailsId();
	}
}
