import styles from './Container.module.scss'
import { ContainerProps } from './Container.props';
import {JSX} from "react";

export const Container = ({ children }: ContainerProps): JSX.Element => {

    return (
        <div
            className={styles.container}>
            {children}
        </div >
    );
};
