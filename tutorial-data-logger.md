# Tutorial para data logger

## Configuramos la captura de datos inicial

En la sección de **variables** seleccionamos **crear una variable** y le asignamos de nombre **capturar_datos**

En el bloque de inicio, agregamos lo siguiente:
1. Sacamos un bloque **Fijar a** de la **sección "Variables"** y fijamos la variable de nombre **capturar_datos** y con un valor de **falso** (en la pista esta en verdadero, cambia a falso)
2. Añadimos el **bloque "configurar columnas"** de la **sección "Registro de datos"** (data logger)
3. Agregamos 2 columnas más dando click en el **+** del bloque y añadimos los siguientes nombres:
Temperatura
Sonido
Luz

**NOTA:** Para agregar más datos al bloque de datalogger se hace click en el **+** (debes agregar 2 campos más, para que quede como se ve en el ejemplo)

```blocks
let capturar_datos = true
basic.showIcon(IconNames.Heart)
datalogger.setColumnTitles(
    "Temperatura",
    "Sonido",
    "Luz"
    )
```
## Construye el ciclo que se ejecutará cada cierto valor de tiempo (ejemplo: cada 5 minutos = 300000 ms)

Ahora nos toca construir un ciclo que se ejecuta cada cierto periodo de tiempo. Para esto haremos lo siguiente:
1. Crea un *bloque* de **cada x ms** de la *sección* de **BUCLE**.
2. Adentro agrega *bloque* de **si** *(condición)* de la *sección* de **LÓGICA** (en donde se evalúa el valor de la *variable* **capturar_datos**)
3. Agrega la **variable** que definimos 
4. Dentro del **si** agrega un **bloque** de **datos de registro** que se encuentra en la *sección* **Registrador de datos** (Data Logger). 

**NOTA:** Inicialmente solo viene con un valor, pero se pueden agregar más con el **+**, y es necesario extraer el valor del sensor en la sección de **Entrada.** En el ejemplo ya se puso la temperatura y el valor en ºC. Repite el proceso con el Sonido y la Luz.

```blocks
loops.everyInterval(60000, function () {
    if (true) {
        datalogger.log(
        datalogger.createCV("Temperatura", input.temperature()),
        datalogger.createCV("", 0),
        datalogger.createCV("", 0)
        )
        basic.clearScreen()
    }
})
```


## All blocks

datalogger.onLogFull(function () {
    capturar_datos = false
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.A, function () {
    capturar_datos = true
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Skull)
    datalogger.deleteLog()
    datalogger.setColumnTitles(
    "",
    "",
    ""
    )
})
input.onButtonPressed(Button.B, function () {
    capturar_datos = false
    basic.showIcon(IconNames.No)
})
let capturar_datos = false
capturar_datos = false
basic.showIcon(IconNames.Heart)
datalogger.setColumnTitles(
"Temperatura",
"Sonido",
"Luz"
)
loops.everyInterval(60000, function () {
    if (true) {
        datalogger.log(
        datalogger.createCV("Temperatura", input.temperature()),
        datalogger.createCV("", 0),
        datalogger.createCV("", 0)
        )
        basic.clearScreen()
    }
})
