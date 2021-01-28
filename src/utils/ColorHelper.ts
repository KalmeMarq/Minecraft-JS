export default class ColorHelper {
  public static getAlpha(packetColor: number): number {
    return packetColor >>> 24;
  }

  public static  getRed(packedColor: number): number {
    return packedColor >> 16 & 255;
  }

  public static  getGreen(packedColor: number): number {
    return packedColor >> 8 & 255;
  }

  public static  getBlue(packedColor: number): number {
    return packedColor & 255;
  }

  public static packColor(red: number, green: number, blue: number): string {
    return `rgb(${red}, ${green}, ${blue})`;
  }

  public static packDarkerColor(red: number, green: number, blue: number): string {
    return `rgb(${red - 42.5 * 5.4}, ${green - 42.5 * 5.4}, ${blue- 42.5 * 5.4})`;
  }

  public static getColor(color: number) {
    return this.packColor(this.getRed(color), this.getGreen(color), this.getBlue(color));
  }

  public static getDarkerColor(color: number) {
    return this.packDarkerColor(this.getRed(color), this.getGreen(color), this.getBlue(color));
  }
}