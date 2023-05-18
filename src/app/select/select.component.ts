import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from './api.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  categories = [''];
  joke = '';
  jokeForm!: FormGroup;

  constructor(private ApiService: ApiService) {}

  ngOnInit(): void {
    this.getCategories();
    this.jokeForm = new FormGroup({
      'selectedCategory': new FormControl(''),
    });
  }

  getCategories(): void {
    this.ApiService.getCategories().subscribe((categories: string[]) => {
      this.categories = categories;
    });
  }

  getRandomJoke(): void {
    const category = this.jokeForm.get('selectedCategory')?.value;
    this.ApiService.getRandomJoke(category).subscribe(
      (response: { value: string }) => (this.joke = response.value)
    );
  }
}
