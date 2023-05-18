import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-equipamento',
  templateUrl: './listar-equipamento.component.html',
  styleUrls: ['./listar-equipamento.component.css']
})
export class ListarEquipamentoComponent implements OnInit {

  listaEquipamentos = [
    {
      id: '1',
      tipo: 'Reator',
      serie: 'REA001',
      subestacao: 'Colinas',
      dataEntrega: '01/01/2000',
      tensao: '500',
      fabricante: 'SIEMENS',
      status: 'ATIVO',
      observacao: ''
    },
    {
      id: '2',
      tipo: 'Reator',
      serie: 'REA002',
      subestacao: 'Colinas',
      dataEntrega: '01/01/2000',
      tensao: '500',
      fabricante: 'GE',
      status: 'ATIVO',
      observacao: ''
    },
    {
      id: '3',
      tipo: 'Transformador',
      serie: 'TRA001',
      subestacao: 'Colinas',
      dataEntrega: '01/01/2000',
      tensao: '500',
      fabricante: 'GE',
      status: 'ATIVO',
      observacao: ''
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
