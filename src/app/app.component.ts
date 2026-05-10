import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { form, FormField, required, email, submit } from '@angular/forms/signals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, FormField],
})
export class AppComponent {
    userModel: WritableSignal<IUser> = signal({

    email: '',

    password: ''

  });

    loginForm = form(this.userModel, (schema) => {

    required(schema.email, { message: 'email is required' });

    email(schema.email, { message: 'email is not valid' });

    required(schema.password, { message: 'password is required' });

  });

    // 1. Data model as a signal
  userData = signal({ name: '' });

  // 2. Wrap it with form() and optional validation schema
  userForm = form(this.userData, (s) => {
    required(s.name, { message: 'Name is required' });
  });

  onSave(event: Event) {
    event.preventDefault();
    // Handle submission logic
  }
}

export interface IUser {

    email:string;

    password : string;

}
