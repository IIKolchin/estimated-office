import {Injectable} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IUser } from '../models/user';
import { URL } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor() {}


 private checkResponse = (res: Response) => {
    if (res.ok) {
      return res.json();
    }
    return res.json().then((err) => {
      return Promise.reject(err);
    });
  };

   createUser = async (user: FormGroup) => {
    const res = await fetch(`${URL}/signup/`, {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(user),
     });
     return this.checkResponse(res);
  };

  scroll(id: string): void {
    const el: HTMLElement|null = document.getElementById(id);
    if (el) {
        el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }
  }
}
