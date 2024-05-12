import { Component } from '@angular/core';
import { Product } from './interfaces/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  arrSelected: Product[] = [];
  arrComida: Product[] = [
    {
      name: 'Manzana',
      price: 1.5,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Apple_Computer_Logo_rainbow.svg/879px-Apple_Computer_Logo_rainbow.svg.png',
      amount: 10,
      icon: '🍎',
    },
    {
      name: 'Plátano',
      price: 2,
      image:
        'https://s1.abcstatics.com/media/cultura/2020/09/21/platano-kNv--1248x698@abc.jpg',
      amount: 15,
      icon: '🍌',
    },
    {
      name: 'Naranja',
      price: 1.8,
      image:
        'https://i.pinimg.com/originals/4f/07/4d/4f074d499ad63e07eaba1bb2e725eaa2.png',
      amount: 12,
      icon: '🍊',
    },
    {
      name: 'Pera',
      price: 1.7,
      image:
        'https://i.pinimg.com/originals/fb/a9/89/fba989f6a96817b0cef457d9bc915c99.jpg',
      amount: 8,
      icon: '🍐',
    },
    {
      name: 'Uva',
      price: 3,
      image:
        'https://coarval.com/wp-content/uploads/2022/12/12-uvas-de-la-suerte.jpg',
      amount: 20,
      icon: '🍇',
    },
    {
      name: 'Sandía',
      price: 5,
      image: 'https://i1.sndcdn.com/artworks-000057190737-avuj2y-t500x500.jpg',
      amount: 5,
      icon: '🍉',
    },
    {
      name: 'Piña',
      price: 4,
      image:
        'https://static.wikia.nocookie.net/spongyconstructionproject/images/e/ef/SpongeBob_House.PNG/revision/latest?cb=20230419215158',
      amount: 7,
      icon: '🍍',
    },
    {
      name: 'Mango',
      price: 3.5,
      image:
        'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2021/06/tienda-mango-2382219.jpg?tf=3840x',
      amount: 10,
      icon: '🥭',
    },
    {
      name: 'Fresa',
      price: 2.5,
      image:
        'https://images.uncyclomedia.co/inciclopedia/es/2/2f/Fresa_Rosa_de_Guadalupe.png',
      amount: 18,
      icon: '🍓',
    },
    {
      name: 'Cereza',
      price: 4.5,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR3g8Xz66bi4h8wH_FVMVlJGUp_5f3tIPAgEcp-izEGg&s',
      amount: 9,
      icon: '🍒',
    },
  ];
  arrBebidas: Product[] = [
    {
      name: 'Agua mineral',
      price: 1,
      image:
        'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201909/26/00113343700152____5__600x600.jpg',
      amount: 20,
      icon: '💧',
    },
    {
      name: 'Refresco de cola',
      price: 2.5,
      image:
        'https://www.despensamexicana.es/large/Jarritos-Mexican-Cola.-i546.jpg',
      amount: 15,
      icon: '🥤',
    },
    {
      name: 'Jugo de naranja',
      price: 3,
      image:
        'https://espadafor.es/wp-content/uploads/2022/07/Miovino-mimosa.jpg',
      amount: 10,
      icon: '🍊',
    },
    {
      name: 'Café',
      price: 2,
      image: 'https://e.rpp-noticias.io/xlarge/2018/02/07/103410_562014.jpg',
      amount: 12,
      icon: '☕️',
    },
    {
      name: 'Té verde',
      price: 2.2,
      image:
        'https://media.admagazine.com/photos/618a6151be961b98e9f0991c/master/w_1600%2Cc_limit/85139.jpg',
      amount: 8,
      icon: '🍵',
    },
    {
      name: 'Cerveza',
      price: 4,
      image: 'https://www.dia.es/product_images/192/192_ISO_0_ES.jpg',
      amount: 20,
      icon: '🍺',
    },
    {
      name: 'Vino tinto',
      price: 8,
      image:
        'https://static.carrefour.es/hd_1600x_/img_pim_food/267381_00_2_Bodega.jpg',
      amount: 7,
      icon: '🍷',
    },
    {
      name: 'Agua de coco',
      price: 3.5,
      image:
        'https://www.cocinista.es/download/bancorecursos/ingredientes/ingrediente-agua-coco.jpg',
      amount: 10,
      icon: '🥥',
    },
    {
      name: 'Licuado de fresa',
      price: 4.5,
      image: 'https://cdn7.kiwilimon.com/recetaimagen/15268/7457.jpg',
      amount: 18,
      icon: '🍓',
    },
    {
      name: 'Batido de chocolate',
      price: 5,
      image:
        'https://s2.abcstatics.com/media/gurme/2023/08/18/s/batido-helado-chocolate-kGHI--1200x630@abc.jpg',
      amount: 9,
      icon: '🍫',
    },
  ];
  arrPostres: Product[] = [
    {
      name: 'Pastel',
      price: 4,
      image:
        'https://estaticos-cdn.prensaiberica.es/clip/66bb0aa9-3b09-403c-88c8-cf14776841c1_alta-libre-aspect-ratio_default_0.jpg',
      amount: 10,
      icon: '🍫',
    },
    {
      name: 'Helado',
      price: 3.5,
      image:
        'https://m.media-amazon.com/images/I/815plPA5TtL._AC_UF1000,1000_QL80_.jpg',
      amount: 15,
      icon: '🍦',
    },
    {
      name: 'Tarta de fresa',
      price: 5,
      image:
        'https://i.ytimg.com/vi/nRzKKqRPvtU/hq2.jpg?sqp=-oaymwEYCKwCEOgCSFryq4qpAwoIARUAAIhC0AEB&rs=AOn4CLCIswUawa07q9S270mlpzB7dFJ7fA',
      amount: 12,
      icon: '🍰',
    },
    {
      name: 'Cupcake de limón',
      price: 2,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Mu8Y5dYa7brIkEL9qSd3QUF7JuAGoHA5nfderWsbnw&s',
      amount: 8,
      icon: '🍋',
    },
    {
      name: 'Galletas',
      price: 2.5,
      image: 'https://i.scdn.co/image/ab6761610000e5eba3a7cba23d68a4e73c3b8155',
      amount: 20,
      icon: '🍪',
    },
    {
      name: 'Tarta',
      price: 6,
      image:
        'https://gbprodstorage.blob.core.windows.net/files/styles/recipe_main_image_670x420/windowsazurestorage/recipes/1540181170cbd982b5fba96e64c1431383e5d9aaba.jpg',
      amount: 5,
      icon: '🎂',
    },
    {
      name: 'Brownie',
      price: 3.5,
      image:
        'https://cannactiva.com/wp-content/uploads/2023/01/brownie-marihuana-hierba-scaled-2-scaled-1.jpg',
      amount: 7,
      icon: '🥜',
    },
    {
      name: 'Flan',
      price: 4,
      image:
        'https://www.eladerezo.com/wp-content/uploads/2015/04/receta-de-crema-catalana-1200x673.jpg',
      amount: 10,
      icon: '🍮',
    },
    {
      name: 'Chocolate',
      price: 4.5,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFe9rIPPxYfury4NiMrMJSCojVXfwwoM9tNwO5HRGXbA&s',
      amount: 18,
      icon: '🍫',
    },
    {
      name: 'Natillas',
      price: 2,
      image: 'https://i.blogs.es/aa4ad3/natillas/450_1000.jpg',
      amount: 9,
      icon: '🍯',
    },
  ];

  onSelectProduct($event: Product) {
    this.arrSelected.push($event);
    console.log(this.arrSelected);
  }
}
