import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ClienteModule } from './cliente/cliente.module';
import { EmpleadoModule } from './empleado/empleado.module';
import { EstadoModule } from './estado/estado.module';
import { EnvioTipoModule } from './envio-tipo/envio-tipo.module';
import { FacturaModule } from './factura/factura.module';
import { InsumoModule } from './insumo/insumo.module';
import { PedidoModule } from './pedido/pedido.module';
import { ProductoModule } from './producto/producto.module';
import { ProductoManofacturadoModule } from './producto-manofacturado/producto-manofacturado.module';
import { RubroModule } from './rubro/rubro.module';
import { RolEmpleadoModule } from './rol-empleado/rol-empleado.module';
import { DetallePedidoModule } from './detalle-pedido/detalle-pedido.module';


@Module({
  imports: [
    ClienteModule,
    EmpleadoModule,
    EstadoModule,
    EnvioTipoModule,
    FacturaModule,
    InsumoModule,
    PedidoModule,
    ProductoModule,
    ProductoManofacturadoModule,
    RubroModule,
    RolEmpleadoModule,
    MongooseModule.forRoot('mongodb://localhost/elBuenSabor',
    { useNewUrlParser: true }),
    DetallePedidoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
