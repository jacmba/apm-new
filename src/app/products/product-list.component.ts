import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  private _filter: string;
  private _products: IProduct[];
  private _productService: ProductService;

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: String;
  sub!: Subscription;

  constructor(productService: ProductService) {
    this._productService = productService;
    this._products = [];
    this._filter = '';
    this.errorMessage = '';
  }

  ngOnInit(): void {
    console.log('On init called');
    this.sub = this._productService.getProducts().subscribe({
      next: (ps) => (this._products = ps),
      error: (err) => (this.errorMessage = err),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  matchesFilter(name: string): boolean {
    return (
      !this._filter || name.toLowerCase().includes(this._filter.toLowerCase())
    );
  }

  set filter(filter: string) {
    this._filter = filter;
  }

  get filter(): string {
    return this._filter;
  }

  get products(): IProduct[] {
    return this._products.filter((p) => this.matchesFilter(p.name));
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
