import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesFavoritesListPage } from './pages-favorites-list';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PagesFavoritesListPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesFavoritesListPage),
    TranslateModule.forChild()
  ],
})
export class PagesFavoritesListPageModule {}
