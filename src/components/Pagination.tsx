export function Pagination() {
    return (
        <nav className="mt-8 flex items-center justify-center gap-2" aria-label="Pagination">
            <button type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50"
                    aria-label="Previous page" title="Previous">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m15 18-6-6 6-6"/>
                </svg>
            </button>

            <button type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-blue-600 bg-blue-600 text-white font-medium transition-all duration-200"
                    aria-current="page">1
            </button>
            <button type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50">
                2
            </button>
            <button type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50">
                3
            </button>
            <span className="px-2 text-sm text-slate-400">…</span>
            <button type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50">
                12
            </button>

            <button type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50"
                    aria-label="Next page" title="Next">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                </svg>
            </button>
        </nav>
    );
}