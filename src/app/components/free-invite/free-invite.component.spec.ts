import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeInviteComponent } from './free-invite.component';

describe('FreeInviteComponent', () => {
  let component: FreeInviteComponent;
  let fixture: ComponentFixture<FreeInviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeInviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
