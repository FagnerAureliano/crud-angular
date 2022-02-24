import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdusoCadastroContainerComponent } from './iduso-cadastro-container.component';

describe('IdusoCadastroContainerComponent', () => {
  let component: IdusoCadastroContainerComponent;
  let fixture: ComponentFixture<IdusoCadastroContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdusoCadastroContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdusoCadastroContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
