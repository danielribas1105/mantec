import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirEquipamentoComponent } from './excluir-equipamento.component';

describe('ExcluirEquipamentoComponent', () => {
  let component: ExcluirEquipamentoComponent;
  let fixture: ComponentFixture<ExcluirEquipamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirEquipamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirEquipamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
