import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta/meta.service';

@Component({
  selector: 'app-after-login-two',
  templateUrl: './after-login-two.page.html',
  styleUrls: ['./after-login-two.page.scss'],
})
export class AfterLoginTwoPage implements OnInit {

  constructor(
    private metaService: MetaService) { 
      this.metaService.updateMeta({
        title: 'After login two page',
        description: 'Description for meta data of After login two page'
      })
    }

  ngOnInit() {
  }

}
