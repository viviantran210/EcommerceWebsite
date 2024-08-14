import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productList = [
    {
      productName: "Jujutsu Kaisen - Nobara Kugisaki 1/7 Scale Figure",
      productId: 1,
      productCategory: "Figures",
      productImgUrl: "https://imgs2.goodsmileus.com/image/cache/data/productimages/ScaleFigures/JUJUTSUKAISENFigure_NobaraKugisaki/01_231128102438542-1200x1200.jpg",
      productDesc: "1/7 scale figure of Nobara Kugisaki from the Origin of Blind Obedience arc of JUJUTSU KAISEN season 1",
      price: 165.99
    },
    {
      productName: "Jujutsu Kaisen Inumaki Toge Shibuya Scramble Figure",
      productId: 2,
      productCategory: "Figures",
      productImgUrl: "https://i5.walmartimages.com/asr/dadfd7a8-9bf1-4218-92cd-024b937b5906.1dba91acb5559d5ec5d30889b00c39fd.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      productDesc: "Jujutsu Kaisen Inumaki Toge Shibuya Scramble 1:7 Statue",
      price: 303.97
    },
    {
      productName: "Jujutsu Kaisen Dai 2 Ki - Gojou Satoru - Figurizm Alpha - Muryoukuusho (SEGA)",
      productId: 3,
      productCategory: "Figures",
      productImgUrl: "https://solarisjapan.com/cdn/shop/files/f86a7b34-e2a1-11ee-b7c4-0242ac120004_360x.jpg?v=1710489585",
      productDesc: "Gojo Satoru joins Sega’s Figurizm Alpha collection of figures in this Muryoukuusho Ver. Prize figure.",
      price: 52.32
    },
    {
      productName: "Jujutsu Kaisen - Fantasy Studio - Kento Nanami",
      productId: 4,
      productCategory: "Figures",
      productImgUrl: "https://www.kaioland.com/wp-content/uploads/2023/12/Jujutsu-Kaisen-Fantasy-Studio-Kento-Nanami-Resin-Statue-1-600x338.png",
      productDesc: "Gojo Satoru joins Sega’s Figurizm Alpha collection of figures in this Muryoukuusho Ver. Prize figure.",
      price: 220.00
    },
    {
        productName: "Ichiban Kuji Pokemon Peaceful Place Pokepeace Piplup",
        productId: 5,
        productCategory: "Plushies",
        productImgUrl: "https://i.ebayimg.com/images/g/yVMAAOSwJ9xmBIGk/s-l1600.webp",
        productDesc: "This charming Japanese-exclusive plush features Piplup in a serene, peaceful design, perfect for Pokémon fans and collectors.",
        price: 95.00
      },
      {
        productName: "Pokemon Center Lucario Poké Plush - 47 ¼ In.",
        productId: 6,
        productCategory: "Plushies",
        productImgUrl: "https://www.pokemoncenter.com/images/DAMRoot/High/10000/P8133_701-94581_07.jpg",
        productDesc: "This jumbo Lucario plush is the same height listed in the Pokédex, and from its pointy ears to its cute little paw pads, this plush is big on both attention to detail and personality.",
        price: 10.99
      },
      {
        productName: "Pokemon Center 2019 Plush Toy Transform Ditto Mimikyu",
        productId: 7,
        productCategory: "Plushies",
        productImgUrl: "https://i.ebayimg.com/images/g/ZUcAAOSwtSZkbDev/s-l1600.webp",
        productDesc: "Mimikyu is looking for friends, and this plush version fits neatly on any shelf, desk, or couch.",
        price: 10.99
      },
      {
        productName: "Rosesand - Unisex Short Sleeve Cat & Lettering Print Loose-Fit Tee",
        productId: 8,
        productCategory: "Clothes",
        productImgUrl: "https://d1flfk77wl2xk4.cloudfront.net/Assets/04/695/XXL_p0196969504.jpg",
        productDesc: "This loose-fit T-shirt features a charming cat print plus Japanese characters and English lettering. Choose between almond and white color.",
        price: 7.35
      },
      {
        productName: "GAI Women's Oversized Vintage Baseball Jacket",
        productId: 9,
        productCategory: "Clothes",
        productImgUrl: "https://m.media-amazon.com/images/I/61D1w0Nh87L._AC_SX569_.jpg",
        productDesc: "This jumbo Lucario plush is the same height listed in the Pokédex, and from its pointy ears to its cute little paw pads, this plush is big on both attention to detail and personality.",
        price: 27.00
      },
      {
        productName: "Dute - Contrast Trim Cardigan",
        productId: 10,
        productCategory: "Clothes",
        productImgUrl: "https://d1flfk77wl2xk4.cloudfront.net/Assets/74/804/XXL_p0134680474.jpg",
        productDesc: "Get your wardrobe winter-ready with this chunky knit cardi, which comes with contrast trim along the front and the hem for subtle varsity vibes.",
        price: 13.52
      }
  ];

  getProductById(id: number): Observable<any> {
    const product = this.productList.find(p => p.productId === id);
    return of(product);
  }

  getProductsByCategory(category: string): Observable<any[]> {
    const products = this.productList.filter(p => p.productCategory === category);
    return of(products);
  }
}
