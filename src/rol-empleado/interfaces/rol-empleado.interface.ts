import { Document } from "mongoose";

export interface RolEmpleado extends Document {
    id: string;
    cargo:string;
}