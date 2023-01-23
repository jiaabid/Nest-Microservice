import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(@Inject('AUTHOR') private readonly authorClient: ClientProxy) { }
  private books: any[] = []

  //create a book
  create(createBookDto: CreateBookDto) {
    let snap = { ...createBookDto, createdAt: new Date() }
    this.books.push(snap)
    return {
      message: "Added successfully!",
      data: snap
    }
  }

  //get all books
  findAll() {
    return this.books;
  }

  //get specific book
  async findOne(id: number) {
    let book = this.books.find(item => item.id == id);
    console.log(book)
    let author = await this.authorClient.send("findOneAuthor", book.authorId).pipe().toPromise();
    return {
      message: "Book retrieved!",
      data: {
        ...book,
        author
      }
    }
  }
}
