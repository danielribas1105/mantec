import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipamento } from './equipamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {

  private readonly API = 'http://localhost:3000/equipamentos'

  constructor(private http: HttpClient) { }

  listar(): Observable<Equipamento[]> {
    return this.http.get<Equipamento[]>(this.API)
  }

  criar(equipamento: Equipamento): Observable<Equipamento> {
    return this.http.post<Equipamento>(this.API, equipamento)
  }

  editar(equipamento: Equipamento): Observable<Equipamento> {
    const url = `${this.API}/${equipamento.id}`
    return this.http.put<Equipamento>(url, equipamento)
  }

  excluir(id: number): Observable<Equipamento> {
    const url = `${this.API}/${id}`
    return this.http.delete<Equipamento>(url)
  }

  buscarPorId(id: number): Observable<Equipamento> {
    const url = `${this.API}/${id}`
    return this.http.get<Equipamento>(url)
  }

}
