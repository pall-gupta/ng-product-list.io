import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent {
 
contactForm = new FormGroup({
  firstname: new FormControl(),
  lastname: new FormControl(),
  email: new FormControl(),
  gender: new FormControl(),
  isMarried: new FormControl(),
  country: new FormControl()
})
     isShow:boolean=false;
onSubmit() {
  
  this.isShow=true;
  console.log(this.contactForm.value);
  // this.contactForm.reset();
}
 
}
