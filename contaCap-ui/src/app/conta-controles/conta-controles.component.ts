import { Component, OnInit, Input } from '@angular/core';
import { Transacao } from '../../models/Transacao';
import { FormGroup } from '@angular/forms';
import { Conta } from 'src/models/Conta';
import { ContaService } from "../conta.service";
import { TransacaoService } from '../transacao.service';


@Component({
  selector: 'app-conta-controles',
  templateUrl: './conta-controles.component.html',
  styleUrls: ['./conta-controles.component.css']
})
export class ContaControlesComponent implements OnInit {

  constructor(private contaService: ContaService, private transacaoService: TransacaoService) { }

  contaRecebida: Conta;
  novaConta: Conta;
  transacao: Transacao;
  conta: Conta;
  transacoes;

  tiposTransacao = [
    { label: 'Depositar', value: 'CREDITO' },
    { label: 'Sacar', value: 'DEBITO' },
    { label: 'Extrato', value: 'EXTRATO' }
  ]

  ngOnInit(): void {
    this.novaConta = {};
    this.transacao = {};
    this.conta = {};
    this.transacao.conta = this.conta;
  }


  operar(frm: FormGroup) {

    if (this.transacao.tipo==='EXTRATO' && this.transacao.conta) {
      this.getContaById();
      this.getTransacoes();
    }
    else {
      this.addTransacao();
    }
  }

  addTransacao(){
    this.transacaoService.addTransacao(this.transacao).subscribe((transacao: Transacao) => console.log(`aqui: ${transacao}`));

  }

  getTransacoes(): void {
    if(this.transacao.conta)
    this.transacaoService.getTransacoes(this.transacao.conta.codigo).subscribe(transacoes => this.transacoes = transacoes);
    console.log(`resultado ${this.transacoes}`);
  }

  getContaById(){
    this.contaService.getContaByID(this.transacao.conta.codigo).subscribe(conta => this.contaRecebida = conta);
  }

  addConta(conta:Conta) {
    console.log('testando a conta'+conta.titular);
    this.contaService.addConta(conta).subscribe(conta => alert(`conta codigo ${conta.codigo} foi criada`));
  }

  reset(frm: FormGroup) {
    frm.reset();
    this.transacoes = [];
    this.contaRecebida = undefined;

  }

}
