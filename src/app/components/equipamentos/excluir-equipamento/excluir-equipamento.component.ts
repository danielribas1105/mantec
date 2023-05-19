import { Component, OnInit } from '@angular/core';
import { EquipamentoService } from '../equipamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipamento } from '../equipamento';

@Component({
  selector: 'app-excluir-equipamento',
  templateUrl: './excluir-equipamento.component.html',
  styleUrls: ['./excluir-equipamento.component.css']
})
export class ExcluirEquipamentoComponent implements OnInit {

  equipamento: Equipamento = {
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

  constructor(
    private service: EquipamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((equipamento) => {
      this.equipamento = equipamento
    })
  }

  excluirEquipamento() {
    if(this.equipamento.id){
      this.service.excluir(this.equipamento.id).subscribe(() => {
        this.router.navigate(['/listarEquipamento'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listarEquipamento'])
  }

}
