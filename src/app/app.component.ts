import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'first-web-app';

  constructor(private translateService: TranslateService, private titleService: Title) {
    translateService.setDefaultLang('en');
    translateService.get('app.title').subscribe(localTitle => titleService.setTitle(localTitle));
  }
}
