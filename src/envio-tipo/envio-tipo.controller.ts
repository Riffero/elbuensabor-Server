import { Controller } from '@nestjs/common';
import { BaseController } from 'src/generico/base.controller';
import { EnvioTipo } from './interfaces/envio-tipo.interface';
import { EnvioTipoService } from './envio-tipo.service';

@Controller('api/v1/envios-tipo')
export class EnvioTipoController extends BaseController<EnvioTipo>{

    constructor(private _envioTipoService: EnvioTipoService){
        super(_envioTipoService);
    }
}
