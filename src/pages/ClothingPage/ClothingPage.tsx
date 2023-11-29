import {JSX} from "react";
import styles from "../ClothingPage/ClothingPage.module.scss";
import {useGetAllClothingQuery} from "../../services/clothing/clothingSlice.ts";
import {Button, Card, Htag, Layout, Loader} from "../../components";
import cn from "classnames";
import {usePagination} from "../../hooks";

export function ClothingPage(): JSX.Element  {

    const {
        data: clothing,
        isError,
        isFetching,
        isLoading,
    } = useGetAllClothingQuery()

    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        setPage,
        totalPages,
    } = usePagination({
        contentPerPage: 12,
        count: clothing ? clothing.length : 0,
    });

    return(
        <Layout>
            <Htag className={"page-title"} tag={'h1'}>одежда</Htag>
            {
                (isFetching || isLoading) && <Loader/>
            }
            {
                isError && <div>Что-то пошло не так!</div>
            }
            <div className={'page-list'}>
                {
                    clothing && clothing
                                    .slice(firstContentIndex, lastContentIndex)
                                    .map(c => <Card key={c.id} product={c}/>)
                }
            </div>

            {
                clothing &&

                <div className={styles.pagination}>
                    <p className={styles.pagination__text}>
                        <span>{page}</span>/{totalPages}
                    </p>
                    <div className={styles.pagination__btns}>
                        <Button appearance={'ghost'} onClick={prevPage} className="page">
                            &larr;
                        </Button>
                        {[...Array(totalPages).keys()].map((el) => (
                            <Button appearance={'ghost'}
                                onClick={() => setPage(el + 1)}
                                key={el}
                                className={cn({
                                    [styles.active]: page === el + 1
                                })}
                            >
                                {el + 1}
                            </Button>
                        ))}
                        <Button appearance={'ghost'} onClick={nextPage} className="page">
                            &rarr;
                        </Button>
                    </div>
                </div>
            }
        </Layout>
    )
}