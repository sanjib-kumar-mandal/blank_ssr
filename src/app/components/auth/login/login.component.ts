import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platform: any,
    private modalCtrl: ModalController) { }

  ngOnInit() { }
  
  dismiss(state: boolean) {
    if (isPlatformBrowser(this.platform)) {
      this.modalCtrl.dismiss('', state ? 'confirm' : 'cancel')
    }
  }

}
