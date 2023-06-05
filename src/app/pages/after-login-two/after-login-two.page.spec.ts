import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AfterLoginTwoPage } from './after-login-two.page';

describe('AfterLoginTwoPage', () => {
  let component: AfterLoginTwoPage;
  let fixture: ComponentFixture<AfterLoginTwoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AfterLoginTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
