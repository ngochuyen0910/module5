import {Component, OnInit} from '@angular/core';
import {MedicalRecordService} from "../../service/medical-record.service";
import {MedicalRecord} from "../../model/medical-record";
import {Patient} from "../../model/patient";
import {PatientService} from "../../service/patient.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  medicalRecord: MedicalRecord[];
  deleteMedicalRecord: MedicalRecord;
  p = 1;
  searchName: string;
  search1: string;
  patient: Patient[] = [];

  constructor(private medicalRecordService: MedicalRecordService,
              private patientService: PatientService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.getAllPatient();
  }

  getAllPatient() {
    this.patientService.getAll().subscribe(patient => {
      this.patient = patient;
    });
  }

  getAll() {
    this.medicalRecordService.findAll().subscribe(medicalRecord => {
      this.medicalRecord = medicalRecord;
    });
  }

  showModal(medicalRecord1: MedicalRecord) {
    this.deleteMedicalRecord = medicalRecord1;
  }

  deleteMedical() {
    this.medicalRecordService.delete(this.deleteMedicalRecord.id).subscribe(item => {
      this.medicalRecordService.findAll().subscribe(medicalRecord => {
        this.medicalRecord = medicalRecord;
        alert("Xóa thành công")
      });
    });
  }

  search() {
    if (this.searchName === undefined) {
      this.searchName = '';
    }
    if (this.search1 === undefined) {
      this.search1 = '';
    }
    this.medicalRecordService.find(this.search1, this.searchName).subscribe(medicalRecord => {
      this.medicalRecord = medicalRecord;
      this.search1 = '';
    });
  }
}
