import { Document } from "mongoose";

export interface Insumo extends Document {
    id: string;
    unidadMedida: string;
    denominacion: string;
    costo: number;
    stockActual: number;
}