import {ShoppingBag} from "lucide-react";

export function Cart() {
    return (
        <button type="button"
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-[0.75rem] bg-blue-500/30 text-blue-50 transition-all duration-200 hover:text-white hover:bg-blue-500/50 border border-blue-400/20"
                aria-label="Cart" title="Cart">
            <ShoppingBag/>

            <span id="cart-count"
                  className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm hidden">0</span>
        </button>
    );
}