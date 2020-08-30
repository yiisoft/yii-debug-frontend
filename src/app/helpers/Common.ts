export class Common {
  static isEmpty(val: any): boolean {
    let res = false;
    if ('undefined' === typeof val || val === null || ('string' === typeof val && val.trim() === '')) {
      res = true;
    }
    return res;
  }
}

