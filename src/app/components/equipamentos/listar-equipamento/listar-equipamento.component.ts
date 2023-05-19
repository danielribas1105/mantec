import { Component, OnInit } from '@angular/core';
import { Equipamento } from '../equipamento';
import { EquipamentoService } from '../equipamento.service';

@Component({
  selector: 'app-listar-equipamento',
  templateUrl: './listar-equipamento.component.html',
  styleUrls: ['./listar-equipamento.component.css']
})
export class ListarEquipamentoComponent implements OnInit {

  listaEquipamentos: Equipamento[] = [];

  constructor(private service: EquipamentoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaEquipamentos) => {
      this.listaEquipamentos = listaEquipamentos
    })
  }

}
