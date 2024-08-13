import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../product/product.component';

@Component({
  selector: 'app-figures',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './figures.component.html',
})
export class FiguresComponent implements OnInit {
  productList: any[] = [];
  categoryName: string = 'Figures';

  constructor() {};

  ngOnInit(){
    //make API call to get products list
    this.productList = [
      {
        productName: "Jujutsu Kaisen - Nobara Kugisaki 1/7 Scale Figure",
        productId: 1,
        productCategory: "Figure",
        productImgUrl: "https://imgs2.goodsmileus.com/image/cache/data/productimages/ScaleFigures/JUJUTSUKAISENFigure_NobaraKugisaki/01_231128102438542-1200x1200.jpg",
        productDesc: "1/7 scale figure of Nobara Kugisaki from the Origin of Blind Obedience arc of JUJUTSU KAISEN season 1",
        price: 165.99
      },
      {
        productName: "Jujutsu Kaisen Inumaki Toge Shibuya Scramble Figure",
        productId: 2,
        productCategory: "Figure",
        productImgUrl: "https://i5.walmartimages.com/asr/dadfd7a8-9bf1-4218-92cd-024b937b5906.1dba91acb5559d5ec5d30889b00c39fd.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        productDesc: "Jujutsu Kaisen Inumaki Toge Shibuya Scramble 1:7 Statue",
        price: 303.97
      },
      {
        productName: "Jujutsu Kaisen Dai 2 Ki - Gojou Satoru - Figurizm Alpha - Muryoukuusho (SEGA)",
        productId: 3,
        productCategory: "Figure",
        productImgUrl: "https://solarisjapan.com/cdn/shop/files/f86a7b34-e2a1-11ee-b7c4-0242ac120004_360x.jpg?v=1710489585",
        productDesc: "Gojo Satoru joins Sega’s Figurizm Alpha collection of figures in this Muryoukuusho Ver. Prize figure.",
        price: 52.32
      },
      {
        productName: "Jujutsu Kaisen - Fantasy Studio - Kento Nanami",
        productId: 4,
        productCategory: "Figure",
        productImgUrl: "https://www.kaioland.com/wp-content/uploads/2023/12/Jujutsu-Kaisen-Fantasy-Studio-Kento-Nanami-Resin-Statue-1-600x338.png",
        productDesc: "Gojo Satoru joins Sega’s Figurizm Alpha collection of figures in this Muryoukuusho Ver. Prize figure.",
        price: 220.00
      }
    ]
  }
}
