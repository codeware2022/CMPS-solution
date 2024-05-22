import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategory, ISubCategory } from 'src/app/theme/shared/models/Item';

@Component({
  selector: 'app-product-category-icon',
  templateUrl: './product-category-icon.component.html',
  styleUrls: ['./product-category-icon.component.scss']
})
export class ProductCategoryIconComponent implements OnInit {
  isDropdownVisible = false;
  @Input() category: ICategory;
  subCategories: ISubCategory[];
  @Output() subCategorySelected = new EventEmitter<ISubCategory>();
  @Output() categoryClicked = new EventEmitter<ICategory>();


  ngOnInit(): void {
    console.log(this.category);
  }
  showDropdown() {
    this.isDropdownVisible = true;
  }

  hideDropdown() {
    this.isDropdownVisible = false;
  }

  onSubCategorySelect(item: ISubCategory) {
    this.subCategorySelected.emit(item);
    this.hideDropdown();
  }

  onClickCategory() {
    if (this.category.subcategories.length == 0) {
      this.categoryClicked.emit(this.category);
    }

  }
}
