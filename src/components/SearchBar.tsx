type SearchBarProps = {
    searchQuery: string;
    onSearchChange: (query:string) => void;
}

export function SearchBar({searchQuery, onSearchChange}: SearchBarProps) {
    return (
        <div className="relative hidden sm:block">
            <input id="search-input" type="text" placeholder="Search products..."
                   className="h-10 w-48 rounded-[0.75rem] bg-blue-500/30 pl-10 pr-4 text-xs font-medium text-blue-50 placeholder:text-blue-200/50 border border-blue-400/20 focus:bg-blue-500/50 focus:w-64 transition-all duration-300 outline-none"
                    value={searchQuery} name="searchInput"
                   onChange={event => {
                       onSearchChange(event.target.value);
                       console.log(event.target.value)
                   }}
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                 className="absolute left-3.5 top-3 text-blue-200">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
            </svg>
        </div>
    );
}