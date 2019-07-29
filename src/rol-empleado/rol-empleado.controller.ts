import { Controller } from '@nestjs/common';
import { BaseController } from 'src/generico/base.controller';
import { RolEmpleado } from './interfaces/rol-empleado.interface';
import { RolEmpleadoService } from './rol-empleado.service';

@Controller('api/v1/roles')
export class RolEmpleadoController extends BaseController<RolEmpleado>{

    constructor(private _rolEmpleadoService: RolEmpleadoService){
        super(_rolEmpleadoService);
    }
}
