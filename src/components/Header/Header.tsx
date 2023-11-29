import {JSX, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {Basket} from "../Basket/Basket.tsx";
import {useTypedSelector} from "../../hooks";
import styles from './Header.module.scss'
import cn from "classnames";
import {Button} from "../UI";


export function Header(): JSX.Element  {

    const [isShow, setIsShow] = useState<boolean>(false);

    const basketElements = useTypedSelector(state => state.basket.basket)

    return(
        <header
            className={styles.header}
        >
            <Link className={styles.header__logo} to={'/'}>LOGO</Link>
            <nav className={styles.header__nav}>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? cn(styles.header__nav_link, styles.active) : styles.header__nav_link
                    }
                    to="/food">ЕДА</NavLink>
                <br/>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? cn(styles.header__nav_link, styles.active) : styles.header__nav_link
                    }
                    to="/clothing">ОДЕЖДА</NavLink>
                <br/>
                <NavLink
                    className={({ isActive }) =>
                         isActive ? cn(styles.header__nav_link, styles.active) : styles.header__nav_link
                    }
                    to="/electronics">ЭЛЕКТРОНИКА</NavLink>
            </nav>


            <Button
                appearance={'primary'}
                className={styles.basket}
                onClick={() => setIsShow(true)}
            >
                basket
                {
                    basketElements.length > 0 && <span className={styles.counter}>{basketElements.length}</span>
                }
            </Button>

            <aside
                className={cn(styles.aside, {
                    [styles.hide]: !isShow
                })}
                >
                <Button
                    className={styles.aside__close}
                    appearance={'ghost'}
                    onClick={() => setIsShow(false)}
                >
                    &times;
                </Button>
                <Basket/>
            </aside>
        </header>
    )
}