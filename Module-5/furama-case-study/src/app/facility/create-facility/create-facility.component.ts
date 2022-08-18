import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../../service/facility.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit, OnChanges {
  facilityForm: FormGroup = new FormGroup(
    {
      id: new FormControl(),
      facilityName: new FormControl('', [Validators.required, Validators.pattern('[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
        '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+' +
        '(([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
        '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+)' +
        '|([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]))+')]),
      facilityType: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
      cost: new FormControl('', [Validators.required]),
      maxPeople: new FormControl('', [Validators.required]),
      standardRoom: new FormControl('', [Validators.required, Validators.pattern('^[1-9]+')]),
      descriptionOtherConvenience: new FormControl('', [Validators.required]),
      poolArea: new FormControl('', [Validators.required, Validators.pattern('^[1-9]+')]),
      numberOfFloors: new FormControl('', [Validators.required]),
      facilityFree: new FormControl('', [Validators.required]),
      rentType: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required])
    }
  )

  constructor(private facilityService: FacilityService,
              private router: Router) {
  }

  ngOnInit(): void {

  }

  submit() {
    const facility = this.facilityForm.value;
    this.facilityService.save(facility);
    this.facilityForm.reset();
    this.router.navigate(['/facility']);
  }

  type = "";

  getType(event) {
    this.type = event.target.value;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.facilityForm = new FormGroup(
      {
        id: new FormControl(),
        facilityName: new FormControl(),
        facilityType: new FormControl(''),
        area: new FormControl(),
        cost: new FormControl(),
        maxPeople: new FormControl(),
        standardRoom: new FormControl(),
        descriptionOtherConvenience: new FormControl(),
        poolArea: new FormControl(),
        numberOfFloors: new FormControl(),
        facilityFree: new FormControl(),
        image: new FormControl(),
        rentType: new FormControl()
      }
    )
  }
}
