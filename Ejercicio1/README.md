# Ejercicio 1

El fragmento de código de nuestro fichero `test.js` nos devuelve un output no 
deseado. Queremos imprimir un valor incremental a cada segundo pero lo que 
nos devuelve el código es el mismo valor en cada iteración. 

1. Sin necesidad de ejecutar el código, ¿sabrías decirnos qué valor imprimiría
 por consola el script? ¿Cuál es el motivo?

 Imprimiría un 5 repetido 5 veces.
 Porque el hilo principal de ejecución, el del bucle for, concluye antes de que se ejecute el primer callback de setTimeout, por lo tanto i, que tiene el ámbito global dentro de la función contenedora, ya contiene el valor 5 en memoria. Esto ocurre porque setTimeout es una función asíncrono. Además, no hace falta decir que la resolución de cada setTimeout no se ejecuta cada segundo, se ejecuta 1 segundo después de ser añadido a la cola de subprocesos. Por poner un ejemplo: Si la diferencia entre la primera y segunda iteración del buble es de 0.0000001 segundos, la diferencia en tiempo de la resolución del primer y segundo setTimeout es de 0.0000001 segundos, no de 1 segundo.
 
2. Sabiendo que el output que buscamos es el que encuentras bajo estas líneas… 
¿Cómo solucionarías el fragmento de código para que el output sea el deseado?

*Crearía una **promesa** donde el *resolve* del SetTimeout sea el mismo que el de la promesa, así cuando pasen los milisegundos y el SetTimeout invoque a su *resolve* se activará y resolverá el de la promesa. Luego definiría la función que contiene el bucle for como una función asíncrona, añadiendo **async** en al definiciónde la función, y por último añadiría **await** para manejar cuando la promesa se ha resulto. De esta forma, conseguiriamos que en el tiempo entre cada iteración del bucle durara un segundo, ya que esperaría a que la promesa finalizará, y así el valor de i se incrementaría cada segundo.*

```
    > 0
    > 1
    > 2
    > 3
    > 4
```