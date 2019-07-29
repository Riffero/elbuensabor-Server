import { Module } from '@nestjs/common';
import { EmpleadoController } from './empleado.controller';
import { EmpleadoService } from './empleado.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmpleadoSchema } from './schemas/empleado.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {name: 'Empleados', schema: EmpleadoSchema}
  ])],
  controllers: [EmpleadoController],
  providers: [EmpleadoService]
})
export class EmpleadoModule {}
