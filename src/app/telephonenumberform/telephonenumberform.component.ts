import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-telephonenumberform',
  templateUrl: './telephonenumberform.component.html',
  styleUrls: ['./telephonenumberform.component.css']
})
export class TelephonenumberformComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  phoneNumber: number;

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  // only number will be add
  keyPress(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
       phonenumber: ['',
        [ Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(7),
          Validators.maxLength(10)]]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;
      this.phoneNumber = this.form.get('phonenumber').value;

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      this.router.navigateByUrl('/displayresults/' + this.phoneNumber + '/0');
  }
}
