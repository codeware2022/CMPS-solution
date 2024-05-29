import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFormCustomClass } from 'src/app/data/schema/generic/form';
import {
  ICategory,
  IProduct,
  ISubCategory,
} from 'src/app/theme/shared/models/Item';
import { LocalStorageService } from 'src/app/theme/shared/services/local-storage.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  productsForm: FormGroup;
  selectedProducts: any[] = [];
  selectedAvailability: any;
  selectedCategory: string;
  filterText: string = '';
  categories: ICategory[] = [];
  subcategories: ISubCategory[] = [];
  productList: IProduct[] = [];
  // selectedTheraputicCategory: ICategory;
  // selectedTheraputicSubCategory: ISubCategory;
  // selectedProduct: IProduct;

  public genericNameList = [
    { id: 1, name: 'alendronate' },
    { id: 2, name: 'bupropion ' },
    { id: 3, name: 'chlordiazepoxide' },
    { id: 4, name: 'cholestyramine' },
    { id: 5, name: 'fluconazole' },
    { id: 6, name: 'guanfacine' },
  ];
  public manufacturerList = [
    { id: 1, name: 'Remeron' },
    { id: 2, name: 'Antivert ' },
    { id: 3, name: 'Cytomel' },
    { id: 4, name: 'Prevacid' },
    { id: 5, name: 'Hydrocortisone ' },
    { id: 6, name: 'Septra ' },
  ];
  public disdtributorList = [
    { id: 1, name: 'Remeron' },
    { id: 2, name: 'Antivert ' },
    { id: 3, name: 'Cytomel' },
    { id: 4, name: 'Prevacid' },
    { id: 5, name: 'Hydrocortisone ' },
    { id: 6, name: 'Septra ' },
  ];
  public ingredientList = [
    { id: 1, name: 'Remeron' },
    { id: 2, name: 'Antivert ' },
    { id: 3, name: 'Cytomel' },
    { id: 4, name: 'Prevacid' },
    { id: 5, name: 'Hydrocortisone ' },
    { id: 6, name: 'Septra ' },
  ];
  public freeIssueList = [
    { id: 1, name: 'Remeron' },
    { id: 2, name: 'Antivert ' },
    { id: 3, name: 'Cytomel' },
    { id: 4, name: 'Prevacid' },
    { id: 5, name: 'Hydrocortisone ' },
    { id: 6, name: 'Septra ' },
  ];

  public availability = [
    { id: 1, name: 'Available' },
    { id: 2, name: 'Not Available' },
  ];
  typeheadCustomClasses: IFormCustomClass = {
    formGroup: 'form-group',
    label: 'font-weight-bold text-muted small mb-0',
    input: 'text-break',
  };

  constructor(
    public fromBuilder: FormBuilder,
    private localStorageService: LocalStorageService,
  ) {
    this.initializeForm();
  }
  ngOnInit(): void {
    this.categories = this.localStorageService.getObject('categories');
  }

  initializeForm() {
    this.productsForm = this.fromBuilder.group({
      productName: [null, Validators.required],
      category: [null, Validators.required],
      subcategory: [null],
      productMasterName: [null, Validators.required],

      genericName: [null],
      manufacturer: [null],
      distributor: [null],
      ingredient: [null],
      composition: [null],
      freeissue: [null],
      availabity: [null],
      marketLeader: [null],
      marketShare: [null],
      information: [null],
      strength: [null],
      avgSalesQty: [null],
      photo: [null],
    });
  }

  get f() {
    return this.productsForm.controls;
  }

  onProductNameChange($event: any) {
    if ($event && !($event instanceof Event)) {
      const productName: string = $event;
      this.productsForm.patchValue({
        productName: productName,
      });
    }
  }

  onCategorySelected($event: any) {
    if ($event && !($event instanceof Event)) {
      const selectedCategory: ICategory = $event;

      this.productsForm.patchValue({
        category: selectedCategory.name,
      });

      if (
        selectedCategory.subcategories &&
        selectedCategory.subcategories.length > 0
      ) {
        this.subcategories = selectedCategory.subcategories;
      } else if (
        selectedCategory.products &&
        selectedCategory.products.length > 0
      ) {
        this.productList = selectedCategory.products;
      }
    }
  }

  onSubCategorySelected($event: any) {
    if ($event && !($event instanceof Event)) {
      const selectedSubCategory: ISubCategory = $event;

      this.productsForm.patchValue({
        subcategory: selectedSubCategory.name,
      });

      if (
        selectedSubCategory.products &&
        selectedSubCategory.products.length > 0
      ) {
        this.productList = selectedSubCategory.products;
      }
    }
  }

  onProductSelected($event: any) {
    if ($event && !($event instanceof Event)) {
      const selectedProduct: IProduct = $event;

      this.productsForm.patchValue({
        productMasterName: selectedProduct.name,
      });
    }
  }

  onGenericNameSelected($event: any) {
    if ($event && !($event instanceof Event)) {
      const selectedGenericName: any = $event;
      this.productsForm.patchValue({
        genericName: selectedGenericName.name,
      });
    }
  }

  onManufacturerSelected($event: any) {
    if ($event && !($event instanceof Event)) {
      const selectedManufacturer: any = $event;
      this.productsForm.patchValue({
        manufacturer: selectedManufacturer.name,
      });
    }
  }

  onDistributorSelect($event: any) {
    if ($event && !($event instanceof Event)) {
      const selecetDistributor: any = $event;
      this.productsForm.patchValue({
        distributor: selecetDistributor.name,
      });
    }
  }

  onIngredientSelect($event: any) {
    if ($event && !($event instanceof Event)) {
      const selecetIngredient: any = $event;
      this.productsForm.patchValue({
        ingredient: selecetIngredient.name,
      });
    }
  }

  onFreeIssueSelect($event: any) {
    if ($event && !($event instanceof Event)) {
      const selecetFreeIssue: any = $event;
      this.productsForm.patchValue({
        freeissue: selecetFreeIssue.name,
      });
    }
  }

  onAvailabilitySelect($event: any) {
    if ($event && !($event instanceof Event)) {
      const selecetAvailability: any = $event;
      this.productsForm.patchValue({
        availabity: selecetAvailability,
      });
    }
  }

  onSelect($event: any) {
    if ($event && !($event instanceof Event)) {
      const selectedProduct: any = $event;
      this.selectedProducts.push(selectedProduct.id);
      this.productsForm.patchValue({
        selectedProducts: this.selectedProducts,
      });
    }
  }

  selectAll() {
    let prodIds = this.productList.map((p) => {
      return p.id;
    });
    this.productsForm.get('selectedProducts').setValue(prodIds);
  }
}
