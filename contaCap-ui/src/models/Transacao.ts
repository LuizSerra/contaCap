import { Conta } from "./Conta";
export interface Transacao {
  codigo?: number;
  data?: string;
  tipo?:  'DEBITO' | 'CREDITO' | 'EXTRATO';
  conta?: Conta;
  valor?: number;
}
