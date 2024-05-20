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
import { ICategory, IItem } from 'src/app/theme/shared/models/Item';

@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.scss']
})
export class ProductMasterComponent implements OnInit {
  products : IItem[] = [];
  categoryProducts: IItem[] = [];
  
  constructor() {
    
  }
  ngOnInit(): void {

    this.products = [
      {
        id: 1,
        name: "Paracitamal",
        price: 14,
        imageUrl: "assets/images/products/Panadol.jpg",
        description: "",
        categoryId: 1
      },
      {
        id: 2,
        name: "Piriton Syrup",
        price: 15,
        imageUrl: "assets/images/products/Piriton-Syrup.jpg",
        description: "",
        categoryId: 2
      },
      {
        id: 3,
        name: "Famotidine",
        price: 20,
        imageUrl: "assets/images/products/Famotidine.jpg",
        description: "",
        categoryId: 5
      },
      {
        id: 4,
        name: "Domperidone",
        price: 25,
        imageUrl: "assets/images/products/Domperidone.jpg",
        description: "",
        categoryId: 5
      },
      {
        id: 5,
        name: "Brufen",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: "",
        categoryId: 3
      },
    ];
  }
  

  
}
