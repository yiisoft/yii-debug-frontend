export interface IndexNode {
    id: string;
    time: number;
    timestamp: number;
    memory: bigint;
    requestUrl: string;
    requestMethod: string;
    requestIsAjax: boolean;
    userIp: string;
    responseStatusCode: bigint;
}
