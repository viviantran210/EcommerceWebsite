import { Component } from '@angular/core';
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
}
