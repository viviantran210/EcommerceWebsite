import { RouterModule } from '@angular/router';
import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../product/product.component';

@Component({
  selector: 'app-figures',
  standalone: true,
  imports: [CommonModule, ProductComponent, RouterModule],
  templateUrl: './figures.component.html',
})
export class FiguresComponent {
  categoryName = 'Figures';
  productList: any[] = [];
}
