import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports:[ClientsModule.register([
    {
      transport:Transport.TCP,
      name:"AUTHOR",
      options:{
        port:4001
      }
    }
  ])],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
