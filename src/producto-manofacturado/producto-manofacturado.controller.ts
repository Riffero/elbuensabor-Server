import { Controller } from '@nestjs/common';
import { BaseController } from 'src/generico/base.controller';
import { ProductoManofacturado } from './interfaces/producto-manofacturado.interface';
import { ProductoManofacturadoService } from './producto-manofacturado.service';

@Controller('api/v1/productos-manofacturados')
export class ProductoManofacturadoController extends BaseController<ProductoManofacturado>{

    constructor(private _productoManofacturadoService: ProductoManofacturadoService){
        super(_productoManofacturadoService);
    }
}
