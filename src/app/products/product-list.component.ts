import { Component } from "@angular/core";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  filter: string = '';
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
  allProducts: any[] = [];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  matchesFilter(name: string): boolean {
    return !this.filter || name.toLowerCase().includes(this.filter.toLowerCase());
  }

  filterProducts(): void {
    if(this.allProducts.length === 0) {
      this.allProducts = this.products;
    }

    this.products = this.allProducts.filter(p => this.matchesFilter(p.name));
  }
}
