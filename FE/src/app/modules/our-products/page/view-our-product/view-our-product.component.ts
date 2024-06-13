import { Component, OnInit } from '@angular/core';
import { IOurProduct } from 'src/app/theme/shared/models/Item';
import { LocalStorageService } from 'src/app/theme/shared/services/local-storage.service';

@Component({
  selector: 'app-view-our-product',
  templateUrl: './view-our-product.component.html',
  styleUrls: ['./view-our-product.component.scss'],
})
export class ViewOurProductComponent implements OnInit {
  ourProducts: IOurProduct[] = [];
  searchTerm: string = '';

  constructor(private localStorageService: LocalStorageService) {}
  ngOnInit(): void {
    this.ourProducts = this.localStorageService.getObject('OurProducts');
  }

  formatIngredients(ingredientJson: string): string {
    const ingredients = JSON.parse(ingredientJson);
    return ingredients.map(ing => `${ing.ingredient} (${ing.composition})`).join(', ');
  }

  get filteredProducts(): IOurProduct[] {
    if (!this.searchTerm) {
      return this.ourProducts;
    }
    const lowerCaseTerm = this.searchTerm.toLowerCase();
    return this.ourProducts.filter(product =>
      product.productName.toLowerCase().includes(lowerCaseTerm) ||
      product.category.toLowerCase().includes(lowerCaseTerm) ||
      product.subcategory.toLowerCase().includes(lowerCaseTerm) ||
      product.genericName.toLowerCase().includes(lowerCaseTerm) ||
      product.manufacturer.toLowerCase().includes(lowerCaseTerm)
    );
  }

  addRandomProduct(product: IOurProduct) {
    console.log('Adding product:', product);
    // Implement the logic to add the specific product
    //this.products.push({ ...product, id: this.products.length + 1 });
  }
}
