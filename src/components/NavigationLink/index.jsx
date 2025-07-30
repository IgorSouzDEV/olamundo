import styles from './NavigationLink.module.css';
import { Link, useLocation } from "react-router-dom";

function NavigationLink({ children, to, ...props }) {
    const location = useLocation();
    
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`${styles.link} ${isActive ? styles.linkDestacado : ""}`}
            {...props}>
            {children}
        </Link>
    );
}

export default NavigationLink;