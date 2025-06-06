import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndGuillemMartinezComponent } from './end-guillem-martinez.component';

describe('EndGuillemMartinezComponent', () => {
  let component: EndGuillemMartinezComponent;
  let fixture: ComponentFixture<EndGuillemMartinezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndGuillemMartinezComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndGuillemMartinezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
