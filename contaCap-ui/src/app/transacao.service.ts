import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Transacao } from 'src/models/Transacao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:9000/transacoes';  // URL to web api

  addTransacao(transacao: Transacao): any {
    console.log(transacao);
    return this.http.post(`${this.baseUrl}`, transacao, this.httpOptions)
  }

  getTransacoes(id: string): Observable<Transacao[]> {
    return this.http.get<Transacao[]>(`${this.baseUrl}/conta/${id}`)
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

}

