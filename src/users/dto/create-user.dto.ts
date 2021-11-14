import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{

  @ApiProperty({example: 'example@mail.ru', description: 'Почтовый адрес'})
  readonly email: string;

  @ApiProperty({example: '123ABC', description: 'Пароль'})
  readonly password: string;
  
}