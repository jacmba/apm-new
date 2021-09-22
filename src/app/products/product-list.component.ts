import { Component, OnInit } from "@angular/core";
import { IProduct } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private _filter: string = '';
  private _products: IProduct[] = [{
    id: 2,
    name: 'Garden Cart',
    code: 'GDN-0023',
    releaseDate: 'March 18, 2021',
    description: '15 gallon capacity rolling garden cart',
    price: 32.99,
    rating: 4.2,
    image: 'assets/images/garden_cart.png'
  }, {
    id: 5,
    name: 'Hammer',
    code: 'TBX-0048',
    releaseDate: 'March 21, 2021',
    description: 'A very tough hammer',
    price: 8.9,
    rating: 4.8,
    image: 'assets/images/hammer.png'
  }];

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  ngOnInit(): void {
    console.log('On init called');
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  matchesFilter(name: string): boolean {
    return !this._filter || name.toLowerCase().includes(this._filter.toLowerCase());
  }

  set filter(filter: string) {
    this._filter = filter;
  }

  get filter(): string {
    return this._filter;
  }

  get products(): IProduct[] {
    return this._products.filter(p => this.matchesFilter(p.name));
  }
}
