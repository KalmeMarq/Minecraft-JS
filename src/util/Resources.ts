import IMCResources from '../interface/IResources';
import JSONUtils from './JSONUtils';

export var MCResources: IMCResources = {};
export var MCUI: any = {};

export function getResourceLocation(type: string, src: string) {
  switch(type) {
    case 'textures':
      return MCResources['assets/minecraft/textures/' + src + '.png'];
    case 'sounds':
      return MCResources['assets/minecraft/sounds/' + src + '.ogg'].cloneNode();
    case 'texts':
      return MCResources['assets/minecraft/texts/' + src + '.txt'];
    case 'fonts':
      return MCResources['assets/minecraft/font/' + src + '.json'];
    case 'langs':
      return MCResources['assets/minecraft/lang/' + src + '.json'];
    default:
      return false;
  }
}

export async function getAllResources() {
  const all = ['textures/font/ascii.png', 'textures/font/accented.png', 'font/default.json', 'textures/gui/options_background.png', 'textures/gui/widgets.png', 'sounds/click_stereo.ogg', 'texts/credits.txt', 'texts/end.txt', 'texts/splashes.txt', 'lang/en_us.json', 'lang/pt_pt.json', /* 'textures/item/acacia_boat.png', 'textures/item/acacia_door.png', 'textures/item/acacia_sign.png', 'textures/item/apple.png', 'textures/item/armor_stand.png', 'textures/item/arrow.png', 'textures/item/baked_potato.png', 'textures/item/bamboo.png', 'textures/item/barrier.png', 'textures/item/beef.png', 'textures/item/beetroot.png',
   'textures/item/beetroot_seeds.png', 'textures/item/beetroot_soup.png', 'textures/item/bell.png', 'textures/item/birch_boat.png', 'textures/item/birch_door.png', 'textures/item/birch_sign.png', 'textures/item/black_dye.png', 'textures/item/blaze_powder.png', 'textures/item/blaze_rod.png', 'textures/item/blue_dye.png',
   'textures/item/bone.png', 'textures/item/bone_meal.png', 'textures/item/book.png', 'textures/item/bow.png', 'textures/item/bowl.png', 'textures/item/bow_pulling_0.png', 'textures/item/bow_pulling_1.png', 'textures/item/bow_pulling_2.png', 'textures/item/bread.png', 'textures/item/brewing_stand.png', 'textures/item/brick.png', 'textures/item/broken_elytra.png',
   'textures/item/brown_dye.png', 'textures/item/bucket.png', 'textures/item/cake.png', 'textures/item/campfire.png', 'textures/item/carrot.png', 'textures/item/carrot_on_a_stick.png', 'textures/item/cauldron.png', 'textures/item/chain.png', 'textures/item/chainmail_boots.png', 'textures/item/chainmail_chestplate.png',
   'textures/item/chainmail_helmet.png', 'textures/item/chainmail_leggings.png', 'textures/item/charcoal.png', 'textures/item/chest_minecart.png', 'textures/item/chicken.png', 'textures/item/chorus_fruit.png', 'textures/item/clay_ball.png', 'textures/item/clock.png', 'textures/item/coal.png', 'textures/item/cocoa_beans.png',
   'textures/item/cod.png', 'textures/item/cod_bucket.png', 'textures/item/command_block_minecart.png', 'textures/item/comparator.png', 'textures/item/compass.png', 'textures/item/cooked_beef.png', 'textures/item/cooked_chicken.png', 'textures/item/cooked_cod.png', 'textures/item/cooked_mutton.png', 'textures/item/cooked_porkchop.png',
   'textures/item/cooked_rabbit.png', 'textures/item/cooked_salmon.png', 'textures/item/cookie.png', 'textures/item/creeper_banner_pattern.png', 'textures/item/crimson_door.png', 'textures/item/crimson_sign.png', 'textures/item/crossbow_arrow.png', 'textures/item/crossbow_firework.png',
   'textures/item/crossbow_pulling_0.png', 'textures/item/crossbow_pulling_1.png', 'textures/item/crossbow_pulling_2.png', 'textures/item/crossbow_standby.png', 'textures/item/cyan_dye.png', 'textures/item/dark_oak_boat.png', 'textures/item/dark_oak_door.png', 'textures/item/dark_oak_sign.png',
   'textures/item/diamond.png', 'textures/item/diamond_axe.png', 'textures/item/diamond_boots.png', 'textures/item/diamond_chestplate.png', 'textures/item/diamond_helmet.png', 'textures/item/diamond_hoe.png', 'textures/item/diamond_horse_armor.png', 'textures/item/diamond_leggings.png',
   'textures/item/diamond_pickaxe.png', 'textures/item/diamond_shovel.png', 'textures/item/diamond_sword.png', 'textures/item/dragon_breath.png', 'textures/item/dried_kelp.png', 'textures/item/egg.png', 'textures/item/elytra.png', 'textures/item/emerald.png', 'textures/item/empty_armor_slot_boots.png',
   'textures/item/empty_armor_slot_chestplate.png', 'textures/item/empty_armor_slot_helmet.png', 'textures/item/empty_armor_slot_leggings.png', 'textures/item/empty_armor_slot_shield.png', 'textures/item/enchanted_book.png',
   'textures/item/ender_eye.png', 'textures/item/ender_pearl.png', 'textures/item/end_crystal.png', 'textures/item/experience_bottle.png', 'textures/item/feather.png', 'textures/item/fermented_spider_eye.png', 'textures/item/filled_map.png', 'textures/item/filled_map_markings.png', 'textures/item/firework_rocket.png',
   'textures/item/firework_star.png', 'textures/item/firework_star_overlay.png', 'textures/item/fire_charge.png', 'textures/item/fishing_rod.png', 'textures/item/fishing_rod_cast.png', 'textures/item/flint.png', 'textures/item/flint_and_steel.png', 'textures/item/flower_banner_pattern.png',
   'textures/item/flower_pot.png', 'textures/item/furnace_minecart.png', 'textures/item/ghast_tear.png', 'textures/item/glass_bottle.png', 'textures/item/glistering_melon_slice.png', 'textures/item/globe_banner_pattern.png', 'textures/item/glowstone_dust.png', 'textures/item/golden_apple.png',
   'textures/item/golden_axe.png', 'textures/item/golden_boots.png', 'textures/item/golden_carrot.png', 'textures/item/golden_chestplate.png', 'textures/item/golden_helmet.png', 'textures/item/golden_hoe.png', 'textures/item/golden_horse_armor.png', 'textures/item/golden_leggings.png',
   'textures/item/golden_pickaxe.png', 'textures/item/golden_shovel.png', 'textures/item/golden_sword.png', 'textures/item/gold_ingot.png', 'textures/item/gold_nugget.png', 'textures/item/gray_dye.png', 'textures/item/green_dye.png', 'textures/item/gunpowder.png', 'textures/item/heart_of_the_sea.png', 'textures/item/honeycomb.png',
   'textures/item/honey_bottle.png', 'textures/item/hopper.png', 'textures/item/hopper_minecart.png', 'textures/item/ink_sac.png', 'textures/item/iron_axe.png', 'textures/item/iron_boots.png', 'textures/item/iron_chestplate.png', 'textures/item/iron_door.png', 'textures/item/iron_helmet.png', 'textures/item/iron_hoe.png',
   'textures/item/iron_horse_armor.png', 'textures/item/iron_ingot.png', 'textures/item/iron_leggings.png', 'textures/item/iron_nugget.png', 'textures/item/iron_pickaxe.png', 'textures/item/iron_shovel.png', 'textures/item/iron_sword.png', 'textures/item/item_frame.png', 'textures/item/jungle_boat.png', 'textures/item/jungle_door.png',
   'textures/item/jungle_sign.png', 'textures/item/kelp.png', 'textures/item/knowledge_book.png', 'textures/item/lantern.png', 'textures/item/lapis_lazuli.png', 'textures/item/lava_bucket.png', 'textures/item/lead.png', 'textures/item/leather.png', 'textures/item/leather_boots.png', 'textures/item/leather_boots_overlay.png',
   'textures/item/leather_chestplate.png', 'textures/item/leather_chestplate_overlay.png', 'textures/item/leather_helmet.png', 'textures/item/leather_helmet_overlay.png', 'textures/item/leather_horse_armor.png', 'textures/item/leather_leggings.png',
   'textures/item/leather_leggings_overlay.png', 'textures/item/light_blue_dye.png', 'textures/item/light_gray_dye.png', 'textures/item/lime_dye.png', 'textures/item/lingering_potion.png', 'textures/item/magenta_dye.png', 'textures/item/magma_cream.png', 'textures/item/map.png', 'textures/item/melon_seeds.png',
   'textures/item/melon_slice.png', 'textures/item/milk_bucket.png', 'textures/item/minecart.png', 'textures/item/mojang_banner_pattern.png', 'textures/item/mushroom_stew.png', 'textures/item/music_disc_11.png', 'textures/item/music_disc_13.png', 'textures/item/music_disc_blocks.png', 'textures/item/music_disc_cat.png',
   'textures/item/music_disc_chirp.png', 'textures/item/music_disc_far.png', 'textures/item/music_disc_mall.png', 'textures/item/music_disc_mellohi.png', 'textures/item/music_disc_pigstep.png', 'textures/item/music_disc_stal.png', 'textures/item/music_disc_strad.png', 'textures/item/music_disc_wait.png',
   'textures/item/music_disc_ward.png', 'textures/item/mutton.png', 'textures/item/name_tag.png', 'textures/item/nautilus_shell.png', 'textures/item/netherite_axe.png', 'textures/item/netherite_boots.png', 'textures/item/netherite_chestplate.png', 'textures/item/netherite_helmet.png', 'textures/item/netherite_hoe.png',
   'textures/item/netherite_ingot.png', 'textures/item/netherite_leggings.png', 'textures/item/netherite_pickaxe.png', 'textures/item/netherite_scrap.png', 'textures/item/netherite_shovel.png', 'textures/item/netherite_sword.png', 'textures/item/nether_brick.png', 'textures/item/nether_sprouts.png',
   'textures/item/nether_star.png', 'textures/item/nether_wart.png', 'textures/item/oak_boat.png', 'textures/item/oak_door.png', 'textures/item/oak_sign.png', 'textures/item/orange_dye.png', 'textures/item/painting.png', 'textures/item/paper.png', 'textures/item/phantom_membrane.png', 'textures/item/piglin_banner_pattern.png', 'textures/item/pink_dye.png',
   'textures/item/poisonous_potato.png', 'textures/item/popped_chorus_fruit.png', 'textures/item/porkchop.png', 'textures/item/potato.png', 'textures/item/potion.png', 'textures/item/potion_overlay.png', 'textures/item/prismarine_crystals.png', 'textures/item/prismarine_shard.png', 'textures/item/pufferfish.png',
   'textures/item/pufferfish_bucket.png', 'textures/item/pumpkin_pie.png', 'textures/item/pumpkin_seeds.png', 'textures/item/purple_dye.png', 'textures/item/quartz.png', 'textures/item/rabbit.png', 'textures/item/rabbit_foot.png', 'textures/item/rabbit_hide.png', 'textures/item/rabbit_stew.png', 'textures/item/redstone.png', 'textures/item/red_dye.png',
   'textures/item/repeater.png', 'textures/item/rotten_flesh.png', 'textures/item/ruby.png', 'textures/item/saddle.png', 'textures/item/salmon.png', 'textures/item/salmon_bucket.png', 'textures/item/scute.png', 'textures/item/seagrass.png', 'textures/item/sea_pickle.png', 'textures/item/shears.png', 'textures/item/shulker_shell.png', 'textures/item/skull_banner_pattern.png',
   'textures/item/slime_ball.png', 'textures/item/snowball.png', 'textures/item/soul_campfire.png', 'textures/item/soul_lantern.png', 'textures/item/spawn_egg.png', 'textures/item/spawn_egg_overlay.png', 'textures/item/spectral_arrow.png', 'textures/item/spider_eye.png', 'textures/item/splash_potion.png', 'textures/item/spruce_boat.png',
   'textures/item/spruce_door.png', 'textures/item/spruce_sign.png', 'textures/item/stick.png', 'textures/item/stone_axe.png', 'textures/item/stone_hoe.png', 'textures/item/stone_pickaxe.png', 'textures/item/stone_shovel.png', 'textures/item/stone_sword.png', 'textures/item/string.png', 'textures/item/structure_void.png', 'textures/item/sugar.png',
   'textures/item/sugar_cane.png', 'textures/item/suspicious_stew.png', 'textures/item/sweet_berries.png', 'textures/item/tipped_arrow_base.png', 'textures/item/tipped_arrow_head.png', 'textures/item/tnt_minecart.png', 'textures/item/totem_of_undying.png', 'textures/item/trident.png', 'textures/item/tropical_fish.png',
   'textures/item/tropical_fish_bucket.png', 'textures/item/turtle_egg.png', 'textures/item/turtle_helmet.png', 'textures/item/warped_door.png', 'textures/item/warped_fungus_on_a_stick.png', 'textures/item/warped_sign.png', 'textures/item/water_bucket.png', 'textures/item/wheat.png', 'textures/item/wheat_seeds.png', 'textures/item/white_dye.png',
   'textures/item/wooden_axe.png', 'textures/item/wooden_hoe.png', 'textures/item/wooden_pickaxe.png', 'textures/item/wooden_shovel.png', 'textures/item/wooden_sword.png', 'textures/item/writable_book.png', 'textures/item/written_book.png', 'textures/item/yellow_dye.png',  */'textures/gui/title/edition.png',
   'textures/gui/title/minecraft.png', 'textures/gui/title/mojangstudios.png', 'textures/gui/checkbox.png', 'textures/gui/accessibility.png', 'textures/gui/icons.png', 'dummy.json'];
    
  for(let i = 0; i < all.length; i++) {
    const file = all[i];
    const fileType = file.substr(0, file.indexOf('/'));
    let fileEx: string = '';
    if(fileType == 'textures') fileEx = 'png' 
    else if(fileType == 'lang') fileEx = 'json' 
    else if(fileType == 'texts') fileEx = 'txt' 
    else if(fileType == 'sounds') fileEx = 'ogg'
    else if(fileType == 'font') fileEx = 'json'

    const res = await fetch(`./resources/assets/minecraft/${file}`);
    const data = fileEx == 'json' ? await res.json() : (fileEx == 'txt' ? await res.text() : await res.blob()); 
    
    if(fileEx == 'png') {
      let myImage = new Image();
      myImage.src = URL.createObjectURL(data);
      myImage.onload = async () => {        
        MCResources[`assets/minecraft/${file}`] = myImage;
        console.log(fileType, file, fileEx);
      }
    } else if(fileEx == 'ogg') {
      let audio = new Audio('./resources/assets/minecraft/' + file)
      MCResources[`assets/minecraft/${file}`] = audio;
      console.log(fileType, file, fileEx);
    } else {
      MCResources[`assets/minecraft/${file}`] = await data; 
      console.log(fileType, file, fileEx);
    }

    if(i == all.length - 1) {
      console.log(MCResources);
      return MCResources
    }
  }
}