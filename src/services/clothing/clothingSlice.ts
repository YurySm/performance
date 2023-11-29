// https://jsonplaceholder.typicode.com/albums

import {BaseQueryFn, createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {baseReqSettingsRTQ} from "../../api/api.intercepter.ts";
import {BaseQueryResult} from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import {IClothing} from "../../interfaces";


// interface BaseQuery extends IClothing[]{}
export const clothingSlice = createApi({
    reducerPath: 'clothing',
    baseQuery: fetchBaseQuery(baseReqSettingsRTQ),
    endpoints: builder => ({
        getAllClothing: builder.query<IClothing[], void>({
            query: () => '/albums',
            transformResponse: (baseQueryReturnValue: BaseQueryResult<BaseQueryFn<any, IClothing[], unknown, {}, {}>>) => {
                return baseQueryReturnValue
                            .map(r => ({...r, price: Math.floor(Math.random() * 90) + 10}))
                            .map(r => ({...r, id: `clothing-${r.id}`}))
            }
        })
    })
})

export const {
    useGetAllClothingQuery
} = clothingSlice
