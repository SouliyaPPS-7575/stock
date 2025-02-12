import { QueryDocumentSnapshot } from "firebase/firestore";

export interface Products {
     id?: string
     name: string;
     imageurl: string[];
     quantity: string;
     price: string;
     description?: string;
     category?: string;
}

export interface ProductsRes {
     products: Products[];
     nextPage: QueryDocumentSnapshot | null; // Allow nextPage to be null when there is no next page
}

// Category options
export const category = [
     { key: 'Clothing', label: 'Clothing' },
     { key: 'PostCards', label: 'PostCards' },
     { key: 'Souvenir', label: 'Souvenir' },
];
