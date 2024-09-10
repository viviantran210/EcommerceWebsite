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
  cardNumberError = false;
  expDateError = false;
  cvvError = false;
  cardError: string | null = null;
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
    cardCtrl: ['', [Validators.required, Validators.pattern('^[0-9]{15}(?:[0-9]{1})?$')]],
    expirationDateCtrl: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/[0-9]{2}$')]],
    cvvCtrl: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]]
  });

  validateCard() {
    const cardNumber = this.fourthFormGroup.value.cardCtrl;
    const expirationDate = this.fourthFormGroup.value.expirationDateCtrl;
    const cvv = this.fourthFormGroup.value.cvvCtrl;

    const cardValidation = cardValidator.number(cardNumber);
    if (!cardValidation.isValid) {
      this.cardNumberError = true;
    }

    const expirationValidation = cardValidator.expirationDate(expirationDate);
    if (!expirationValidation.isValid) {
      this.expDateError = true
    }

    const cvvValidation = cardValidator.cvv(cvv);
    if (!cvvValidation.isValid) {
      this.cvvError = true;
    }
    if (!this.cardNumberError && !this.expDateError && !this.cvvError) {
      this.cardError = null;
    }
    else {
      this.cardError = "Card verification failed."
      if (this.cardNumberError) {
        this.cardError = this.cardError.concat(" Card number is not valid.");
      }
      if (this.expDateError) {
        this.cardError = this.cardError.concat(" Expiration Date is not valid.");
      }
      if (this.cvvError) {
        this.cardError = this.cardError.concat(" CVV number is not valid.");
      }
    }

    this.onSubmit();
  }

  onSubmit() {
    if (this.cardError) {
      alert(this.cardError);
      return;
    }
  }

}
