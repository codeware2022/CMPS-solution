import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/theme/shared/models/Item';

@Component({
  selector: 'app-category-master',
  templateUrl: './category-master.component.html',
  styleUrls: ['./category-master.component.scss']
})
export class CategoryMasterComponent implements OnInit {
  categories: ICategory[] = [];

  ngOnInit(): void {
    this.categories = [
      {
        id: 1,
        categoryName: "Common Cold and Alergy Drugs",
        categoryImage: "assets/images/Categories/Category-1.webp",
        description: "description of the drug category"
      },
      {
        id: 2,
        categoryName: "Cough and Asthma Drugs",
        categoryImage: "assets/images/Categories/Category-2.jpg",
        description: "description of the drug category"
      },
      {
        id: 3,
        categoryName: "Cardiovascular drugs",
        categoryImage: "assets/images/Categories/Category-3.jpg",
        description: "description of the drug category"
      },
      {
        id: 4,
        categoryName: "Drugs use for GI diseases",
        categoryImage: "assets/images/Categories/Category-4.png",
        description: "description of the drug category"
      },
      {
        id: 5,
        categoryName: "Antidiabetic drugs",
        categoryImage: "assets/images/Categories/Category-5.jfif",
        description: "description of the drug category"
      },
      {
        id: 6,
        categoryName: "Antibacteial Drugs",
        categoryImage: "assets/images/Categories/Category-6.jfif",
        description: "description of the drug category"
      },
      {
        id: 7,
        categoryName: "Creams",
        categoryImage: "assets/images/Categories/Category-7.jpg",
        description: "description of the drug category"
      },

      {
        id: 8,
        categoryName: "Supplements",
        categoryImage: "assets/images/Categories/Category-8.jpg",
        description: "description of the drug category"
      },

      {
        id: 9,
        categoryName: "Painkillers/Analgesics",
        categoryImage: "assets/images/Categories/Category-9.webp",
        description: "description of the drug category"
      },

      {
        id: 10,
        categoryName: "Mouthwashes",
        categoryImage: "assets/images/Categories/Category-10.jpg",
        description: "description of the drug category"
      },
    ]
  }


}
