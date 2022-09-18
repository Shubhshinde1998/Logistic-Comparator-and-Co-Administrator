package com.object.csms;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.object.csms.entity.Company;
import com.object.csms.repository.CompanyRepository;

@SpringBootApplication
@ComponentScan(basePackages = "com.object.csms.*")
@EnableTransactionManagement
public class CsmsSpringBootBackendApplication {

	
	
	public static void main(String[] args) {
		SpringApplication.run(CsmsSpringBootBackendApplication.class, args);
		
		//ApplicationContext c = SpringApplication.run(CsmsSpringBootBackendApplication.class, args);
		//List<Company> res = c.getBean(CompanyRepository.class).findPendingCompany();
		//System.out.println("result");

	}

}
