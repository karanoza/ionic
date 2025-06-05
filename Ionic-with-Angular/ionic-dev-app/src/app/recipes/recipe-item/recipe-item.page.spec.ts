import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeItemPage } from './recipe-item.page';

describe('RecipeItemPage', () => {
  let component: RecipeItemPage;
  let fixture: ComponentFixture<RecipeItemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
