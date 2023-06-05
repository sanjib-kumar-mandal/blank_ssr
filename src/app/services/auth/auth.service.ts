import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from 'src/app/components/auth/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn!: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private modalctrl: ModalController) { }

  tryLogin = async (): Promise<boolean> => {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isUserLoggedIn) {
        return Promise.resolve(true);
      } else {
        const modal = await this.modalctrl.create({
          component: LoginComponent
        })
        await modal.present();
        const { data, role } = await modal.onDidDismiss();
        if (role === 'confirm') {
          return Promise.resolve(true);
        } else {
          return Promise.resolve(false);
        }
      }
    } else {
      return Promise.resolve(false);
    }
  }
}
