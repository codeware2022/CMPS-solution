export interface IItem{
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
    categoryId: number;
}

export interface ICategory{
    id: number;
    categoryName: string;
    categoryImage: string;
    description: string;
}
