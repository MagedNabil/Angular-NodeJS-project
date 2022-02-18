import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'sign-up-form',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUPComponent implements OnInit {

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
  }

  // profileForm = new FormGroup({

  //   name: new FormControl(''),
  //   specialization: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });

  profileForm = this.fb.group({
    name: ['', [Validators.required, , Validators.pattern("^[a-zA-Z0-9_-]{8,15}$")]],
    specialization: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_-]{8,15}$")]],
    email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],

    address: this.fb.group({
      street: ['', [Validators.pattern("^[a-zA-Z0-9_-]{8,15}$")]],
      city: ['', [Validators.pattern("^[a-zA-Z0-9_-]{8,15}$")]],
      state: ['', [Validators.pattern("^[a-zA-Z0-9_-]{8,15}$")]],
      zip: ['', [Validators.pattern("^[a-zA-Z0-9_-]{8,15}$")]]
    }),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  get name() {
    return this.profileForm.get('name');
  }



}



//  phone array   error message
