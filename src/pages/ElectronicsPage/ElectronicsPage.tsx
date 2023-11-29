import {JSX, useEffect, useState} from "react";
import {Button, Card, Htag, Layout, Loader} from "../../components";
import styles from "../ElectronicsPage/ElectronicsPage.module.scss";
import {ElectronicsService} from "../../services/electronics/electronics.sevice.ts";
import {IElectronics} from "../../interfaces";


export function ElectronicsPage(): JSX.Element  {
    const [electronics, setElectronics] = useState<IElectronics[] | []>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false);

    const [indent, setIndent] = useState<number>(0);
    const [isEnd, setIsEnd] = useState<boolean>(false);
    const getList = async () => {
        setIsLoading(true)
        await ElectronicsService.getAll(indent)
            .then(res => {
                if(res.length < 12) {
                    setIsEnd(true)
                }
                return res
            })
            .then(res => res.map(el => ({...el, id: `electronics-${el.id}`})))
            .then(res => res.map(el => ({...el, price: Math.floor(Math.random() * 170) + 30})))
            .then(res => {
                setIndent(indent => indent + 12)
                setElectronics(prevState => [...prevState, ...res])
            })
            .catch(() => setIsError(true))
            .finally(() => {
                setIsLoading(false)
                setTimeout(() => {
                    setIsError(false)
                }, 3000)
            })
    }

    useEffect(() => {
        getList()
    }, []);

    return(
        <Layout>
            <Htag className={"page-title"} tag={'h1'}>электроника</Htag>
            {
                isLoading && <Loader/>
            }
            {
                isError && <div>Что-то пошло не так!</div>
            }
            <div className={'page-list'}>
                {
                    electronics && electronics.map(el => <Card key={el.id} product={el}/> )
                }
            </div>

            <Button
                appearance={'primary'}
                style={{display: isEnd ? 'none': 'block'}}
                disabled={isLoading}
                className={styles.addBtn}
                onClick={() => getList()}
            >
                Показать еще
            </Button>
        </Layout>
    )
}