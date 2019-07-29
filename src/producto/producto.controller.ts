import { Controller } from '@nestjs/common';
import { BaseController } from 'src/generico/base.controller';
import { Producto } from './interfaces/producto.interface';
import { ProductoService } from './producto.service';

@Controller('api/v1/productos')
export class ProductoController extends BaseController<Producto> {

    constructor(private _productoService: ProductoService){
        super(_productoService);
    }
}
