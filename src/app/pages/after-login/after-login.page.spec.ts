import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AfterLoginPage } from './after-login.page';

describe('AfterLoginPage', () => {
  let component: AfterLoginPage;
  let fixture: ComponentFixture<AfterLoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AfterLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
