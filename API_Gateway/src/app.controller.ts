import { Controller, Get, Param, Post, Put, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  //create book
  @Post('create/book')
  createBook(@Request() req) {
    return this.appService.createBook(req.body)
  }

  //retrieve all books
  @Get("/books")
  getBooks() {
    return this.appService.getBooks()
  }

  //retrieve specific book
  @Get("/books/:id")
  getBook(@Param('id') id: number) {
    return this.appService.getBook(id)
  }


}
