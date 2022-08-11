import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NG_ASYNC_VALIDATORS, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../generals/product.model';
import { DataService } from '../generals/services/data.service';
import { MyCartService } from '../generals/services/my-carrito.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private dataService:DataService,
    private formBuilder: FormBuilder,
    private router: Router,
    private myCarritoService:MyCartService
    ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nameUser: ['', Validators.required],
      password: ['', Validators.required]
    });
    if (localStorage.getItem('nameUser') != null){
      this.form.controls['nameUser'].setValue(localStorage.getItem('nameUser'));
    }
    if (localStorage.getItem('password') != null){
      this.form.controls['password'].setValue(localStorage.getItem('password'));
    }
  }

  form: FormGroup;

  save(){
    if (!this.form.valid){
      alert("Error: Campos Vacios.");
    }
    else{
      let nameUser = this.form.get('nameUser')?.value;
      let password = this.form.get('password')?.value;

      this.dataService.checkUser(nameUser, password).subscribe((body:any) => {
        if(body != null){
          localStorage.setItem('nameUser',nameUser);
          localStorage.setItem('password',password);
          this.myCarritoService.usuarioRegister = true;
          this.myCarritoService.user = new User(body.id, body.nameUser);
          alert("Bienvenido " + this.myCarritoService.user.nameUser);
          this.myCarritoService.notifyChangesNameUser();
          this.router.navigate(['']);
        }
        else{
          alert("Contraseñia o Usuario incorrectos");
        }
      });
    }
  }

}
