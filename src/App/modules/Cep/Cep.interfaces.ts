export interface ResponseErrorDTO {
  erro: string;
}

export interface ResponseErrorApiDTO {
  erro: boolean;
}
export interface ResponseSuccessDTO {
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
export interface ResponseDTO {
  success: boolean;
  data: ResponseErrorDTO | ResponseSuccessDTO;
}

export interface CepServicesDTO {
  getAddress(cep: string): Promise<ResponseDTO>;
}
