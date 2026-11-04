import {Header} from "./components/Header.tsx";
import {SidebarFilters} from "./components/SidebarFilters.tsx";
import {ProductGrid} from "./components/ProductGrid.tsx";
import {products} from "./data/products.ts";
import {Newsletter} from "./components/Newsletter.tsx";
import {Footer} from "./components/Footer.tsx";
import {Pagination} from "./components/Pagination.tsx";
import {useState} from "react";
import EmptyState from "./components/EmptyState.tsx";

function App() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = products.filter(
        (product) => (product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    )

    return (
        <>
            <div className="min-h-screen bg-slate-100/30 text-slate-950 antialiased font-sans">
                <Header searchQuery={searchQuery} onSearchChange={setSearchQuery}/>
                <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                        <SidebarFilters/>
                        <section className="lg:col-span-9">
                            <div
                                className="border border-slate-200 rounded-[1.25rem] bg-slate-50/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-400 p-5">
                                {filteredProducts.length === 0 ?
                                    <EmptyState searchQuery={searchQuery} onClearSearch={()=>setSearchQuery("")} />
                                    :
                                    <div>
                                        <ProductGrid products={filteredProducts}/>
                                        <Pagination/>
                                    </div>}
                            </div>
                        </section>
                    </div>
                </main>
                <Newsletter/>
                <Footer/>
            </div>
        </>
    );
}

export default App
