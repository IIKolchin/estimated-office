import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from '../../services/utils.service';
import emailMask from 'text-mask-addons/dist/emailMask';

@Component({
  selector: 'app-register-section',
  templateUrl: './register-section.component.html',
  styleUrls: ['./register-section.component.scss'],
})
export class RegisterSectionComponent {
  form: FormGroup;
  emailMask = emailMask;
  constructor(private utilsService: UtilsService) {
    this.form = new FormGroup({
      username: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl<string>('', [
        Validators.required,
        Validators.pattern(/^\S+@\S+\.\S+$/),
      ]),
    });
  }

  get username() {
    return this.form.controls.username as FormControl;
  }

  get email() {
    return this.form.controls.email as FormControl;
  }

  submit() {
    this.utilsService.createUser(this.form.value).then((res) => {
      console.log(res);
    });
  }
}
