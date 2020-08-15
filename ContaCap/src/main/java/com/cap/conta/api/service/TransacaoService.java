package com.cap.conta.api.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cap.conta.api.error.ExceptionCustom;
import com.cap.conta.api.model.Conta;
import com.cap.conta.api.model.TipoTransacao;
import com.cap.conta.api.model.Transacao;
import com.cap.conta.api.repository.IContaRepository;
import com.cap.conta.api.repository.ITransacaoRepository;

@Service
public class TransacaoService {

	@Autowired
	private ITransacaoRepository transacaoRepository;
	@Autowired
	private IContaRepository contaRepository;

	public Transacao criar(Transacao transacao) {
		Float saldo = null;
		transacao.setData(LocalDate.now());
		
		if (transacao.getValor() <= 0)
			throw new ExceptionCustom("O valor deve ser maior que zero");
		
		if (!transacao.getTipo().equals(TipoTransacao.DEBITO) && !transacao.getTipo().equals(TipoTransacao.CREDITO))
			throw new ExceptionCustom("Tipo Inexistente");
		
		Conta conta = contaRepository.getOne(transacao.getConta().getCodigo());
		
		if (conta == null) {
			throw new ExceptionCustom("Conta inexistente");
		}

		if (transacao.getTipo().equals(TipoTransacao.DEBITO)) {
			saldo = conta.getSaldo() - transacao.getValor();
		} else if (transacao.getTipo().equals(TipoTransacao.CREDITO)) {
			saldo = conta.getSaldo() + transacao.getValor();
		}

		
		conta.setSaldo(saldo);
		Conta contaSalva = contaRepository.save(conta);
		transacao.setConta(contaSalva);
		Transacao transacaoSalva = transacaoRepository.save(transacao);
		return transacaoSalva;

	}
	
	public List<Transacao> listarPorConta(Long codigo) {
		Conta conta = contaRepository.getOne(codigo);
		if (conta == null) {
			throw new ExceptionCustom("Conta inexistente");
		}
		return transacaoRepository.findByConta(conta);
	}
}
