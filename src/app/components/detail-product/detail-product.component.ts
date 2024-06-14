import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../common/product';
import { ProductServiceService } from '../../services/product.service.service';
import { CartServiceService } from '../../services/cart.service.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  private productId!: number;
  public product!: Product;
  public quantity: number = 1;
  constructor(private route: ActivatedRoute,
     private productService: ProductServiceService,
     private cartService: CartServiceService
    ) {}

  ngOnInit(): void {
    this.getIdByParam();
    this.getProductDetail(this.productId);

  }

  getIdByParam(){
    this.route.queryParams.subscribe(params => {
      this.productId = params['id']
    });
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

  //processing cart
  increaseCart(){
    this.quantity++;
  }

  decreaseCart(){
    if(this.quantity == 1){
      return;
    }else{
      this.quantity--;
    }
  }

  addToCart(){
    if(this.product){
      this.cartService.addToCart(this.productId, this.quantity)
    }else{
      console.log("can not add cart to local stored")
    }
  }
}
