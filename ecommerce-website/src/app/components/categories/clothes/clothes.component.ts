import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../product/product.component';

@Component({
  selector: 'app-clothes',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './clothes.component.html',
})
export class ClothesComponent {
  productList: any[] = [];
  categoryName: string = 'Clothes';
}
