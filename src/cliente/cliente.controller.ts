import { Controller } from '@nestjs/common';

import { ClienteService } from './cliente.service';
import { BaseController } from 'src/generico/base.controller';
import { Cliente } from './interfaces/cliente.interface';

@Controller('api/v1/clientes')
export class ClienteController extends BaseController<Cliente> {
    
    constructor(private _clienteService: ClienteService){
        super(_clienteService);
    }
}
