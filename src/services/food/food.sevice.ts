// jsonplaceholder posts
// https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5

import {axiosClassic} from "../../api/api.intercepter.ts";
import {IFood} from "../../interfaces";

export const FoodService = {

    async getAll (indent: number = 0) {
        const response = await axiosClassic<IFood[]>({
                url: `posts?_start=${indent}&_limit=12`,
                method: "GET",
            })

        return response.data
    },

    async getById (id: number | string) {
        const response = await axiosClassic<IFood>({
            url: `posts/${id}`,
            method: "GET",
        })

        return response.data
    },


}
