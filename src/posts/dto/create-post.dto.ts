import { IsNumber, IsString } from "class-validator";

export class CreatePostDto {
  @IsString({ message: 'Должно быть строкой' })
  readonly title: string;

  @IsString({ message: 'Должно быть строкой' })
  readonly content: string;

  readonly userId: number;
}