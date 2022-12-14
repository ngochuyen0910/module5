import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  productDelete: Product;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.products = this.productService.getAll();
  }

  getProductDelete(product: Product): void {
    this.productDelete = product;
  }

  delete(): void {
    this.productService.deleteProduct(this.productDelete.id);
  }
}
