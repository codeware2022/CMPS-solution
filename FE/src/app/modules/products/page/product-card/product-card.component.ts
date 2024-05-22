import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/theme/shared/models/Item';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() item : IProduct;
  isModalVisible = false;

  constructor(private router: Router) {}

  productDetail(product: IProduct) {
    this.router.navigate(['/home/detail'], { state: { data: product } });
  }

 
}
