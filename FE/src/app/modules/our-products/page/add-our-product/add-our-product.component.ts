import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ICategory,
  IOurProduct,
  IProduct,
  ISubCategory,
} from 'src/app/theme/shared/models/Item';
import { LocalStorageService } from 'src/app/theme/shared/services/local-storage.service';

@Component({
  selector: 'app-add-our-product',
  templateUrl: './add-our-product.component.html',
  styleUrls: ['./add-our-product.component.scss'],
})
export class AddOurProductComponent {
  productsForm: FormGroup;
  selectedProducts: any[] = [];
  selectedAvailability: any;
  selectedCategory: string;
  categories: ICategory[] = [];
  subcategories: ISubCategory[] = [];
  productList: IProduct[] = [];

  ourProducts: IOurProduct[] = [];
  private productIdCounter: number = 1;

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

  public dosageFormList: any[] = [
    { id: 1, name: 'Solid' },
    { id: 2, name: 'Semi-solid' },
    { id: 3, name: 'Liquid' },
    { id: 4, name: 'Gas' },
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


  constructor(
    public fromBuilder: FormBuilder,
    private localStorageService: LocalStorageService,
  ) {
    this.initializeForm();
  }
  ngOnInit(): void {
    this.categories = this.localStorageService.getObject('categories');
    if(this.localStorageService.getObject('OurProducts').length > 0){
      this.ourProducts = this.localStorageService.getObject('OurProducts');
    }
    
  }

  initializeForm() {
    this.productsForm = this.fromBuilder.group({
      productName: [null, Validators.required],
      category: [null, Validators.required],
      subcategory: [null],
      productMasterName: [null, Validators.required],
      genericName: [null, Validators.required],
      manufacturer: [null],
      dosageForm: [null],
      ingredient: [null],
      photos: [null],
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

  onDosageFormSelect($event: any) {
    if ($event && !($event instanceof Event)) {
      const selecedDosageForm: any = $event;
      this.productsForm.patchValue({
        dosageForm: selecedDosageForm.name,
      });
    }
  }

  onIngredientAdded($event: any) {
    if ($event && !($event instanceof Event)) {
      const ingredientAdded: any = $event;
      this.productsForm.patchValue({
        ingredient: ingredientAdded,
      });
    }
  }

  onReset(){
    this.productsForm.reset();
  }

  onSubmit(){
    debugger;
    const productWithId = {
      ...this.productsForm.value,
      id: this.productIdCounter
    };
    //console.log(this.productsForm.value);
    this.ourProducts.push(productWithId);
    this.localStorageService.setObject("OurProducts",this.ourProducts);
  }
}
