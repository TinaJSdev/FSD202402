import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css'],
})
export class ComandaComponent {
  @Input() selected: Product[] = [];
}
