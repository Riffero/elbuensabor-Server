import { Controller } from '@nestjs/common';
import { BaseController } from 'src/generico/base.controller';
import { Rubro } from './interfaces/rubro.interface';
import { RubroService } from './rubro.service';

@Controller('api/v1/rubros')
export class RubroController extends BaseController<Rubro> {

    constructor(private _rubroService: RubroService){
        super(_rubroService);
    }
}
