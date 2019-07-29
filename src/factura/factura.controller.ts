import { Controller } from '@nestjs/common';
import { BaseController } from 'src/generico/base.controller';
import { Factura } from './interfaces/factura.interface';
import { FacturaService } from './factura.service';

@Controller('api/v1/facturas')
export class FacturaController extends BaseController<Factura>{

    constructor(private _facturaService: FacturaService){
        super(_facturaService);
    }
}
