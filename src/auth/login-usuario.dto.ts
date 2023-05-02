import { ApiProperty } from '@nestjs/swagger';
export class PostLoginUsuarioDto {
  @ApiProperty({
    type: String,
    description: 'Email of the user',
  })
  email: string;

  @ApiProperty({
    type: String,
    description: 'Password of the user',
  })
  password: string;
}
