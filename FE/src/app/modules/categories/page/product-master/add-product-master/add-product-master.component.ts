import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICategory, IOurProduct, IProduct, ISubCategory } from 'src/app/theme/shared/models/Item';
import { LocalStorageService } from 'src/app/theme/shared/services/local-storage.service';

@Component({
  selector: 'app-add-product-master',
  templateUrl: './add-product-master.component.html',
  styleUrls: ['./add-product-master.component.scss']
})
export class AddProductMasterComponent {
  productsForm: FormGroup;  
  selectedCategory: string;
  categories: ICategory[] = [];
  subcategories: ISubCategory[] = [];  
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
  public distributorList = [
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

  constructor(public fromBuilder: FormBuilder,private localStorageService: LocalStorageService){
    this.initializeForm();
  }
  ngOnInit(): void {
    this.categories = this.localStorageService.getObject('categories');
    if(this.localStorageService.getObject('OurProducts').length > 0){
      this.ourProducts = this.localStorageService.getObject('OurProducts');
      this.productIdCounter = this.localStorageService.getObject('OurProducts').length;
    }
  }

  initializeForm() {
    this.productsForm = this.fromBuilder.group({
      brandName: [null, Validators.required],    
      category: [null, Validators.required],
      subcategory: [null],     
      manufacturer: [null,Validators.required],    
      distributor: [null],   
    });
  }

  get f() {
    return this.productsForm.controls;
  }

  onBrandNameChange($event: any) {
    if ($event && !($event instanceof Event)) {
      const brandName: string = $event;
      this.productsForm.patchValue({
        brandName: brandName,
      });
    }   
  }

  onDistributerEntered($event: any) {
    if ($event && !($event instanceof Event)) {
      const distributer: string = $event;
      this.productsForm.patchValue({
        composition: distributer,
      });
    }   
  }

  onCategorySelected($event: any) {
    if ($event && !($event instanceof Event)) {
      const selectedCategory: ICategory = $event;

      this.productsForm.patchValue({
        category: selectedCategory.name,
      });      
    }
  }

  onSubCategorySelected($event: any) {
    if ($event && !($event instanceof Event)) {
      const selectedSubCategory: ISubCategory = $event;

      this.productsForm.patchValue({
        subcategory: selectedSubCategory.name,
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

  onReset(){
    this.productsForm.reset();
  }

  onSubmit(){
    console.log(this.productsForm.value);
    this.ourProducts.push(this.productsForm.value);
    this.localStorageService.setObject("OurProducts",this.ourProducts).subscribe(
      (status:boolean)=>{
        if(status){
          this.onReset();
        }
        else{
          console.log("Error saving to localStorage");
        }
    });
  }
}
