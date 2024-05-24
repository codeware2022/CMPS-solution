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
import {
  ICategory,
  IProduct,
  ISubCategory,
} from 'src/app/theme/shared/models/Item';

@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.scss'],
})
export class ProductMasterComponent implements OnInit {
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  categories: ICategory[] = [];
  subCategoriesAll: ISubCategory[] = [];
  subCategories: ISubCategory[] = [];

  currentPage = 1;
  itemsPerPage = 8;

  currentPageProducts = 1;
  itemsPerPageProducts = 5;

  visibleDropdownIndex: number | null = null;

  constructor() {}
  ngOnInit(): void {
    this.categories = [
      {
        id: 1,
        name: 'Common Cold & Alergy Drugs',
        icon: 'assets/images/Categories/Cat-1.png',
        description: 'description of the drug category',
        subcategories: [],
        products: [
          {
            id: 1,
            name: 'Chlofen',
            price: 14,
            imageUrl: 'assets/images/products/Chlofen.jpg',
            description: '',
            categoryId: 1,
            subCategoryId: 0,
          },
          {
            id: 2,
            name: 'Nasoclear',
            price: 15,
            imageUrl: 'assets/images/products/Nasoclear.webp',
            description: '',
            categoryId: 1,
            subCategoryId: 0,
          },
          {
            id: 3,
            name: 'Loryt',
            price: 20,
            imageUrl: 'assets/images/products/Lorit.png',
            description: '',
            categoryId: 1,
            subCategoryId: 0,
          },
          {
            id: 4,
            name: 'Intercet',
            price: 25,
            imageUrl: 'assets/images/products/intercet.jfif',
            description: '',
            categoryId: 1,
            subCategoryId: 0,
          },
        ],
      },
      {
        id: 2,
        name: 'Cough and Asthma Drugs',
        icon: 'assets/images/Categories/cat-2.png',
        description: 'description of the drug category',
        subcategories: [],
        products: [
          {
            id: 5,
            name: 'Lukot',
            price: 13,
            imageUrl: 'assets/images/products/Lukot.webp',
            description: '',
            categoryId: 2,
            subCategoryId: 0,
          },

          {
            id: 6,
            name: 'Theofin syrup',
            price: 13,
            imageUrl: 'assets/images/products/brufen.png',
            description: '',
            categoryId: 2,
            subCategoryId: 0,
          },
          {
            id: 7,
            name: 'Phenycof syrup',
            price: 13,
            imageUrl: 'assets/images/products/brufen.png',
            description: '',
            categoryId: 2,
            subCategoryId: 0,
          },

          {
            id: 8,
            name: 'Theofin tablet',
            price: 13,
            imageUrl: 'assets/images/products/brufen.png',
            description: '',
            categoryId: 2,
            subCategoryId: 0,
          },
          {
            id: 9,
            name: 'Phenycof capsule',
            price: 13,
            imageUrl: 'assets/images/products/brufen.png',
            description: '',
            categoryId: 2,
            subCategoryId: 0,
          },
          {
            id: 10,
            name: 'Bronchodil',
            price: 13,
            imageUrl: 'assets/images/products/brufen.png',
            description: '',
            categoryId: 2,
            subCategoryId: 0,
          },
        ],
      },
      {
        id: 3,
        name: 'Cardiovascular drugs',
        icon: 'assets/images/Categories/cat-3.webp',
        description: 'description of the drug category',
        subcategories: [
          {
            id: 1,
            name: 'Anti- hypertensive',
            icon: 'assets/images/Sub-categories/1.webp',
            description: '',
            categoryId: 3,
            products: [
              {
                id: 11,
                name: 'Intesart',
                price: 13,
                imageUrl: 'assets/images/products/brufen.png',
                description: '',
                categoryId: 3,
                subCategoryId: 1,
              },
              {
                id: 12,
                name: 'Biloz',
                price: 13,
                imageUrl: 'assets/images/products/brufen.png',
                description: '',
                categoryId: 3,
                subCategoryId: 1,
              },
              {
                id: 13,
                name: 'Inteprol',
                price: 13,
                imageUrl: 'assets/images/products/brufen.png',
                description: '',
                categoryId: 3,
                subCategoryId: 1,
              },
              {
                id: 14,
                name: 'Lumid',
                price: 13,
                imageUrl: 'assets/images/products/brufen.png',
                description: '',
                categoryId: 3,
                subCategoryId: 1,
              },
              {
                id: 15,
                name: 'Lowpress',
                price: 13,
                imageUrl: 'assets/images/products/brufen.png',
                description: '',
                categoryId: 3,
                subCategoryId: 1,
              },
            ],
          },

          {
            id: 2,
            name: 'Anti- Cholesterol drugs',
            icon: 'assets/images/Sub-categories/1.webp',
            description: '',
            categoryId: 3,
            products: [
              {
                id: 16,
                name: 'Interos',
                price: 13,
                imageUrl: 'assets/images/products/brufen.png',
                description: '',
                categoryId: 3,
                subCategoryId: 2,
              },

              {
                id: 17,
                name: 'Lowato',
                price: 13,
                imageUrl: 'assets/images/products/brufen.png',
                description: '',
                categoryId: 3,
                subCategoryId: 2,
              },
            ],
          },
        ],
        products: [],
      },
      {
        id: 4,
        name: 'Drugs use for GI diseases',
        icon: 'assets/images/Categories/cat-4.webp',
        description: 'description of the drug category',
        subcategories: [
          {
            id: 3,
            name: 'Antihemorrhoids',
            icon: 'assets/images/Sub-categories/1.webp',
            description: '',
            categoryId: 4,
            products: [
              {
                id: 18,
                name: 'Rheocure - HC',
                price: 13,
                imageUrl: 'assets/images/products/brufen.png',
                description: '',
                categoryId: 4,
                subCategoryId: 3,
              },
            ],
          },
          {
            id: 4,
            name: 'Gastritis',
            icon: 'assets/images/Sub-categories/1.webp',
            description: '',
            categoryId: 4,
            products: [
              {
                id: 19,
                name: 'Intezole',
                price: 13,
                imageUrl: 'assets/images/products/brufen.png',
                description: '',
                categoryId: 4,
                subCategoryId: 4,
              },

              {
                id: 20,
                name: 'Gastril syrup',
                price: 13,
                imageUrl: 'assets/images/products/brufen.png',
                description: '',
                categoryId: 4,
                subCategoryId: 4,
              },

              {
                id: 21,
                name: 'Gastricaine',
                price: 13,
                imageUrl: 'assets/images/products/brufen.png',
                description: '',
                categoryId: 4,
                subCategoryId: 4,
              },

              {
                id: 22,
                name: 'Prazium 20',
                price: 13,
                imageUrl: 'assets/images/products/brufen.png',
                description: '',
                categoryId: 4,
                subCategoryId: 4,
              },
            ],
          },
          {
            id: 5,
            name: 'Anti vomitting',
            icon: 'assets/images/Sub-categories/1.webp',
            description: '',
            categoryId: 4,
            products: [
              {
                id: 23,
                name: 'D-peron suspension',
                price: 13,
                imageUrl: 'assets/images/products/brufen.png',
                description: '',
                categoryId: 4,
                subCategoryId: 5,
              },

              {
                id: 24,
                name: 'D-peron tablet',
                price: 13,
                imageUrl: 'assets/images/products/brufen.png',
                description: '',
                categoryId: 4,
                subCategoryId: 5,
              },
            ],
          },
          {
            id: 6,
            name: 'Anti carminative',
            icon: 'assets/images/Sub-categories/1.webp',
            description: '',
            categoryId: 4,
            products: [
              {
                id: 25,
                name: 'Gripe mixture',
                price: 13,
                imageUrl: 'assets/images/products/brufen.png',
                description: '',
                categoryId: 4,
                subCategoryId: 6,
              },
            ],
          },

          {
            id: 7,
            name: 'Constipation',
            icon: 'assets/images/Sub-categories/1.webp',
            description: '',
            categoryId: 4,
            products: [
              {
                id: 26,
                name: 'Laxafit',
                price: 13,
                imageUrl: 'assets/images/products/brufen.png',
                description: '',
                categoryId: 4,
                subCategoryId: 7,
              },
            ],
          },
        ],
        products: [],
      },
      {
        id: 5,
        name: 'Antidiabetic drugs',
        icon: 'assets/images/Categories/cat-5.png',
        description: 'description of the drug category',
        subcategories: [],
        products: [
          {
            id: 27,
            name: 'Inglip',
            price: 13,
            imageUrl: 'assets/images/products/brufen.png',
            description: '',
            categoryId: 5,
            subCategoryId: 0,
          },

          {
            id: 28,
            name: 'Diabx- XR',
            price: 13,
            imageUrl: 'assets/images/products/brufen.png',
            description: '',
            categoryId: 5,
            subCategoryId: 0,
          },

          {
            id: 29,
            name: 'Diabx',
            price: 13,
            imageUrl: 'assets/images/products/brufen.png',
            description: '',
            categoryId: 5,
            subCategoryId: 0,
          },

          {
            id: 30,
            name: 'Glyclapan MR 60',
            price: 13,
            imageUrl: 'assets/images/products/brufen.png',
            description: '',
            categoryId: 5,
            subCategoryId: 0,
          },
        ],
      },
      {
        id: 6,
        name: 'Antibacteial Drugs',
        icon: 'assets/images/Categories/cat-6.png',
        description: 'description of the drug category',
        subcategories: [],
        products: [
          {
            id: 31,
            name: 'Anabac',
            price: 13,
            imageUrl: 'assets/images/products/brufen.png',
            description: '',
            categoryId: 6,
            subCategoryId: 0,
          },

          {
            id: 32,
            name: 'Cefexip',
            price: 13,
            imageUrl: 'assets/images/products/brufen.png',
            description: '',
            categoryId: 6,
            subCategoryId: 0,
          },
        ],
      },
      {
        id: 7,
        name: 'Creams',
        icon: 'assets/images/Categories/cat-7.png',
        description: 'description of the drug category',
        subcategories: [
          {
            id: 8,
            name: 'Anti-inflammatory',
            icon: 'assets/images/Sub-categories/1.webp',
            description: '',
            categoryId: 7,
            products: [
              {
                id: 33,
                name: 'Gammacort',
                price: 13,
                imageUrl: 'assets/images/products/brufen.png',
                description: '',
                categoryId: 7,
                subCategoryId: 8,
              },

              {
                id: 34,
                name: 'Becomet',
                price: 13,
                imageUrl: 'assets/images/products/brufen.png',
                description: '',
                categoryId: 7,
                subCategoryId: 8,
              },

              {
                id: 35,
                name: 'Cobint',
                price: 13,
                imageUrl: 'assets/images/products/brufen.png',
                description: '',
                categoryId: 7,
                subCategoryId: 8,
              },
            ],
          },

          {
            id: 9,
            name: 'Anti-Fungal',
            icon: 'assets/images/Sub-categories/1.webp',
            description: '',
            categoryId: 7,
            products: [
              {
                id: 36,
                name: 'Clomyzol',
                price: 13,
                imageUrl: 'assets/images/products/brufen.png',
                description: '',
                categoryId: 7,
                subCategoryId: 9,
              },

              {
                id: 37,
                name: 'Miken',
                price: 13,
                imageUrl: 'assets/images/products/brufen.png',
                description: '',
                categoryId: 7,
                subCategoryId: 9,
              },
            ],
          },
        ],
        products: [],
      },

      {
        id: 8,
        name: 'Supplements',
        icon: 'assets/images/Categories/cat-8.png',
        description: 'description of the drug category',
        subcategories: [],
        products: [
          {
            id: 38,
            name: 'Kaco- D',
            price: 13,
            imageUrl: 'assets/images/products/brufen.png',
            description: '',
            categoryId: 8,
            subCategoryId: 0,
          },

          {
            id: 39,
            name: 'Nutrikid',
            price: 13,
            imageUrl: 'assets/images/products/brufen.png',
            description: '',
            categoryId: 8,
            subCategoryId: 0,
          },

          {
            id: 40,
            name: 'Beco plus',
            price: 13,
            imageUrl: 'assets/images/products/brufen.png',
            description: '',
            categoryId: 8,
            subCategoryId: 0,
          },
        ],
      },

      {
        id: 9,
        name: 'Painkillers / Analgesics',
        icon: 'assets/images/Categories/cat-9.png',
        description: 'description of the drug category',
        subcategories: [],
        products: [
          {
            id: 41,
            name: 'Mefen',
            price: 13,
            imageUrl: 'assets/images/products/brufen.png',
            description: '',
            categoryId: 9,
            subCategoryId: 0,
          },
        ],
      },

      {
        id: 10,
        name: 'Mouthwashes',
        icon: 'assets/images/Categories/cat-10.png',
        description: 'description of the drug category',
        subcategories: [],
        products: [
          {
            id: 42,
            name: 'Kool N Fresh',
            price: 13,
            imageUrl: 'assets/images/products/brufen.png',
            description: '',
            categoryId: 10,
            subCategoryId: 0,
          },
        ],
      },
    ];
  }

  handleCategorySelect(category: ICategory) {
    this.filteredProducts = category.products;
  }

  handleSubCategorySelected(subCategory: ISubCategory) {
    this.filteredProducts = subCategory.products;
  }

  get paginatedCategories() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.categories.slice(startIndex, endIndex);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  totalPages() {
    return Math.ceil(this.categories.length / this.itemsPerPage);
  }

  get paginatedProducts() {
    const startIndex =
      (this.currentPageProducts - 1) * this.itemsPerPageProducts;
    const endIndex = startIndex + this.itemsPerPageProducts;
    return this.filteredProducts.slice(startIndex, endIndex);
  }

  changePageProducts(page: number) {
    this.currentPageProducts = page;
  }

  totalPagesProducts() {
    return Math.ceil(this.filteredProducts.length / this.itemsPerPageProducts);
  }

  showDropdown(index: number) {
    this.visibleDropdownIndex = index;
  }

  hideDropdown(index: number) {
    if (this.visibleDropdownIndex === index) {
      this.visibleDropdownIndex = null;
    }
  }
}
