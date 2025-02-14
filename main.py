@namespace
class SpriteKind:
    talkity = SpriteKind.create()
    Jodim = SpriteKind.create()
    villager1 = SpriteKind.create()
    villager2 = SpriteKind.create()
    vender0 = SpriteKind.create()
    vender1 = SpriteKind.create()
    prisoner = SpriteKind.create()
    stage = SpriteKind.create()
    statue0 = SpriteKind.create()
    hungrymonkey = SpriteKind.create()
    villager3 = SpriteKind.create()
    villager4 = SpriteKind.create()
    inanimate = SpriteKind.create()
    mailbox = SpriteKind.create()
    solider = SpriteKind.create()
    Vpigeon = SpriteKind.create()
@namespace
class StatusBarKind:
    money = StatusBarKind.create()
    soldierhealth = StatusBarKind.create()

def on_on_overlap(sprite, otherSprite):
    if controller.A.is_pressed():
        game.show_long_text("thank you!", DialogLayout.BOTTOM)
        pause(200)
sprites.on_overlap(SpriteKind.player, SpriteKind.villager4, on_on_overlap)

def on_overlap_tile(sprite2, location):
    global myEnemy, statusbar2
    tiles.set_current_tilemap(tilemap("""
        level8
    """))
    tiles.place_on_tile(playersprite, tiles.get_tile_location(7, 20))
    myEnemy = sprites.create(assets.image("""
        snake
    """), SpriteKind.enemy)
    animation.run_image_animation(myEnemy, assets.animation("""
        seaL
    """), 200, True)
    myEnemy.follow(playersprite, 75)
    statusbar2 = statusbars.create(20, 4, StatusBarKind.enemy_health)
    statusbar2.attach_to_sprite(myEnemy)
    statusbar2.max = 13
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile1
    """),
    on_overlap_tile)

def on_on_overlap2(sprite3, otherSprite2):
    global bannagain, bananas, gold
    if controller.A.is_pressed():
        if bannagain < 6:
            bannagain += 1
            game.show_long_text("here, have a banana. ", DialogLayout.BOTTOM)
            bananas += 1
            pause(200)
        elif bannagain >= 6 and gold > 1:
            gold += -2
            bannagain += randint(1, 2)
            game.show_long_text("Thank you.", DialogLayout.BOTTOM)
            bananas += randint(2, 4)
            pause(200)
sprites.on_overlap(SpriteKind.player, SpriteKind.vender0, on_on_overlap2)

def on_on_overlap3(sprite4, otherSprite3):
    if swap == 0 and controller.A.is_pressed():
        game.show_long_text("Hi!", DialogLayout.BOTTOM)
        pause(200)
    elif swap == 1 and controller.B.is_pressed():
        controller.move_sprite(playersprite, 0, 0)
        pause(500)
        scene.camera_shake(4, 500)
        playersprite.follow(mySprite20)
        mySprite20.set_image(assets.image("""
            wounded pigeon
        """))
        controller.move_sprite(playersprite, 100, 100)
        tiles.place_on_tile(playersprite, tiles.get_tile_location(19, 8))
        effects.clear_particles(playersprite)
sprites.on_overlap(SpriteKind.player, SpriteKind.Vpigeon, on_on_overlap3)

def on_overlap_tile2(sprite5, location2):
    global villagein
    if freed == 0:
        sprites.destroy_all_sprites_of_kind(SpriteKind.villager1)
        villagein = 0
        sprites.destroy_all_sprites_of_kind(SpriteKind.villager2)
        sprites.destroy_all_sprites_of_kind(SpriteKind.vender0)
        sprites.destroy_all_sprites_of_kind(SpriteKind.vender1)
        tiles.set_current_tilemap(tilemap("""
            level3
        """))
        tiles.place_on_tile(playersprite, tiles.get_tile_location(2, 7))
    elif freed == 1 and freed2 == 1:
        sprites.destroy_all_sprites_of_kind(SpriteKind.villager1)
        sprites.destroy_all_sprites_of_kind(SpriteKind.villager2)
        sprites.destroy_all_sprites_of_kind(SpriteKind.vender0)
        sprites.destroy_all_sprites_of_kind(SpriteKind.vender1)
        sprites.destroy_all_sprites_of_kind(SpriteKind.stage)
        sprites.destroy_all_sprites_of_kind(SpriteKind.inanimate)
        sprites.destroy_all_sprites_of_kind(SpriteKind.hungrymonkey)
        sprites.destroy_all_sprites_of_kind(SpriteKind.villager3)
        sprites.destroy_all_sprites_of_kind(SpriteKind.villager4)
        sprites.destroy_all_sprites_of_kind(SpriteKind.mailbox)
        tiles.set_current_tilemap(tilemap("""
            maze4
        """))
        tiles.place_on_tile(playersprite, tiles.get_tile_location(2, 9))
    mySprite2.set_flag(SpriteFlag.INVISIBLE, True)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile6
    """),
    on_overlap_tile2)

def on_on_overlap4(sprite6, otherSprite4):
    global swap, villagein
    if controller.A.is_pressed():
        swap = 9
        villagein = 0
        playersprite.set_image(assets.image("""
            pigionmail
        """))
        tiles.set_current_tilemap(tilemap("""
            mail
        """))
        playersprite.set_scale(0.2141256, ScaleAnchor.MIDDLE)
        tiles.place_on_random_tile(playersprite, assets.tile("""
            myTile18
        """))
        sprites.destroy_all_sprites_of_kind(SpriteKind.villager1)
        sprites.destroy_all_sprites_of_kind(SpriteKind.villager2)
        sprites.destroy_all_sprites_of_kind(SpriteKind.vender0)
        sprites.destroy_all_sprites_of_kind(SpriteKind.vender1)
        sprites.destroy_all_sprites_of_kind(SpriteKind.stage)
        sprites.destroy_all_sprites_of_kind(SpriteKind.inanimate)
        sprites.destroy_all_sprites_of_kind(SpriteKind.hungrymonkey)
        sprites.destroy_all_sprites_of_kind(SpriteKind.villager3)
        sprites.destroy_all_sprites_of_kind(SpriteKind.mailbox)
        sprites.destroy_all_sprites_of_kind(SpriteKind.villager4)
        game.splash("Find the globe")
sprites.on_overlap(SpriteKind.player, SpriteKind.mailbox, on_on_overlap4)

def on_on_overlap5(sprite7, otherSprite5):
    if controller.A.is_pressed():
        game.show_long_text("I heard this place is safe.", DialogLayout.BOTTOM)
        pause(200)
sprites.on_overlap(SpriteKind.player, SpriteKind.villager3, on_on_overlap5)

def on_overlap_tile3(sprite8, location3):
    tiles.set_current_tilemap(tilemap("""
        level1
    """))
    tiles.place_on_tile(playersprite, tiles.get_tile_location(0, 0))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile15
    """),
    on_overlap_tile3)

def on_a_pressed():
    global start, gold, statusbar, statusbar3
    if start == 1:
        pause(100)
        scene.set_background_image(assets.image("""
            bg0
        """))
        pause(78)
        start = 2
        scene.set_background_image(assets.image("""
            Jodim Studios
        """))
        sprites.destroy(textSprite)
        textSprite2.y += -6
        textSprite2.set_scale(0.1, ScaleAnchor.MIDDLE)
        textSprite2.set_text("Jodim Studios")
        for index in range(225):
            pause(1)
            textSprite2.change_scale(0.01, ScaleAnchor.MIDDLE)
        textSprite2.set_scale(2, ScaleAnchor.MIDDLE)
        pause(5000)
        for index2 in range(234):
            pause(1)
            textSprite2.change_scale(-0.01, ScaleAnchor.MIDDLE)
        pause(3)
        scene.set_background_image(assets.image("""
            bg1
        """))
        gold = randint(0, randint(0, randint(0, 2)))
        pause(1000)
        tiles.set_current_tilemap(tilemap("""
            prison
        """))
        playersprite.set_image(assets.image("""
            Max   L
        """))
        tiles.place_on_random_tile(playersprite, sprites.dungeon.floor_light5)
        scene.camera_follow_sprite(playersprite)
        controller.move_sprite(playersprite)
        start = 0
        statusbar = statusbars.create(28, 4, StatusBarKind.health)
        statusbar.attach_to_sprite(playersprite, -23, 0)
        statusbar.set_label("HP")
        statusbar.set_status_bar_flag(StatusBarFlag.SMOOTH_TRANSITION, True)
        statusbar3 = statusbars.create(20, 4, StatusBarKind.money)
        statusbar3.attach_to_sprite(playersprite, -28, 10)
        statusbar3.set_color(5, 2, 0)
        statusbar3.value = gold
        statusbar3.max = randint(100, 300)
        game.set_game_over_message(False, "you Died...")
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap6(sprite9, otherSprite6):
    game.set_game_over_message(False, "killed by a dark soldier...")
    statusbar.value += -2
    pause(100)
sprites.on_overlap(SpriteKind.solider, SpriteKind.player, on_on_overlap6)

def on_overlap_tile4(sprite10, location4):
    global swap, maildev
    tiles.set_current_tilemap(tilemap("""
        tele
    """))
    tiles.place_on_random_tile(playersprite, assets.tile("""
        myTile9
    """))
    swap = 1
    playersprite.set_scale(0.75, ScaleAnchor.MIDDLE)
    maildev = 1
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile33
    """),
    on_overlap_tile4)

def on_overlap_tile5(sprite11, location5):
    global freed2
    if controller.A.is_pressed():
        tiles.set_tile_at(tiles.get_tile_location(11, 8),
            sprites.dungeon.purple_switch_down)
        for index3 in range(3333):
            tiles.set_tile_at(tiles.get_tile_location(randint(3, 7), randint(3, 7)),
                sprites.castle.tile_grass3)
            tiles.set_wall_at(tiles.get_tile_location(randint(3, 7), randint(3, 7)), False)
        pause(200)
        game.show_long_text("FREEDOM!!!!", DialogLayout.BOTTOM)
        tiles.set_current_tilemap(tilemap("""
            level1
        """))
        tiles.place_on_tile(playersprite, tiles.get_tile_location(0, 0))
        freed2 = 1
        mySprite16.set_kind(SpriteKind.villager4)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile25
    """),
    on_overlap_tile5)

def on_left_pressed():
    if start == 0 and swap == 0:
        animation.run_image_animation(playersprite,
            assets.animation("""
                plaaaL
            """),
            200,
            True)
    elif start == 0 and swap == 1:
        animation.run_image_animation(playersprite, assets.animation("""
            pjaaL
        """), 200, True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_overlap_tile6(sprite12, location6):
    global villagein, mySprite, mySprite3, mySprite4, mySprite5, mySprite6, mySprite7, mySprite8, mySprite10, mySprite12, mySprite13, mySprite14, mySprite15, mySprite11, mySprite17, mySprite18, mySprite19, mySprite9, mySprite20
    villagein = 1
    tiles.set_current_tilemap(tilemap("""
        village
    """))
    mySprite = sprites.create(assets.image("""
        asset1
    """), SpriteKind.villager1)
    tiles.place_on_tile(mySprite, tiles.get_tile_location(31, 24))
    mySprite.set_scale(0.75, ScaleAnchor.MIDDLE)
    mySprite3 = sprites.create(assets.image("""
        asset2
    """), SpriteKind.villager1)
    tiles.place_on_tile(mySprite3, tiles.get_tile_location(13, randint(23, 24)))
    mySprite3.set_scale(0.75, ScaleAnchor.MIDDLE)
    mySprite4 = sprites.create(assets.image("""
        asset3
    """), SpriteKind.villager1)
    tiles.place_on_tile(mySprite4, tiles.get_tile_location(17, randint(23, 24)))
    mySprite4.set_scale(0.75, ScaleAnchor.MIDDLE)
    mySprite2.set_flag(SpriteFlag.INVISIBLE, False)
    tiles.place_on_tile(mySprite2, tiles.get_tile_location(27, randint(23, 24)))
    mySprite2.set_scale(0.75, ScaleAnchor.MIDDLE)
    mySprite5 = sprites.create(assets.image("""
        asset4
    """), SpriteKind.villager2)
    tiles.place_on_tile(mySprite5, tiles.get_tile_location(6, randint(23, 24)))
    mySprite5.set_scale(0.75, ScaleAnchor.MIDDLE)
    mySprite6 = sprites.create(assets.image("""
        monkey0
    """), SpriteKind.vender0)
    tiles.place_on_tile(mySprite6, tiles.get_tile_location(13, 31))
    mySprite7 = sprites.create(assets.image("""
        saas
    """), SpriteKind.villager2)
    scene.set_background_image(assets.image("""
        bg3
    """))
    animation.run_image_animation(mySprite7,
        assets.animation("""
            Østergaard
        """),
        200,
        True)
    tiles.place_on_tile(mySprite7, tiles.get_tile_location(2, 2))
    mySprite8 = sprites.create(assets.image("""
        duck
    """), SpriteKind.vender1)
    tiles.place_on_tile(mySprite8, tiles.get_tile_location(21, 31))
    tiles.place_on_tile(playersprite, tiles.get_tile_location(1, 32))
    if freed == 1:
        tiles.place_on_tile(playersprite, tiles.get_tile_location(31, 31))
        mySprite10 = sprites.create(assets.image("""
            stage
        """), SpriteKind.stage)
        tiles.place_on_tile(mySprite10, tiles.get_tile_location(16, 11))
        mySprite12 = sprites.create(assets.image("""
                hungrymonkey
            """),
            SpriteKind.hungrymonkey)
        tiles.place_on_tile(mySprite12, tiles.get_tile_location(1, 21))
        mySprite13 = sprites.create(assets.image("""
            duck0
        """), SpriteKind.villager2)
        tiles.place_on_tile(mySprite13, tiles.get_tile_location(10, 3))
        mySprite14 = sprites.create(assets.image("""
            hermit
        """), SpriteKind.villager3)
        tiles.place_on_tile(mySprite14, tiles.get_tile_location(1, 16))
        mySprite15 = sprites.create(assets.image("""
            mrf1
        """), SpriteKind.villager1)
        mySprite15.set_scale(0.75, ScaleAnchor.MIDDLE)
        tiles.place_on_tile(mySprite15, tiles.get_tile_location(1, 11))
        mySprite11 = sprites.create(assets.image("""
            statue0
        """), SpriteKind.statue0)
        tiles.place_on_tile(mySprite11,
            tiles.get_tile_location(randint(19, 22), randint(17, 18)))
        tiles.set_wall_at(mySprite11.tilemap_location(), True)
        if freed2 == 1:
            mySprite11.set_kind(SpriteKind.inanimate)
            mySprite11.set_image(assets.image("""
                large tree-oak
            """))
            mySprite17 = sprites.create(assets.image("""
                seaweed
            """), SpriteKind.inanimate)
            tiles.place_on_tile(mySprite17, tiles.get_tile_location(20, 31))
            mySprite18 = sprites.create(assets.image("""
                mailbox
            """), SpriteKind.mailbox)
            tiles.place_on_tile(mySprite18, tiles.get_tile_location(18, 3))
            mySprite19 = sprites.create(assets.image("""
                b
            """), SpriteKind.villager2)
            tiles.place_on_tile(mySprite19, tiles.get_tile_location(26, 12))
            mySprite19.set_scale(0.75, ScaleAnchor.MIDDLE)
            mySprite9 = sprites.create(assets.image("""
                viggo
            """), SpriteKind.villager4)
            tiles.place_on_tile(mySprite9, tiles.get_tile_location(1, 26))
            mySprite9.set_velocity(randint(70, 78), 0)
            mySprite9.set_bounce_on_wall(True)
            if maildev == 1:
                mySprite18.set_image(assets.image("""
                    stump
                """))
                mySprite18.set_kind(SpriteKind.inanimate)
                tiles.set_wall_at(mySprite18.tilemap_location(), True)
                mySprite20 = sprites.create(assets.image("""
                    sidsel
                """), SpriteKind.Vpigeon)
                tiles.place_on_tile(mySprite20, tiles.get_tile_location(18, 5))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile9
    """),
    on_overlap_tile6)

def on_overlap_tile7(sprite13, location7):
    tiles.place_on_random_tile(playersprite, sprites.dungeon.floor_dark2)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.stair_west,
    on_overlap_tile7)

def on_overlap_tile8(sprite14, location8):
    global open2
    tiles.set_tile_at(tiles.get_tile_location(9, 6), sprites.dungeon.floor_light2)
    tiles.set_wall_at(tiles.get_tile_location(9, 6), False)
    tiles.set_tile_at(tiles.get_tile_location(9, 5), sprites.dungeon.floor_light2)
    tiles.set_wall_at(tiles.get_tile_location(9, 5), False)
    tiles.set_tile_at(tiles.get_tile_location(8, 5), sprites.dungeon.floor_light2)
    tiles.set_wall_at(tiles.get_tile_location(8, 5), False)
    tiles.set_tile_at(tiles.get_tile_location(8, 4), sprites.dungeon.floor_light2)
    tiles.set_wall_at(tiles.get_tile_location(8, 4), False)
    tiles.set_tile_at(tiles.get_tile_location(7, 4), sprites.dungeon.floor_light2)
    tiles.set_wall_at(tiles.get_tile_location(7, 4), False)
    tiles.set_wall_at(tiles.get_tile_location(7, 3), False)
    tiles.set_tile_at(tiles.get_tile_location(7, 3), sprites.dungeon.floor_light2)
    tiles.set_wall_at(tiles.get_tile_location(6, 3), False)
    tiles.set_tile_at(tiles.get_tile_location(6, 3), sprites.dungeon.floor_light2)
    if open2 == 0:
        game.show_long_text("come on in!", DialogLayout.BOTTOM)
        open2 = 1
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile3
    """),
    on_overlap_tile8)

def on_right_released():
    if start == 0 and swap == 0:
        animation.stop_animation(animation.AnimationTypes.IMAGE_ANIMATION, playersprite)
        playersprite.set_image(assets.image("""
            Max   R
        """))
    elif start == 0 and swap == 1:
        animation.stop_animation(animation.AnimationTypes.IMAGE_ANIMATION, playersprite)
        playersprite.set_image(assets.image("""
            Jodim                          L
        """))
controller.right.on_event(ControllerButtonEvent.RELEASED, on_right_released)

def on_left_released():
    if swap == 0:
        animation.stop_animation(animation.AnimationTypes.IMAGE_ANIMATION, playersprite)
        playersprite.set_image(assets.image("""
            Max   L
        """))
    elif swap == 1:
        animation.stop_animation(animation.AnimationTypes.IMAGE_ANIMATION, playersprite)
        playersprite.set_image(assets.image("""
            Jodim
        """))
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)

def on_overlap_tile9(sprite15, location9):
    if swap == 1:
        playersprite.say_text("wet!", 500, False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        watertile0
    """),
    on_overlap_tile9)

def on_on_zero(status):
    global gold
    sprites.destroy(myEnemy, effects.spray, 100)
    pause(500)
    mySprite2.set_flag(SpriteFlag.INVISIBLE, False)
    playersprite.set_position(160, 120)
    mySprite2.set_position(211, 120)
    game.show_long_text("well that guy is dead.", DialogLayout.BOTTOM)
    game.show_long_text("lets keep going.", DialogLayout.BOTTOM)
    mySprite2.set_flag(SpriteFlag.INVISIBLE, True)
    tiles.set_current_tilemap(tilemap("""
        level10
    """))
    tiles.place_on_tile(playersprite, tiles.get_tile_location(6, 15))
    game.show_long_text("it's night", DialogLayout.BOTTOM)
    gold += randint(2, 10)
statusbars.on_zero(StatusBarKind.enemy_health, on_on_zero)

def on_on_zero2(status2):
    game.set_game_over_effect(False, effects.dissolve)
    game.set_game_over_playable(False, music.melody_playable(music.power_down), True)
    game.game_over(False)
statusbars.on_zero(StatusBarKind.health, on_on_zero2)

def on_overlap_tile10(sprite16, location10):
    global mySprite16
    tiles.set_current_tilemap(tilemap("""
        level13
    """))
    tiles.place_on_tile(playersprite, tiles.get_tile_location(0, 4))
    mySprite16 = sprites.create(assets.image("""
        3rd
    """), SpriteKind.prisoner)
    tiles.place_on_tile(mySprite16, tiles.get_tile_location(5, 5))
    mySprite16.set_scale(0.75, ScaleAnchor.MIDDLE)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile16
    """),
    on_overlap_tile10)

def on_on_overlap7(sprite17, otherSprite7):
    global swap
    if controller.A.is_pressed() and swap == 0:
        playersprite.set_image(assets.image("""
            Jodim
        """))
        Jodimsprite.set_image(assets.image("""
            Max   L
        """))
        swap = 1
        Jodimsprite.set_scale(0.75, ScaleAnchor.MIDDLE)
        controller.move_sprite(playersprite, randint(100, 101), randint(99, 100))
        playersprite.set_scale(1, ScaleAnchor.MIDDLE)
        pause(500)
    elif controller.A.is_pressed() and swap == 1:
        swap = 0
        playersprite.set_image(assets.image("""
            Max   L
        """))
        Jodimsprite.set_image(assets.image("""
            Jodim
        """))
        Jodimsprite.set_scale(1, ScaleAnchor.MIDDLE)
        controller.move_sprite(playersprite, randint(100, 123), randint(100, 101))
        playersprite.set_scale(0.75, ScaleAnchor.MIDDLE)
        pause(500)
sprites.on_overlap(SpriteKind.player, SpriteKind.Jodim, on_on_overlap7)

def on_right_pressed():
    if start == 0 and swap == 0:
        animation.run_image_animation(playersprite,
            assets.animation("""
                plaaaaR
            """),
            200,
            True)
    elif start == 0 and swap == 1:
        animation.run_image_animation(playersprite, assets.animation("""
            pJaaR
        """), 200, True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_overlap_tile11(sprite18, location11):
    if swap == 0:
        game.set_game_over_message(False, "you burned to death...")
        playersprite.set_image(assets.image("""
            flaming max
        """))
        statusbar.value += -3
        pause(10)
        statusbar.value += -2
        pause(20)
        statusbar.value += -1
        pause(30)
        statusbar.value += -1
        pause(40)
        statusbar.value += -1
    elif swap == 1:
        game.set_game_over_message(False, "you burned to death")
        playersprite.set_image(assets.image("""
            flaming
        """))
        statusbar.value += -2
        pause(11)
        statusbar.value += -1
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        flamingpine
    """),
    on_overlap_tile11)

def on_on_overlap8(sprite19, otherSprite8):
    game.set_game_over_message(False, "killed by a snake...")
    pause(100)
    animation.run_image_animation(myEnemy, assets.animation("""
        seaaL
    """), 200, False)
    statusbar.value += -1
    animation.run_image_animation(myEnemy, assets.animation("""
        seaL
    """), 200, True)
sprites.on_overlap(SpriteKind.enemy, SpriteKind.player, on_on_overlap8)

def on_on_overlap9(sprite20, otherSprite9):
    if controller.A.is_pressed():
        game.show_long_text("watch out for the knights.", DialogLayout.BOTTOM)
        pause(200)
sprites.on_overlap(SpriteKind.player, SpriteKind.villager2, on_on_overlap9)

def on_on_overlap10(sprite21, otherSprite10):
    global gold
    if freed == 0 or freed2 == 1:
        if controller.A.is_pressed() and 2 < gold:
            game.show_long_text("here you go!", DialogLayout.BOTTOM)
            tiles.set_tile_at(tiles.get_tile_location(31, 31),
                assets.tile("""
                    myTile6
                """))
            gold += -3
            pause(200)
        elif controller.A.is_pressed():
            game.show_long_text("go away you don't have enough gold!", DialogLayout.BOTTOM)
            pause(200)
sprites.on_overlap(SpriteKind.player, SpriteKind.vender1, on_on_overlap10)

def on_overlap_tile12(sprite22, location12):
    global Jodimsprite
    Jodimsprite = sprites.create(assets.image("""
        Jodim
    """), SpriteKind.Jodim)
    tiles.place_on_tile(Jodimsprite, tiles.get_tile_location(31, 1))
    tiles.set_current_tilemap(tilemap("""
        level1
    """))
    tiles.place_on_random_tile(playersprite, assets.tile("""
        myTile9
    """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile5
    """),
    on_overlap_tile12)

def on_overlap_tile13(sprite23, location13):
    global mySprite9
    tiles.set_current_tilemap(tilemap("""
        the castle
    """))
    mySprite9 = sprites.create(assets.image("""
        viggo
    """), SpriteKind.prisoner)
    tiles.place_on_random_tile(mySprite9, sprites.dungeon.floor_dark5)
    mySprite9.set_velocity(75, 50)
    mySprite9.set_bounce_on_wall(True)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile10
    """),
    on_overlap_tile13)

def on_on_overlap11(sprite24, otherSprite11):
    if controller.A.is_pressed():
        game.show_long_text("Hi!", DialogLayout.BOTTOM)
        pause(200)
sprites.on_overlap(SpriteKind.player, SpriteKind.villager1, on_on_overlap11)

def on_on_overlap12(sprite25, otherSprite12):
    if controller.B.is_pressed() and swap == 1:
        statusbar4.value += randint(1, 3)
        pause(200)
        statusbar.value += -1
    elif swap == 0 and controller.B.is_pressed():
        statusbar4.value += -1
    elif controller.A.is_pressed():
        game.show_long_text("DIE!!", DialogLayout.BOTTOM)
        pause(200)
sprites.on_overlap(SpriteKind.player, SpriteKind.solider, on_on_overlap12)

def on_on_overlap13(sprite26, otherSprite13):
    global villagein
    if controller.A.is_pressed():
        sprites.destroy_all_sprites_of_kind(SpriteKind.villager1)
        sprites.destroy_all_sprites_of_kind(SpriteKind.villager2)
        sprites.destroy_all_sprites_of_kind(SpriteKind.vender0)
        sprites.destroy_all_sprites_of_kind(SpriteKind.vender1)
        sprites.destroy_all_sprites_of_kind(SpriteKind.stage)
        sprites.destroy_all_sprites_of_kind(SpriteKind.statue0)
        sprites.destroy_all_sprites_of_kind(SpriteKind.hungrymonkey)
        sprites.destroy_all_sprites_of_kind(SpriteKind.villager3)
        mySprite2.set_flag(SpriteFlag.INVISIBLE, True)
        tiles.set_current_tilemap(tilemap("""
            maze3
        """))
        tiles.place_on_tile(playersprite, tiles.get_tile_location(2, 2))
        villagein = 0
sprites.on_overlap(SpriteKind.player, SpriteKind.statue0, on_on_overlap13)

def on_on_overlap14(sprite27, otherSprite14):
    global bananas, sideq1
    if sideq1 == 0:
        if controller.A.is_pressed() and 5 > bananas:
            game.show_long_text("I'm hungry...", DialogLayout.BOTTOM)
            game.splash("Side quest", "bananas for johnny")
            pause(200)
        elif controller.A.is_pressed() and 5 <= bananas:
            game.show_long_text("I'm hungry...", DialogLayout.BOTTOM)
            game.show_long_text("Do I smell bananas?", DialogLayout.BOTTOM)
            game.show_long_text("Thank you!", DialogLayout.BOTTOM)
            bananas += randint(-2, -5)
            animation.run_image_animation(mySprite12,
                assets.animation("""
                    monkey eat
                """),
                200,
                False)
            pause(1000)
            mySprite12.set_image(assets.image("""
                happymonkey
            """))
            sideq1 = 1
            pause(100)
    elif sideq1 == 1 and controller.A.is_pressed():
        mySprite12.say_text("Thank you!", 5000, True)
sprites.on_overlap(SpriteKind.player, SpriteKind.hungrymonkey, on_on_overlap14)

def on_overlap_tile14(sprite28, location14):
    global mySprite2
    mySprite2 = sprites.create(assets.image("""
        thorn
    """), SpriteKind.talkity)
    tiles.set_current_tilemap(tilemap("""
        level4
    """))
    game.set_dialog_cursor(assets.image("""
        tree
    """))
    scene.set_background_image(assets.image("""
        bg2
    """))
    game.set_dialog_frame(assets.image("""
        df
    """))
    playersprite.set_position(27, 75)
    game.show_long_text("you made it out!", DialogLayout.BOTTOM)
    game.show_long_text("we need to ", DialogLayout.BOTTOM)
    game.show_long_text("make it to a forest.", DialogLayout.BOTTOM)
    game.show_long_text("lets go!", DialogLayout.BOTTOM)
    tiles.set_current_tilemap(tilemap("""
        maze1
    """))
    mySprite2.set_flag(SpriteFlag.INVISIBLE, True)
    tiles.place_on_tile(playersprite, tiles.get_tile_location(5, 15))
    playersprite.set_scale(0.75, ScaleAnchor.MIDDLE)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.floor_light4,
    on_overlap_tile14)

def on_overlap_tile15(sprite29, location15):
    global mySprite13, mySprite21, statusbar4
    tiles.set_current_tilemap(tilemap("""
        camp1
    """))
    tiles.place_on_tile(playersprite, tiles.get_tile_location(0, 2))
    mySprite13 = sprites.create(assets.image("""
        couch-luxury
    """), SpriteKind.inanimate)
    tiles.place_on_tile(mySprite13, tiles.get_tile_location(23, 23))
    tiles.set_wall_at(tiles.get_tile_location(23, 23), True)
    mySprite21 = sprites.create(assets.image("""
        darksoldierL
    """), SpriteKind.solider)
    statusbar4 = statusbars.create(20, 4, StatusBarKind.soldierhealth)
    statusbar4.attach_to_sprite(mySprite21)
    statusbar4.max = 34
    tiles.place_on_random_tile(mySprite21, sprites.dungeon.floor_dark2)
    mySprite21.follow(playersprite, 75)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile35
    """),
    on_overlap_tile15)

def on_overlap_tile16(sprite30, location16):
    global freed
    if controller.A.is_pressed() and freed == 0:
        tiles.set_tile_at(tiles.get_tile_location(28, 29),
            sprites.dungeon.purple_switch_down)
        for index4 in range(3333):
            tiles.set_wall_at(tiles.get_tile_location(randint(18, 21), randint(16, 19)),
                False)
            tiles.set_tile_at(tiles.get_tile_location(randint(18, 21), randint(16, 19)),
                sprites.dungeon.floor_dark2)
        pause(100)
        freed = 1
        game.show_long_text("FREEDOM!!!!!!!!", DialogLayout.BOTTOM)
        tiles.set_current_tilemap(tilemap("""
            level1
        """))
        tiles.place_on_tile(playersprite, tiles.get_tile_location(0, 0))
        mySprite9.set_kind(SpriteKind.villager2)
        tiles.place_on_tile(mySprite9, tiles.get_tile_location(7, 26))
        mySprite9.set_velocity(73, 0)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile11
    """),
    on_overlap_tile16)

def on_on_overlap15(sprite31, otherSprite15):
    if controller.B.is_pressed():
        statusbar2.value += randint(-1, -3)
        pause(57)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap15)

mySprite21: Sprite = None
statusbar4: StatusBarSprite = None
Jodimsprite: Sprite = None
open2 = 0
mySprite9: Sprite = None
mySprite19: Sprite = None
mySprite18: Sprite = None
mySprite17: Sprite = None
mySprite11: Sprite = None
mySprite15: Sprite = None
mySprite14: Sprite = None
mySprite13: Sprite = None
mySprite12: Sprite = None
mySprite10: Sprite = None
mySprite8: Sprite = None
mySprite7: Sprite = None
mySprite6: Sprite = None
mySprite5: Sprite = None
mySprite4: Sprite = None
mySprite3: Sprite = None
mySprite: Sprite = None
mySprite16: Sprite = None
maildev = 0
statusbar3: StatusBarSprite = None
statusbar: StatusBarSprite = None
mySprite2: Sprite = None
villagein = 0
freed2 = 0
mySprite20: Sprite = None
gold = 0
bannagain = 0
statusbar2: StatusBarSprite = None
myEnemy: Sprite = None
textSprite2: TextSprite = None
freed = 0
textSprite: TextSprite = None
playersprite: Sprite = None
sideq1 = 0
bananas = 0
start = 0
swap = 0
swap = 0
start = 1
bananas = 0
sideq1 = 0
scene.set_background_image(assets.image("""
    bg
"""))
playersprite = sprites.create(assets.image("""
    p
"""), SpriteKind.player)
textSprite = textsprite.create("RPG")
textSprite.set_scale(2, ScaleAnchor.MIDDLE)
freed = 0
playersprite.set_position(80, 60)
scene.camera_follow_sprite(textSprite)
textSprite2 = textsprite.create("press A to begin.")
textSprite2.set_position(93, 80)
textSprite.set_outline(1, 2)

def on_on_update():
    if start == 0:
        statusbar3.value = gold
game.on_update(on_on_update)

def on_on_update2():
    if sideq1 == 1 and villagein == 1:
        mySprite12.set_image(assets.image("""
            happymonkey
        """))
game.on_update(on_on_update2)
