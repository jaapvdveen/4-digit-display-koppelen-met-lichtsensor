let lichtsensor = pins.analogReadPin(AnalogPin.P0)
let display = grove.createDisplay(DigitalPin.P2, DigitalPin.P16)
basic.forever(function () {
    lichtsensor = pins.analogReadPin(AnalogPin.P0)
    serial.writeValue("x", lichtsensor)
    display.show(lichtsensor)
    basic.pause(50)
})
