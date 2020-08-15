package com.cap.conta.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cap.conta.api.model.Conta;

public interface IContaRepository extends JpaRepository<Conta, Long>{

}
