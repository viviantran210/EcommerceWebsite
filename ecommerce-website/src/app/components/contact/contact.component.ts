import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  FormData!: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.FormData = this._formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]{1,}\b$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]{1,}\b$/)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
      phoneNumber: ['', Validators.pattern(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.FormData.valid) {
      alert('Form Submitted!');
    } else {
      alert('Form is not valid');
    }
  }
}
