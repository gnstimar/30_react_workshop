import {SearchX} from "lucide-react";

type EmptyStateProps = {
    searchQuery: string,
    onClearSearch: () => void;
}

const EmptyState = ({searchQuery, onClearSearch}:EmptyStateProps) => {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center border border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
            <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mb-4">
                <SearchX className="w-8 h-8 stroke-[1.5]" />
            </div>

            <h3 className="text-base font-bold text-slate-900 mb-1">
                No products found
            </h3>

            <p className="text-xs text-slate-500 max-w-xs mb-6">
                We couldn't find any products matching <span className="font-semibold text-slate-700">"{searchQuery}"</span>.
            </p>

            <button
                type="button"
                onClick={onClearSearch}
                className="inline-flex h-9 items-center justify-center rounded-xl bg-blue-600 px-4 text-xs font-bold text-white transition-all hover:bg-blue-500 active:scale-95"
            >
                Clear search
            </button>
        </div>
    );
};

export default EmptyState;