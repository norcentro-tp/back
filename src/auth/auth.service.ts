import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { JwtService } from '@nestjs/jwt';
import { ClientesService } from 'src/clientes/clientes.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsuariosService,
    private jwtService: JwtService,
    private clienteService: ClientesService,
  ) {}

  async signIn(correo: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(correo);
    const cliente = await this.clienteService.findByEmail(correo);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { cliente, user, sub: user._id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
