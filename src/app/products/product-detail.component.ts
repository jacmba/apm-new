import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string;
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router) {
    this.pageTitle = 'Product Detail';
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params.id);
    this.productService.getProducts().subscribe(
      ps => {
        const p = ps.filter(x => x.id === id);
        this.product = p[0];
        console.log(JSON.stringify(this.product, null, 2));

        if(!this.product) {
          this.router.navigate([`product-${id}-not-found`]);
        }
      }
    );
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
