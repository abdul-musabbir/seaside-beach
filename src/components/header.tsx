import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SelectAllArrayData from "../data/selectAllArrayData.ts";

interface DataItem {
    price: number;
    land: string;
    location: string;
    bed: number;
    bath: number;
    person: number;
    url: string;
}

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [drop, setDrop] = useState(false);
    const [showMenus, setShowMenus] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const pathName = location.pathname;
    const SelectAllData: DataItem[] = SelectAllArrayData();
    const copyArray: string[] = SelectAllData.map(item => item.land);
    const result: string[] = copyArray
        .map(item =>
            item
                .trim()
                .replace(/-/g, ' ')
                .replace(/ {2,}/g, ' ')
                .replace(/\s+/g, '-')
                .toLowerCase()
                .split(',')
                .map(subItem => '/' + subItem)
        ).flat();
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
        <header ref={ref} className={"h-16 sm:h-20 flex fixed top-0 left-0 right-0 z-[999] transition-all duration-300" + `${isScrolled&&'shadow-xl bg-white'}`}>
            <div className="flex w-11/12 mx-auto items-center justify-between">
                <div>
                    <NavLink
                        to={'/'}
                        className={`font-bold text-2xl ${isScrolled || result.includes(pathName) ? 'text-black' : 'text-white'}`}
                    >
                        Travellow
                    </NavLink>
                </div>
                {/* Navigation for larger screens */}
                <nav className="hidden sm:block">
                    <div className={`flex space-x-8 text-lg font-bold ${isScrolled || result.includes(pathName) ? 'text-black' : 'text-white'}`}>
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
                <nav className={'fixed top-20 left-0 w-full text-black sm:hidden transition-all duration-300'+ `${drop&&'block z-50'}`+`${!drop&&'hidden'}`}>
                    <div className="flex flex-col mx-auto w-4/5 rounded-2xl bg-white text-center gap-5 py-8 font-bold text-lg shadow-md">
                        <NavLink to="/" onClick={() => setDrop(false)}>Home</NavLink>
                        <NavLink to="#hotel-card" onClick={() => setShowMenus((prevState)=> !prevState)} className={'flex mx-auto items-center gap-2'}>Houses {showMenus ? <ChevronUp /> :<ChevronDown/>}</NavLink>
                        <div className={'flex flex-col text-sm font-normal gap-2'+ `${showMenus&&'block flex flex-col'}` + `${!showMenus&&'hidden'}`}>
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
                    <button className={"text-lg flex text-white" + `${isScrolled&&'text-black'}`} onClick={() => setDrop((prev) => !prev)}>
                        {drop ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>
        </header>
    );
}
