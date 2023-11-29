// jsonplaceholder photos
// https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5

import {axiosClassic} from "../../api/api.intercepter.ts";
import {IElectronics} from "../../interfaces";


export const ElectronicsService = {

    async getAll (indent: number = 0) {
        const response = await axiosClassic<IElectronics[]>({
                url: `photos?_start=${indent}&_limit=12`,
                method: "GET",
            })

        return response.data
    },
}
