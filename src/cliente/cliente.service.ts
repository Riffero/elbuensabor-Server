import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Cliente } from './interfaces/cliente.interface';
import { BaseAbmService } from 'src/generico/base-abm.service';

@Injectable()
export class ClienteService extends BaseAbmService<Cliente>{
    constructor(
        @InjectModel('Clientes') 
        private readonly clienteModel: Model<Cliente>){
            super(clienteModel);
        }

    getByMail(mail:string):Promise<Cliente>{
        try {
            return <Promise<Cliente>><unknown>this.clienteModel.findOne({ email: mail });
        } catch (error) {
            
        }
    }
}
