export type KarmaType = 'good' | 'bad';

export interface KarmaEntry {
  id: string;
  type: KarmaType;
  description: string;
  timestamp: string;
}

export interface KarmaStats {
  good: number;
  bad: number;
  net: number;
}


