import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): IProduct[] {
    return [
      {
        id: 1,
        name: 'Leaf Rake',
        code: 'GDN-0011',
        releaseDate: 'March 19, 2019',
        description: 'Leaf rake with 48-inch wooden handle.',
        price: 19.95,
        rating: 3.2,
        image: 'assets/images/leaf_rake.png',
      },
      {
        id: 2,
        name: 'Garden Cart',
        code: 'GDN-0023',
        releaseDate: 'March 18, 2019',
        description: '15 gallon capacity rolling garden cart',
        price: 32.99,
        rating: 4.2,
        image: 'assets/images/garden_cart.png',
      },
    ];
  }
}
