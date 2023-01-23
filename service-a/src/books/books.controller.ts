import { Controller } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService
    ) {}

  @MessagePattern('createBook')
  create(@Payload() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @MessagePattern('findAllBooks')
  findAll() {
    return this.booksService.findAll();
  }

  @MessagePattern('findOneBook')
   findOne(@Payload() id: number) {
    return this.booksService.findOne(id);
  }

}
