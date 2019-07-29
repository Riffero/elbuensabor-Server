import { Controller } from '@nestjs/common';
import { BaseController } from 'src/generico/base.controller';
import { Insumo } from './interfaces/insumo.interface';
import { InsumoService } from './insumo.service';

@Controller('api/v1/insumos')
export class InsumoController extends BaseController<Insumo>{

    constructor(private _insumoService: InsumoService){
        super(_insumoService);
    }
}
