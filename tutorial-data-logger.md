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
