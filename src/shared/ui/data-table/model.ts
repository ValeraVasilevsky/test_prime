export interface VDataTableHeader {
  field: string;
  header: string;
}

export type VDataTableItem = Record<VDataTableHeader["field"], string>;
