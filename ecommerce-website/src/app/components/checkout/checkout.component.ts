import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import cardValidator from 'card-validator';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule
   ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  constructor(private _formBuilder: FormBuilder) {}

  firstFormGroup = this._formBuilder.group({
    nameCtrl: ['', Validators.required],
    emailCtrl: ['', [Validators.required, Validators.email]]
  });

  secondFormGroup = this._formBuilder.group({
    addressCtrl: ['', Validators.required],
    suiteCtrl: [''],
    cityCtrl: ['', Validators.required],
    stateCtrl: ['', Validators.required],
    zipCtrl: ['', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]]
  });

  thirdFormGroup = this._formBuilder.group({
    discountCtrl: ['']
  });

  fourthFormGroup = this._formBuilder.group({
    cardCtrl: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
    expirationDateCtrl: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/\d{2}$')]],
    cvvCtrl: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]]
  });

}
