declare module '@apiverve/solarpotential' {
  export interface solarpotentialOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface solarpotentialResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class solarpotentialWrapper {
    constructor(options: solarpotentialOptions);

    execute(callback: (error: any, data: solarpotentialResponse | null) => void): Promise<solarpotentialResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: solarpotentialResponse | null) => void): Promise<solarpotentialResponse>;
    execute(query?: Record<string, any>): Promise<solarpotentialResponse>;
  }
}
