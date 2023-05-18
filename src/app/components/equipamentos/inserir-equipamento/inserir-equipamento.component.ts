import { Component, OnInit } from '@angular/core';
import { Equipamento } from '../equipamento';

@Component({
  selector: 'app-inserir-equipamento',
  templateUrl: './inserir-equipamento.component.html',
  styleUrls: ['./inserir-equipamento.component.css']
})
export class InserirEquipamentoComponent implements OnInit {

  equipamento: Equipamento = {
    id: 0,
    tipo: 'Reator',
    serie: 'REA001',
    subestacao: 'Colinas',
    dataEntrega: '01/01/2000',
    tensao: '230',
    fabricante: 'GE',
    status: 'ATIVO',
    observacao: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  inserirEquipamento() {
    alert("Equipamento salvo com sucesso!!!")
  }

}
