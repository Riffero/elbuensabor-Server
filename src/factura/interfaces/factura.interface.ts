import { Document } from "mongoose";
import { Pedido } from "src/pedido/interfaces/pedido.interface";

export interface Factura extends Document{
    _id: string;
    fecha: Date;
    montoDescuento: number;
    total: number;
    pedido: Pedido;
}