import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipamento } from '../equipamento';
import { EquipamentoService } from '../equipamento.service';

@Component({
  selector: 'app-editar-equipamento',
  templateUrl: './editar-equipamento.component.html',
  styleUrls: ['./editar-equipamento.component.css']
})
export class EditarEquipamentoComponent implements OnInit {

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

  editarEquipamento() {
    this.service.editar(this.equipamento).subscribe(() => {
      this.router.navigate(['/listarEquipamento'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarEquipamento'])
  }

}
