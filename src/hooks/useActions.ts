import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {useMemo} from "react";
import {rootActions} from "../store/rootActions.ts";


export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
}