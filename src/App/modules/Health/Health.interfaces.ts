export interface IHealthBusinessReponseDTO {
  server: {
    status: 'OK';
  };
  database: {
    status: 'OK' | 'ERROR';
  };
  redis: {
    status: 'OK' | 'ERROR';
  };
}

export interface IHealthBusiness {
  getHealth(): Promise<IHealthBusinessReponseDTO>;
}

export interface IHealthController {
  show(): Promise<IHealthBusinessReponseDTO>;
}
