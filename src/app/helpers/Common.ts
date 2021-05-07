import { ObjectLiteral } from '../models/ObjectLiteral';

export class Common {
    static isEmpty(value: string | Array<unknown> | undefined): boolean {
        let res = false;
        if (
            typeof value === 'undefined' ||
            value === null ||
            (typeof value === 'string' && value.trim() === '')
        ) {
            res = true;
        } else if (Array.isArray(value)) {
            return value.length === 0;
        }
        return res;
    }

    static extractCollectorName(collector: string): string {
        const result = collector.split('\\');
        return result[result.length - 1];
    }

    static getCollectorsList<T>(debugDetails: ObjectLiteral<T>): string[] {
        const collectorsList: string[] = [];
        for (let i = 0; i < Object.keys(debugDetails).length; i += 1) {
            const prop = Object.keys(debugDetails)[i];
            if (prop in debugDetails) {
                collectorsList.push(prop);
            }
        }
        return collectorsList;
    }
}
