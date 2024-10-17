import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteHeadersComponent } from './site-headers.component';

describe('SiteHeadersComponent', () => {
  let component: SiteHeadersComponent;
  let fixture: ComponentFixture<SiteHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteHeadersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SiteHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
