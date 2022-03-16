import * as bcrypt from 'bcryptjs';

import { Injectable, UnauthorizedException } from '@nestjs/common';

import { AuthLoginDto } from './dto/auth-login.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }
    async login(authLoginDto: AuthLoginDto) {
        const user = await this.validateUser(authLoginDto);

        const payload = {
            userId: user.id,
        };

        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async validateUser(authLoginDto: AuthLoginDto): Promise<User> {
        const { name, password } = authLoginDto;

        const user = await this.usersService.findByName(name);

        if (!(await user?.validatePassword(password))) {
            throw new UnauthorizedException();
        }

        return user;
    }
}
