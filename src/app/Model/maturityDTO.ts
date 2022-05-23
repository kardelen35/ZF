export class MaturityDTO {
    id: number;
    sDText: string | null;
    projectNumber: string;
    version: string;
    softwareDimensionId: number;
    plannedValue: number;
    actualValue: number;
    date: Date | string;
  }