import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  selectedCategory= '';
  categories!: string[];
  joke!: string ;

  constructor(private http: HttpClient) { }
 
  ngOnInit() {
    this.getCategories();
  }
  getCategories() {
    this.http.get<string[]>('https://api.chucknorris.io/jokes/categories')
      .subscribe(categories => this.categories = categories);
  }

  getRandomJoke() {
    const apiUrl = this.selectedCategory ?
      `https://api.chucknorris.io/jokes/random?category=${this.selectedCategory}` :
      'https://api.chucknorris.io/jokes/random';

    this.http.get<{ value: string }>(apiUrl)
      .subscribe(response => this.joke = response.value);
  }
}
