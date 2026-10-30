import type {Product} from "../types/product.ts";
import {Eye, Heart, Plus, Star} from "lucide-react";
import {Badge} from "./Badge.tsx";

type ProductCardProps = {
    product: Product
}


export function ProductCard({product}: ProductCardProps) {
    return (
        <article
            className="border border-slate-200 rounded-[1.25rem] bg-white p-3 transition-all duration-400 hover:border-blue-400 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 group">
            <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-[4/5] w-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                {/*<!-- Product Overlay Actions -->*/}
                <div
                    className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button type="button"
                            className="h-12 w-12 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:bg-blue-600 hover:text-white"
                            aria-label="Quick View">
                        <Eye/>
                    </button>
                    <button type="button"
                            className="h-12 w-12 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 hover:bg-blue-600 hover:text-white"
                            aria-label="Add to cart">
                        <Plus/>
                    </button>
                </div>

                {/*<!-- Badge -->*/}
                <Badge badgeType={product.badge.type}/>

                {/*<!-- Favorite -->*/}
                <button type="button"
                        className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/50 bg-white/70 text-slate-600 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-rose-500 hover:shadow-lg group/heart"
                        aria-label="Add to favorites" title="Favorite">
                    <Heart
                        className="transition-colors group-hover/heart:fill-rose-500 group-hover/heart:stroke-rose-500"/>
                </button>
            </div>
            <div className="mt-4 px-1 pb-2 space-y-1">
                <div className="flex items-center justify-between">
                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-600/70">
                        {product.category}</p>
                    <div className="flex items-center gap-1">
                        <Star width="10" height="10" viewBox="0 0 24 24"
                              fill="currentColor" className="text-amber-400"/>
                        <span className="text-[10px] font-bold text-slate-400">{product.rating}</span>
                    </div>
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {product.name}</h3>
                <p className="text-[11px] font-medium text-slate-500">{product.availability &&
                    <span>{product.availability}</span>}</p>

                <div className="flex items-center justify-between gap-3 pt-3">
                    <div className="flex flex-col">
                        <span
                            className="text-[10px] text-slate-400 line-through font-medium leading-none">{product.oldPrice &&
                            <span> {product.oldPrice} kr</span>}
                        </span>
                        <span className="text-lg font-black text-slate-900 tracking-tight">
                            {product.isSoldOut ?
                                <span className="text-lg font-black text-slate-400 tracking-tight">{product.price} kr</span>
                         :
                                <span className="text-lg font-black text-slate-900 tracking-tight">{product.price} kr</span>}
                        </span>

                    </div>
                    {/*Button Add to cart*/}
                    {product.isSoldOut ? <button type="button"
                                                 className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-slate-100 px-5 text-xs font-bold text-slate-400 transition-all duration-300 cursor-not-allowed"
                                                 aria-label="Add to cart" disabled>
                        Notify Me
                    </button> : <button type="button"
                                        className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-xs font-bold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 active:scale-95 group/btn"
                                        aria-label="Add to cart">
                        Add to cart
                    </button>}

                </div>
            </div>
        </article>
    );
}