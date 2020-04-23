namespace SpriteKind {
    export const Pizza = SpriteKind.create()
    export const Jablko = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Jablko, function (sprite, otherSprite) {
    info.changeScoreBy(5)
    mySprite3.setPosition(Math.randomRange(20, 140), Math.randomRange(20, 100))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Pizza, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mySprite2.setPosition(Math.randomRange(20, 140), Math.randomRange(20, 100))
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
scene.setBackgroundColor(7)
let mySprite = sprites.create(img`
. . . . 5 5 5 5 5 5 5 . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 f 5 5 5 5 5 f 5 5 5 . . 
5 5 5 f f f 5 5 5 f f f 5 5 5 . 
5 5 5 5 f 5 5 5 5 5 f 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 f 5 5 5 5 5 5 5 5 5 f f 5 5 
5 5 5 f f 5 5 5 5 5 5 5 f 5 5 5 
. 5 5 5 f f f f f f f f f 5 5 . 
. 5 5 5 5 5 5 f f 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . . 5 5 5 5 5 5 5 5 5 5 . . 
. . . . . 5 5 5 5 5 5 5 . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite2 = sprites.create(img`
. . . . . . b b b b . . . . . . 
. . . . . . b 4 4 4 b . . . . . 
. . . . . . b b 4 4 4 b . . . . 
. . . . . b 4 b b b 4 4 b . . . 
. . . . b d 5 5 5 4 b 4 4 b . . 
. . . . b 3 2 3 5 5 4 e 4 4 b . 
. . . b d 2 2 2 5 7 5 4 e 4 4 e 
. . . b 5 3 2 3 5 5 5 5 e e e e 
. . b d 7 5 5 5 3 2 3 5 5 e e e 
. . b 5 5 5 5 5 2 2 2 5 5 d e e 
. b 3 2 3 5 7 5 3 2 3 5 d d e 4 
. b 2 2 2 5 5 5 5 5 5 d d e 4 . 
b d 3 2 d 5 5 5 d d d 4 4 . . . 
b 5 5 5 5 d d 4 4 4 4 . . . . . 
4 d d d 4 4 4 . . . . . . . . . 
4 4 4 4 . . . . . . . . . . . . 
`, SpriteKind.Pizza)
mySprite3 = sprites.create(img`
. . . . . . . e c 7 . . . . . . 
. . . . e e e c 7 7 e e . . . . 
. . c e e e e c 7 e 2 2 e e . . 
. c e e e e e c 6 e e 2 2 2 e . 
. c e e e 2 e c c 2 4 5 4 2 e . 
c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
. e e e 2 2 2 2 2 2 2 2 2 4 e . 
. 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
. . 2 e e 2 2 2 2 2 4 4 2 e . . 
. . . 2 2 e e 4 4 4 2 e e . . . 
. . . . . 2 2 e e e e . . . . . 
`, SpriteKind.Jablko)
info.startCountdown(10)
