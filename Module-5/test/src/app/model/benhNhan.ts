import {BenhAn} from "./benhAn";

export interface BenhNhan {
  id?: number,
  ma?: string,
  ten?: string,
  ngayNhapVien?: string,
  ngayRaVien?: string,
  lyDo?: string,
  phuongPhap?: string,
  bacSi?: string,
  benhAn?: BenhAn,
}
