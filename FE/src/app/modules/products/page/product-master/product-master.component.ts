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
import { IItem } from 'src/app/theme/shared/models/Item';

@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.scss']
})
export class ProductMasterComponent implements OnInit {
  products : IItem[] = [];
  constructor() {
    
  }
  ngOnInit(): void {
    this.products = [
      {
        name: "Paracitamal",
        price: 14,
        imageUrl: "assets/images/products/Panadol.jpg",
        description: ""
      },
      {
        name: "Piriton Syrup",
        price: 15,
        imageUrl: "assets/images/products/Piriton-Syrup.jpg",
        description: ""
      },
      {
        name: "Famotidine",
        price: 20,
        imageUrl: "assets/images/products/Famotidine.jpg",
        description: ""
      },
      {
        name: "Domperidone",
        price: 25,
        imageUrl: "assets/images/products/Domperidone.jpg",
        description: ""
      },
      {
        name: "Brufen",
        price: 13,
        imageUrl: "assets/images/products/brufen.png",
        description: ""
      },
    ];
  }

  
}
