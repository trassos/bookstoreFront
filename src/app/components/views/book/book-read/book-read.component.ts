import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.css']
})
export class BookReadComponent implements OnInit {

  books: Book[] = [];

  id_cat: String = ''

  displayedColumns: string[] = [
    "id",
    "title",
    "author_name",
    "text",
    "actions",
  ];


  constructor(private service: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  this.id_cat = this.route.snapshot.paramMap.get('id_cat')
  this.findAll()
  }

  findAll(): void {
    this.service.findAllByCategory(this.id_cat).subscribe((resposta) => {
      this.books = resposta;
    })
  }
  goToBookCreate(): void {
    this.router.navigate(["categories/" + this.id_cat + "/books/create"])
  }

}
