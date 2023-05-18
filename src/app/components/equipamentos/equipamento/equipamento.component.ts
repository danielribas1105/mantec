import { Component, Input, OnInit } from '@angular/core';
import { Equipamento } from '../equipamento';

@Component({
  selector: 'app-equipamento',
  templateUrl: './equipamento.component.html',
  styleUrls: ['./equipamento.component.css']
})
export class EquipamentoComponent implements OnInit {

  @Input() equipamento: Equipamento = {
    id: 0,
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

  larguraCard(): String {
    if(this.equipamento.observacao.length > 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
