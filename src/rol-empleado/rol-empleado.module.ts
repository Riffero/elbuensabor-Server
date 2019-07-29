import { Module } from '@nestjs/common';
import { RolEmpleadoController } from './rol-empleado.controller';
import { RolEmpleadoService } from './rol-empleado.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RolEmpleadoSchema } from './schemas/rol-empleado.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {name: 'RolesEmpleados', schema: RolEmpleadoSchema}
  ])],
  controllers: [RolEmpleadoController],
  providers: [RolEmpleadoService]
})
export class RolEmpleadoModule {}
