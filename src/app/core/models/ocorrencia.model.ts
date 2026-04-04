export interface OcorrenciaResponse {
  id: number;
  natureza: string;
  caracteristica: string;
  delegacia: string;
  regiao: string;
  quantidade: number;
  data: string;
}
 
export interface TotalNatureza {
  natureza: string;
  ano: number;
  total: number;
}
 
export interface SerieHistorica {
  ano: number;
  mes: number;
  total: number;
}
 
export interface RankingDelegacia {
  delegacia: string;
  regiao: string;
  total: number;
}
 
export interface Natureza {
  id: number;
  natureza: string;
  caracteristica: string;
}