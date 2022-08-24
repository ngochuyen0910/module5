import {CategoryService} from '../../service/category.service';
import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {Product} from '../../model/product';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  categoryDelete: Category;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.categories = this.categoryService.getAll();
  }

  delete(): void {
    this.categoryService.deleteCategory(this.categoryDelete.id);
  }

  getCategoryDelete(categories: Category): void {
    this.categoryDelete = categories;
  }
}
