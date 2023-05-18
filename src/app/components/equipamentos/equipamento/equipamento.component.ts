import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipamento',
  templateUrl: './equipamento.component.html',
  styleUrls: ['./equipamento.component.css']
})
export class EquipamentoComponent implements OnInit {

  @Input() equipamento = {
    id: '',
    tipo: '',
    serie: '',
    subestacao: '',
    dataEntrega: '',
    tensao: '',
    fabricante: '',
    status: '',
    observacao: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  corCard(): String {
    switch(this.equipamento.fabricante){
      case 'SIEMENS':
        return 'modelo1';
      case 'GE':
        return 'modelo2';
      case 'ABB':
        return 'modelo3';
      default:
        return 'modelo1';
    }
  }

  larguraCard(): String {
    if(this.equipamento.observacao.length > 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
