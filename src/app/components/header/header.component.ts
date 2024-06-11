import { Component, OnInit } from '@angular/core';
import { Category } from '../../common/category';
import { CategoryServiceService } from '../../services/category.service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
   categoryList: Category[] = [];

  constructor(private categoryService: CategoryServiceService){}

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory(){
    this.categoryService.getAllCategory().subscribe({
      next: (response: any) => {
        this.categoryList = response
      },complete:() => {


      },error:(error: any) => {
        alert("mistake from " + error)
      } 
    })
  }


}
