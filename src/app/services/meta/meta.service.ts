import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(
    private meta: Meta,
    private title: Title) { }

  updateMeta(data: MetaDataExport) {
    if (data.title) {
      this.title.setTitle(data.title);
    }

    if (data.description) {
      const descTag = this.meta.getTag("description");
      if (descTag) {
        this.meta.updateTag({ name: 'description', content: data.description });
      } else {
        this.meta.addTag({ name: 'description', content: data.description });
      }
    }
  }
}

export interface MetaDataExport {
  title: string;
  description: string;
  keywords?: Array<string>;
  isIndexable?: boolean;
  isCannonical?: boolean;
}
