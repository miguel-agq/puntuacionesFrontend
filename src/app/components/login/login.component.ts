import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(public formBuilder: FormBuilder, public authService: AuthService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['angel@gmail.com', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(formValue) {
    this.authService.login(formValue.email, formValue.password).subscribe(
      result => {
        const datos = JSON.stringify( {email: formValue.email, token: result } );
        localStorage.setItem('currentUser', datos);
      },
      error => console.log(error)
    );
    // alert('Se ha enviado el formulario correctamente:' + formValue.email + ' ' + formValue.password);
  }

}
