import {DetailedHTMLProps, HTMLAttributes} from "react";
import {IFood} from "../../interfaces/food.interface.ts";
import {IClothing} from "../../interfaces/clothing.interface.ts";
import {IElectronics} from "../../interfaces/electronics.interface.ts";

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    product: IFood | IClothing | IElectronics
}