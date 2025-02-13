namespace SpriteKind {
    export const talkity = SpriteKind.create()
    export const Jodim = SpriteKind.create()
    export const villager1 = SpriteKind.create()
    export const villager2 = SpriteKind.create()
    export const vender0 = SpriteKind.create()
    export const vender1 = SpriteKind.create()
    export const prisoner = SpriteKind.create()
    export const stage = SpriteKind.create()
    export const statue0 = SpriteKind.create()
    export const hungrymonkey = SpriteKind.create()
    export const villager3 = SpriteKind.create()
    export const villager4 = SpriteKind.create()
    export const inanimate = SpriteKind.create()
    export const mailbox = SpriteKind.create()
    export const solider = SpriteKind.create()
    export const Vpigeon = SpriteKind.create()
}
namespace StatusBarKind {
    export const money = StatusBarKind.create()
    export const soldierhealth = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.villager4, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        game.showLongText("thank you!", DialogLayout.Bottom)
        pause(200)
    }
})
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
        if (bannagain < 6) {
            bannagain += 1
            game.showLongText("here, have a banana. ", DialogLayout.Bottom)
            bananas += 1
            pause(200)
        } else if (bannagain >= 6 && gold > 1) {
            gold += -2
            bannagain += randint(1, 2)
            game.showLongText("Thank you.", DialogLayout.Bottom)
            bananas += randint(2, 4)
            pause(200)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Vpigeon, function (sprite, otherSprite) {
    if (swap == 0 && controller.A.isPressed()) {
        game.showLongText("Hi!", DialogLayout.Bottom)
        pause(200)
    } else if (swap == 1 && controller.B.isPressed()) {
        controller.moveSprite(playersprite, 0, 0)
        pause(500)
        scene.cameraShake(4, 500)
        playersprite.follow(mySprite20)
        mySprite20.setImage(assets.image`wounded pigeon`)
        controller.moveSprite(playersprite, 100, 100)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    if (freed == 0) {
        sprites.destroyAllSpritesOfKind(SpriteKind.villager1)
        villagein = 0
        sprites.destroyAllSpritesOfKind(SpriteKind.villager2)
        sprites.destroyAllSpritesOfKind(SpriteKind.vender0)
        sprites.destroyAllSpritesOfKind(SpriteKind.vender1)
        tiles.setCurrentTilemap(tilemap`level3`)
        tiles.placeOnTile(playersprite, tiles.getTileLocation(2, 7))
    } else if (freed == 1 && freed2 == 1) {
        sprites.destroyAllSpritesOfKind(SpriteKind.villager1)
        sprites.destroyAllSpritesOfKind(SpriteKind.villager2)
        sprites.destroyAllSpritesOfKind(SpriteKind.vender0)
        sprites.destroyAllSpritesOfKind(SpriteKind.vender1)
        sprites.destroyAllSpritesOfKind(SpriteKind.stage)
        sprites.destroyAllSpritesOfKind(SpriteKind.inanimate)
        sprites.destroyAllSpritesOfKind(SpriteKind.hungrymonkey)
        sprites.destroyAllSpritesOfKind(SpriteKind.villager3)
        sprites.destroyAllSpritesOfKind(SpriteKind.villager4)
        sprites.destroyAllSpritesOfKind(SpriteKind.mailbox)
        tiles.setCurrentTilemap(tilemap`maze4`)
        tiles.placeOnTile(playersprite, tiles.getTileLocation(2, 9))
    }
    mySprite2.setFlag(SpriteFlag.Invisible, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.mailbox, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        swap = 9
        villagein = 0
        playersprite.setImage(assets.image`pigionmail`)
        tiles.setCurrentTilemap(tilemap`mail`)
        playersprite.setScale(0.2141256, ScaleAnchor.Middle)
        tiles.placeOnRandomTile(playersprite, assets.tile`myTile18`)
        sprites.destroyAllSpritesOfKind(SpriteKind.villager1)
        sprites.destroyAllSpritesOfKind(SpriteKind.villager2)
        sprites.destroyAllSpritesOfKind(SpriteKind.vender0)
        sprites.destroyAllSpritesOfKind(SpriteKind.vender1)
        sprites.destroyAllSpritesOfKind(SpriteKind.stage)
        sprites.destroyAllSpritesOfKind(SpriteKind.inanimate)
        sprites.destroyAllSpritesOfKind(SpriteKind.hungrymonkey)
        sprites.destroyAllSpritesOfKind(SpriteKind.villager3)
        sprites.destroyAllSpritesOfKind(SpriteKind.mailbox)
        sprites.destroyAllSpritesOfKind(SpriteKind.villager4)
        game.splash("Find the globe")
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.villager3, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        game.showLongText("I heard this place is safe.", DialogLayout.Bottom)
        pause(200)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnTile(playersprite, tiles.getTileLocation(0, 0))
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
        gold = randint(0, randint(0, randint(0, 2)))
        pause(1000)
        tiles.setCurrentTilemap(tilemap`prison`)
        playersprite.setImage(assets.image`Max   L`)
        tiles.placeOnRandomTile(playersprite, sprites.dungeon.floorLight5)
        scene.cameraFollowSprite(playersprite)
        controller.moveSprite(playersprite)
        start = 0
        statusbar = statusbars.create(28, 4, StatusBarKind.Health)
        statusbar.attachToSprite(playersprite, -23, 0)
        statusbar.setLabel("HP")
        statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar3 = statusbars.create(20, 4, StatusBarKind.money)
        statusbar3.attachToSprite(playersprite, -28, 10)
        statusbar3.setColor(5, 2, 0)
        statusbar3.value = gold
        statusbar3.max = randint(100, 300)
        game.setGameOverMessage(false, "you Died...")
    }
})
sprites.onOverlap(SpriteKind.solider, SpriteKind.Player, function (sprite, otherSprite) {
    game.setGameOverMessage(false, "killed by a dark soldier...")
    statusbar.value += -2
    pause(100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile33`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`tele`)
    tiles.placeOnRandomTile(playersprite, assets.tile`myTile9`)
    swap = 1
    playersprite.setScale(0.75, ScaleAnchor.Middle)
    maildev = 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTileAt(tiles.getTileLocation(11, 8), sprites.dungeon.purpleSwitchDown)
        for (let index = 0; index < 3333; index++) {
            tiles.setTileAt(tiles.getTileLocation(randint(3, 7), randint(3, 7)), sprites.castle.tileGrass3)
            tiles.setWallAt(tiles.getTileLocation(randint(3, 7), randint(3, 7)), false)
        }
        pause(200)
        game.showLongText("FREEDOM!!!!", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level1`)
        tiles.placeOnTile(playersprite, tiles.getTileLocation(0, 0))
        freed2 = 1
        mySprite16.setKind(SpriteKind.villager4)
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
        playersprite,
        assets.animation`pjaaL`,
        200,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    villagein = 1
    tiles.setCurrentTilemap(tilemap`village`)
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
    assets.animation`Østergaard`,
    200,
    true
    )
    tiles.placeOnTile(mySprite7, tiles.getTileLocation(2, 2))
    mySprite8 = sprites.create(assets.image`duck`, SpriteKind.vender1)
    tiles.placeOnTile(mySprite8, tiles.getTileLocation(21, 31))
    tiles.placeOnTile(playersprite, tiles.getTileLocation(1, 32))
    if (freed == 1) {
        tiles.placeOnTile(playersprite, tiles.getTileLocation(31, 31))
        mySprite10 = sprites.create(assets.image`stage`, SpriteKind.stage)
        tiles.placeOnTile(mySprite10, tiles.getTileLocation(16, 11))
        mySprite12 = sprites.create(assets.image`hungrymonkey`, SpriteKind.hungrymonkey)
        tiles.placeOnTile(mySprite12, tiles.getTileLocation(1, 21))
        mySprite13 = sprites.create(assets.image`duck0`, SpriteKind.villager2)
        tiles.placeOnTile(mySprite13, tiles.getTileLocation(10, 3))
        mySprite14 = sprites.create(assets.image`hermit`, SpriteKind.villager3)
        tiles.placeOnTile(mySprite14, tiles.getTileLocation(1, 16))
        mySprite15 = sprites.create(assets.image`mrf1`, SpriteKind.villager1)
        mySprite15.setScale(0.75, ScaleAnchor.Middle)
        tiles.placeOnTile(mySprite15, tiles.getTileLocation(1, 11))
        mySprite11 = sprites.create(assets.image`statue0`, SpriteKind.statue0)
        tiles.placeOnTile(mySprite11, tiles.getTileLocation(randint(19, 22), randint(17, 18)))
        tiles.setWallAt(mySprite11.tilemapLocation(), true)
        if (freed2 == 1) {
            mySprite11.setKind(SpriteKind.inanimate)
            mySprite11.setImage(assets.image`large tree-oak`)
            mySprite17 = sprites.create(assets.image`seaweed`, SpriteKind.inanimate)
            tiles.placeOnTile(mySprite17, tiles.getTileLocation(20, 31))
            mySprite18 = sprites.create(assets.image`mailbox`, SpriteKind.mailbox)
            tiles.placeOnTile(mySprite18, tiles.getTileLocation(18, 3))
            mySprite19 = sprites.create(assets.image`b`, SpriteKind.villager2)
            tiles.placeOnTile(mySprite19, tiles.getTileLocation(26, 12))
            mySprite19.setScale(0.75, ScaleAnchor.Middle)
            mySprite9 = sprites.create(assets.image`viggo`, SpriteKind.villager4)
            tiles.placeOnTile(mySprite9, tiles.getTileLocation(1, 26))
            mySprite9.setVelocity(randint(70, 78), 0)
            mySprite9.setBounceOnWall(true)
            if (maildev == 1) {
                mySprite18.setImage(assets.image`stump`)
                mySprite18.setKind(SpriteKind.inanimate)
                tiles.setWallAt(mySprite18.tilemapLocation(), true)
                mySprite20 = sprites.create(assets.image`sidsel`, SpriteKind.Vpigeon)
                tiles.placeOnTile(mySprite20, tiles.getTileLocation(18, 5))
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    tiles.placeOnRandomTile(playersprite, sprites.dungeon.floorDark2)
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
        playersprite.setImage(assets.image`Max   R`)
    } else if (start == 0 && swap == 1) {
        animation.stopAnimation(animation.AnimationTypes.ImageAnimation, playersprite)
        playersprite.setImage(assets.image`Jodim                          L`)
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (swap == 0) {
        animation.stopAnimation(animation.AnimationTypes.ImageAnimation, playersprite)
        playersprite.setImage(assets.image`Max   L`)
    } else if (swap == 1) {
        animation.stopAnimation(animation.AnimationTypes.ImageAnimation, playersprite)
        playersprite.setImage(assets.image`Jodim`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`watertile0`, function (sprite, location) {
    if (swap == 1) {
        playersprite.sayText("wet!", 500, false)
    }
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(myEnemy, effects.spray, 100)
    pause(500)
    mySprite2.setFlag(SpriteFlag.Invisible, false)
    playersprite.setPosition(160, 120)
    mySprite2.setPosition(211, 120)
    game.showLongText("well that guy is dead.", DialogLayout.Bottom)
    game.showLongText("lets keep going.", DialogLayout.Bottom)
    mySprite2.setFlag(SpriteFlag.Invisible, true)
    tiles.setCurrentTilemap(tilemap`level10`)
    tiles.placeOnTile(playersprite, tiles.getTileLocation(6, 15))
    game.showLongText("it's night", DialogLayout.Bottom)
    gold += randint(2, 10)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.setGameOverEffect(false, effects.dissolve)
    game.setGameOverPlayable(false, music.melodyPlayable(music.powerDown), true)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level13`)
    tiles.placeOnTile(playersprite, tiles.getTileLocation(0, 4))
    mySprite16 = sprites.create(assets.image`3rd`, SpriteKind.prisoner)
    tiles.placeOnTile(mySprite16, tiles.getTileLocation(5, 5))
    mySprite16.setScale(0.75, ScaleAnchor.Middle)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Jodim, function (sprite, otherSprite) {
    if (controller.A.isPressed() && swap == 0) {
        playersprite.setImage(assets.image`Jodim`)
        Jodimsprite.setImage(assets.image`Max   L`)
        swap = 1
        Jodimsprite.setScale(0.75, ScaleAnchor.Middle)
        controller.moveSprite(playersprite, randint(100, 101), randint(99, 100))
        playersprite.setScale(1, ScaleAnchor.Middle)
        pause(500)
    } else if (controller.A.isPressed() && swap == 1) {
        swap = 0
        playersprite.setImage(assets.image`Max   L`)
        Jodimsprite.setImage(assets.image`Jodim`)
        Jodimsprite.setScale(1, ScaleAnchor.Middle)
        controller.moveSprite(playersprite, randint(100, 123), randint(100, 101))
        playersprite.setScale(0.75, ScaleAnchor.Middle)
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
        playersprite,
        assets.animation`pJaaR`,
        200,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`flamingpine`, function (sprite, location) {
    if (swap == 0) {
        game.setGameOverMessage(false, "you burned to death...")
        playersprite.setImage(assets.image`flaming max`)
        statusbar.value += -3
        pause(10)
        statusbar.value += -2
        pause(20)
        statusbar.value += -1
        pause(30)
        statusbar.value += -1
        pause(40)
        statusbar.value += -1
    } else if (swap == 1) {
        game.setGameOverMessage(false, "you burned to death")
        playersprite.setImage(assets.image`flaming`)
        statusbar.value += -2
        pause(11)
        statusbar.value += -1
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.setGameOverMessage(false, "killed by a snake...")
    pause(100)
    animation.runImageAnimation(
    myEnemy,
    assets.animation`seaaL`,
    200,
    false
    )
    statusbar.value += -1
    animation.runImageAnimation(
    myEnemy,
    assets.animation`seaL`,
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.villager2, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        game.showLongText("watch out for the knights.", DialogLayout.Bottom)
        pause(200)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.vender1, function (sprite, otherSprite) {
    if (freed == 0 || freed2 == 1) {
        if (controller.A.isPressed() && 2 < gold) {
            game.showLongText("here you go!", DialogLayout.Bottom)
            tiles.setTileAt(tiles.getTileLocation(31, 31), assets.tile`myTile6`)
            gold += -3
            pause(200)
        } else if (controller.A.isPressed()) {
            game.showLongText("go away you don't have enough gold!", DialogLayout.Bottom)
            pause(200)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    Jodimsprite = sprites.create(assets.image`Jodim`, SpriteKind.Jodim)
    tiles.placeOnTile(Jodimsprite, tiles.getTileLocation(31, 1))
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnRandomTile(playersprite, assets.tile`myTile9`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`the castle`)
    mySprite9 = sprites.create(assets.image`viggo`, SpriteKind.prisoner)
    tiles.placeOnRandomTile(mySprite9, sprites.dungeon.floorDark5)
    mySprite9.setVelocity(75, 50)
    mySprite9.setBounceOnWall(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.villager1, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        game.showLongText("Hi!", DialogLayout.Bottom)
        pause(200)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.solider, function (sprite, otherSprite) {
    if (controller.B.isPressed() && swap == 1) {
        statusbar4.value += randint(1, 3)
        pause(200)
        statusbar.value += -1
    } else if (swap == 0 && controller.B.isPressed()) {
        statusbar4.value += -1
    } else if (controller.A.isPressed()) {
        game.showLongText("DIE!!", DialogLayout.Bottom)
        pause(200)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.statue0, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        sprites.destroyAllSpritesOfKind(SpriteKind.villager1)
        sprites.destroyAllSpritesOfKind(SpriteKind.villager2)
        sprites.destroyAllSpritesOfKind(SpriteKind.vender0)
        sprites.destroyAllSpritesOfKind(SpriteKind.vender1)
        sprites.destroyAllSpritesOfKind(SpriteKind.stage)
        sprites.destroyAllSpritesOfKind(SpriteKind.statue0)
        sprites.destroyAllSpritesOfKind(SpriteKind.hungrymonkey)
        sprites.destroyAllSpritesOfKind(SpriteKind.villager3)
        mySprite2.setFlag(SpriteFlag.Invisible, true)
        tiles.setCurrentTilemap(tilemap`maze3`)
        tiles.placeOnTile(playersprite, tiles.getTileLocation(2, 2))
        villagein = 0
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.hungrymonkey, function (sprite, otherSprite) {
    if (sideq1 == 0) {
        if (controller.A.isPressed() && 5 > bananas) {
            game.showLongText("I'm hungry...", DialogLayout.Bottom)
            game.splash("Side quest", "bananas for johnny")
            pause(200)
        } else if (controller.A.isPressed() && 5 <= bananas) {
            game.showLongText("I'm hungry...", DialogLayout.Bottom)
            game.showLongText("Do I smell bananas?", DialogLayout.Bottom)
            game.showLongText("Thank you!", DialogLayout.Bottom)
            bananas += randint(-2, -5)
            animation.runImageAnimation(
            mySprite12,
            assets.animation`monkey eat`,
            200,
            false
            )
            pause(1000)
            mySprite12.setImage(assets.image`happymonkey`)
            sideq1 = 1
            pause(100)
        }
    } else if (sideq1 == 1 && controller.A.isPressed()) {
        mySprite12.sayText("Thank you!", 5000, true)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight4, function (sprite, location) {
    mySprite2 = sprites.create(assets.image`thorn`, SpriteKind.talkity)
    tiles.setCurrentTilemap(tilemap`level4`)
    game.setDialogCursor(assets.image`tree`)
    scene.setBackgroundImage(assets.image`bg2`)
    game.setDialogFrame(assets.image`df`)
    playersprite.setPosition(27, 75)
    game.showLongText("you made it out!", DialogLayout.Bottom)
    game.showLongText("we need to ", DialogLayout.Bottom)
    game.showLongText("make it to a forest.", DialogLayout.Bottom)
    game.showLongText("lets go!", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`maze1`)
    mySprite2.setFlag(SpriteFlag.Invisible, true)
    tiles.placeOnTile(playersprite, tiles.getTileLocation(5, 15))
    playersprite.setScale(0.75, ScaleAnchor.Middle)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile35`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`camp1`)
    tiles.placeOnTile(playersprite, tiles.getTileLocation(0, 2))
    mySprite13 = sprites.create(assets.image`couch-luxury`, SpriteKind.inanimate)
    tiles.placeOnTile(mySprite13, tiles.getTileLocation(23, 23))
    tiles.setWallAt(tiles.getTileLocation(23, 23), true)
    mySprite21 = sprites.create(assets.image`darksoldierL`, SpriteKind.solider)
    statusbar4 = statusbars.create(20, 4, StatusBarKind.soldierhealth)
    statusbar4.attachToSprite(mySprite21)
    statusbar4.max = 34
    tiles.placeOnRandomTile(mySprite21, sprites.dungeon.floorDark2)
    mySprite21.follow(playersprite, 75)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    if (controller.A.isPressed() && freed == 0) {
        tiles.setTileAt(tiles.getTileLocation(28, 29), sprites.dungeon.purpleSwitchDown)
        for (let index = 0; index < 3333; index++) {
            tiles.setWallAt(tiles.getTileLocation(randint(18, 21), randint(16, 19)), false)
            tiles.setTileAt(tiles.getTileLocation(randint(18, 21), randint(16, 19)), sprites.dungeon.floorDark2)
        }
        pause(100)
        freed = 1
        game.showLongText("FREEDOM!!!!!!!!", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level1`)
        tiles.placeOnTile(playersprite, tiles.getTileLocation(0, 0))
        mySprite9.setKind(SpriteKind.villager2)
        tiles.placeOnTile(mySprite9, tiles.getTileLocation(7, 26))
        mySprite9.setVelocity(73, 0)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        statusbar2.value += randint(-1, -3)
        pause(57)
    }
})
let mySprite21: Sprite = null
let statusbar4: StatusBarSprite = null
let Jodimsprite: Sprite = null
let open = 0
let mySprite9: Sprite = null
let mySprite19: Sprite = null
let mySprite18: Sprite = null
let mySprite17: Sprite = null
let mySprite11: Sprite = null
let mySprite15: Sprite = null
let mySprite14: Sprite = null
let mySprite13: Sprite = null
let mySprite12: Sprite = null
let mySprite10: Sprite = null
let mySprite8: Sprite = null
let mySprite7: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
let mySprite16: Sprite = null
let maildev = 0
let statusbar3: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let mySprite2: Sprite = null
let villagein = 0
let freed2 = 0
let mySprite20: Sprite = null
let gold = 0
let bannagain = 0
let statusbar2: StatusBarSprite = null
let myEnemy: Sprite = null
let textSprite2: TextSprite = null
let freed = 0
let textSprite: TextSprite = null
let playersprite: Sprite = null
let sideq1 = 0
let bananas = 0
let start = 0
let swap = 0
swap = 0
start = 1
bananas = 0
sideq1 = 0
scene.setBackgroundImage(assets.image`bg`)
playersprite = sprites.create(assets.image`p`, SpriteKind.Player)
textSprite = textsprite.create("RPG")
textSprite.setScale(2, ScaleAnchor.Middle)
freed = 0
playersprite.setPosition(80, 60)
scene.cameraFollowSprite(textSprite)
textSprite2 = textsprite.create("press A to begin.")
textSprite2.setPosition(93, 80)
textSprite.setOutline(1, 2)
game.onUpdate(function () {
    if (start == 0) {
        statusbar3.value = gold
    }
})
game.onUpdate(function () {
    if (sideq1 == 1 && villagein == 1) {
        mySprite12.setImage(assets.image`happymonkey`)
    }
})
