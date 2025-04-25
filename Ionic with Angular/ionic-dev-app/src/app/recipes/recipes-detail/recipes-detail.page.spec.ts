import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipesDetailPage } from './recipes-detail.page';

describe('RecipesDetailPage', () => {
  let component: RecipesDetailPage;
  let fixture: ComponentFixture<RecipesDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
