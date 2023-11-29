import styles from './Basket.module.scss'
// import { BasketProps } from './Basket.props.ts';
import {JSX, useEffect, useState} from "react";
import {useActions, useTypedSelector} from "../../hooks";
import {IFood} from "../../interfaces/food.interface.ts";
import {Htag} from "../UI";
import {IClothing} from "../../interfaces/clothing.interface.ts";
import {IElectronics} from "../../interfaces/electronics.interface.ts";

export const Basket = (): JSX.Element => {
    const [total, setTotal] = useState<number>(0);

    const basketElements = useTypedSelector(state => state.basket.basket)

    const {deleteFromCard} = useActions()

    const getTotal = (arr: (IClothing | IFood | IElectronics)[]): number => {
        let count = 0
        arr.forEach(el => {
            count += el.price
        })

        return count
    }

    useEffect(() => {
        setTotal(getTotal(basketElements))
    }, [basketElements]);

    return (
        <div
            className={styles.basket}
        >
            <Htag className={"page-title"} tag={'h1'}>Корзина</Htag>
            {
                basketElements.length === 0 && <Htag className={styles.basket__null} tag={'h3'}>Корзина пуста</Htag>
            }
            <div className={styles.basket__items}>
                {
                    basketElements && basketElements.map(el => (
                        <div
                            key={el.id}
                            className={styles.basket__item}>
                            <div className={styles.basket__item_wrapper}>
                                <Htag
                                    className={styles.basket__item_title}
                                    tag={'h3'}>{el.title}</Htag>
                                {
                                    ('body' in el )? <p className={styles.basket__item_descr}>{el.body}</p> : null
                                }
                                <hr/>
                                <p className={styles.basket__item_price}><b>{el.price}</b> Руб</p>
                            </div>
                            <button
                                className={styles.deleteItem}
                                onClick={() => {deleteFromCard(el.id)}}>Удалить</button>
                        </div>
                    ))
                }
            </div>
            {
                basketElements.length !== 0 &&
                    <Htag
                        className={styles.basket__total}
                        tag={'h3'}>Общая сумма: {total} Руб</Htag>
            }
        </div >
    );
};
