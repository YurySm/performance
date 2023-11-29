import {LayoutProps} from "./Layout.props.ts";
import {Header} from "../Header/Header.tsx";
import {Container} from "../UI";
import styles from './Layout.module.scss'

export function Layout ({ children }: LayoutProps): JSX.Element {

    return (
        <>
            <Header/>
            <Container>
                <div className={styles.page}>
                    {children}
                </div>
            </Container>
        </>

    );
};
