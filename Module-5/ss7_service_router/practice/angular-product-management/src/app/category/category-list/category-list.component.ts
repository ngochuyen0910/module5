import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  categoryDelete: any;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    });
  }

  delete(): void {
    this.categoryService.deleteCategory(this.categoryDelete.id);
  }
}
