package com.cap.conta.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cap.conta.api.model.Conta;
import com.cap.conta.api.model.Transacao;

public interface ITransacaoRepository extends JpaRepository<Transacao, Long> {
	List<Transacao> findByConta(Conta conta);
}
