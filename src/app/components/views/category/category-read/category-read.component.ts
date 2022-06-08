import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../category-service/category-service";
import { Category } from "../category.model";

@Component({
  selector: "app-category-read",
  templateUrl: "./category-read.component.html",
  styleUrls: ["./category-read.component.css"],
})
export class CategoryReadComponent implements OnInit {

  categories: Category[] = []

  displayedColumns: string[] = ["id", "name", "description", "actions"];

  constructor(private service: CategoryService) { }

  ngOnInit(): void {
    this.findAll();
    console.log("AOIII");
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      console.log(resposta);
      this.categories = resposta;
    });
  }
}
