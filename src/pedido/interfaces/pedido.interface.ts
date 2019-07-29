import { Document } from "mongoose";
import { Estado } from "src/estado/interfaces/estado.interface";
import { EnvioTipo } from "src/envio-tipo/interfaces/envio-tipo.interface";
import { Cliente } from "src/cliente/interfaces/cliente.interface";
import { DetallePedido } from "src/detalle-pedido/interfaces/detalle-pedido.interface";

/*
    no le asigne un numero al pedido, hay q usar el ID
*/
export interface Pedido extends Document{
    id:number;
    fecha: Date;
    estado: Estado;
    horaEstimadaFin: Date;
    tipoEnvio: EnvioTipo;
    cliente: Cliente;
    detalles: DetallePedido[];
}