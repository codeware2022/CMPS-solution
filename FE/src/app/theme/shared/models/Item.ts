export interface IProduct{
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
    categoryId: number;
    subCategoryId: number;
    competitorProducts: ICompetitorProduct[];
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

export interface ICompetitorProduct{
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
    sales: any;
    productId: number;
}
