import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesGridComponent } from './resources-grid.component';

describe('ResourcesGridComponent', () => {
  let component: ResourcesGridComponent;
  let fixture: ComponentFixture<ResourcesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcesGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
