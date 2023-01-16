import {Component} from '@angular/core';
import {UserSettings} from "../data/user-settings.model";

@Component({
  selector: 'app-user-settings-from',
  templateUrl: './user-settings-from.component.html',
  styleUrls: ['./user-settings-from.component.css'],
  // exportAs: 'userForm'
})
export class UserSettingsFromComponent {
  originalUserSettings: UserSettings = {
    name: 'Minalan Spellmonger',
    emailOffers: false,
    interfaceStyle: 'dark',
    subscriptionType: 'monthly',
    notes: `He's the best wizard in the world!`
  }
  userSettings: UserSettings = {...this.originalUserSettings }
}
