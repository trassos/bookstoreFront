import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl: String = environment.baseUrl;
  
  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAllByCategory(id_cat: String): Observable<Book[]> {
    const url = this.baseUrl + 'books?category=' + id_cat;
    return this.http.get<Book[]>(url)
  }
  create(book: Book, id_cat: String): Observable<Book> {
    const url = this.baseUrl + 'books?category=' + book.id;
    return this.http.post<Book>(url, book);
  }

  mensagem(str: String): void {
    this.snack.open( ''+str, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }  
}
