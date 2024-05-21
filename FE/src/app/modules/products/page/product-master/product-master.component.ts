import { Component, Input, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import {
  animate,
  AUTO_STYLE,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ICategory, IItem, ISubCategory } from 'src/app/theme/shared/models/Item';

@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.scss']
})
export class ProductMasterComponent implements OnInit {
  products: IItem[] = [];
  filteredProducts: IItem[] = [];
  categories: ICategory[] = [];
  subCategoriesAll: ISubCategory[] = [];
  subCategories: ISubCategory[] = [];
  constructor() {

  }
  ngOnInit(): void {
    this.categories = [
      {
        id: 1,
        name: "Common Cold and Alergy Drugs",
        icon: "assets/images/Categories/Category-1.webp",
        description: "description of the drug category"
      },
      {
        id: 2,
        name: "Cough and Asthma Drugs",
        icon: "assets/images/Categories/Category-2.jpg",
        description: "description of the drug category"
      },
      {
        id: 3,
        name: "Cardiovascular drugs",
        icon: "assets/images/Categories/Category-3.jpg",
        description: "description of the drug category"
      },
      {
        id: 4,
        name: "Drugs use for GI diseases",
        icon: "assets/images/Categories/Category-4.png",
        description: "description of the drug category"
      },
      {
        id: 5,
        name: "Antidiabetic drugs",
        icon: "assets/images/Categories/Category-5.jfif",
        description: "description of the drug category"
      },
      {
        id: 6,
        name: "Antibacteial Drugs",
        icon: "assets/images/Categories/Category-6.jfif",
        description: "description of the drug category"
      },
      {
        id: 7,
        name: "Creams",
        icon: "assets/images/Categories/Category-7.jpg",
        description: "description of the drug category"
      },

      {
        id: 8,
        name: "Supplements",
        icon: "assets/images/Categories/Category-8.jpg",
        description: "description of the drug category"
      },

      {
        id: 9,
        name: "Painkillers/Analgesics",
        icon: "assets/images/Categories/Category-9.webp",
        description: "description of the drug category"
      },

      {
        id: 10,
        name: "Mouthwashes",
        icon: "assets/images/Categories/Category-10.jpg",
        description: "description of the drug category"
      },
    ];


    this.subCategoriesAll = [
      {
        id: 1,
        name: "Anti- hypertensive",
        icon: "assets/images/Sub-categories/1.webp",
        description: "",
        categoryId: 3
      },

      {
        id: 2,
        name: "Anti- Cholesterol drugs",
        icon: "assets/images/Sub-categories/1.webp",
        description: "",
        categoryId: 3
      },
      {
        id: 3,
        name: "Antihemorrhoids",
        icon: "assets/images/Sub-categories/1.webp",
        description: "",
        categoryId: 4
      },
      {
        id: 4,
        name: "Gastritis",
        icon: "assets/images/Sub-categories/1.webp",
        description: "",
        categoryId: 4
      },
      {
        id: 5,
        name: "Anti vomitting",
        icon: "assets/images/Sub-categories/1.webp",
        description: "",
        categoryId: 4
      },
      {
        id: 6,
        name: "Anti carminative",
        icon: "assets/images/Sub-categories/1.webp",
        description: "",
        categoryId: 4
      },

      {
        id: 7,
        name: "Constipation",
        icon: "assets/images/Sub-categories/1.webp",
        description: "",
        categoryId: 4
      },

      {
        id: 8,
        name: "Anti-inflammatory",
        icon: "assets/images/Sub-categories/1.webp",
        description: "",
        categoryId: 7
      },

      {
        id: 9,
        name: "Anti-Fungal",
        icon: "assets/images/Sub-categories/1.webp",
        description: "",
        categoryId: 7
      },

    ];





    this.products = [
      {
        id: 1,
        name: "Chlofen",
        price: 14,
        imageUrl: "assets/images/products/Panadol.jpg",
        description: "",
        categoryId: 1,
        subCategoryId: 0
      },
      {
        id: 2,
        name: "Nasoclear",
        price: 15,
        imageUrl: "assets/images/products/Piriton-Syrup.jpg",
        description: "",
        categoryId: 1,
        subCategoryId: 0
      },
      {
        id: 3,
        name: "Loryt",
        price: 20,
        imageUrl: "assets/images/products/Famotidine.jpg",
        description: "",
        categoryId: 1,
        subCategoryId: 0
      },
      {
        id: 4,
        name: "Intercet",
        price: 25,
        imageUrl: "assets/images/products/Domperidone.jpg",
        description: "",
        categoryId: 1,
        subCategoryId: 0
      },
      {
        id: 5,
        name: "Lukot",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 2,
        subCategoryId: 0
      },

      {
        id: 6,
        name: "Theofin syrup",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 2,
        subCategoryId: 0
      },
      {
        id: 7,
        name: "Phenycof syrup",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 2,
        subCategoryId: 0
      },

      {
        id: 8,
        name: "Theofin tablet",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 2,
        subCategoryId: 0
      },
      {
        id: 9,
        name: "Phenycof capsule",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 2,
        subCategoryId: 0
      },
      {
        id: 10,
        name: "Bronchodil",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 2,
        subCategoryId: 0
      },
      {
        id: 11,
        name: "Intesart",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 3,
        subCategoryId: 1
      },
      {
        id: 12,
        name: "Biloz",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 3,
        subCategoryId: 1
      },
      {
        id: 13,
        name: "Inteprol",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 3,
        subCategoryId: 1
      },
      {
        id: 14,
        name: "Lumid",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 3,
        subCategoryId: 1
      },
      {
        id: 15,
        name: "Lowpress",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 3,
        subCategoryId: 1
      },

      {
        id: 16,
        name: "Interos",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 3,
        subCategoryId: 2
      },

      {
        id: 17,
        name: "Lowato",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 3,
        subCategoryId: 2
      },

      {
        id: 18,
        name: "Rheocure - HC",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 4,
        subCategoryId: 3
      },

      {
        id: 19,
        name: "Intezole",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 4,
        subCategoryId: 4
      },

      {
        id: 20,
        name: "Gastril syrup",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 4,
        subCategoryId: 4
      },

      {
        id: 21,
        name: "Gastricaine",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 4,
        subCategoryId: 4
      },

      {
        id: 22,
        name: "Prazium 20",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 4,
        subCategoryId: 4
      },

      {
        id: 23,
        name: "D-peron suspension",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 4,
        subCategoryId: 5
      },

      {
        id: 24,
        name: "D-peron tablet",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 4,
        subCategoryId: 5
      },

      {
        id: 25,
        name: "Gripe mixture",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 4,
        subCategoryId: 6
      },

      {
        id: 26,
        name: "Laxafit",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 4,
        subCategoryId: 7
      },

      {
        id: 27,
        name: "Inglip",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 5,
        subCategoryId: 0
      },

      {
        id: 28,
        name: "Diabx- XR",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 5,
        subCategoryId: 0
      },

      {
        id: 29,
        name: "Diabx",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 5,
        subCategoryId: 0
      },

      {
        id: 30,
        name: "Glyclapan MR 60",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 5,
        subCategoryId: 0
      },

      {
        id: 31,
        name: "Anabac",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 6,
        subCategoryId: 0
      },

      { 
        id: 32,
        name: "Cefexip",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 6,
        subCategoryId: 0
      },

      { 
        id: 33,
        name: "Gammacort",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 7,
        subCategoryId: 8
      },

      { 
        id: 34,
        name: "Becomet",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 7,
        subCategoryId: 8
      },

      { 
        id: 35,
        name: "Cobint",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 7,
        subCategoryId: 8
      },

      
      { 
        id: 36,
        name: "Clomyzol",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 7,
        subCategoryId: 9
      },

      
      { 
        id: 37,
        name: "Miken",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 7,
        subCategoryId: 9
      },

      { 
        id: 38,
        name: "Kaco- D",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 8,
        subCategoryId: 0
      },

      { 
        id: 39,
        name: "Nutrikid",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 8,
        subCategoryId: 0
      },

      { 
        id: 40,
        name: "Beco plus",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 8,
        subCategoryId: 0
      },

      { 
        id: 41,
        name: "Mefen",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 9,
        subCategoryId: 0
      },

      { 
        id: 42,
        name: "Kool N Fresh",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 10,
        subCategoryId: 0
      },


      
    ];
  }

  handleCategorySelect(categoryId: number) {
    debugger;
    console.log('Card clicked with ID:', categoryId);
    this.subCategories = []; 

    if(this.subCategoriesAll.filter( s => s.categoryId == categoryId).length > 0){
      this.subCategories = this.subCategoriesAll.filter( s => s.categoryId == categoryId);
      this.filteredProducts = [];
    }
    else{
      this.filteredProducts = this.products.filter( p => p.categoryId == categoryId);
    }
  }

  handleSubCategorySelected(subCategoryId: number) {
    this.filteredProducts = this.products.filter( p => p.subCategoryId == subCategoryId)
  }




}
