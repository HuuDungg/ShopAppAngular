import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../common/product';
import { ProductServiceService } from '../../services/product.service.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  private productId!: number;
  public product!: Product;
  constructor(private route: ActivatedRoute, private productService: ProductServiceService) {}

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.productId = params['id']
    });

    this.getProductDetail(this.productId);

  }

  getProductDetail(id: number){
    this.productService.findById(id).subscribe(
      {
        next: (response: any) => {
          this.product = response
        },
        complete: () => {},
        error: (error: any) => {
          alert("Error: " + error);
        }
      }
    )
  }
}
