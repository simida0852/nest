import { IsEmail, IsNotEmpty } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class AuthLoginDto {

    @ApiProperty({ description: '用户名称' })
    @IsNotEmpty()
    name: string;

    @ApiProperty({ description: '用户密码' })
    @IsNotEmpty()
    password: string;
}