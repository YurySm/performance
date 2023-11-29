import {JSX} from "react";
import styles from './Loader.module.scss'
import cn from "classnames";
import {LoaderProps} from "./Loader.props";
import LoaderIcon from './loader.svg?react'

export function Loader({className}: LoaderProps): JSX.Element {
    return (
        <div
            className={cn(styles.loader, className)}>
                <LoaderIcon/>
        </div>
    )
};
