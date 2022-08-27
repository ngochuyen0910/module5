import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MedicalRecordService} from "../../service/medical-record.service";
import {PatientService} from "../../service/patient.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Patient} from "../../model/patient";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  medicalRecordForm: FormGroup = new FormGroup({
    id: new FormControl(),
    hospitalizedDay: new FormControl('', [Validators.required]),
    hospitalDischargeDate: new FormControl('', [Validators.required]),
    reason: new FormControl('', [Validators.required]),
    method: new FormControl('', [Validators.required]),
    doctor: new FormControl('', [Validators.required]),
    patient: new FormControl('', [Validators.required])
  });
  patient: Patient[] = [];

  constructor(private medicalRecordService: MedicalRecordService,
              private patientService: PatientService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllPatient();
  }

  getAllPatient() {
    this.patientService.getAll().subscribe(patient => {
      this.patient = patient;
    });
  }

  submit() {
    const medicalRecord = this.medicalRecordForm.value;
    this.patientService.findById(medicalRecord.patient).subscribe(patient => {
      medicalRecord.patient = {
        id: patient.id,
        name: patient.name
      };
      this.medicalRecordService.save(medicalRecord).subscribe(() => {
        alert("Thêm mới thành công")
        this.router.navigate([]);
        this.medicalRecordForm.reset();
      }, e => console.log(e));
    });
  }
}
