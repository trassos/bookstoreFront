import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category-service/category-service';
import { Category } from '../category.model';


@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {

  category: Category = {
    id: '',
    name: '',
    description: ''
  }

  constructor(private service: CategoryService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.category.id = this.route.snapshot.paramMap.get('id')
    this.findById();
  }

  findById(): void {
    this.service.findById(this.category.id).subscribe((resposta) => {
      this.category.name = resposta.name;
      this.category.description = resposta.description;
    });
  }

  update(): void {
    this.service.update(this.category).subscribe((resposta) => {
      this.router.navigate(['categories']); 
      this.service.mensagem('Categoria atualizada com sucesso!');
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