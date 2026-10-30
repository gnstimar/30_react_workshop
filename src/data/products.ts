import type {Product} from "../types/product.ts";

export const products: Product[] = [
    {
        id: 1,
        name: "Technical Shell Jacket",
        price: 890,
        oldPrice: 1490,
        category: "Outerwear",
        rating: 4.9,
        availability: "In Stock • Ships in 2 days",
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=800",
        badge: {
            text: "Discount",
            type: 'discount'
        },
        isSoldOut: false
    },
    {
        id: 2,
        name: "Speedster Running Shoes",
        price: 1200,
        category: "Footwear",
        rating: 4.8,
        availability: "Only 4 items left",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
        badge: {
            text: "Limited",
            type: 'limited'
        },
        isSoldOut: false
    },
    {
        id: 3,
        name: "Minimalist Quartz Watch",
        price: 1850,
        category: "Accessories",
        rating: 4.7,
        availability: "Back in stock next week",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
        badge: {
            text: "Sold out",
            type: 'soldout'
        },
        isSoldOut: true
    },
    {
        id: 4,
        name: "Classic Canvas Sneakers",
        price: 550,
        category: "Footwear",
        rating: 4.5,
        availability: "In Stock • ships in 1 day",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
        badge: {
            text: "Popular",
            type: 'popular'
        },
        isSoldOut: false
    },{
        id: 5,
        name: "Premium Wireless Headphones",
        price: 1690,
        oldPrice: 2200,
        category: "Accessories",
        rating: 4.9,
        availability: "In Stock • ships in 2 day",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
        badge: {
            text: "Hot deal",
            type: 'hot'
        },
        isSoldOut: false
    },{
        id: 6,
        name: "Tech Daypack",
        price: 1100,
        category: "Accessories",
        rating: 4.6,
        availability: "In Stock • ships in 1 day",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
        badge: {
            text: "New Arrival",
            type: 'new'
        },
        isSoldOut: false
    },
]