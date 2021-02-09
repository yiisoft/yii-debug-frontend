import { ObjectLiteral } from './ObjectLiteral';

export interface Response<T> {
    status: number;
    data: T;
    error: Array<ObjectLiteral> | null;
}
