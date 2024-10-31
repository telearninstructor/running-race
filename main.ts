namespace SpriteKind {
    export const Scroller = SpriteKind.create()
    export const Player2 = SpriteKind.create()
    export const HOST = SpriteKind.create()
}
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    runner.setImage(img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . . f e e e e e f f f . 
        . f e e e e e e e f f f 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        . f e 4 4 f f 4 e 4 f f 
        . . f d d d d 4 d 4 f . 
        . . f b b d e e f f f . 
        . . f e 4 e d d 4 f . . 
        . . f 1 1 e d d e f . . 
        . f f 6 6 f e e f f f . 
        . f f f f f f f f f f . 
        . . f f f . . . f f . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖7`, function (sprite, location) {
    HalfLap = true
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖6`, function (sprite, location) {
    if (HalfLap == true) {
        Lap += 1
        HalfLap = false
    } else if (Lap == 4) {
        game.splash("用了" + Time + "秒")
        info.setScore(100 - Time)
        game.over(true, effects.smiles)
    }
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    runner.setImage(img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e f f f . 
        f f f e e e e e e f f f 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        e f e 4 d b b d d e f . 
        e 4 d d 4 4 4 4 e f f f 
        . e d d e 1 1 1 b f 4 e 
        . . e e f 6 6 6 6 f . . 
        . . . f f f f f f f . . 
        . . . . . . . f f f . . 
        `)
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    runner.setImage(img`
        . . . . . . . . . . . . 
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f f e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f f f e e e e e f e f 
        f f f f f e e e e f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        e 4 e f b b b b b f 4 . 
        4 d d e d d d d d f 4 . 
        . 4 e e f f f f f f e . 
        . . . . . . . f f f . . 
        `)
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    runner.setImage(img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e e f . . 
        f f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f . 
        . f 4 d 4 d d d d f . . 
        . f f f e e d b b f . . 
        . . f 4 d d e 4 e f . . 
        . . f e d d e 1 1 f . . 
        . f f f e e f 6 6 f f . 
        . f f f f f f f f f f . 
        . . f f . . . f f f . . 
        `)
})
let Time = 0
let runner: Sprite = null
let Lap = 0
let HalfLap = false
HalfLap = false
Lap = 0
tiles.setCurrentTilemap(tilemap`層級3`)
game.splash("800公尺比賽")
runner = sprites.create(img`
    . . . f f f f f . . . . 
    . . f e e e e e f f . . 
    . f e e e e e e e f f . 
    f e e e e e e e f f f f 
    f e e 4 e e e f f f f f 
    f e e 4 4 e e e f f f f 
    f f e 4 4 4 4 4 f f f f 
    f f e 4 4 f f 4 e 4 f f 
    . f f d d d d 4 d 4 f . 
    . . f b b d d 4 f f f . 
    . . f e 4 4 4 e e f . . 
    . . f 1 1 1 e d d 4 . . 
    . . f 1 1 1 e d d e . . 
    . . f 6 6 6 f e e f . . 
    . . . f f f f f f . . . 
    . . . . . f f f . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(runner, tiles.getTileLocation(4, 0))
let teacher = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(teacher, tiles.getTileLocation(6, 0))
teacher.say("3", 1000)
pause(1000)
teacher.say("2", 1000)
pause(1000)
teacher.say("1", 1000)
pause(1000)
teacher.say("GOOOO", 1000)
pause(1000)
teacher.setFlag(SpriteFlag.Invisible, true)
let BeginTime = game.runtime()
controller.moveSprite(runner)
game.onUpdateInterval(200, function () {
    Time = (game.runtime() - BeginTime) / 1000
    info.setScore(Time)
})
