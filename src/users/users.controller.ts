import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiForbiddenResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiResponse({ status: 400, description: 'conflito de email' })
  @ApiForbiddenResponse({ description: 'aceso negado' })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @ApiForbiddenResponse({ description: 'aceso negado' })
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiForbiddenResponse({ description: 'aceso negado' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @ApiForbiddenResponse({ description: 'aceso negado' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @ApiForbiddenResponse({ description: 'aceso negado' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
