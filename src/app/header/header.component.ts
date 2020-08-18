import { Component, OnInit } from "@angular/core";
import { IProduct } from "../Model/iproduct";
import { ProductService } from "../product.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {

  shoppingCart: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.shoppingCart = [];
    this.shoppingCart = this.productService.getShoppingCart();
  }
}
