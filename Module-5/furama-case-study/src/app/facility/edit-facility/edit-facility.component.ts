import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FacilityService} from "../../service/facility.service";
import {FacilityType} from "../../model/facility-type";
import {FacilityTypeService} from "../../service/facility-type.service";
import {RentType} from "../../model/rent-type";
import {RentTypeService} from "../../service/rent-type.service";

@Component({
  selector: 'app-edit-facility',
  templateUrl: './edit-facility.component.html',
  styleUrls: ['./edit-facility.component.css']
})
export class EditFacilityComponent implements OnInit, OnChanges {
  facilityForm: FormGroup;
  facilityType: FacilityType[];
  rentType: RentType[];
  id: number;

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const facility = this.getFacility(this.id);
      this.facilityForm = new FormGroup({
        id: new FormControl(facility.id),
        facilityName: new FormControl(facility.facilityName, [Validators.required,
          Validators.pattern('[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
            '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+' +
            '(([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
            '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+)' +
            '|([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]))+')]),
        facilityType: new FormControl('', [Validators.required]),
        area: new FormControl(facility.area, [Validators.required]),
        cost: new FormControl(facility.cost, [Validators.required]),
        maxPeople: new FormControl(facility.maxPeople, [Validators.required]),
        standardRoom: new FormControl(facility.standardRoom, [Validators.required, Validators.pattern('^[1-9]+')]),
        descriptionOtherConvenience: new FormControl(facility.descriptionOtherConvenience, [Validators.required]),
        poolArea: new FormControl(facility.poolArea, [Validators.required, Validators.pattern('^[1-9]+')]),
        numberOfFloors: new FormControl(facility.numberOfFloors, [Validators.required]),
        facilityFree: new FormControl(facility.facilityFree, [Validators.required]),
        rentType: new FormControl(facility.rentType, [Validators.required]),
      });
    });
    this.facilityType = this.facilityTypeService.getALl();
    this.rentType = this.rentTypeService.getAll();
  }

  ngOnInit(): void {
  }

  getFacility(id: number) {
    return this.facilityService.findById(id);
  }

  updateFacility(id: number) {
    const facility = this.facilityForm.value;
    this.facilityService.updateFacility(id, facility);
    this.router.navigate(['/facility']);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const facility = this.getFacility(this.id);
    this.facilityForm = new FormGroup(
      {
        id: new FormControl(facility.id),
        facilityName: new FormControl(facility.facilityName),
        area: new FormControl(facility.area),
        cost: new FormControl(facility.cost),
        maxPeople: new FormControl(facility.maxPeople),
        standardRoom: new FormControl(facility.standardRoom),
        descriptionOtherConvenience: new FormControl(facility.descriptionOtherConvenience),
        poolArea: new FormControl(facility.poolArea),
        numberOfFloors: new FormControl(facility.numberOfFloors),
        facilityFree: new FormControl(facility.facilityFree),
      }
    )
  }

  type = "";

  getType(event) {
    this.type = event.target.value;
  }
}
