import { Component } from "@angular/core";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  pageTitle: string = 'Product List';
  products: any[] = [{
    id: 2,
    name: 'Garden Cart',
    code: 'GDN-0023',
    releaseDate: 'March 18, 2021',
    price: 32.99,
    rating: 4.2,
    image: 'assets/images/garden_cart.png'
  }, {
    id: 5,
    name: 'Hammer',
    code: 'TBX-0048',
    releaseDate: 'March 21, 2021',
    price: 8.9,
    rating: 4.8,
    image: 'assets/images/hammer.png'
  }];
}
