import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TipoDocumentosModule } from './tipo_documentos/tipo_documentos.module';
import { AuthModule } from './auth/auth.module';
import { MotosModule } from './motos/motos.module';
import { ModelosModule } from './modelos/modelos.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { CampaniasModule } from './campanias/campanias.module';
import { EstadosMotoModule } from './estados_moto/estados_moto.module';
import { CategoriasMotoModule } from './categorias_moto/categorias_moto.module';
import { MarcasModule } from './marcas/marcas.module';
import { TrabajadoresModule } from './trabajadores/trabajadores.module';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@norcentro.c0rdkoj.mongodb.net/NORCENTRO`,
    ),
    UsuariosModule,
    TipoDocumentosModule,
    AuthModule,
    MotosModule,
    ModelosModule,
    ProveedoresModule,
    CampaniasModule,
    EstadosMotoModule,
    CategoriasMotoModule,
    MarcasModule,
    TrabajadoresModule,
    ClientesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
