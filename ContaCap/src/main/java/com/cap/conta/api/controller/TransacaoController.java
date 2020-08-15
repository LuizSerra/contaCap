package com.cap.conta.api.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cap.conta.api.model.Transacao;
import com.cap.conta.api.repository.ITransacaoRepository;
import com.cap.conta.api.service.TransacaoService;

@RestController
@RequestMapping(path = "/transacoes")
public class TransacaoController {

	@Autowired
	private ITransacaoRepository transacaoRepository;

	@Autowired
	private TransacaoService transacaoService;

	@GetMapping
	public List<Transacao> list() {
		return transacaoRepository.findAll();
	}

	@PostMapping
	public ResponseEntity<Object> criar(@RequestBody Transacao transacao, HttpServletResponse response) {

		Transacao transacaoSalva;
		try {
			transacaoSalva = transacaoService.criar(transacao);
			return ResponseEntity.status(HttpStatus.CREATED).body(transacaoSalva);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}
	
	@GetMapping(path = "/conta/{codigo}")
	public List<Transacao> listarPorConta(@PathVariable Long codigo) {
		return transacaoService.listarPorConta(codigo);
	}

}
