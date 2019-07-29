import { Controller } from '@nestjs/common';
import { BaseController } from 'src/generico/base.controller';
import { Estado } from './interfaces/estado.interface';
import { EstadoService } from './estado.service';

@Controller('estado')
export class EstadoController extends BaseController<Estado>{

    constructor(private _estadoService: EstadoService){
        super(_estadoService);
    }
}
