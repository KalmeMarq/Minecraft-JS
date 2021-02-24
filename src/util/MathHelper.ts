export default class MathHelper {  
  public static clamp(num: number, min: number, max: number): number {
    if (num < min) return min;
    else return num > max ? max : num;
  }

  public static lerp(pct: number, start: number, end: number) {
    return start + pct * (end - start);
  }

  public static ceil(value: number) {
    let i = ~~value;
    return value > i ? i + 1 : i;
  }

  public static normalizeAngle(x: number, y: number) {
    return x - (y * Math.floor(x / y));
  }

  public static sqrt(value: number) {
    return Math.sqrt(value);
  }
} 