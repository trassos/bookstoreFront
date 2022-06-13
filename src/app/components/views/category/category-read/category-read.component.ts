import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CategoryService } from "../category-service/category-service";
import { Category } from "../category.model";
import { MatDialog } from "@angular/material/dialog";
@Component({
  selector: "app-category-read",
  templateUrl: "./category-read.component.html",
  styleUrls: ["./category-read.component.css"],
})
export class CategoryReadComponent implements OnInit {
  
  categories: Category[] = [];

  displayedColumns: string[] = [
    "id",
    "name",
    "description",
    "books",
    "actions",
  ];

  constructor(
    private service: CategoryService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      this.categories = resposta;
    });
  }
  goToCategoryCreate() {
    this.router.navigate(["categories/create"]);
  }
  
  goToCategoryDelete() {
    this.router.navigate(["categories/delete"]);
  }
}