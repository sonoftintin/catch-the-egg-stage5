input.onButtonPressed(Button.A, function () {
    led.unplot(basketX, 4)
    basketX += -1
    if (basketX < 0) {
        basketX = 0
    }
    led.plot(basketX, 4)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(score)
    basic.clearScreen()
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(basketX, 4)
    basketX += 1
    if (basketX > 4) {
        basketX = 4
    }
    led.plot(basketX, 4)
})
let basketX = 0
let score = 0
score = 0
basketX = 2
let eggX = randint(0, 4)
let eggY = 0
led.plot(eggX, eggY)
led.plot(basketX, 4)
basic.forever(function () {
    led.unplot(eggX, eggY)
    eggY = eggY + 1
    if (eggY > 4) {
        eggY = 0
        eggX = randint(0, 4)
        score += -1
    }
    led.plot(eggX, eggY)
    led.plot(basketX, 4)
    if (eggX == basketX && eggY == 4) {
        score += 2
    }
    basic.pause(1000)
})
