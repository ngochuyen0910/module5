import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MedicalRecordService} from "../../service/medical-record.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {PatientService} from "../../service/patient.service";
import {Patient} from "../../model/patient";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: string;
  medicalRecordForm: FormGroup;

  constructor(private medicalRecordService: MedicalRecordService,
              private patientService: PatientService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getMedicalRecord(this.id);
    });
  }

  patient: Patient[] = []

  getAllPatient() {
    this.patientService.getAll().subscribe(patient => {
      this.patient = patient;
    });
  }

  ngOnInit(): void {
    this.getAllPatient();
  }

  getMedicalRecord(id: string) {
    return this.medicalRecordService.findById(id).subscribe(medicalRecord => {
      this.medicalRecordForm = new FormGroup({
        id: new FormControl(medicalRecord.id),
        hospitalizedDay: new FormControl(medicalRecord.hospitalizedDay, [Validators.required]),
        hospitalDischargeDate: new FormControl(medicalRecord.hospitalDischargeDate, [Validators.required]),
        reason: new FormControl(medicalRecord.reason, [Validators.required]),
        method: new FormControl(medicalRecord.method, [Validators.required]),
        doctor: new FormControl(medicalRecord.doctor, [Validators.required]),
        patient: new FormControl(medicalRecord.patient.id, [Validators.required])
      });
    });
  }

  updateMedicalRecord(id: string) {
    const medicalRecord = this.medicalRecordForm.value;
    this.patientService.findById(medicalRecord.patient).subscribe(patient => {
      medicalRecord.patient = {
          id: patient.id,
          name: patient.name
        };
        this.medicalRecordService.update(id, medicalRecord).subscribe(() => {
          alert('Cập nhật thành công');
          this.router.navigate(['']);
        });
      }
    );
  }
}

