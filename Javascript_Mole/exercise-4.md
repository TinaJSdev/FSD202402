## Encuentra el tesoro
Vamos a hacer una especie de hundir la flota simplificado al máximo.

**prompt escucha lo que se escribe y ese dato se recoge para determinar la cantidad de div con las imagenes q cambian

**scss las img$$ del div$$ tienen flex!!!

luego__En base al siguiente html construye en el ``<tbody>`` filas y columnas en base a lo que introduzca el usuario 
mediante una ventana modal. Esto lo puedes hacer usando el metodo de javascript ``prompt()``.

luego__Usa ese metodo dos veces para obtener las columnas y las filas que tendrás que hacer para tu juego.

**loop que genere un numero aleatorio entre 0 y el numero metido en el prompt
**ese es el loop[i] donde esta el cambio de foto a tesoro, y donde se acaba el juego (return?)
**else if muestra calavera y almacena el contador++

Almacena dos numeros aleatorios en base al maximo de columnas y de filas. Esa coordenada será donde estará el tesoro.
El resto serán fallos si el usuario hace click.

Construye tantas filas y columnas dinamicamente como el usuario haya especificado e una imagen con la siguiente url 
por defecto:

```js
const imgXUrl = './public/exercise-4/x.jpg';
```

Cuando construyas el tablero el usuario podrá hacer click a las celdas de la tabla y deberás comprobar si el click 
concuerda con la coordenada previeamente almacenada. Si es así cambia el atributo ``.src`` de la imagen por la 
siguiente imagen y el juego habrá acabado:

```js
const imgChestUrl = './public/exercise-4/chest.jpg';
```

En caso contrario la imagen será de una calavera:

```js
const imgSkullUrl = './public/exercise-4/skull.jpg';
```

Como extrá sería genial hacer un contador con el span que te dejamos en el html que sume 1 por cada intento que el 
usuario haya realizado antes de encontrar el tesoro.

Y ya si haces un botón de reset para el juego...sería fabuloso :)
