package com.object.csms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.object.csms.*")
public class CsmsSpringBootBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(CsmsSpringBootBackendApplication.class, args);
	}

}
