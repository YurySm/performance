import {JSX, useEffect, useState} from "react";
import {FoodService} from "../../services/food/food.sevice.ts";
import {Button, Card, Htag, Layout, Loader} from "../../components";
import {IFood} from "../../interfaces";
import styles from './FoodPage.module.scss'

export enum SortEnum {
    MIN,
    MAX
}

export function FoodPage(): JSX.Element  {
    const [sortItems, setSortItems] = useState<IFood[] | []>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false);

    const [indent, setIndent] = useState<number>(0);
    const [isEnd, setIsEnd] = useState<boolean>(false);

    const getList = async () => {
        setIsLoading(true)
        await FoodService.getAll(indent)
                .then(res => {
                    if(res.length < 12) {
                        setIsEnd(true)
                    }
                    return res
                })
                .then(res => res.map(el => ({...el, id: `food-${el.id}`})))
                .then(res => res.map(el => ({...el, price: Math.floor(Math.random() * 90) + 10})))
                .then(res => {
                    setIndent(indent => indent + 12)
                    setSortItems(prevState => [...prevState, ...res])
                })
                .catch(() => setIsError(true))
                .finally(() => {
                    setIsLoading(false)
                    setTimeout(() => {
                        setIsError(false)
                    }, 3000)
                })
    }

    const filterItems = (value: SortEnum) => {
        switch (value) {
            case SortEnum.MIN:
                setSortItems(prevState => [...prevState].sort((a, b) => a.price > b.price ? 1 : -1))
                break;
            case SortEnum.MAX:
                setSortItems(prevState => [...prevState].sort((a, b) => a.price < b.price ? 1 : -1))
                break;
            default: throw new Error('Неверный тип сортировки')
        }
    }

    useEffect(() => {
        getList()
    }, []);

    return(
        <Layout>
            <Htag className={"page-title"} tag={'h1'}>еда</Htag>
            {
                isLoading && <Loader/>
            }
            {
                isError && <div>Что-то пошло не так!</div>
            }
            {
                !isLoading &&
                <div className={styles.sort}>
                    <p>Сортировка по цене</p>
                    <Button
                        appearance={'primary'}
                        onClick={() => {
                            filterItems(SortEnum.MIN)
                        }}
                    >
                        от минимальной
                    </Button>
                    <Button
                        appearance={'primary'}
                        onClick={() => {
                            filterItems(SortEnum.MAX)
                        }}
                    >
                        от макисмальной
                    </Button>
                </div>
            }

            <div className={'page-list'}>
                {
                    sortItems && sortItems.map(f => <Card key={f.id} product={f}/> )
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