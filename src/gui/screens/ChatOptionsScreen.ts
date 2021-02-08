import GameSettings from "../../GameSettings.js";
import GameOption from "../../GameOption.js";
import { getKeyTranslation } from "../../utils/TranslationText.js";
import Button from "../widgets/button/Button.js";
import Screen from "./Screen.js";
import SettingsScreen from "./SettingsScreen.js";

export default class ChatOptionsScreen extends SettingsScreen {
  private SCREEN_OPTIONS: GameOption[] = [
    GameOption.CHAT_VISIBILITY,
    GameOption.CHAT_COLOR,
    GameOption.CHAT_LINKS,
    GameOption.CHAT_LINKS_PROMPT,
    GameOption.CHAT_OPACITY,
    GameOption.ACCESSIBILITY_TEXT_BACKGROUND_OPACITY,
    GameOption.CHAT_SCALE,
    GameOption.LINE_SPACING,
    GameOption.DELAY_INSTANT,
    GameOption.CHAT_WIDTH,
    GameOption.CHAT_HEIGHT_FOCUSED,
    GameOption.CHAT_HEIGHT_UNFOCUSED,
    GameOption.NARRATOR,
    GameOption.AUTO_SUGGEST_COMMANDS,
    GameOption.HIDE_MATCHED_NAMES,
    GameOption.REDUCED_DEBUG_INFO
  ];

  constructor(parentScreen: Screen, gameSettingsObj: GameSettings) {
    super(parentScreen, gameSettingsObj,  getKeyTranslation("options.chat.title"))
  }

  protected init(): void {
    let index = 0;
    for (const iterator of this.SCREEN_OPTIONS) {
      let x = this.width / 2 - 155 + (index % 2) * 160;
      let y = this.height / 6 - 12 + 24 * (index >> 1);
      this.addButton((iterator as any).createWidget(this.minecraft.gameSettings, x, y, 150));
      index++;
    }

    this.addButton(new Button(this.width / 2 - 100, this.height - 27, 200, 20, getKeyTranslation("gui.done"), () => {
      this.minecraft.displayGuiScreen(this.parentScreen);
    }));
  }

  public render(context: CanvasRenderingContext2D, mouseX: number, mouseY: number) {
    super.render(context, mouseX, mouseY);
    this.drawCenteredString(context, this.title, this.width / 2, 20, 16777215);
  }
}