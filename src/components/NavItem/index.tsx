import { Link, useNavigate } from "react-router";
import style from '../root.module.css'

export interface NavItemProps {
    url: string;
    label: string;
    number?: string;
    isActive?: boolean;
}

export default function NavItem( props: NavItemProps ) {
    const navigate = useNavigate()

    return(
        <li className="nav_item">
            <Link 
                to={props.url} 
                className={`nav_link ${props.isActive ? 'active' : ''}`}
                onClick={() => navigate(`/${props.url}`)}
                >
                    <span className={`${style['text-present-8-bold']} numberPage `}>{props.number}</span>
                    <span className={`${style['text-present-8']} namePage`}>{props.label}</span>
            </Link>
        </li>
    )
}