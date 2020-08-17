import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Conta } from 'src/models/Conta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:9000/contas';  // URL to web api

  addTransacao(conta: Conta): void {

  }

  getContaByID(id: string): Observable<Conta> {
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

}
