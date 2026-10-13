datalogger.onLogFull(function () {
    capturar_datos = false
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.A, function () {
    capturar_datos = true
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Skull)
    datalogger.deleteLog()
    datalogger.setColumnTitles(
    "Temperatura",
    "Luz",
    "Sonido",
    "Conductividad"
    )
})
input.onButtonPressed(Button.B, function () {
    capturar_datos = false
    basic.showIcon(IconNames.No)
})
let capturar_datos = false
capturar_datos = false
basic.showIcon(IconNames.No)
datalogger.setColumnTitles(
"Temperatura",
"Luz",
"Sonido",
"Conductividad"
)
loops.everyInterval(6000, function () {
    if (capturar_datos) {
        basic.showIcon(IconNames.Heart)
        datalogger.log(
        datalogger.createCV("Temperatura", input.temperature()),
        datalogger.createCV("Luz", input.lightLevel()),
        datalogger.createCV("Sonido", input.soundLevel()),
        datalogger.createCV("Conductividad", pins.analogReadPin(AnalogReadWritePin.P1))
        )
        basic.clearScreen()
    }
})
