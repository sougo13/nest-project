import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs{
  email: string, 
  password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs>{
  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'example@mail.ru', description: 'Почтовый адрес'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  @ApiProperty({example: '123ABC', description: 'Пароль'})
  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @ApiProperty({example: 'false', description: 'Пользователь в бане или нет'})
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  banned: boolean;

  @ApiProperty({example: 'Потому что Петя', description: 'Причина бана пользователя'})
  @Column({type: DataType.STRING, allowNull: true})
  banResone: string;
  
  @BelongsToMany(() => Role, ()=> UserRoles)
  roles: Role[];
}