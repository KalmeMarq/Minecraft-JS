import GameOption from '@km.mcts/GameOption';
import GameSettings from '@km.mcts/GameSettings';
import AbstractOption from '@km.mcts/settings/AbstractOption';
import Util from '@km.mcts/util/Util';
import Button from '../widgets/button/Button';
import GuiScreen from './GuiScreen';
import SettingsScreen from './SettingsScreen';

export default class AccessibilityScreen extends SettingsScreen {
  private SCREEN_OPTIONS: GameOption[] = [
    GameOption.NARRATOR,
    GameOption.SHOW_SUBTITLES,
    GameOption.ACCESSIBILITY_TEXT_BACKGROUND_OPACITY,
    GameOption.ACCESSIBILITY_TEXT_BACKGROUND,
    GameOption.CHAT_OPACITY,
    GameOption.LINE_SPACING,
    GameOption.DELAY_INSTANT,
    GameOption.AUTO_JUMP,
    GameOption.SNEAK,
    GameOption.SPRINT,
    GameOption.FOV_EFFECT_SCALE_SLIDER,
    GameOption.SCREEN_EFFECT_SCALE_SLIDER
  ];
  
  constructor(parentScreen: GuiScreen, gameSettingsObj: GameSettings) {
    super(parentScreen, gameSettingsObj, Util.getTranslation('options.accessibility.title'))
  }

  protected init(): void {
    let index = 0;
    for (const iterator of this.SCREEN_OPTIONS) {
      let x = this.width / 2 - 155 + (index % 2) * 160;
      let y = this.height / 6 - 12 + 24 * (index >> 1);
      this.addButton((iterator as AbstractOption).createWidget(this.minecraft.gameSettings, x, y, 150));
      index++;
    }

    this.addButton(new Button(this.width / 2 - 100, this.height - 27, 200, 20, Util.getTranslation('gui.done'), (button) => {
      this.minecraft.displayGuiScreen(this.parentScreen);
    }));
  }

  public render(context: CanvasRenderingContext2D, mouseX: number, mouseY: number, partialTicks: number): void {
    this.renderBackground(context);
    this.drawCenteredString(context, this.font, this.title, this.width / 2, 20, 16777215);
    super.render(context, mouseX, mouseY, partialTicks);
  }
}