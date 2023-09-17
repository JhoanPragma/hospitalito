import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IResponseError, IResponseSuccess } from './response.interface';

@Injectable()
export class ResponseService {

  async responseSuccess(data: any, message: string, statusCode: number) {
    const resp: IResponseSuccess = {
      data: data,
      message: message,
      statusCode: statusCode,
    };

    return resp;
  }

  async responseError(message: string, statusCode: number) {
    const resp: IResponseError = {
      message: message,
      statusCode: statusCode,
    };

    return resp;
  }
}
