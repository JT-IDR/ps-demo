import {Component} from '@angular/core';
import {UserSettings} from "../data/user-settings.model";
import {NgForm, NgModel} from "@angular/forms";

@Component({
  selector: 'app-user-settings-from',
  templateUrl: './user-settings-from.component.html',
  styleUrls: ['./user-settings-from.component.css'],
})
export class UserSettingsFromComponent {
  isInvalid: boolean | null = false;
  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  }
  userSettings: UserSettings = {...this.originalUserSettings}

  onSubmit(form: NgForm) {

    console.log('in onSubmit ', form.valid);
  }

  onBlur( form: NgForm, nameField: NgModel) {
    return this.isInvalid = !form.submitted || nameField.valid;
  }
}
