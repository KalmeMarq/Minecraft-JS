import { Resources } from '../index.js';

/* export function translationText(translateKey: string) {
  try {
    const displayLang: any = Resources.languages.find((id: any) => id['language.code'] === GameSettings.language);
    if(!displayLang[translateKey]) return translateKey;
    return displayLang[translateKey];

  } catch (err) {
    console.error(err)
  }
} */

export default class TranslationTextComponent {
  public translateKey;
  constructor(translateKey: string) {
    this.translateKey = translateKey;
  }

  get() {
    try {
      const s = JSON.parse(localStorage.getItem('GameSettings')!).language ? JSON.parse(localStorage.getItem('GameSettings')!).language : 'en_us';
      const displayLang: any = Resources.languages.find((id: any) => id.code === s);
      
      if(!displayLang.data[this.translateKey]) return this.translateKey;
      return displayLang.data[this.translateKey];
  
    } catch (err) {
      console.error(err)
    }
  }
}