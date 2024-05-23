import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';
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

  // isTooltipVisible = false;
  // tooltipText = 'Your tooltip text here';
  // tooltipPosition = { top: '0px', left: '0px' };

  constructor() {}
  
  ngOnInit(): void {
    console.log(this.category);
  }
  showDropdown() {
    this.hideDropdown();
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
  

  // showTooltip(event: MouseEvent, text: string) {
  //   this.tooltipText = text;
  //   this.tooltipPosition.top = `${event.clientY - 30}px`;
  //   this.tooltipPosition.left = `${event.clientX}px`;
  //   this.isTooltipVisible = true;
  // }

  // hideTooltip() {
  //   this.isTooltipVisible = false;
  // }
}
