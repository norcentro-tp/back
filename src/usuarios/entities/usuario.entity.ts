import { TipoDocumento } from 'src/tipo_documentos/entities/tipo_documento.entity';
import { Rol } from 'src/rol/rol.interface';

export class Usuario {
  nombres: string;
  apellidos: string;
  telefono: string;
  correo: string;
  departamento: string;
  provincia: string;
  documento: TipoDocumento;
  roles: Array<Rol>;
}
