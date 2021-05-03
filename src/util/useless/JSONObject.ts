export default class JSONObject {
  private obj: any = {}
  public constructor (obj?: Object | JSONObject | string) {
    if(obj instanceof JSONObject) {
      this.obj = obj.toJSONString()
    } else if(typeof obj === 'string') {
      this.obj = JSON.parse(obj);
    } else {
      this.obj = obj ?? {}
    }
  }

  put (key: string, value: any): void {
    this.obj[key] = (value instanceof JSONObject ? value.toJSONString() : value)
  }

  has (key: string): any {
    return this.obj[key] !== undefined
  }

  getInt (key: string): number {
    return parseInt(this.obj[key])
  }

  get (key: string): any {
    return this.obj[key]
  }

  toString (): string {
    return JSON.stringify(this.obj)
  }

  toJSONString (): any {
    return this.obj
  }
}