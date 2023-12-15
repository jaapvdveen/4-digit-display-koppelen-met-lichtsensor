let lichtsensor = pins.analogReadPin(AnalogPin.P0)
basic.forever(function () {
    lichtsensor = pins.analogReadPin(AnalogPin.P0)
    serial.writeValue("x", lichtsensor)
    basic.pause(50)
})
