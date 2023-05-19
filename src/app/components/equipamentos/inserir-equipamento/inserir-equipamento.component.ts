import { Component, OnInit } from '@angular/core';
import { Equipamento } from '../equipamento';
import { HttpClient } from '@angular/common/http';
import { EquipamentoService } from '../equipamento.service';
import { Router } from '@angular/router';

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

  constructor(
    private service: EquipamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  inserirEquipamento() {
    this.service.criar(this.equipamento).subscribe(() => {
      this.router.navigate(['listarEquipamento'])
    })
  }

  cancelarCadastro() {
    this.router.navigate(['listarEquipamento'])
  }

}
