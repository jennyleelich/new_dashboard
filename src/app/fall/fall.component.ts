
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { AppService } from '../app.service';
@Component({
  selector: 'app-fall',
  templateUrl: './fall.component.html',
  styleUrls: ['./fall.component.css']
})
export class FallComponent implements OnInit {
  sampleForm: FormGroup | undefined;
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
    const control = <FormArray>this.sampleForm?.get('countryLevelAssessment.teamAssessment');
    control.push(this.initTeamAssessment());
  }
  addPersonalAssessment() {
    const control = <FormArray> this.sampleForm?.get('countryLevelAssessment.personalAssessment');
    control.push(this.initPersonalAssessment());
  }
  fillSampleForm() {
    this.appService.getSampleFormData().subscribe(response => {
      const teamLength = response.countryLevelAssessment.teamAssessment.length;
      const personLength = response.countryLevelAssessment.personalAssessment.length;
      for ( let i = 0; i < teamLength - 1; i++) {
          this.addTeamAssesment();
      }
      for ( let i = 0; i < personLength; i++ ) {
        this.addPersonalAssessment();
      }
      this.sampleForm?.patchValue({
        id: response.id,
        status: response.status,
        name: response.name,
        generalInformation: response.generalInformation,
        countryLevelAssessment: response.countryLevelAssessment,
      });
      console.log(this.sampleForm);
    });
  }
}

