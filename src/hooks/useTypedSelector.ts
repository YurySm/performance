import {TypedUseSelectorHook, useSelector} from "react-redux";
import {TypeRootState} from "../store/configureStore.ts";

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector