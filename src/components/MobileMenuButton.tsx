import {Menu} from "lucide-react";

export function MobileMenuButton() {
    return (
        <button type="button"
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-[0.75rem] bg-blue-500/30 text-blue-50 transition-all duration-200 hover:text-white hover:bg-blue-500/50 border border-blue-400/20"
                aria-label="Menu" title="Menu">
            <Menu/>
        </button>
    );
}