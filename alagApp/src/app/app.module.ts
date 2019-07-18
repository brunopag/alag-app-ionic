import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Storage
import { IonicStorageModule } from '@ionic/storage';

// Translation Modules
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SpeakersPage } from '../pages/speakers/speakers';
import { TrabajosPage } from '../pages/trabajos/trabajos';
import { PopoverLangComponent } from '../components/popover-lang/popover-lang';
import { TranslationProvider } from '../providers/translation/translation';
import { HeaderNavbarComponent } from '../components/header-navbar/header-navbar';
import { NotificationsProvider } from '../providers/notifications/notifications';
import { PopoverNotiComponent } from '../components/popover-noti/popover-noti';
import { NotificationPage } from '../pages/notification/notification';
import { NotificationListPage } from '../pages/notification-list/notification-list';
import { ConferenciaDetailsPage } from '../pages/conferencia-details/conferencia-details';
import { PagesFavoritesListPage } from '../pages/pages-favorites-list/pages-favorites-list';
import { StartPage } from '../pages/start/start';
import { TrabajosProvider } from '../providers/trabajos/trabajos';
import { TrabajoDetailsPage } from '../pages/trabajo-details/trabajo-details';
import { CategoriaListPage } from '../pages/categoria-list/categoria-list';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    SpeakersPage,
    TrabajosPage,
    PopoverLangComponent,
    HeaderNavbarComponent,
    PopoverNotiComponent,
    NotificationPage,
    NotificationListPage,
    ConferenciaDetailsPage,
    PagesFavoritesListPage,
    StartPage,
    TrabajoDetailsPage,
    CategoriaListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    SpeakersPage,
    TrabajosPage,
    PopoverLangComponent,
    HeaderNavbarComponent,
    PopoverNotiComponent,
    NotificationPage,
    NotificationListPage,
    ConferenciaDetailsPage,
    PagesFavoritesListPage,
    StartPage,
    TrabajoDetailsPage,
    CategoriaListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TranslationProvider,
    NotificationsProvider,
    TrabajosProvider
  ]
})
export class AppModule {}
