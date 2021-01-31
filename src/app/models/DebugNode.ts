export interface DebugNode {
    id: string;
    time: number;
    memory: bigint;
    requestUrl: string;
    requestMethod: string;
    requestIsAjax: boolean;
    userIp: string;
    responseStatusCode: bigint;
}
