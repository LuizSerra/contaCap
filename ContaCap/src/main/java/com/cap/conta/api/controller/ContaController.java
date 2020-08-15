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

import com.cap.conta.api.model.Conta;
import com.cap.conta.api.repository.IContaRepository;

@RestController
@RequestMapping(path = "/contas")
public class ContaController {

	
	@Autowired
	private IContaRepository contaRepository;
	
	
	@GetMapping
	public List<Conta> list() {
		return contaRepository.findAll();
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<Conta> buscarPeloCodigo(@PathVariable Long codigo){
		Conta conta = contaRepository.getOne(codigo);
		return conta != null ? ResponseEntity.ok().body(conta) : ResponseEntity.notFound().build();
	}
	
	@PostMapping
	public ResponseEntity<Conta> criar(@RequestBody Conta conta, HttpServletResponse response) {
		if(conta.getSaldo() == null) conta.setSaldo(Float.valueOf(0));
		Conta contaSalva = contaRepository.save(conta);
		return ResponseEntity.status(HttpStatus.CREATED).body(contaSalva);
	}
	
	
	
}
