# Ciclo de renderizado - Ejercicios
Tenemos el componente `<next-weather>` que tiene las propiedades:
- temperature
- unit
- city
- debug
El componente muestra la temperatura en la ciudad:

># Madrid, 3º C 

Además el componente tiene un botón para actualizar los datos de la temperatura.

1. Modificar el componente para que tenga valores por defecto:
```
temperature = 10
unit = 'C'
city = 'Madrid'
debug = true
```

2. Modificar el método `updateTemperatureData` para que asigne un valor de temperatura random, entre -10 y 40.

```
👉 Math.floor(Math.random() * (+max - min)) + min
```

3. Poner hooks a todos los métodos del ciclo de renderizado. Comprobar cómo se van ejecutando al actualizar la temperatura.
En devtools, seleccionar el componente y en la consola ejecutar:
```
$0.temperature = 10.5, $0.city = 'Valencia', debug='false'
```
* ¿Cuántas veces se ha ejecutado el render?

4. En devtools, seleccionar el componente y en la consola ejecutar:
```
$0.debug='true'
```

* ¿Se ha ejecutado el render? ¿Es correcto? Corregir esta situación (si es necesario).

5. Asegurar de que la propiedad `unit` sólo acepta los valores `'F'` o `'C'`. Si se intenta actualizar con un valor inválido, se mantiene el valor actual.

6. Después del último cambio. En devtools, seleccionar el componente y en la consola ejecutar:
```
$0.unit = 'F'
$0.unit = 'C'
```
* ¿Se ha actualizado la UI del componente con los cambios de `unit`? ¿Por qué? Corregirlo.

7. Cambiar la propiedad `city` por otra propiedad `location` que es de tipo Object. Hacer que location tenga como valor por defecto: 
```
location = { city: 'Colmenar Viejo', community: 'Madrid' }
```
* Modificar el método render para que coja la ciudad de la nueva propiedad location.

8. En devtools, seleccionar el componente y en la consola ejecutar:
```
$0.location.city = 'Alcobendas'
```
* ¿Se ha actualiza el componente? ¿Por qué? Corregirlo.

9. Comprobar que en ninguno de los métodos del ciclo de renderizado, al cambiar una propiedad el ciclo no vuelve a ejecutarse.

10. Agregar las propiedades:
```
realtime (Boolean) 
source (String) 
```
Si `realtime===true` y `source!=='sensor'`, no se debe re-renderizar.
Probar en las devtools:
```
$0.source = 'manual', $0.realtime = true, $0.temperature = 13
```

11. LitElement tiene una promesa, `updateComplete`, que se resuelve cuando se ha terminado de renderizar el componente. Viendo las trazas es posible deducir en qué método se crea esta promesa. Modificar el código para determinar en qué momento se resuelve la promesa.

12. El en el `index.html`, setear location con estos valores:
```
location = { city: 'Sevilla', community: 'Andalucía' }
```
