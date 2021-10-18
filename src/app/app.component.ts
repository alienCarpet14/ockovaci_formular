import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  // title = 'swissRe';

  
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        name: ['',[
         Validators.required,
        Validators.minLength(2)]],
        surname: ['',[
          Validators.required,
         Validators.minLength(2)]],
        id: ['', [
          Validators.required, 
          Validators.pattern("^[0-9]*$"),
          Validators.minLength(10), 
          Validators.maxLength(10),
        ]],
        sex: ['', Validators.required],
        picker: ['', Validators.required],
        street: ['', Validators.required],
        number: ['', Validators.required],
        postal: ['', [
          Validators.required, 
          Validators.pattern(/^[0-9]*$/),
          Validators.minLength(5), 
          Validators.maxLength(5)]],
        town: ['', Validators.required],
        insurance: ['', Validators.required],
        telephone: ['', [Validators.required,
          Validators.pattern(/^[0-9]{10}|\+[0-9]{3}[0-9]{9}$/),
        ]],
        
        mail: ['', [Validators.required, Validators.email]],
        // validates date format yyyy-mm-dd
        // dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
        
    });
}

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.registerForm.reset();
}

}

