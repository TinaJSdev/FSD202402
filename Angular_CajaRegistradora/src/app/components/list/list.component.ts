import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() title: string = '';
  @Input() data: Product[] = [];

  @Output() selectProduct: EventEmitter<Product> = new EventEmitter();

  onClick(product: Product) {
    this.selectProduct.emit(product);
  }
}
