import { Transacao } from '../models/Transacao';

export const TRANSACOES: Transacao[] = [
  { codigo: 11, data:'16/08/2020', tipo: 'CREDITO', conta: 1, valor: 250.00 },
  { codigo: 12, data:'16/08/2020', tipo: 'DEBITO', conta: 2, valor: 250.00 },
  { codigo: 13, data:'16/08/2020', tipo: 'CREDITO', conta: 3, valor: 200.00 },
  { codigo: 14, data:'16/08/2020', tipo: 'DEBITO', conta: 2, valor: 200.00 },
  { codigo: 15, data:'16/08/2020', tipo: 'CREDITO', conta: 3, valor: 200.00 },
  { codigo: 16, data:'16/08/2020', tipo: 'CREDITO', conta: 2, valor: 250.00 },
  { codigo: 17, data:'16/08/2020', tipo: 'CREDITO', conta: 1, valor: 1500.00 },
  { codigo: 18, data:'16/08/2020', tipo: 'DEBITO', conta: 3, valor: 1500.00 },
  { codigo: 19, data:'16/08/2020', tipo: 'DEBITO', conta: 1, valor: 1500.00 },
  { codigo: 20, data:'16/08/2020', tipo: 'DEBITO', conta: 1, valor: 250.00 }
];
