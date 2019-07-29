import { Get, Res, HttpStatus, Param, Body, Post, Put, Delete } from "@nestjs/common";
import { IBaseAbmService } from "./interfaces/Ibase-abm.service";

export class BaseController<T> {

    constructor(private readonly _IBaseService: IBaseAbmService<T>) { }

    @Get('/')
    async findAll(@Res() res): Promise<T[]> {
        const results: T[] = await this._IBaseService.getAll();
        return res.status(HttpStatus.FOUND).json(results);
    }

    @Get('/:id')
    async findById(@Res() res, @Param('id') id): Promise<T> {
        const result: T = await this._IBaseService.getById(id);
        return res.status(HttpStatus.FOUND).json(result);
    }

    @Post('/')
    async create(@Res() res, @Body() entity: T): Promise<T>{
        const result: T = await this._IBaseService.create(entity);
        return res.status(HttpStatus.CREATED).json(result);
    }

    @Put('/:id')
    async update(@Res() res, @Body() entity:T, @Param('id') id): Promise<T>{
        const result: T = await this._IBaseService.update(id,entity);
        return res.status(HttpStatus.CREATED).json({
            message: 'Registro actualizado',
            result
        });
    }

    @Delete('/:id')
    async delete(@Res() res, @Param('id') id){
        this._IBaseService.delete(id);
        return res.status(HttpStatus.OK).json({
            message: 'Registro eliminado'
        });
    }
}