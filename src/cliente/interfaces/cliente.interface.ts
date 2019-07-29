import { Document } from 'mongoose';

export interface Cliente extends Document {
    id:string;
    nombre: string;
    apellido: string;
    telefono: number;
    email: string;
    creacion: Date;
    domicilio: {
        calle: string;
        numero: number;
        localidad: string;
    };
}