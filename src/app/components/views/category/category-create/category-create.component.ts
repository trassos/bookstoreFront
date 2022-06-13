import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CategoryService } from '../category-service/category-service';
import { Category } from '../category.model';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  category: Category = {
    name: '',
    description: ''
  }

  constructor(private service: CategoryService, private router: Router) { }

  ngOnInit() {
  }

  create(): void {
    this.service.create(this.category).subscribe((resposta) => {
      this.router.navigate(['categories']); 
      this.service.mensagem('Categoria criada com sucesso!');
    }, err => {
      for(let i = 0; i< err.error.errors.length; i++ ) {
        this.service.mensagem(err.error.errors[i].message)
      }
    })
  }
  cancel(): void {
    this.router.navigate(['categories']); 
  }
}