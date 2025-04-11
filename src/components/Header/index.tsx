import { Link, useLocation } from "react-router";
import  LogoImg  from '../../../public/assets/shared/logo.svg'
import './index.css'
import NavItem, { NavItemProps } from "../NavItem";


export function Header() {
    const items: NavItemProps[] = [
        {
            url: '/',
            label: 'Home',
            number: '00'
        }, 
        {
            url: '/destination/Moon',
            label: 'Destination',
            number: '01'
        },
        {
            url: '/crew',
            label: 'Crew',
            number: '02'
        },
        {
            url: '/technology',
            label: 'Technology',
            number: '03'
        }
    ]
    const pathname = useLocation()


    

    function buttonMenu() {
        // active
        const menuMobile = document.getElementById('mobile')

        menuMobile?.classList.toggle('active')
    }

    return(
        <header >
            <nav className="navbar">
                <Link to='/' className="logo">
                    <img src={ LogoImg } alt="Logo space"  />
                </Link>

                <div className=" mobile" id="mobile">
                    <button className="burger" onClick={ buttonMenu } >
                        <div className="hambuguer">
                            <div className="bar" id="bar1"></div>
                            <div className="bar" id="bar2"></div>
                            <div className="bar" id="bar3"></div>
                        </div>
                    </button>

                    <ul className="nav_items">
                        {
                            items.map((item, index) => (
                                <NavItem
                                    key={index}
                                    url={item.url}
                                    label={item.label}
                                    number={item.number}
                                    isActive={pathname.pathname === item.url}
                                />
                            ))
                        }
                    </ul>
                </div>
                <div className="line"></div>
                <ul className="nav_items descktop">
                    {
                        items.map((item, index) => (
                            <NavItem
                                key={index}
                                url={item.url}
                                label={item.label}
                                number={item.number}
                                isActive={pathname.pathname === item.url}
                            />
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}