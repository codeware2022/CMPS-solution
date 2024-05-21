export interface IItem{
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
    categoryId: number;
    subCategoryId: number;
}

export interface ICategory{
    id: number;
    name: string;
    icon: string;
    description: string;
}

export interface ISubCategory{
    id: number;
    name: string;
    icon: string;
    description: string;
    categoryId: number;
}
