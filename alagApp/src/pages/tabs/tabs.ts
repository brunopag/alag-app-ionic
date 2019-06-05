import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { SpeakersPage } from '../speakers/speakers';
import { TrabajosPage } from '../trabajos/trabajos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = SpeakersPage;
  tab4Root = TrabajosPage;

  constructor() {

  }
}
