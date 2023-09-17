export interface IResponseSuccess {
    data: any;
    message: string;
    statusCode: number;
}

export interface IResponseError{
    message: string;
    statusCode: number;
}