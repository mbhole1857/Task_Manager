import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm:FormGroup;

  constructor(private builder:FormBuilder) { }

  ngOnInit() {
    this.builForm();
  }

  builForm(){
    this.registerForm=this.builder.group({
      name:['', Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])],
      pass:['',Validators.required],
      cpass:''},{
        validator:function(form){
          const pass=form.get('pass');
          const cpass=form.get('cpass');
          if(pass.value!==cpass){
            cpass.setErrors({
              passwordMatch:true
            });
          }
          else{
            cpass.setErrors(null)
          }
        }
    });
  }

  register(){
    console.log(this.registerForm.value);
  }

}
