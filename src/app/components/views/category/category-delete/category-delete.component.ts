import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoryService } from "../category-service/category-service";
import { Category } from "../category.model";

@Component({
  selector: "app-category-delete",
  templateUrl: "./category-delete.component.html",
  styleUrls: ["./category-delete.component.css"],
})
export class CategoryDeleteComponent implements OnInit {
  category: Category = {
    id: "",
    name: "",
    description: "",
  };
  constructor(
    private service: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.category.id = this.route.snapshot.paramMap.get("id");
    this.findById();
  }

  findById(): void {
    this.service.findById(this.category.id).subscribe((resposta) => {
      this.category.name = resposta.name;
      this.category.description = resposta.description;
    });
  }

  delete() {
    this.service.delete(this.category.id).subscribe(
      (resposta) => {
        this.router.navigate(["categories"]);
        this.service.mensagem("Categoria deletada com sucesso!");
      },
      (err) => {
        this.service.mensagem(err.error.error);
      }
    );
  }
  cancel() {
    this.router.navigate([this.category]);
  }
}
