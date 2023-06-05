import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta/meta.service';

@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.page.html',
  styleUrls: ['./after-login.page.scss'],
})
export class AfterLoginPage implements OnInit {

  constructor(
    private metaService: MetaService) { 
      this.metaService.updateMeta({
        title: 'After login page',
        description: 'Description for meta data of After login page'
      })
    }

  ngOnInit() {
  }

}
