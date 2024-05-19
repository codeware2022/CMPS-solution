import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IItem } from 'src/app/theme/shared/models/Item';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() item : IItem;
  isModalVisible = false;

  constructor(private router: Router) {}

  productDetail(product: IItem) {
    this.router.navigate(['/home/detail'], { state: { data: product } });
  }

 
}
