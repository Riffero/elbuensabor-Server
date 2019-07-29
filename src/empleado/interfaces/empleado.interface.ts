import { Document } from "mongoose";
import { RolEmpleado } from "src/rol-empleado/interfaces/rol-empleado.interface";

export interface Empleado extends Document{
    id:string;
    email: string;
    rol: RolEmpleado[];
    nombre: string;
}