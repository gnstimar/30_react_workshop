type BadgeProps = {
    badgeType?: string
}

export function Badge({badgeType}: BadgeProps) {
    switch (badgeType) {
        case "discount":
            return (<span
                className="absolute left-3 top-3 px-3 py-1 text-[11px] font-bold rounded-full border border-rose-100/50 bg-rose-500/10 text-rose-600 backdrop-blur-md">Discount</span>);
        case "limited":
            return (<span
                className="absolute left-3 top-3 px-3 py-1 text-[11px] font-bold rounded-full border border-amber-100/50 bg-amber-500/10 text-amber-600 backdrop-blur-md">Limited</span>);
        case "soldout":
            return (<span
                className="absolute left-3 top-3 px-3 py-1 text-[11px] font-bold rounded-full border border-slate-200/50 bg-slate-900/60 text-white backdrop-blur-md">Sold Out</span>);
        case "popular":
            return (<span
                className="absolute left-3 top-3 px-3 py-1 text-[11px] font-bold rounded-full border border-blue-100/50 bg-blue-500/10 text-blue-600 backdrop-blur-md">Popular</span>);
        case "hot":
            return (<span
                className="absolute left-3 top-3 px-3 py-1 text-[11px] font-bold rounded-full border border-rose-100/50 bg-rose-500/10 text-rose-600 backdrop-blur-md">Hot Deal</span>);
        case "new":
            return (<span
                className="absolute left-3 top-3 px-3 py-1 text-[11px] font-bold rounded-full border border-amber-100/50 bg-amber-500/10 text-amber-600 backdrop-blur-md">New Arrival</span>);
    }
}