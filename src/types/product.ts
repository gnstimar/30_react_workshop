export type Product = {
    id: number,
    name: string,
    price: number,
    oldPrice?: number,
    category: string,
    rating: number,
    availability: string,
    image: string,
    badge?: {
        text: string;
        type: 'discount' | 'limited' | 'soldout' | 'popular' | 'hot' | 'new';
    };
    isSoldOut?: boolean;
}