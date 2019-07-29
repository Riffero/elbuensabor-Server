import { Document } from "mongoose";

export interface Estado extends Document{
    id: string;
    tipoEstado: string;
}