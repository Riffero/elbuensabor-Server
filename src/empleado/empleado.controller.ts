import { Controller } from '@nestjs/common';
import { BaseController } from 'src/generico/base.controller';
import { EmpleadoService } from './empleado.service';
import { Empleado } from './interfaces/empleado.interface';

@Controller('api/v1/empleados')
export class EmpleadoController extends BaseController<Empleado>{

    constructor(private _empleadoService: EmpleadoService){
        super(_empleadoService);
    }
}
