
export interface Products {
     id: string
     name: string;
     imageurl: string[];
     quantity: string;
     price: string;
     description?: string;
     category?: string;
}

// Category options
export const category = [
     { key: 'Clothing', label: 'Clothing' },
     { key: 'PostCards', label: 'PostCards' },
     { key: 'Souvenir', label: 'Souvenir' },
];
