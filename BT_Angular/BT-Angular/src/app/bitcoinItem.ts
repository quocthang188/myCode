export interface Time {
  updated: string;
  updatedISO: string;
  updateduk: string;
}

export interface BpiItem {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
}

export interface BitcoinData {
  time: Time;
  disclaimer: string;
  chartName: string;
  bpi: {
    [key: string]: BpiItem;
  };
}
