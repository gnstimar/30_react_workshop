import {SearchBar} from "./SearchBar.tsx";
import {Cart} from "./Cart.tsx";
import {Package} from "lucide-react";
import {UserComponent} from "./UserComponent.tsx";
import {MobileMenuButton} from "./MobileMenuButton.tsx";

export function Header() {
    return (
        <header className="sticky top-0 z-40 border-b border-blue-700/30 bg-blue-600 shadow-lg shadow-blue-900/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/*<!-- Logo -->*/}
                    <a href="#" className="flex items-center gap-2 font-bold tracking-tight text-white">
            <span
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-blue-600 shadow-md">
                <Package/>
            </span>
                        <span className="text-xl tracking-tighter uppercase font-black">LITE.SHOP</span>
                    </a>

                    {/*<!-- Nav links -->*/}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-blue-100">
                        <a className="relative transition-colors duration-200 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:w-full after:h-[2px] after:scale-x-0 after:origin-center after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 after:rounded-full"
                           href="#">New Arrival</a>
                        <a className="relative transition-colors duration-200 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:w-full after:h-[2px] after:scale-x-0 after:origin-center after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 after:rounded-full"
                           href="#">Men</a>
                        <a className="relative transition-colors duration-200 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:w-full after:h-[2px] after:scale-x-0 after:origin-center after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 after:rounded-full"
                           href="#">Women</a>
                        <a className="relative transition-colors duration-200 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:w-full after:h-[2px] after:scale-x-0 after:origin-center after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 after:rounded-full"
                           href="#">Sale</a>
                    </nav>

                    {/*<!-- Right icons -->*/}
                    <div className="flex items-center gap-2">
                        {/*<!-- Status Indicator -->*/}
                        <div
                            className="mr-4 hidden items-center gap-2 rounded-full bg-blue-500/30 px-3 py-1 lg:flex border border-blue-400/20">
                    <span className="relative flex h-2 w-2">
                        <span
                            className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-200 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-100"></span>
                    </span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-blue-50">Live</span>
                        </div>

                        <SearchBar/>

                        <Cart/>

                        <UserComponent/>

                        <MobileMenuButton/>
                    </div>
                </div>
            </div>
        </header>
    );
}