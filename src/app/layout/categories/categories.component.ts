import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories:any;

  constructor(private categoriesService: CategoriesService) { }

  getCategories(){
    this.categoriesService.CategoryData().subscribe(
      (res)=>{
        this.categories = res;
        console.log(this.categories);
      })
  }

  ngOnInit(): void {
    this.getCategories();
  }

}
