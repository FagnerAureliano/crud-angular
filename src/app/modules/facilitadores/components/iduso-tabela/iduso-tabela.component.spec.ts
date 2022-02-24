import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdusoTabelaComponent } from './iduso-tabela.component';

describe('IdusoTabelaComponent', () => {
  let component: IdusoTabelaComponent;
  let fixture: ComponentFixture<IdusoTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdusoTabelaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdusoTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
