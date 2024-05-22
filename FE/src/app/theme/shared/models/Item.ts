export interface IProduct{
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
    subcategories: ISubCategory[];
    products: IProduct[];
}

export interface ISubCategory{
    id: number;
    name: string;
    icon: string;
    description: string;
    categoryId: number;
    products: IProduct[];
}
