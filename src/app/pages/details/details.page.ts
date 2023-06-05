import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta/meta.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(
    private metaService: MetaService) { 
      this.metaService.updateMeta({
        title: 'Details page',
        description: 'Description for meta data of details page'
      })
    }

  ngOnInit() {
    
  }

}
