export class Common {
    static isEmpty(val: string | undefined): boolean {
        let res = false;
        if (
            typeof val === 'undefined' ||
            val === null ||
            (typeof val === 'string' && val.trim() === '')
        ) {
            res = true;
        }
        return res;
    }

    static extractCollectorName(collector: string): string {
        const result = collector.split('\\');
        return result[result.length - 1];
    }

    static getCollectorsList(debugDetails: { [prop: string]: unknown }): string[] {
        const collectorsList: string[] = [];
        for (let i = 0; i < Object.keys(debugDetails).length; i++) {
            const prop = Object.keys(debugDetails)[i];
            if (debugDetails.hasOwnProperty(prop)) {
                collectorsList.push(prop);
            }
        }
        return collectorsList;
    }
}
