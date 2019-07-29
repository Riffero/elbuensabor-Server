import { Document } from "mongoose";
import { Rubro } from "src/rubro/interfaces/rubro.interface";

export interface ProductoManofacturado extends Document{
    id:String;
    denominacion: String;
    tiempoCoccion: number;
    precioVenta: number;
    rubro:Rubro;
    ingredientes: any[];
}