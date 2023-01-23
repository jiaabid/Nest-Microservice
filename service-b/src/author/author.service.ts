import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorService {
  private authors: any[] = [
    {
      id: 1,
      name: "John"
    },
    {
      id: 2,
      name: "Ali"
    },
    {
      id: 3,
      name: "Mawia"
    }
  ];

  findAll() {
    return this.authors;
  }

  findOne(id: number) {
    return this.authors.find(item => item.id == id);
  }

}
