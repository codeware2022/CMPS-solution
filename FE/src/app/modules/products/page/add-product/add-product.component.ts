import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFormCustomClass } from 'src/app/data/schema/generic/form';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  productsForm: FormGroup
  selectedProducts: any[] = [];
  selectedAvailability: any;
  selectedCategory: string;
  filterText: string = '';
  public productCategoryList = [
    { id: 1, name: "Pain relief" },
    { id: 2, name: "Respiratory and Allergies" },
    { id: 3, name: "Eye and Eye Care" },
    { id: 4, name: "Foot and Leg care" },
    { id: 5, name: "Oral Care" },
    { id: 6, name: "Digestive Care" },
  ];
  public productList = [
    { id: 1, name: "Panadol" },
    { id: 2, name: "Piriton" },
    { id: 3, name: "Salbuitamol" },
    { id: 4, name: "Famotidine" },
    { id: 5, name: "syrup" },
    { id: 6, name: "Monoket" },
  ];
  public genericNameList = [
    { id: 1, name: "alendronate" },
    { id: 2, name: "bupropion " },
    { id: 3, name: "chlordiazepoxide" },
    { id: 4, name: "cholestyramine" },
    { id: 5, name: "fluconazole" },
    { id: 6, name: "guanfacine" },
  ];
  public manufacturerList = [
    { id: 1, name: "Remeron" },
    { id: 2, name: "Antivert " },
    { id: 3, name: "Cytomel" },
    { id: 4, name: "Prevacid" },
    { id: 5, name: "Hydrocortisone " },
    { id: 6, name: "Septra " },
  ];
  public disdtributorList = [
    { id: 1, name: "Remeron" },
    { id: 2, name: "Antivert " },
    { id: 3, name: "Cytomel" },
    { id: 4, name: "Prevacid" },
    { id: 5, name: "Hydrocortisone " },
    { id: 6, name: "Septra " },
  ];
  public ingredientList = [
    { id: 1, name: "Remeron" },
    { id: 2, name: "Antivert " },
    { id: 3, name: "Cytomel" },
    { id: 4, name: "Prevacid" },
    { id: 5, name: "Hydrocortisone " },
    { id: 6, name: "Septra " },
  ];
  public freeIssueList = [
    { id: 1, name: "Remeron" },
    { id: 2, name: "Antivert " },
    { id: 3, name: "Cytomel" },
    { id: 4, name: "Prevacid" },
    { id: 5, name: "Hydrocortisone " },
    { id: 6, name: "Septra " },
  ];

  public availability = [
    { id: 1, name: "Available" },
    { id: 2, name: "Not Available" },
  ];
  typeheadCustomClasses: IFormCustomClass = {
    formGroup: 'form-group',
    label: 'font-weight-bold text-muted small mb-0',
    input: 'text-break',
  };

  constructor(public fromBuilder: FormBuilder) {
    this.initializeForm();
  }
  ngOnInit(): void {

  }

  initializeForm() {
    this.productsForm = this.fromBuilder.group(
      {
        category: [null, Validators.required],
        productName: [null, Validators.required],
        selectedProducts: [],
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
        photo: [null]
      },

    );
  }

  get f() {
    return this.productsForm.controls;
  }

  onProductCategorySelect($event: any) {
    if ($event && !($event instanceof Event)) {
      const selectedCategory: any = $event;
      this.productsForm.patchValue({
        category: selectedCategory
      });
    }
  }

  onProductSelect($event: any) {
    if ($event && !($event instanceof Event)) {
      const selectedProduct: any = $event;
      this.selectedProducts.push(selectedProduct);

      this.productsForm.patchValue({
        productName: selectedProduct.name,
      });
    }
  }

  onGenericNameSelect($event: any) {
    if ($event && !($event instanceof Event)) {
      const selectedGenericName: any = $event;
      this.productsForm.patchValue({
        genericName: selectedGenericName.name,
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
        selectedProducts: this.selectedProducts
      })
    }
  }

  selectAll() {
    let prodIds = this.productList.map(p => {
      return p.id
    })
    this.productsForm.get("selectedProducts").setValue(prodIds);
  }

}
