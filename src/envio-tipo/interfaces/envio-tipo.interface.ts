import { Document } from "mongoose";

export interface EnvioTipo extends Document{
    id: string;
    nombreTipo: string;
}