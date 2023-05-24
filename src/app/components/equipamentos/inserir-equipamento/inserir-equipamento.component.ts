import { Component, OnInit } from '@angular/core';
import { EquipamentoService } from '../equipamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inserir-equipamento',
  templateUrl: './inserir-equipamento.component.html',
  styleUrls: ['./inserir-equipamento.component.css']
})
export class InserirEquipamentoComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private service: EquipamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id: 0,
      tipo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      serie: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
        Validators.maxLength(6)
      ])],
      subestacao: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      dataEntrega: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      tensao: ['', [Validators.required]],
      fabricante: ['', [Validators.required]],
      status: ['', [Validators.required]],
      observacao: ['', [Validators.required]]
    })
  }

  inserirEquipamento() {
    if(this.formulario.valid){
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['listarEquipamento'])
      })
    }
  }

  cancelarCadastro() {
    this.router.navigate(['listarEquipamento'])
  }

}
