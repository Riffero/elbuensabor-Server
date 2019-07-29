import { Document } from "mongoose";

export interface DetallePedido extends Document {
    cantidad: number;
    subtotal: number;
    articulo: any;
    onModel: string;
}