import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-red-1000 to-black text-white p-4 flex items-center justify-between shadow-lg">
            <h1 className="text-2xl font-bold decoration-double animate-pulse">First Assignment</h1>
            <div className="flex-grow flex justify-center space-x-6">
                <Link href="/" className="hover:text-red-400 transition-colors duration-300 font-semibold">Home</Link>
                <Link href="/cricket" className="hover:text-red-400 transition-colors duration-300 font-semibold">Cricket</Link>
                <Link href="/football" className="hover:text-red-400 transition-colors duration-300 font-semibold">Football</Link>
                <Link href="/tennis" className="hover:text-red-400 transition-colors duration-300 font-semibold">Tennis</Link>
                <Link href="/basketball" className="hover:text-red-400 transition-colors duration-300 font-semibold">Basketball</Link>
                <Link href="/contact" className="hover:text-red-400 transition-colors duration-300 font-semibold">Contact</Link>
            </div>
        </nav>
    );
}
