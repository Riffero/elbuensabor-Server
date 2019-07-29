import { Injectable } from '@nestjs/common';
import { BaseAbmService } from 'src/generico/base-abm.service';
import { Empleado } from './interfaces/empleado.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EmpleadoService extends BaseAbmService<Empleado>{
    constructor(
        @InjectModel('Empleados')
        private readonly empleadoModel: Model<Empleado>){
            super(empleadoModel);
        }
}
