import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";
import { User } from "src/users/users.model";

interface PostCreationAttrs {
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs>{
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'Обо всем', description: 'Заголовок поста' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string;

  @ApiProperty({ example: 'Много текста', description: 'Текст поста' })
  @Column({ type: DataType.STRING, allowNull: false })
  content: string;

  @ApiProperty({ example: '/static/picture1', description: 'Путь до картинки' })
  @Column({ type: DataType.STRING, allowNull: false })
  image: string;

  @ApiProperty({ example: 'User', description: 'Автор поста' })
  @BelongsTo(() => User)
  author: User;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;
}