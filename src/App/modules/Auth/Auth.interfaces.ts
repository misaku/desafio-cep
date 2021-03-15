import { Request } from '@hapi/hapi';

export interface IAuthRequestDTO {
  email: string;
  password: string;
}
export interface IAuthResponseDTO {
  token: string;
}
export interface IAuthBusiness {
  store(data: IAuthRequestDTO): Promise<IAuthResponseDTO>;
}

export interface IAuthController {
  store(data: Request): Promise<IAuthResponseDTO>;
}
