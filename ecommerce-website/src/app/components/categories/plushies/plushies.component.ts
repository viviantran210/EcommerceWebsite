import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../product/product.component';

@Component({
  selector: 'app-plushies',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './plushies.component.html',
})
export class PlushiesComponent {
  productList: any[] = [];
  categoryName: string = 'Plushies';

  constructor() {};

  ngOnInit(){
    //make API call to get products list
    this.productList = [
      {
        productName: "Ichiban Kuji Pokemon Peaceful Place Pokepeace Piplup",
        productId: 1,
        productCategory: "Plushie",
        productImgUrl: "https://i.ebayimg.com/images/g/yVMAAOSwJ9xmBIGk/s-l1600.webp",
        productDesc: "This charming Japanese-exclusive plush features Piplup in a serene, peaceful design, perfect for Pokémon fans and collectors.",
        price: 95.00
      },
      {
        productName: "Pokemon Center Lucario Poké Plush - 47 ¼ In.",
        productId: 2,
        productCategory: "Plushie",
        productImgUrl: "https://www.pokemoncenter.com/images/DAMRoot/High/10000/P8133_701-94581_07.jpg",
        productDesc: "This jumbo Lucario plush is the same height listed in the Pokédex, and from its pointy ears to its cute little paw pads, this plush is big on both attention to detail and personality.",
        price: 10.99
      },
      {
        productName: "Pokemon Center 2019 Plush Toy Transform Ditto Mimikyu",
        productId: 3,
        productCategory: "Plushie",
        productImgUrl: "https://i.ebayimg.com/images/g/ZUcAAOSwtSZkbDev/s-l1600.webp",
        productDesc: "Mimikyu is looking for friends, and this plush version fits neatly on any shelf, desk, or couch.",
        price: 10.99
      }
    ]
  }
}
