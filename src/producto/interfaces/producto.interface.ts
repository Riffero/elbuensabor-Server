import { Document } from "mongoose";
import { Rubro } from "src/rubro/interfaces/rubro.interface";

export interface Producto extends Document {
    id:string;
    denominacion: string;
    costo: number;
    stockActual: number;
    rubro: Rubro;
}