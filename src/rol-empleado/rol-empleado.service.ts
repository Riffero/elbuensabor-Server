import { Injectable } from '@nestjs/common';
import { BaseAbmService } from 'src/generico/base-abm.service';
import { RolEmpleado } from './interfaces/rol-empleado.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class RolEmpleadoService extends BaseAbmService<RolEmpleado>{

    constructor(
       @InjectModel('RolesEmpleados')
       private readonly rolEmpleadoModel: Model<RolEmpleado>){
           super(rolEmpleadoModel);
    }
}
