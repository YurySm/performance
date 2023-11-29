'use client'
import {JSX} from "react";
import styles from './Card.module.scss'

import {CardProps} from "./Card.props.ts";
import {useActions} from "../../hooks";
import {Button, Htag} from "../UI";

export function Card({product}: CardProps): JSX.Element  {
    const {title, price} = product

    const {addToCard} = useActions()

    return(
        <div className={styles.card}>
            {
                ('thumbnailUrl' in product) ?
                    <img
                        className={styles.img}
                        loading="lazy"
                        src={product.thumbnailUrl}
                        alt={product.title}/> : null
            }
            <Htag
                className={styles.title}
                tag={'h2'}>{title}</Htag>
            {
                ('body' in product )? <p>{product.body}</p> : null
            }

            <hr/>

            <p className={styles.price}><b>{price}</b> Руб</p>

            <Button
                appearance={'ghost'}
                onClick={() => {addToCard(product)}}
                >
                добавить в корзину
            </Button>
        </div>
    )
}