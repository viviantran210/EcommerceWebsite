import { Component } from '@angular/core';
import  {FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
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
    cardCtrl: ['', Validators.required],
    expirationDateCtrl: ['', Validators.required],
    cvcCtrl: ['', Validators.required]
  });
}
