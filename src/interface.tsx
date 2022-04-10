export interface IBaseAsset {
  name: string;
  serialNo: string;
  assignDate: string;
}
export interface IAsset extends IBaseAsset {
  id: number | string;
}
