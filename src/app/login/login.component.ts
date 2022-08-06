import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NG_ASYNC_VALIDATORS, Validators } from '@angular/forms';
import { DataService } from '../generals/services/data.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private dataService:DataService,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      mail: ['', Validators.required],
      password: ['', Validators.required]
    });
    if (localStorage.getItem('mail') != null){
      this.form.controls['mail'].setValue(localStorage.getItem('mail'));
    }
    if (localStorage.getItem('password') != null){
      this.form.controls['password'].setValue(localStorage.getItem('paswword'));
    }
  }

  form: FormGroup;

  save(){
    if (!this.form.valid){
      alert("Error: Campos Vacios.");
    }
    else{
      let mail = this.form.get('mail')?.value;
      let password = this.form.get('password')?.value;

      this.dataService.checkUser().subscribe((body:any) => {
        if(body.content.length() != 0){
          localStorage.setItem('mail',mail);
          localStorage.setItem('password',password);
        }
        else{
          alert("Error: Revise sus campos.");
        }
      });

    }
  }

}
