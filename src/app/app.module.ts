import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { InserirEquipamentoComponent } from './components/equipamentos/inserir-equipamento/inserir-equipamento.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ListarEquipamentoComponent } from './components/equipamentos/listar-equipamento/listar-equipamento.component';
import { EquipamentoComponent } from './components/equipamentos/equipamento/equipamento.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirEquipamentoComponent } from './components/equipamentos/excluir-equipamento/excluir-equipamento.component';
import { EditarEquipamentoComponent } from './components/equipamentos/editar-equipamento/editar-equipamento.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    InserirEquipamentoComponent,
    ListarEquipamentoComponent,
    EquipamentoComponent,
    ExcluirEquipamentoComponent,
    EditarEquipamentoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
