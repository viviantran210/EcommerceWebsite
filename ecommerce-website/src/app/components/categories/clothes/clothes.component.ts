import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../product/product.component';

@Component({
  selector: 'app-clothes',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './clothes.component.html',
})
export class ClothesComponent implements OnInit {
  productList: any[] = [];
  categoryName: string = 'Clothes';

  constructor() {};
  ngOnInit(){
    //make API call to get products list
    this.productList = [
      {
        productName: "Rosesand - Unisex Short Sleeve Cat & Lettering Print Loose-Fit Tee",
        productId: 1,
        productCategory: "Clothes",
        productImgUrl: "https://d1flfk77wl2xk4.cloudfront.net/Assets/04/695/XXL_p0196969504.jpg",
        productDesc: "This loose-fit T-shirt features a charming cat print plus Japanese characters and English lettering. Choose between almond and white color.",
        price: 7.35
      },
      {
        productName: "GAI Women's Oversized Vintage Baseball Jacket",
        productId: 2,
        productCategory: "Clothes",
        productImgUrl: "https://m.media-amazon.com/images/I/61D1w0Nh87L._AC_SX569_.jpg",
        productDesc: "This jumbo Lucario plush is the same height listed in the Pokédex, and from its pointy ears to its cute little paw pads, this plush is big on both attention to detail and personality.",
        price: 27.00
      },
      {
        productName: "Dute - Contrast Trim Cardigan",
        productId: 3,
        productCategory: "Clothes",
        productImgUrl: "https://d1flfk77wl2xk4.cloudfront.net/Assets/74/804/XXL_p0134680474.jpg",
        productDesc: "Get your wardrobe winter-ready with this chunky knit cardi, which comes with contrast trim along the front and the hem for subtle varsity vibes.",
        price: 13.52
      }
    ]
  }
}
