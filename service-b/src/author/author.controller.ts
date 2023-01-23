import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Controller()
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}


  @MessagePattern('findAllAuthor')
  findAll() {
    return this.authorService.findAll();
  }

  @MessagePattern('findOneAuthor')
  findOne(@Payload() id: number) {
    return this.authorService.findOne(id);
  }

}
