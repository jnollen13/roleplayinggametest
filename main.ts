namespace SpriteKind {
    export const talkity = SpriteKind.create()
    export const Jodim = SpriteKind.create()
    export const villager1 = SpriteKind.create()
    export const villager2 = SpriteKind.create()
    export const vender0 = SpriteKind.create()
    export const vender1 = SpriteKind.create()
}
namespace StatusBarKind {
    export const money = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level8`)
    tiles.placeOnTile(playersprite, tiles.getTileLocation(7, 20))
    myEnemy = sprites.create(assets.image`snake`, SpriteKind.Enemy)
    animation.runImageAnimation(
    myEnemy,
    assets.animation`seaL`,
    200,
    true
    )
    myEnemy.follow(playersprite, 75)
    statusbar2 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar2.attachToSprite(myEnemy)
    statusbar2.max = 13
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.vender0, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        game.showLongText("here have a banana. ", DialogLayout.Bottom)
        bananas += 1
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (start == 1) {
        pause(100)
        scene.setBackgroundImage(assets.image`bg0`)
        pause(78)
        start = 2
        scene.setBackgroundImage(assets.image`Jodim Studios`)
        sprites.destroy(textSprite)
        textSprite2.y += -6
        textSprite2.setScale(0.1, ScaleAnchor.Middle)
        textSprite2.setText("Jodim Studios")
        for (let index = 0; index < 225; index++) {
            pause(1)
            textSprite2.changeScale(0.01, ScaleAnchor.Middle)
        }
        textSprite2.setScale(2, ScaleAnchor.Middle)
        pause(5000)
        for (let index = 0; index < 234; index++) {
            pause(1)
            textSprite2.changeScale(-0.01, ScaleAnchor.Middle)
        }
        pause(3)
        scene.setBackgroundImage(assets.image`bg1`)
        pause(1000)
        tiles.setCurrentTilemap(tilemap`prison`)
        playersprite.setImage(assets.image`plaas`)
        tiles.placeOnRandomTile(playersprite, sprites.dungeon.floorLight5)
        scene.cameraFollowSprite(playersprite)
        controller.moveSprite(playersprite)
        start = 0
        statusbar = statusbars.create(28, 4, StatusBarKind.Health)
        statusbar.attachToSprite(playersprite)
        statusbar.setLabel("HP")
        statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar3 = statusbars.create(20, 4, StatusBarKind.money)
        statusbar3.attachToSprite(playersprite, 6, 10)
        statusbar3.setColor(5, 2, 0)
        statusbar3.value = randint(0, randint(0, randint(0, 2)))
        statusbar3.max = randint(100, 300)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (start == 0 && swap == 0) {
        animation.runImageAnimation(
        playersprite,
        assets.animation`plaaaL`,
        200,
        true
        )
    } else if (start == 0 && swap == 1) {
        animation.runImageAnimation(
        Jodimsprite,
        assets.animation`pjaaL`,
        200,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(9, 6), sprites.dungeon.floorLight2)
    tiles.setWallAt(tiles.getTileLocation(9, 6), false)
    tiles.setTileAt(tiles.getTileLocation(9, 5), sprites.dungeon.floorLight2)
    tiles.setWallAt(tiles.getTileLocation(9, 5), false)
    tiles.setTileAt(tiles.getTileLocation(8, 5), sprites.dungeon.floorLight2)
    tiles.setWallAt(tiles.getTileLocation(8, 5), false)
    tiles.setTileAt(tiles.getTileLocation(8, 4), sprites.dungeon.floorLight2)
    tiles.setWallAt(tiles.getTileLocation(8, 4), false)
    tiles.setTileAt(tiles.getTileLocation(7, 4), sprites.dungeon.floorLight2)
    tiles.setWallAt(tiles.getTileLocation(7, 4), false)
    tiles.setWallAt(tiles.getTileLocation(7, 3), false)
    tiles.setTileAt(tiles.getTileLocation(7, 3), sprites.dungeon.floorLight2)
    tiles.setWallAt(tiles.getTileLocation(6, 3), false)
    tiles.setTileAt(tiles.getTileLocation(6, 3), sprites.dungeon.floorLight2)
    if (open == 0) {
        game.showLongText("come on in!", DialogLayout.Bottom)
        open = 1
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (start == 0 && swap == 0) {
        animation.stopAnimation(animation.AnimationTypes.ImageAnimation, playersprite)
        playersprite.setImage(assets.image`asset0`)
    } else if (start == 0 && swap == 1) {
        animation.stopAnimation(animation.AnimationTypes.ImageAnimation, playersprite)
        animation.stopAnimation(animation.AnimationTypes.ImageAnimation, Jodimsprite)
        Jodimsprite.setImage(assets.image`PJ`)
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (swap == 0) {
        animation.stopAnimation(animation.AnimationTypes.ImageAnimation, playersprite)
        playersprite.setImage(assets.image`plaas`)
    } else if (swap == 1) {
        animation.stopAnimation(animation.AnimationTypes.ImageAnimation, playersprite)
        animation.stopAnimation(animation.AnimationTypes.ImageAnimation, Jodimsprite)
        Jodimsprite.setImage(assets.image`Jodim`)
    }
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(myEnemy, effects.spray, 500)
    pause(500)
    mySprite2.setFlag(SpriteFlag.Invisible, false)
    playersprite.setPosition(160, 120)
    mySprite2.setPosition(211, 120)
    game.showLongText("well that guy is dead.", DialogLayout.Bottom)
    game.showLongText("lets keep going.", DialogLayout.Bottom)
    mySprite2.setFlag(SpriteFlag.Invisible, true)
    tiles.setCurrentTilemap(tilemap`level10`)
    tiles.placeOnTile(playersprite, tiles.getTileLocation(6, 15))
    statusbar3.value += randint(1, 10)
    game.showLongText("it's night", DialogLayout.Bottom)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.setGameOverEffect(false, effects.dissolve)
    game.setGameOverMessage(false, "you failed...")
    game.setGameOverPlayable(false, music.melodyPlayable(music.powerDown), true)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Jodim, function (sprite, otherSprite) {
    if (controller.A.isPressed() && swap == 0) {
        swap = 1
        controller.moveSprite(playersprite, 0, 0)
        playersprite.setKind(SpriteKind.Jodim)
        controller.moveSprite(Jodimsprite)
        Jodimsprite.setKind(SpriteKind.Player)
        statusbar.attachToSprite(Jodimsprite)
        scene.cameraFollowSprite(Jodimsprite)
        pause(500)
    } else if (controller.A.isPressed() && swap == 1) {
        swap = 0
        controller.moveSprite(playersprite)
        playersprite.setKind(SpriteKind.Player)
        controller.moveSprite(Jodimsprite, 0, 0)
        Jodimsprite.setKind(SpriteKind.Jodim)
        statusbar.attachToSprite(playersprite)
        scene.cameraFollowSprite(playersprite)
        pause(500)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (start == 0 && swap == 0) {
        animation.runImageAnimation(
        playersprite,
        assets.animation`plaaaaR`,
        200,
        true
        )
    } else if (start == 0 && swap == 1) {
        animation.runImageAnimation(
        Jodimsprite,
        assets.animation`pJaaR`,
        200,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    pause(100)
    animation.runImageAnimation(
    myEnemy,
    assets.animation`seaaL`,
    200,
    false
    )
    statusbar.value += -1
    animation.runImageAnimation(
    playersprite,
    assets.animation`seaL`,
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.villager2, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        game.showLongText("watch out for the knights.", DialogLayout.Bottom)
        pause(100)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`village`)
    tiles.placeOnTile(playersprite, tiles.getTileLocation(1, 32))
    Jodimsprite = sprites.create(assets.image`Jodim`, SpriteKind.Jodim)
    tiles.placeOnTile(Jodimsprite, tiles.getTileLocation(31, 1))
    mySprite = sprites.create(assets.image`asset1`, SpriteKind.villager1)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(31, 24))
    mySprite.setScale(0.75, ScaleAnchor.Middle)
    mySprite3 = sprites.create(assets.image`asset2`, SpriteKind.villager1)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(13, randint(23, 24)))
    mySprite3.setScale(0.75, ScaleAnchor.Middle)
    mySprite4 = sprites.create(assets.image`asset3`, SpriteKind.villager1)
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(17, randint(23, 24)))
    mySprite4.setScale(0.75, ScaleAnchor.Middle)
    mySprite2.setFlag(SpriteFlag.Invisible, false)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(27, randint(23, 24)))
    mySprite2.setScale(0.75, ScaleAnchor.Middle)
    mySprite5 = sprites.create(assets.image`asset4`, SpriteKind.villager2)
    tiles.placeOnTile(mySprite5, tiles.getTileLocation(6, randint(23, 24)))
    mySprite5.setScale(0.75, ScaleAnchor.Middle)
    mySprite6 = sprites.create(assets.image`monkey0`, SpriteKind.vender0)
    tiles.placeOnTile(mySprite6, tiles.getTileLocation(13, 31))
    mySprite7 = sprites.create(assets.image`saas`, SpriteKind.villager2)
    scene.setBackgroundImage(assets.image`bg3`)
    animation.runImageAnimation(
    mySprite7,
    assets.animation`batflapL0`,
    200,
    true
    )
    tiles.placeOnTile(mySprite7, tiles.getTileLocation(2, 2))
    mySprite8 = sprites.create(assets.image`duck`, SpriteKind.vender1)
    tiles.placeOnTile(mySprite8, tiles.getTileLocation(21, 31))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.villager1, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        game.showLongText("Hi!", DialogLayout.Bottom)
        pause(100)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight4, function (sprite, location) {
    mySprite2 = sprites.create(assets.image`talkity`, SpriteKind.talkity)
    tiles.setCurrentTilemap(tilemap`level4`)
    game.setDialogCursor(assets.image`tree`)
    scene.setBackgroundImage(assets.image`bg2`)
    game.setDialogFrame(assets.image`df`)
    playersprite.setPosition(27, 75)
    game.showLongText("you made it out!", DialogLayout.Bottom)
    game.showLongText("we need to ", DialogLayout.Bottom)
    game.showLongText("make it to a forest.", DialogLayout.Bottom)
    game.showLongText("lets go!", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`level6`)
    mySprite2.setFlag(SpriteFlag.Invisible, true)
    tiles.placeOnTile(playersprite, tiles.getTileLocation(5, 15))
    playersprite.setScale(0.75, ScaleAnchor.Middle)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        statusbar2.value += randint(-1, -3)
    }
})
let mySprite8: Sprite = null
let mySprite7: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
let mySprite2: Sprite = null
let open = 0
let Jodimsprite: Sprite = null
let statusbar3: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let statusbar2: StatusBarSprite = null
let myEnemy: Sprite = null
let textSprite2: TextSprite = null
let textSprite: TextSprite = null
let playersprite: Sprite = null
let start = 0
let swap = 0
swap = 0
start = 1
let bananas = 0
scene.setBackgroundImage(assets.image`bg`)
playersprite = sprites.create(assets.image`p`, SpriteKind.Player)
textSprite = textsprite.create("RPG")
textSprite.setScale(2, ScaleAnchor.Middle)
playersprite.setPosition(80, 60)
scene.cameraFollowSprite(textSprite)
textSprite2 = textsprite.create("press A to begin.")
textSprite2.setPosition(93, 80)
textSprite.setOutline(1, 2)
