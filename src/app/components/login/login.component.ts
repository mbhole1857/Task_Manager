import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:any={};

  constructor(private router:Router) { }

  ngOnInit() {
    localStorage.removeItem('user');
  }
  login(){
    if(this.model.username==='admin' && this.model.password==='admin'){
      this.router.navigate(['/task']);
      localStorage.setItem('user',this.model.username);
    }
    else{

    }
  }

}
