import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InserirEquipamentoComponent } from './components/equipamentos/inserir-equipamento/inserir-equipamento.component';
import { ListarEquipamentoComponent } from './components/equipamentos/listar-equipamento/listar-equipamento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarEquipamento',
    pathMatch: 'full'
  },
  {
    path: 'criarEquipamento',
    component: InserirEquipamentoComponent
  },
  {
    path: 'listarEquipamento',
    component: ListarEquipamentoComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
