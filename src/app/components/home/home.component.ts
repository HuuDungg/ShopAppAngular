import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';
import { ProductServiceService } from '../../services/product.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 60;
  totalPage: number = 0;
  categoryId:number = 1;

  constructor(private productService: ProductServiceService, private router: Router) {}

  ngOnInit(): void {
    this.getProduct(this.currentPage, this.itemsPerPage);
    
  }

  getProduct(page: number, limit: number) {
    this.productService.getAllProduct(page, limit).subscribe({
      next: (response: any) => {
        this.products = response.list;
        this.totalPage = response.totalPages;
      },
      complete: () => {},
      error: (error: any) => {
        alert("Error: " + error);
      }
    });
  }

  updatePageSize(pageSize: string) {
    this.itemsPerPage = Number(pageSize); // Sử dụng Number để chuyển từ chuỗi sang số
    this.getProduct(this.currentPage, this.itemsPerPage);
}



showDetail(id: number) {
  this.router.navigate(['/detail'], { queryParams: { id: id } });
}



}
