declare module '@apiverve/solarpotential' {
  export interface solarpotentialOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface solarpotentialResponse {
    status: string;
    error: string | null;
    data: SolarPotentialData;
    code?: number;
  }


  interface SolarPotentialData {
      coordinates:   Coordinates;
      usableHours:   UsableHours;
      bestDirection: string;
      cloudFactor:   number;
      disclaimer:    string;
  }
  
  interface Coordinates {
      latitude:  number;
      longitude: number;
  }
  
  interface UsableHours {
      avgDailyUsableSunlightHours:       number;
      yearlyUsableSunlightHoursRaw:      number;
      adjustedYearlyUsableSunlightHours: number;
  }

  export default class solarpotentialWrapper {
    constructor(options: solarpotentialOptions);

    execute(callback: (error: any, data: solarpotentialResponse | null) => void): Promise<solarpotentialResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: solarpotentialResponse | null) => void): Promise<solarpotentialResponse>;
    execute(query?: Record<string, any>): Promise<solarpotentialResponse>;
  }
}
