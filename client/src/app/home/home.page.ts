import { Component } from "@angular/core";
import { environement } from "src/models/environements";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  nom: string;
  description: string;
  constructor(private http: HttpClient) {
    this.loadArticles();
  }
  loadArticles(): void {
    let url = `${environement.api_url}/Articles`;
    console.log("url", url);
    this.http.get(url).subscribe(articles => console.log("articles", articles));
  }
  insertArticle(): void {
    let url = `${environement.api_url}/Articles`;
    this.http
      .post(url, { nom: this.nom, description: this.description })
      .subscribe(results => console.log("results", results));
  }
  updateArticle(): void {
    let id: string = "5d8cc5f138fb03144169fc77";
    let url = `${environement.api_url}/Articles/${id}`;
    this.http
      .patch(url, { nom: "Montre" })
      .subscribe(result => console.log("result", result));
  }
  removeArticle(): void {
    let id: string = "5d8c91860047a312da094985";
    let url = `${environement.api_url}/Articles/${id}`;
    this.http
      .delete(url)

      .subscribe(result => console.log("result", result));
  }
}
