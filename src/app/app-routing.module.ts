import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InserirEquipamentoComponent } from './components/equipamentos/inserir-equipamento/inserir-equipamento.component';
import { ListarEquipamentoComponent } from './components/equipamentos/listar-equipamento/listar-equipamento.component';
import { ExcluirEquipamentoComponent } from './components/equipamentos/excluir-equipamento/excluir-equipamento.component';

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
  },
  {
    path: 'equipamentos/excluirEquipamento/:id',
    component: ExcluirEquipamentoComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
