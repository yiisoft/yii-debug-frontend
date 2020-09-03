export class Common {
  static isEmpty(val: any): boolean {
    let res = false;
    if ('undefined' === typeof val || val === null || ('string' === typeof val && val.trim() === '')) {
      res = true;
    }
    return res;
  }

  static extractCollectorName(collector: string): string {
    const result = collector.split('\\');
    return result[result.length - 1];
  }

  static getCollectorsList(debugDetails: any) {
    const collectorsList: string[] = [];
    for (const prop in debugDetails) {
      if (debugDetails.hasOwnProperty(prop)) {
        collectorsList.push(prop);
      }
    }
    return collectorsList;
  }
}

