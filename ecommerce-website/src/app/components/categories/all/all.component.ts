import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../product/product.component';

@Component({
  selector: 'app-all',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './all.component.html'
})
export class AllComponent {
  productList: any[] = [];
  categoryName: string = 'All';
}
