import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdusoConsultaContainerComponent } from './iduso-consulta-container.component';

describe('IdusoConsultaContainerComponent', () => {
  let component: IdusoConsultaContainerComponent;
  let fixture: ComponentFixture<IdusoConsultaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdusoConsultaContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdusoConsultaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
