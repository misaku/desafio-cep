import { Request } from '@hapi/hapi';

export interface IResponseErrorDTO {
  erro: string;
}

export interface IResponseErrorApiDTO {
  erro: boolean;
}

export interface IResponseSuccessDTO {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export interface IResponseDTO {
  success: boolean;
  data: IResponseErrorDTO | IResponseSuccessDTO;
}

export interface ICepServices {
  getAddress(cep: string): Promise<IResponseDTO>;
}

export interface ICepBusiness {
  getAddress(data: string): Promise<IResponseSuccessDTO>;
  getAddress2(data: string): Promise<IResponseSuccessDTO>;
}

export interface ICepController {
  show(data: Request): Promise<IResponseSuccessDTO>;
  show2(data: Request): Promise<IResponseSuccessDTO>;
}
