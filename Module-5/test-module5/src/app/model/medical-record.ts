import {Patient} from "./patient";

export interface MedicalRecord {
  id?: number;
  hospitalizedDay?: string;
  hospitalDischargeDate?: string;
  reason?: string;
  method?: string;
  doctor?: string;
  patient?: Patient;
}
