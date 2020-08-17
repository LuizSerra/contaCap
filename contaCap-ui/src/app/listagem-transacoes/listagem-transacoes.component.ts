import { Component, OnInit, Input } from '@angular/core';
import { TransacaoService } from "../transacao.service";
import { Conta } from 'src/models/Conta';

@Component({
  selector: 'app-listagem-transacoes',
  templateUrl: './listagem-transacoes.component.html',
  styleUrls: ['./listagem-transacoes.component.css']
})
export class ListagemTransacoesComponent implements OnInit {
  @Input()conta: Conta;

  constructor(private transacaoService: TransacaoService) { }
  transacoes;

  getTransacoes(): void {
    if(this.conta.codigo)
    this.transacaoService.getTransacoes(this.conta.codigo).subscribe(transacoes => this.transacoes = transacoes);;
  }
  ngOnInit(): void {
    this.getTransacoes();
  }

}
