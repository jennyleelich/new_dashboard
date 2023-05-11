import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, UntypedFormGroup } from '@angular/forms';
import { AppService } from '../app.service';
@Component({
  selector: 'app-fall',
  templateUrl: './fall.component.html',
  styleUrls: ['./fall.component.css']
})
export class FallComponent implements OnInit {
  sampleForm: UntypedFormGroup | undefined;
  constructor(private fb: FormBuilder, private appService: AppService) { }

  ngOnInit() {
    this.createForm();
    this.fillSampleForm();
  }
  createForm() {
    this.sampleForm = this.fb.group({
      id: [''],
      status: [''],
      name: [''],
      generalInformation: this.fb.group({
        teamId: [''],
        teamName: [''],
        country: [''],
        rating: ['']
      }),
      countryLevelAssessment: this.fb.group({
        teamAssessment: this.fb.array([
        ]),
        personalAssessment: this.fb.array([
          ])
        })
     });
  }
  initTeamAssessment() {
    return  this.fb.group({
      teamName: [''],
      assessment: [''],
      rating: ['']
    });
  }
  initPersonalAssessment() {
    return  this.fb.group({
      personName: [''],
      assessment: [''],
      rating: ['']
    });
  }
  addTeamAssesment() {
    const control1 = this.sampleForm?.get('countryLevelAssessment')['controls']['teamAssessment'];
    const control = <FormArray>this.sampleForm?['controls']['countryLevelAssessment']['controls'].teamAssessment;
    control.push(this.initTeamAssessment());
  }
  addPersonalAssessment() {
    const control = <FormArray>this.sampleForm['controls']['countryLevelAssessment']['controls'].personalAssessment;
    control.push(this.initPersonalAssessment());
  }
  fillSampleForm() {
    this.appService.getSampleFormData().subscribe(response => {
      const teamLength = response[0].countryLevelAssessment.teamAssessment.length;
      const personLength = response[0].countryLevelAssessment.personalAssessment.length;
      for ( let i = 0; i < teamLength - 1; i++) {
          this.addTeamAssesment();
      }
      for ( let i = 0; i < personLength; i++ ) {
        this.addPersonalAssessment();
      }
      this.sampleForm.patchValue({
        id: response[0].id,
        status: response[0].status,
        name: response[0].name,
        generalInformation: response[0].generalInformation,
        countryLevelAssessment: response[0].countryLevelAssessment,
      });
      console.log(this.sampleForm);
    });
  }
}
