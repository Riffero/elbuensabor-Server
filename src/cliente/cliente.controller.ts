import { Controller, Get, Res, Param, HttpStatus } from '@nestjs/common';

import { ClienteService } from './cliente.service';
import { BaseController } from 'src/generico/base.controller';
import { Cliente } from './interfaces/cliente.interface';

@Controller('api/v1/clientes')
export class ClienteController extends BaseController<Cliente> {
    
    constructor(private _clienteService: ClienteService){
        super(_clienteService);
    }

    @Get('/:mail')
    async findByEmail(@Res() res, @Param('mail') mail):Promise<Cliente>{
        const result = await this._clienteService.getByMail(mail);
        return res.status(HttpStatus.FOUND).json(result);
    }
}
