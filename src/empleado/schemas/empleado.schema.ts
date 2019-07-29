import { Schema } from "mongoose";

export const EmpleadoSchema = new Schema({
    email: String,
    rol: [
        {
            type: Schema.Types.ObjectId,
            ref: "RolesEmpleados"
        }
    ],
    nombre: String
});

