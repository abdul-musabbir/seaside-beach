import { NavLink, useLocation } from "react-router-dom";
import {ArrowBigDown, ChevronDown, ChevronUp, Menu, X} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import cn from "../lib/utils.ts";
import SelectAllArrayData from "../data/selectAllArrayData.ts";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [drop, setDrop] = useState(false);  // Added drop state for the mobile menu
    const ref = useRef<HTMLDivElement>(null);
    const [showMenus, setShowMenus] = useState<boolean>(false)
    const location = useLocation();  // Updated to use useLocation hook
    const pathName = location.pathname;
    const SelectAllData = SelectAllArrayData();
    const copyArray = SelectAllData.map(item=> item.land);
    const result = copyArray
        .toString()
        .trim()
        .replace(/-/g, ' ')
        .replace(/ {2,}/g, ' ')
        .replace(/\s+/g, '-')
        .toLowerCase()
        .split(',')
        .map(item => '/'+item);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header ref={ref} className={cn("h-16 sm:h-20 flex fixed top-0 left-0 right-0 z-[999] transition-all duration-300", {
            'shadow-xl bg-white': isScrolled,
        })}>
            <div className="flex w-11/12 mx-auto items-center justify-between">
                <div>
                    <NavLink to={'/'} className={cn("font-bold text-2xl text-white", {
                        'text-black': isScrolled || result.includes(pathName),
                        'text-white': !isScrolled && result.includes(!pathName),
                    })}>
                        Travellow
                    </NavLink>
                </div>
                {/* Navigation for larger screens */}
                <nav className="hidden sm:block">
                    <div className={cn("flex space-x-8 text-lg font-bold text-white", {
                        'text-black': isScrolled || result.includes(pathName),
                    })}>
                        <NavLink to="/">Home</NavLink>
                        <NavLink className={'relative group'} to="/">Houses

                            <div className={'absolute top-7 hidden group-hover:block bg-white shadow-2xl border p-2 rounded text-base font-normal w-52'}>
                                <div className={'flex flex-col text-center text-black'}>
                                    <NavLink className={'py-2 hover:bg-black rounded hover:text-white'} to={'/'}>hotel 1</NavLink>
                                    <NavLink className={'py-2 hover:bg-black rounded hover:text-white'} to={'/'}>hotel 1</NavLink>
                                    <NavLink className={'py-2 hover:bg-black rounded hover:text-white'} to={'/'}>hotel 1</NavLink>
                                    <NavLink className={'py-2 hover:bg-black rounded hover:text-white'} to={'/'}>hotel 1</NavLink>
                                </div>
                            </div>

                        </NavLink>
                        <NavLink to="/features">Features</NavLink>
                        <NavLink to="/how-to-book">How To Book</NavLink>
                    </div>
                </nav>
                {/* Navigation for smaller screens */}
                <nav className={cn('fixed top-20 left-0 w-full text-black sm:hidden transition-all duration-300', {
                    'block z-50': drop,
                    'hidden': !drop,
                })}>
                    <div className="flex flex-col mx-auto w-4/5 rounded-2xl bg-white text-center gap-5 py-8 font-bold text-lg shadow-md">
                        <NavLink to="/" onClick={() => setDrop(false)}>Home</NavLink>
                        <NavLink to="#hotel-card" onClick={() => setShowMenus((prevState)=> !prevState)} className={'flex mx-auto items-center gap-2'}>Houses {showMenus ? <ChevronUp /> :<ChevronDown/>}</NavLink>
                        <div className={cn('flex flex-col text-sm font-normal gap-2',{
                            'block flex flex-col' : showMenus,
                            'hidden': !showMenus
                        })}>
                            <NavLink to={'/'}>hotel 1</NavLink>
                            <NavLink to={'/'}>hotel 1</NavLink>
                            <NavLink to={'/'}>hotel 1</NavLink>
                            <NavLink to={'/'}>hotel 1</NavLink>
                            <NavLink to={'/'}>hotel 1</NavLink>
                        </div>
                        <NavLink to="/features" onClick={() => setDrop(false)}>Features</NavLink>
                        <NavLink to="/how-to-book" onClick={() => setDrop(false)}>How To Book</NavLink>
                    </div>
                </nav>
                {/* Menu toggle button for smaller screens */}
                <div className="sm:hidden">
                    <button className={cn("text-lg flex text-white", {
                        'text-black': isScrolled
                    })} onClick={() => setDrop((prev) => !prev)}>
                        {drop ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>
        </header>
    );
}
