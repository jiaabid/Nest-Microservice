import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices/client';
import { Test } from './ping.dto';

@Injectable()
export class AppService {
  constructor(@Inject('COMMUNICATION') private readonly analyticsClient: ClientProxy,
    @Inject('BOOKS') private readonly bookClient: ClientProxy,
    @Inject('AUTHORS') private readonly authorClient: ClientProxy) { }
  getHello(): string {
    return 'Hello World!';
  }

  //create book
  createBook(body: any) {
    return this.bookClient.send('createBook', body)
  }

  //get all books
  getBooks() {
    return this.bookClient.send('findAllBooks', {})
  }


  //get specific book
  async getBook(id: number) {
    console.log(id)
    return this.bookClient.send("findOneBook", id).pipe().toPromise()
  }

  //get all authors
  getAuthors() {
    return this.authorClient.send('findAllAuthors', {})
  }

  //get specific author
  getAuthor(id) {
    return this.authorClient.send("findOneAuthor", id)
  }
  

}
