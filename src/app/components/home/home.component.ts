import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';
import { ProductServiceService } from '../../services/product.service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  products: Product[] = [];
  currentPage: number = 1;
  itemsPerPage:number = 60;
  page: number[] = [];
  totalPage: number = 0;
  visiblePage: number[] = [];

  constructor(
    private productService: ProductServiceService
  ){}

  ngOnInit(): void {
    this.getProduct(this.currentPage, this.itemsPerPage);
  }


  getProduct(page: number, limit: number){
    this.productService.getAllProduct(page, limit).subscribe({
      next: (response: any) => {
        this.products = response.list //get list of product
        this.totalPage = response.totalPages //get total page
        


      },complete:() => {


      },error:(error: any) => {
        alert("mistake from " + error)
      }
    })
  }

}
