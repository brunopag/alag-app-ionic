webpackJsonp([13],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the TrabajosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TrabajosProvider = /** @class */ (function () {
    function TrabajosProvider(http) {
        this.http = http;
        console.log('Hello TrabajosProvider Provider');
    }
    TrabajosProvider.prototype.getAllCategoriasTrabajos = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__config_config__["b" /* URL_SERVICES */] + '/categoriatrabajo';
        return this.http.get(url, {}).map(function (resp) {
            return resp.categoriasTrabajo;
        });
    };
    TrabajosProvider.prototype.getCategoriaContrabajos = function (categoria_id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config_config__["b" /* URL_SERVICES */] + '/categoriatrabajo/get/categoriasConTrabajos?id=' + categoria_id + '&congreso_id=' + __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* CONGRESO_ID */];
        return this.http.get(url, {}).map(function (resp) {
            return resp;
        });
    };
    TrabajosProvider.prototype.busquedaTrabajos = function (busqueda) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config_config__["b" /* URL_SERVICES */] + '/trabajo/buscar/' + __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* CONGRESO_ID */] + '/' + busqueda;
        return this.http.get(url, {}).map(function (resp) {
            return resp;
        });
    };
    TrabajosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], TrabajosProvider);
    return TrabajosProvider;
}());

//# sourceMappingURL=trabajos.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_trabajos_trabajos__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_translation_translation__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriaListPage = /** @class */ (function () {
    function CategoriaListPage(navCtrl, navParams, _TrabajosProvider, loadingCtrl, _translationProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._TrabajosProvider = _TrabajosProvider;
        this.loadingCtrl = loadingCtrl;
        this._translationProvider = _translationProvider;
        this.categoriasSelect = [];
        this.navegacionCategorias = [];
        this.homeNavegacion();
    }
    CategoriaListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoriaListPage');
    };
    CategoriaListPage.prototype.seleccionarCategoria = function (categoria) {
        var _this = this;
        console.log(categoria);
        this.navegacionCategorias.push(categoria);
        if (categoria.childrens && categoria.childrens.length > 0) {
            this.categoriasSelect = categoria.childrens;
        }
        else {
            this.callback = this.navParams.get("callback");
            this.callback({ categoria: categoria, categoriasNavegacion: this.navegacionCategorias }).then(function () {
                _this.navCtrl.pop();
            });
        }
    };
    CategoriaListPage.prototype.navegarCategoria = function (i, categoria) {
        if (categoria.childrens && categoria.childrens.length > 0) {
            this.categoriasSelect = categoria.childrens;
        }
        this.navegacionCategorias.splice(i + 1, this.navegacionCategorias.length - 1);
    };
    CategoriaListPage.prototype.homeNavegacion = function () {
        var _this = this;
        this.navegacionCategorias = [];
        this.categoriasSelect = [];
        var loading = this.loadingCtrl.create({
            content: 'Cargando Categorias y Sub-categorias...'
        });
        loading.present();
        this._TrabajosProvider.getAllCategoriasTrabajos().subscribe(function (categoriasTrabajos) {
            console.log(categoriasTrabajos);
            for (var _i = 0, categoriasTrabajos_1 = categoriasTrabajos; _i < categoriasTrabajos_1.length; _i++) {
                var categoriaTrabajo = categoriasTrabajos_1[_i];
                if (!categoriaTrabajo.parent) {
                    _this.categoriasSelect.push(categoriaTrabajo);
                }
            }
            loading.dismiss();
            console.log('Categorias Padres', _this.categoriasSelect);
        });
    };
    CategoriaListPage.prototype.getNombreByLang = function (objeto) {
        if (this._translationProvider.lang === 'es') {
            objeto.nombre_lang = objeto.nombre_es;
        }
        else if (this._translationProvider.lang === 'en') {
            objeto.nombre_lang = objeto.nombre_en;
        }
        return objeto.nombre_lang;
    };
    CategoriaListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categoria-list',template:/*ion-inline-start:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\categoria-list\categoria-list.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{ \'trabajos.categoryTitle\' | translate }}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div style="margin-top: 10px;margin-left: 10px;">\n        <button ion-button small clear style="padding:0px;" (click)="homeNavegacion()">Home ></button>\n        <button ion-button small clear style="padding:0px;" *ngFor="let categoria of navegacionCategorias, let i = index" (click)="navegarCategoria(i, categoria)">\n            {{ getNombreByLang(categoria) }} <span *ngIf="i !== navegacionCategorias.length-1">&nbsp;></span>\n        </button>\n    </div>\n\n    <ion-list *ngIf="categoriasSelect.length > 0">\n        <ion-item *ngFor="let categoria of categoriasSelect" (click)="seleccionarCategoria(categoria)">\n            <h2>{{ getNombreByLang(categoria) }}</h2>\n            <button ion-button icon clear item-right>\n                <ion-icon name="arrow-forward"></ion-icon>\n            </button>\n        </ion-item>\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\categoria-list\categoria-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_trabajos_trabajos__["a" /* TrabajosProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_translation_translation__["a" /* TranslationProvider */]])
    ], CategoriaListPage);
    return CategoriaListPage;
}());

//# sourceMappingURL=categoria-list.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoCentroConvencionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plano_auditorio_plano_auditorio__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InfoCentroConvencionPage = /** @class */ (function () {
    function InfoCentroConvencionPage(navCtrl, navParams, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
    }
    InfoCentroConvencionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoCentroConvencionPage');
    };
    InfoCentroConvencionPage.prototype.verPlano = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__plano_auditorio_plano_auditorio__["a" /* PlanoAuditorioPage */]);
    };
    InfoCentroConvencionPage.prototype.navegarPaginaWeb = function (url) {
        this.iab.create(url, '_system');
    };
    InfoCentroConvencionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info-centro-convencion',template:/*ion-inline-start:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\info-centro-convencion\info-centro-convencion.html"*/'<!--\n  Generated template for the InfoCentroConvencionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>Centro de Convencion</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n        <img src="../../assets/imgs/CE4.jpg" />\n        <ion-card-content>\n            <ion-card-title>\n                {{ \'info.lugar1\' | translate }}\n            </ion-card-title>\n\n            <p>{{ \'info.lugar2\' | translate }}</p>\n            <ion-item>\n                <button (click)="navegarPaginaWeb(\'http://www.inforsap.com/img/plano-congreso-alag.jpg\')" ion-button icon-start clear item-center>\n              <ion-icon name="map"></ion-icon>\n              {{ \'info.planoBoton\' | translate }}\n            </button>\n            </ion-item>\n            <hr>\n            <p>{{ \'info.lugar3\' | translate }}</p>\n            <ion-item>\n                <h3>{{ \'info.lugar4\' | translate }}</h3>\n            </ion-item>\n            <p>{{ \'info.lugar5\' | translate }}</p>\n            <ion-item>\n                <h3>{{ \'info.lugar6\' | translate }}</h3>\n            </ion-item>\n            <p>{{ \'info.lugar7\' | translate }}</p>\n            <ion-item>\n                <h3>{{ \'info.lugar8\' | translate }}</h3>\n            </ion-item>\n            <p>{{ \'info.lugar9\' | translate }}</p>\n            <ion-item>\n                <h3>{{ \'info.lugar10\' | translate }}</h3>\n            </ion-item>\n            <p>{{ \'info.lugar11\' | translate }}</p>\n\n        </ion-card-content>\n    </ion-card>\n</ion-content>cd'/*ion-inline-end:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\info-centro-convencion\info-centro-convencion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], InfoCentroConvencionPage);
    return InfoCentroConvencionPage;
}());

//# sourceMappingURL=info-centro-convencion.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanoAuditorioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_viewer__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PlanoAuditorioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlanoAuditorioPage = /** @class */ (function () {
    function PlanoAuditorioPage(navCtrl, navParams, photoViewer, file) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.photoViewer = photoViewer;
        this.file = file;
        this.url = 'http://www.inforsap.com/img/plano-congreso-alag.jpg';
    }
    PlanoAuditorioPage.prototype.viewPhoto = function (imageName) {
        var _this = this;
        var ROOT_DIRECTORY = this.file.applicationStorageDirectory; //'file:///sdcard//';
        var downloadFolderName = 'tempDownloadFolder';
        //Create a folder in memory location
        this.file.createDir(ROOT_DIRECTORY, downloadFolderName, true)
            .then(function (entries) {
            //Copy our asset/img/plano-1.jpg to folder we created
            _this.file.copyFile(_this.file.applicationDirectory + "www/assets/imgs/planos/", imageName, ROOT_DIRECTORY + downloadFolderName + '//', imageName)
                .then(function (entries) {
                _this.photoViewer.show(ROOT_DIRECTORY + downloadFolderName + "/" + imageName, 'Do you want to Share', { share: true });
            })
                .catch(function (error) {
                alert('1 error ' + JSON.stringify(error));
            });
        })
            .catch(function (error) {
            alert('2 error' + JSON.stringify(error));
        });
    };
    PlanoAuditorioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlanoAuditorioPage');
    };
    PlanoAuditorioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-plano-auditorio',template:/*ion-inline-start:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\plano-auditorio\plano-auditorio.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{ \'info.planoBoton\' | translate }}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <img src="{{url}}" alt="Doble click para agrandar">\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\plano-auditorio\plano-auditorio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */]])
    ], PlanoAuditorioPage);
    return PlanoAuditorioPage;
}());

//# sourceMappingURL=plano-auditorio.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_notifications_notifications__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_notification__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Storage Module


/**
 * Generated class for the NotificationListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationListPage = /** @class */ (function () {
    function NotificationListPage(navCtrl, navParams, _notificationsProvider, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._notificationsProvider = _notificationsProvider;
        this.storage = storage;
        this.notificationsQty = 2;
        this.loadNotification();
    }
    NotificationListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationListPage');
    };
    NotificationListPage.prototype.loadNotification = function () {
        var _this = this;
        console.log('se ejecuto el load');
        this._notificationsProvider.getNotifications().subscribe(function (resp) {
            var notificationsFromServer = resp.notifications;
            _this.storage.get('notificationsStorage').then(function (data) {
                if (data === null) {
                    // Si no hay cargada ninguna notificacion en el storage
                    for (var _i = 0, notificationsFromServer_1 = notificationsFromServer; _i < notificationsFromServer_1.length; _i++) {
                        var notification = notificationsFromServer_1[_i];
                        notification.read = false;
                    }
                    _this.storage.set('notificationsStorage', notificationsFromServer).then(function () {
                        console.log('notifications updated');
                        _this.notifications = notificationsFromServer;
                        _this.notificationsQty = _this.notifications.filter(function (noti) { return noti.read; }).length;
                        console.log(_this.notifications);
                    });
                }
                else {
                    var _loop_1 = function (notification) {
                        var resultado = data.find(function (notiStorage) { return notiStorage._id === notification._id; });
                        if (!resultado) {
                            console.log('se ejecuto no hay resultado');
                            notification.read = false;
                            data.unshift(notification);
                        }
                    };
                    // Si ya hay notificaciones en el storage
                    for (var _a = 0, notificationsFromServer_2 = notificationsFromServer; _a < notificationsFromServer_2.length; _a++) {
                        var notification = notificationsFromServer_2[_a];
                        _loop_1(notification);
                    }
                    console.log(data);
                    _this.storage.set('notificationsStorage', data).then(function () {
                        _this.notifications = data;
                        console.log('se ejecuto!');
                        _this.notificationsQty = _this.notifications.filter(function (noti) { return !noti.read; }).length;
                    });
                }
            });
        });
    };
    NotificationListPage.prototype.getDateFormat = function (timestamp) {
        return new Date(timestamp);
    };
    NotificationListPage.prototype.seeNotificationDetails = function (notification) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__notification_notification__["a" /* NotificationPage */], { notification: notification });
    };
    NotificationListPage.prototype.ionViewDidEnter = function () {
        this.loadNotification();
    };
    NotificationListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification-list',template:/*ion-inline-start:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\notification-list\notification-list.html"*/'<!--\n\n  Generated template for the NotificationListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            <img src="../../assets/imgs/logo_alag.png" alt="">\n\n\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h1>{{ \'header.notification\' | translate }}</h1>\n\n    <ion-list>\n\n        <ion-item [ngClass]="{\'new-noti\': !notification.read}" *ngFor="let notification of notifications" (click)="seeNotificationDetails(notification)">\n\n            <ion-label style="white-space: unset !important;">\n\n                <ion-icon item-left name="mail"></ion-icon>\n\n                <h2>{{ notification.titulo_es }}</h2>\n\n                <p>{{ getDateFormat(notification.fechaNotification) | date : "dd.MM.y" }}</p>\n\n            </ion-label>\n\n            <button ion-button icon clear item-right>\n\n                <ion-icon name="arrow-forward"></ion-icon>\n\n            </button>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\notification-list\notification-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_notifications_notifications__["a" /* NotificationsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], NotificationListPage);
    return NotificationListPage;
}());

//# sourceMappingURL=notification-list.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPatrocinadoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the InfoPatrocinadoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoPatrocinadoresPage = /** @class */ (function () {
    function InfoPatrocinadoresPage(navCtrl, navParams, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
    }
    InfoPatrocinadoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoPatrocinadoresPage');
    };
    InfoPatrocinadoresPage.prototype.navegarPaginaWeb = function (url) {
        this.iab.create(url, '_system');
    };
    InfoPatrocinadoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info-patrocinadores',template:/*ion-inline-start:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\info-patrocinadores\info-patrocinadores.html"*/'<!--\n  Generated template for the InfoPatrocinadoresPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>Patrocinadores</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-content>\n            <ion-card-title>\n                Patrocinadores\n            </ion-card-title>\n\n            <img (click)="navegarPaginaWeb(\'https://www.argentina.gob.ar/ciencia\')" src="../../assets/imgs/sponsors/nuevos/LogoSECCIENCIA.png" alt="">\n\n            <img (click)="navegarPaginaWeb(\'http://www.turismo.mendoza.gov.ar/\')" src="../../assets/imgs/sponsors/turismo-mendoza.jpg" alt="">\n\n            <img (click)="navegarPaginaWeb(\'https://www.conicet.gov.ar/\')" src="../../assets/imgs/sponsors/logoCONICET.jpg" alt="">\n\n            <img (click)="navegarPaginaWeb(\'https://www.argentina.gob.ar/ciencia/agencia\')" src="../../assets/imgs/sponsors/logoAGENCIA.jpg" alt="">\n\n            <img src="../../assets/imgs/sponsors/logoIGF.jpg" alt="">\n\n            <img src="../../assets/imgs/sponsors/logoARFIC-1.jpg" alt="">\n\n            <img (click)="navegarPaginaWeb(\'http://www.biosystems.com.ar/\')" src="../../assets/imgs/sponsors/LogoBSl.jpg" alt="">\n\n            <img (click)="navegarPaginaWeb(\'https://metasystems-international.com/\')" src="../../assets/imgs/sponsors/LogoMetasyste.jpg" alt="">\n\n            <img (click)="navegarPaginaWeb(\'https://mgiamericas.com/\')" src="../../assets/imgs/sponsors/nuevos/mgi.png" alt="">\n\n            <img (click)="navegarPaginaWeb(\'https://www.analytical.com/\')" src="../../assets/imgs/sponsors/Logoanalytical.jpg" alt="">\n\n            <img (click)="navegarPaginaWeb(\'https://www.syngenta.com.ar/\')" src="../../assets/imgs/sponsors/syngentalogo.jpg" alt="">\n\n            <img (click)="navegarPaginaWeb(\'https://www.corteva.com/\')" src="../../assets/imgs/sponsors/logoCORTEVA.jpg" alt="">\n\n            <img (click)="navegarPaginaWeb(\'https://www.eppendorf.com/\')" src="../../assets/imgs/sponsors/nuevos/logoeppendorf.jpg" alt="">\n\n            <img (click)="navegarPaginaWeb(\'https://en.novogene.com/\')" src="../assets/imgs/sponsors/nuevos/novogene2.jpg" alt="">\n\n            <img (click)="navegarPaginaWeb(\'http://www.biocientifica.com.ar/\')" src="../../assets/imgs/sponsors/nuevos/biocientífica.jpg" alt="">\n\n            <img (click)="navegarPaginaWeb(\'https://www.bio-optic.com/\')" src="../../assets/imgs/sponsors/nuevos/logobiooptic.jpg" alt="">\n\n            <img (click)="navegarPaginaWeb(\'https://www.biodynamics.com.ar/\')" src="../../assets/imgs/sponsors/logoBYODINAMICS.jpg" alt="">\n\n            <img (click)="navegarPaginaWeb(\'https://www.tecnolab.com.ar/\')" src="../../assets/imgs/sponsors/logoTECNOLAB.jpg" alt="">\n\n            <img (click)="navegarPaginaWeb(\'https://www.cwrdiversity.org/\')" src="../../assets/imgs/sponsors/logoCROP.jpg" alt="">\n\n            <img (click)="navegarPaginaWeb(\'https://www.croptrust.org/\')" src="../../assets/imgs/sponsors/logoCROPTRUST.jpg" alt="">\n\n            <img (click)="navegarPaginaWeb(\'https://norad.no/en/front/\')" src="../../assets/imgs/sponsors/logoNORAD.jpg" alt="">\n\n            <img (click)="navegarPaginaWeb(\'https://www.regjeringen.no/en/dep/ud/id833/\')" src="../../assets/imgs/sponsors/logoNORW.jpg" alt="">\n\n            <img (click)="navegarPaginaWeb(\'http://www.acacoop.com.ar/\')" src="../../assets/imgs/sponsors/nuevos/aca.png" alt="">\n\n        </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\info-patrocinadores\info-patrocinadores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], InfoPatrocinadoresPage);
    return InfoPatrocinadoresPage;
}());

//# sourceMappingURL=info-patrocinadores.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakersSpeakerDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpeakersSpeakerDetailsPage = /** @class */ (function () {
    function SpeakersSpeakerDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.disertante = this.navParams.get('disertante');
        console.log('disertante', this.disertante);
    }
    SpeakersSpeakerDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SpeakersSpeakerDetailsPage');
    };
    SpeakersSpeakerDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-speakers-speaker-details',template:/*ion-inline-start:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\speakers-speaker-details\speakers-speaker-details.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{disertante.nombre}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <img src="{{disertante.image}}" alt="" imageViewer>\n    <p style="text-align: center;"><small>(Toca para agrandar)</small></p>\n</ion-content>'/*ion-inline-end:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\speakers-speaker-details\speakers-speaker-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], SpeakersSpeakerDetailsPage);
    return SpeakersSpeakerDetailsPage;
}());

//# sourceMappingURL=speakers-speaker-details.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_disertantes__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__speakers_speaker_details_speakers_speaker_details__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpeakersPage = /** @class */ (function () {
    function SpeakersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.searchQuery = '';
        this.disertantes = __WEBPACK_IMPORTED_MODULE_2__data_disertantes__["a" /* disertantes */];
        this.disertantes.sort(function (a, b) { return (a.nombre > b.nombre) ? 1 : -1; });
    }
    SpeakersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SpeakersPage');
    };
    SpeakersPage.prototype.initializeItems = function () {
        this.disertantes = [];
        this.disertantes = __WEBPACK_IMPORTED_MODULE_2__data_disertantes__["a" /* disertantes */];
    };
    SpeakersPage.prototype.getItems = function (ev) {
        var _this = this;
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.disertantes = this.disertantes.filter(function (item) {
                return ((_this.eliminarDiacriticos(item.nombre).toLowerCase().indexOf(_this.eliminarDiacriticos(val).toLowerCase()) > -1) ||
                    _this.eliminarDiacriticos(item.lugarTrabajo).toLowerCase().indexOf(_this.eliminarDiacriticos(val).toLowerCase()) > -1);
            });
        }
    };
    SpeakersPage.prototype.eliminarDiacriticos = function (texto) {
        return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    };
    SpeakersPage.prototype.goSpeakerDetail = function (disertante) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__speakers_speaker_details_speakers_speaker_details__["a" /* SpeakersSpeakerDetailsPage */], { 'disertante': disertante });
    };
    SpeakersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-speakers',template:/*ion-inline-start:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\speakers\speakers.html"*/'<ion-header>\n\n    <header-navbar></header-navbar>\n\n    <ion-searchbar placeholder="{{ \'speakers.placeholder\' | translate }}" (ionInput)="getItems($event)"></ion-searchbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-item *ngFor="let disertante of disertantes" (click)="goSpeakerDetail(disertante)">\n\n            <ion-label style="white-space: unset !important;">\n\n                <h2>{{ disertante.nombre }}</h2>\n\n                <p>{{ disertante.lugarTrabajo }}</p>\n\n            </ion-label>\n\n            <button ion-button icon clear item-right>\n\n                <ion-icon name="arrow-forward"></ion-icon>\n\n            </button>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\speakers\speakers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], SpeakersPage);
    return SpeakersPage;
}());

//# sourceMappingURL=speakers.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StartPage = /** @class */ (function () {
    function StartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StartPage');
    };
    StartPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    StartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-start',template:/*ion-inline-start:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\start\start.html"*/'<ion-content padding>\n\n    <img style="width: 100%; margin-top: 30px;margin-bottom: 10px;" src="../../assets/imgs/FondoSistemadeinscripcion.jpg" alt="">\n    <!-- <img src="../../assets/imgs/alag-home2.JPG" alt=""> -->\n\n    <div text-center style="margin-bottom: 30px;">\n        <h3>La arquitectura del genoma: su expresión en los fenotipos y las expresiones</h3>\n        <p>XVII Congreso Latinoamericano de Genética</p>\n        <p>XLVII Congreso Argentino de Genética</p>\n        <p>LII Reunión Anual de la Sociedad de Genética de Chile</p>\n        <p>VI Congreso de la Sociedad Uruguaya de Genética</p>\n        <p>V Congreso Latinoamericano de Genética Humana y</p>\n        <p>V Simposio Latinoamericano de Citogenética y Evolución</p>\n    </div>\n\n    <button ion-button block color="success" (click)="goHome()">Ingresar</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\start\start.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], StartPage);
    return StartPage;
}());

//# sourceMappingURL=start.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_trabajos_trabajos__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trabajo_details_trabajo_details__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_favorites_list_pages_favorites_list__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__categoria_list_categoria_list__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_translation_translation__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TrabajosPage = /** @class */ (function () {
    function TrabajosPage(navCtrl, navParams, _TrabajosProvider, loadingCtrl, _translationProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._TrabajosProvider = _TrabajosProvider;
        this.loadingCtrl = loadingCtrl;
        this._translationProvider = _translationProvider;
        this.categoriasSelect = [];
        this.categoriasNavegacion = [];
        this.trabajos = [];
        this.trabajosBusqueda = [];
        this.resultadoVacio = false;
        this.buscandoTrabajos = false;
    }
    TrabajosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrabajosPage');
    };
    TrabajosPage.prototype.inicialesNombres = function (nombres) {
        var iniciales = '';
        var arrayNombres = nombres.split(' ');
        for (var _i = 0, arrayNombres_1 = arrayNombres; _i < arrayNombres_1.length; _i++) {
            var nombre = arrayNombres_1[_i];
            iniciales = iniciales + nombre.substr(0, 1) + '.';
        }
        return iniciales.toUpperCase();
    };
    TrabajosPage.prototype.verTrabajo = function (trabajo) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__trabajo_details_trabajo_details__["a" /* TrabajoDetailsPage */], { 'trabajo': trabajo });
    };
    TrabajosPage.prototype.goFavorites = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_favorites_list_pages_favorites_list__["a" /* PagesFavoritesListPage */], { from: 'trabajos' });
    };
    TrabajosPage.prototype.goSeleccionCategoria = function () {
        // callback...
        var myCallbackFunction = function (_params) {
            console.log(_params);
            this.categoriaSelected = _params.categoria;
            this.categoriasNavegacion = _params.categoriasNavegacion;
            this.loadTrabajos(_params.categoria);
            return new Promise(function (resolve, reject) {
                resolve();
            });
        }.bind(this);
        // push page...
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__categoria_list_categoria_list__["a" /* CategoriaListPage */], {
            callback: myCallbackFunction
        });
    };
    TrabajosPage.prototype.loadTrabajos = function (categoria) {
        var _this = this;
        console.log(categoria);
        var loading = this.loadingCtrl.create({
            content: 'Cargando Trabajos...'
        });
        loading.present();
        this._TrabajosProvider.getCategoriaContrabajos(categoria._id).subscribe(function (resp) {
            console.log('trabajos', resp);
            _this.trabajos = resp.trabajos;
            loading.dismiss();
        });
    };
    TrabajosPage.prototype.deleteCategoria = function () {
        this.categoriaSelected = undefined;
    };
    TrabajosPage.prototype.getNombreByLang = function (objeto) {
        if (this._translationProvider.lang === 'es') {
            objeto.nombre_lang = objeto.nombre_es;
        }
        else if (this._translationProvider.lang === 'en') {
            objeto.nombre_lang = objeto.nombre_en;
        }
        return objeto.nombre_lang;
    };
    TrabajosPage.prototype.busuqedaTrabajos = function (busqueda) {
        var _this = this;
        this.trabajos = [];
        this.categoriasNavegacion = [];
        this.buscandoTrabajos = false;
        console.log(busqueda.target.value);
        var terminoBusqueda = busqueda.target.value;
        if (terminoBusqueda) {
            this.buscandoTrabajos = true;
            this._TrabajosProvider.busquedaTrabajos(terminoBusqueda).subscribe(function (resp) {
                console.log(resp);
                if (resp.trabajos.length !== 0) {
                    _this.resultadoVacio = false;
                    _this.trabajosBusqueda = resp.trabajos;
                }
                else {
                    _this.trabajosBusqueda = resp.trabajos;
                    _this.resultadoVacio = true;
                }
                _this.buscandoTrabajos = false;
            });
        }
        else {
            this.buscandoTrabajos = false;
            this.resultadoVacio = false;
            this.trabajosBusqueda = [];
        }
    };
    TrabajosPage.prototype.checkIfClear = function (busqueda) {
        console.log('checkIfClear');
        var terminoBusqueda = busqueda.target.value;
        if (!terminoBusqueda) {
            this.buscandoTrabajos = false;
            this.resultadoVacio = false;
            this.trabajosBusqueda = [];
        }
    };
    TrabajosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trabajos',template:/*ion-inline-start:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\trabajos\trabajos.html"*/'<ion-header>\n\n    <header-navbar></header-navbar>\n\n    <ion-searchbar (search)="busuqedaTrabajos($event)" (ionInput)="checkIfClear($event)"></ion-searchbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h2>{{ \'trabajos.categoryTitle\' | translate }}</h2>\n\n    <button ion-button block color="success" (click)="goSeleccionCategoria()">{{ \'trabajos.seleccionarCategoria\' | translate }}</button>\n\n    <div style="margin-top: 10px;margin-left: 10px;" *ngIf="categoriasNavegacion && categoriasNavegacion.length > 0">\n\n        <button ion-button small clear style="padding:0px;" (click)="goSeleccionCategoria()">Home ></button>\n\n        <button ion-button small clear style="padding:0px;" (click)="goSeleccionCategoria()" *ngFor="let categoria of categoriasNavegacion, let i = index">\n\n                {{ getNombreByLang(categoria) }} <span *ngIf="i !== categoriasNavegacion.length-1">&nbsp;></span>\n\n            </button>\n\n    </div>\n\n    <h2 style="margin-top: 15px !important;">{{ \'trabajos.trabajos\' | translate }}</h2>\n\n    <div style="text-align: center; width: 100%; margin-top: 30px;">\n\n        <ion-spinner *ngIf="buscandoTrabajos"></ion-spinner>\n\n    </div>\n\n    <ion-list *ngIf="trabajos.length > 0 && !buscandoTrabajos">\n\n        <ion-item *ngFor="let trabajo of trabajos" (click)="verTrabajo(trabajo)">\n\n            <ion-label style="white-space: unset !important;">\n\n                <h2>{{ trabajo.titulo }}</h2>\n\n                <p>\n\n                    <span *ngFor="let autor of trabajo.autores, let i = index">\n\n                        {{autor.apellido}} {{inicialesNombres(autor.nombres)}}\n\n                        <span *ngIf="i !== trabajo.autores.length -1">,</span>\n\n                    </span>\n\n                </p>\n\n            </ion-label>\n\n            <button ion-button icon clear item-right>\n\n                <ion-icon name="arrow-forward"></ion-icon>\n\n            </button>\n\n        </ion-item>\n\n    </ion-list>\n\n    <ion-list *ngIf="trabajosBusqueda.length > 0 && !buscandoTrabajos">\n\n        <ion-item *ngFor="let trabajo of trabajosBusqueda" (click)="verTrabajo(trabajo)">\n\n            <ion-label style="white-space: unset !important;">\n\n                <h2>{{ trabajo.titulo }}</h2>\n\n                <p>\n\n                    <span *ngFor="let autor of trabajo.autores, let i = index">\n\n                        {{autor.apellido}} {{inicialesNombres(autor.nombres)}}\n\n                        <span *ngIf="i !== trabajo.autores.length -1">,</span>\n\n                    </span>\n\n                </p>\n\n            </ion-label>\n\n            <button ion-button icon clear item-right>\n\n                <ion-icon name="arrow-forward"></ion-icon>\n\n            </button>\n\n        </ion-item>\n\n    </ion-list>\n\n    <div style="text-align: center;" *ngIf="trabajos.length === 0 && trabajosBusqueda.length === 0 && !resultadoVacio && !buscandoTrabajos">\n\n        <ion-icon style="font-size: 50px;" name="ios-alert-outline"></ion-icon>\n\n        <h3>{{ \'trabajos.selectCategoryTitle\' | translate }}</h3>\n\n    </div>\n\n    <div style="text-align: center;" *ngIf="resultadoVacio && !buscandoTrabajos">\n\n        <ion-icon style="font-size: 50px;" name="ios-alert-outline"></ion-icon>\n\n        <h3>No existen resutados para su busqueda</h3>\n\n    </div>\n\n\n\n    <ion-fab right bottom>\n\n        <button (click)="goFavorites()" ion-fab color="danger"><ion-icon name="heart"></ion-icon></button>\n\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\trabajos\trabajos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_trabajos_trabajos__["a" /* TrabajosProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_translation_translation__["a" /* TranslationProvider */]])
    ], TrabajosPage);
    return TrabajosPage;
}());

//# sourceMappingURL=trabajos.js.map

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/categoria-list/categoria-list.module": [
		444,
		12
	],
	"../pages/conferencia-details/conferencia-details.module": [
		445,
		11
	],
	"../pages/info-centro-convencion/info-centro-convencion.module": [
		446,
		10
	],
	"../pages/info-patrocinadores/info-patrocinadores.module": [
		448,
		9
	],
	"../pages/notification-list/notification-list.module": [
		447,
		8
	],
	"../pages/notification/notification.module": [
		449,
		7
	],
	"../pages/pages-favorites-list/pages-favorites-list.module": [
		450,
		6
	],
	"../pages/plano-auditorio/plano-auditorio.module": [
		451,
		5
	],
	"../pages/speakers-speaker-details/speakers-speaker-details.module": [
		452,
		4
	],
	"../pages/speakers/speakers.module": [
		453,
		3
	],
	"../pages/start/start.module": [
		454,
		2
	],
	"../pages/trabajo-details/trabajo-details.module": [
		455,
		1
	],
	"../pages/trabajos/trabajos.module": [
		456,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 203;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// tslint:disable-next-line:eofline
// export const URL_SERVICES = 'http://localhost:3000';
// export const CONGRESO_ID = '5d03c01e921e5820840a70b6';

// export const URL_SERVICES = 'https://alag-backend2.herokuapp.com';
const URL_SERVICES = 'https://inscripcion.alag2019.org';
/* harmony export (immutable) */ __webpack_exports__["b"] = URL_SERVICES;

const CONGRESO_ID = '5c6acc8b73dfc33d9942c84c';
/* harmony export (immutable) */ __webpack_exports__["a"] = CONGRESO_ID;


// export const URL_FRONTEND = 'http://localhost:4200';
// export const URL_FRONTEND = 'https://alag-inscripciones.firebaseapp.com';

const URL_FRONTEND = 'https://inscripcion.alag2019.org/';
/* unused harmony export URL_FRONTEND */


/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverLangComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_translation_translation__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PopoverLangComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PopoverLangComponent = /** @class */ (function () {
    function PopoverLangComponent(viewCtrl, _translationProvider, toastCtrl) {
        this.viewCtrl = viewCtrl;
        this._translationProvider = _translationProvider;
        this.toastCtrl = toastCtrl;
        console.log('Hello PopoverLangComponent Component');
        this.text = 'Hello World';
    }
    PopoverLangComponent.prototype.langSelected = function (lang) {
        this.viewCtrl.dismiss();
        this._translationProvider.switchLanguage(lang);
        var message;
        if (lang === 'es') {
            message = 'Su configuración ha sido guardada correctamente.';
        }
        else {
            message = 'Your settings have been saved.';
        }
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2000
        });
        toast.present();
    };
    PopoverLangComponent.prototype.closePopover = function () {
        console.log('se ejecuto');
        this.viewCtrl.dismiss();
    };
    PopoverLangComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'popover-lang',template:/*ion-inline-start:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\components\popover-lang\popover-lang.html"*/'<div padding>\n\n    <h2>Language</h2>\n\n    <ion-list>\n\n        <ion-item (click)="langSelected(\'es\')">\n\n            Español\n\n        </ion-item>\n\n        <ion-item (click)="langSelected(\'en\')">\n\n            English\n\n        </ion-item>\n\n        <button ion-button block (click)="closePopover()">\n\n            Close\n\n        </button>\n\n    </ion-list>\n\n</div>'/*ion-inline-end:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\components\popover-lang\popover-lang.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_translation_translation__["a" /* TranslationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], PopoverLangComponent);
    return PopoverLangComponent;
}());

//# sourceMappingURL=popover-lang.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverNotiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_notifications_notifications__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_translation_translation__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_notification_notification__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_notification_list_notification_list__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Storage Module



/**
 * Generated class for the PopoverNotiComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PopoverNotiComponent = /** @class */ (function () {
    function PopoverNotiComponent(viewCtrl, navCtrl, _notificationsProvider, _translationProvider, storage) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this._notificationsProvider = _notificationsProvider;
        this._translationProvider = _translationProvider;
        this.storage = storage;
        this.notificationListPage = __WEBPACK_IMPORTED_MODULE_6__pages_notification_list_notification_list__["a" /* NotificationListPage */];
        this.loadNotification();
    }
    PopoverNotiComponent.prototype.loadNotification = function () {
        var _this = this;
        console.log('se ejecuto el load del popover');
        this.storage.get('notificationsStorage').then(function (data) {
            _this.notifications = data;
            console.log(_this.notifications);
        });
    };
    PopoverNotiComponent.prototype.validaNotificacion = function (notiFromServer, notiFromStorage) {
        return notiFromServer._id === notiFromStorage._id;
    };
    PopoverNotiComponent.prototype.closePopover = function () {
        console.log('se ejecuto');
        this.viewCtrl.dismiss();
    };
    PopoverNotiComponent.prototype.getDateFormat = function (timestamp) {
        return new Date(timestamp);
    };
    PopoverNotiComponent.prototype.getTituloByLang = function (objeto) {
        if (this._translationProvider.lang === 'es') {
            objeto.titulo_lang = objeto.titulo_es;
        }
        else if (this._translationProvider.lang === 'en') {
            objeto.titulo_lang = objeto.titulo_en;
        }
        return objeto.titulo_lang;
    };
    PopoverNotiComponent.prototype.seeNotificationDetails = function (notification) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_notification_notification__["a" /* NotificationPage */], { notification: notification });
    };
    PopoverNotiComponent.prototype.ionViewDidEnter = function () {
        this.loadNotification();
    };
    PopoverNotiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'popover-noti',template:/*ion-inline-start:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\components\popover-noti\popover-noti.html"*/'<div padding>\n\n    <h2>{{ \'header.notification\' | translate }}</h2>\n\n    <ion-list>\n\n        <ion-item [ngClass]="{\'new-noti\': !notification.read}" *ngFor="let notification of notifications | slice:0:6" (click)="seeNotificationDetails(notification)">\n\n            <ion-label style="white-space: unset !important;">\n\n                <h2>{{ getTituloByLang(notification) }}</h2>\n\n                <p>{{ getDateFormat(notification.fechaNotification) | date : "dd.MM.y" }}</p>\n\n            </ion-label>\n\n            <button ion-button icon clear item-right>\n\n              <ion-icon name="arrow-forward"></ion-icon>\n\n          </button>\n\n        </ion-item>\n\n        <button [navPush]="notificationListPage" color="secondary" *ngIf="notifications && notifications.length > 6" ion-button block>\n\n          {{ \'header.verTodos\' | translate }}\n\n      </button>\n\n        <button ion-button block (click)="closePopover()">\n\n          Close\n\n      </button>\n\n    </ion-list>\n\n</div>'/*ion-inline-end:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\components\popover-noti\popover-noti.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_notifications_notifications__["a" /* NotificationsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_translation_translation__["a" /* TranslationProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], PopoverNotiComponent);
    return PopoverNotiComponent;
}());

//# sourceMappingURL=popover-noti.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__speakers_speakers__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trabajos_trabajos__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__speakers_speakers__["a" /* SpeakersPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__trabajos_trabajos__["a" /* TrabajosPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\tabs\tabs.html"*/'<ion-tabs color="primary">\n\n    <ion-tab [root]="tab1Root" tabTitle="{{ \'tabs.cronograma\' | translate }}" tabIcon="calendar"></ion-tab>\n\n    <ion-tab [root]="tab3Root" tabTitle="{{ \'tabs.disertantes\' | translate }}" tabIcon="contacts"></ion-tab>\n\n    <ion-tab [root]="tab4Root" tabTitle="{{ \'tabs.trabajos\' | translate }}" tabIcon="folder-open"></ion-tab>\n\n    <ion-tab [root]="tab2Root" tabTitle="Info" tabIcon="information-circle"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_centro_convencion_info_centro_convencion__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__info_patrocinadores_info_patrocinadores__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, iab) {
        this.navCtrl = navCtrl;
        this.iab = iab;
    }
    AboutPage.prototype.goCentroConvencion = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__info_centro_convencion_info_centro_convencion__["a" /* InfoCentroConvencionPage */]);
    };
    AboutPage.prototype.goPatrocinadores = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__info_patrocinadores_info_patrocinadores__["a" /* InfoPatrocinadoresPage */]);
    };
    AboutPage.prototype.navegarPaginaWeb = function (url) {
        this.iab.create(url, '_system');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\about\about.html"*/'<ion-header>\n\n    <header-navbar></header-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div style="margin-top: 25px;">\n\n        <h1>{{ \'info.infoTitle\' | translate }}</h1>\n\n\n\n        <ion-list>\n\n            <ion-item (click)="goCentroConvencion()">\n\n                <!-- <ion-avatar item-start>\n\n                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAADfCAMAAADcKv+WAAABa1BMVEX17uX////yzqUeHiPmpCLBytTZjCHUsIwhbdkknPKjcF+7hmAAAAD17+fMmHImJiaeaVrlv5rRo33Cj2nyzaL48+38+vfz0KrlnwAAAAv406nFzdT69vE2juQAAAbSrIUXGB7ewqbn1MAAlvHYiBHbsYnXhQD06tnx7enuwH7rtmLlvZXwx5HpsVEPEBgYGB3z1rXMooTZuZnv06X04Mru8PMcHyHs3c6BwffIxcOvv9WwgGtOhNjjplzW19k2eNh9n9ZJREPj5+s1MzTrvXC3sKnoqjna0sljnMyvsLLirW0ADhe/3/t1bmk+ou6Vy/hfq+mHiYxQUVU/QUar0vRoZWTZ6vhzdHeclo+LhH7AwMK3sKd1rdqUjoi12vpoY16WnKVVWF6htdIAYdklb9mqwOl4mdRXgsuYseU/Qknor0JGleOPut+utsDhnjfhqGNBPDZYTkSahG3fnUl7a1nluINxY1OokXW/k3nDo6ScAAAR2UlEQVR4nO2di3fTRhaHZedhlko1Ti07fqwxNIlJ4jgPErPh2cQkLGHpttAsCS1LKaXtZhtegYU/f0eSLc9TmjtznbZ79nd6DmmsjOfTvXPvndFIcjKjV6lUr/u+R+R4DvmP/OD79Xq9VDqFL89knFE2XqoTMCdRBHbUpKNCDOiS4VjQ+ug4R4FYgtBRnCPCxEYs1Y3wBvJHQImKaGi+ERsTD7Hk2+PFlGi9yuAh2vmnKESPRUFENOAIKBEQS8gGxIa0RqyPii+UhwBpiThawBDSOvRYIY4eMIS0tKQF4ukA2kMaI5ZODdAW0hBxdFFUJf+UEUeSB9NkGndMEE/fhJG8U0P8TUwYyciQYMTTDTO8TMIOFPE3NGEkuCFhiHqjMG29xk7gEQlC1Ez2rWDRKVpuG4mAzgpB1HRS/2h6ab690mo5vh+tLYZm9QbyB78xFsxZ9RG1U4W/MD4+TTR+tHC7fXllfX29FYn8tLJymWiF/LIV4hsyguoAbUT9SOrfHo81HbKy/9v/3e4SsbRvuNoDiay6iICa229TUEkipEftdc+MUp9RExGSK7wVTcQIc+lyywhSe0DqIcKyYQuAGFDuth2TdKvLqIUIPMneAggxgLxsYkjNoKODCCX014GIBHKhZWBIPUYNRBih5zvrbTAi0cqoGFMRYWW357faR9OwsTgwZNuAUaeaS0WEAa4vmPGFjPMGA1LDjmmIUEBTvj4jGFGDMQURcFr91m0rwHFDX01lTEaEEF4etyUkjKOIOYmI+oSeY+ejMWPLID+m1ABJiPpn1F/fRSEk+dGkzkmuVxMQ9StvfwWFL2RcMalXExnViIDZE6TuTtOS0WJBEqMSEUC4jkhIzJi+WUdUUgmgRNT+Fg9ekSbq5V5x3QEXAQlhVYWoT9g6QiWcnJyZmTl5vw6FVIdVBSIg1FgnfI4w1MzMKyikcjjKEQED8fIoCAPIuT3g/AqGqH/+gDN8bcIAcrIMYlQNRykiIOejuukkp7k9UGxVDEcZor6beqj5gickhjwBZUl9RP02was0MMKAEVK0yrOjBBFQfGMaUUZIGF9Zu6qICFjJ8OfxEOWEZDwWITFHDxHQIGI4VRESRltXFRAB58xLzonT40dLCwsLS7s2gMRV9yBmlLgqjwhZcPOXkvgW2sVyqGI7LSglERKBpsnpiBCncJRGnN6dz5azscrtREumEM68h5hRLAA4RMimL/Xlmd35MgUYQiYYMoVwchKWHIValUOEtKWMp7ezHGBoSDXhTKDQXtE/vObWQd1KRgTt3FMMxd22CBgwFpdkZ4RAnbzae98uhmrv3ZgUKWcWQbUqb0YWEdKS05ISLhWlhIoR+XKvnWVsXs62b/CQsJgqJA4GEdaSrLSZXlABhv2fZyEXpAYvt19yjC9h6zmlBERIO9KZYjJhaKOF3XBJeXp86bbS3sUTbjCCOsabkUaEzUAl0SaNMKIstufn54OkqT6mzfoqLN7wZqQRQc0wGzMG4zCdMEJIwIsOeMUwzgEXVz0VInAjtC+kul09QB0VWcQscI28pECEruvxOWO6jYdYZkYjMGtwZhwignez84gaA1Ff72dsEBkzDhHBK9A8YhGRMFtkrAiqUgP5MkT4VtqlERoxmz2xQnRkiPCLXhwi4kjMcjHVALEuQQQTeiziEa4RmcFogOiJiPBbZ7ikMY+M2LYKN3TAGSAabAdhUz9qsMmy8WYGmhcdOuA4psGGK+Cw/ZTJjNDqJhSPaLJRgtl2ehsd8YZ5jRqqxCHCW2DXNTArmz7i3jDezLVM+scimtxfws4XsQnZkGp0/Z9FNNkJwlwARx+KDOKJQfeGqdEx9VNyYqkpPHJpE2g4ZwQubMQdpBHN7oOil6ews2KWzhoGmT8UjWh2yyx1+RQ/2hANo03Z7E6HEoVo1gK9eIOd+InKdjnDibO/YzoUmayxO1LESZOc4cSD0TEeivS1tyN8wmw5XmqELfhTKsWIpvck+rGfytaliotEqdatZgvBcYvZapVHHFRwhgGVQTRsgJpr8IiLU5/Gml1UAy5OffZJX59NzbLnY4hoMM/od9AeMa5SmbRI8yVRLk59wulT+rgYce6i6Q1y3gDR+O7gYbyhivCiABhoSvRYATCELIiIsEuojAaI5rcHt0TERRlgINaQ1UUZYKDZwZiMpxon5h0s9RGNz9GwhIuLm9mhb5JYQyLJbGzUWRpxdjgCw2hDjhuMylkO0Tza9MtUG8RhfTNAXJSNvcHYHDJW+4RTJJDGv4vH5iKLCF4KpzvYRzRugAzG/q73PmJR5pNEhSmWMfLSqSKXJ6qLkSUZxLkb5kMxijeO1bMIPCda3egjhm46xQMGmmI+YRySUcg4RSHOrFg9eC1CtHpsjVcPGWNHJSiynof0MdMUE1ZYDTNHiDizbveshFKIaPm8BT+4B2U4lyoWpD0nXPEHxTA7yAmzi7H3BkljDrYjVVQ9RLR8wIDXUixOVatrBSnHLBVTwuMKBaF6ixBnbtg+7yJCtGwkrHFkiG/z3e6bNUnfPw2SxZDww+tu9/UH8TiCaDqLojqHghjs3JAg/udePp/v3pMwBiFlavDr6odKlxxXERnLJzYZsS8PB9GfF6/xVz8EhKTvb0QrfhYHzUDRcfmmMIbLJ0YrxJwCRPvn13jrEsR33ajr3bVExMGpyHcEM5ZfGs8T0REdf1dEfNNHvJeG2Oxb8a2AOGm4KsWIZA0H4WlufluYElff9bueF5MIg7jat+K9VRHROtjgIXrr4krxWtT15jtFuInPRS80d7cnHFY2WwOXICI4g9cSFzbIIOt2u/deCz3nEde6zW632cyJEdU6KQZCQnS8eRGkuvbu9RtJuuMjajX79s2bt7IiwXg9gxbJ/ShPT/IvS0hI2SIrWnhE5XFFhJSBh+itQ9ZReUSF2oarp6x8JESnNQLEIkrPsBC9FoBQF9HwQgYn32bKT8lzRoCIMhTREB0Hcu3tj4no4SPiBNRgqoETbrwVfESM8g3Tir9rRCQrArLGHxQRkvs1EVEy//8RARoFIk7P6kgzDVgFVyDSOPyPjKinMkq/sGb9QZH6P4/ogIpULeEUN4iI3u8ZEec54OiISCWqg7MaHghUh2sh4hQ3mIiQIvUUEZGuaYRNQYrUU0T0Ma4vRoItUOkg4tRvdYyrxJF+r4gl+2v9sdBzv8U+DUol6x0bsdDLG6TixnrfDS1sRLSAard7im4MNzEiZX4fFVGVNQopkm9OQcoZdeudjJRUIfXauRQJl04jRLyAarUflZEi3nw8m6xzq3IrovQp3o+KFG/kg7GQQnhN7qiI0QYPUTEYq7lziYRSQMzyzW6HPyuFp1ZX1YwqQjIU0RJ/hIg0K1akDTXjuY8KQsT5sN3dNpyUZWq1cFYGee6suIUB10+pu21wMmPSzH9VgDx3Vh5KQyFVb/Q9U0ieqp5tVLOr186eG2CSHz7msioT4s346TvfsN7jljT1rxYKqx+vBfq4WkjgI1pB6g59/yKSp6bNqPp7T+RbVSgj4lQ27F2oWC+rQ5kYY7lpfNe7+R3hMiGsUmGtLvJ3hGPtavAuqHa/a2vR+CYwvi8cIpanXshZMhbOYyHyT2dA8lSCaMdYyKEhZjhErG0NBNGGsZBDQxSelIKV/QPEXM6UMPhbLETxeTdIdWqEaMiYQ0SUPLUIaXmjj2jirIUcJqLs2VM4y6kDRLghB3+HhJiRIKIUcRQizJCFHC6i9DlwKAHHu3DeiHFIiIQof5ofkhkpRl1ICjB3/gpCL1TPZEQxo5+5koMakjbhmo9yplVP1sTIG2QMlGCGZEx4EacXyuejYuSNcJhfyekzMibEWkhSP+UWofUokvm6hmRMeAGrEwnPKkYYjYOMe5FmVELSgLkr/T+9ZN2JpCdO25/BuKjw1tIgaQsSE8b9skZMfG64vRmpuok1JKEsxJzkR/az2IQYiMlPf7c2I/06CyfHQap0/gJdjNgipjzD39qMzBs72PShJrzIdMEWMe1NDLaJd4NtrZVuyCDbYyKmvk/DbsLh+dt8c2mG5ExIdNPqoRoab0Uxz/+e72wePha+4EoSYz/bMzo4uAN/N2EsycvtrN5QROHV7+w8zVfc78VvqK8pIQfZntEzt9K7v+PUjTC13lAEdlViPefbw65b6YyNdfYlXyGkjwFgTvZaqI3e8lizU3F7TzbDpmGSfb3kl5B2SSfuPHnaCPBCubLv4OuAgQmlb0zcdqOWmh13eR/qs5pvC9N2Vc/37+zs9xqV5lgsd0PSXkZmyPNX5Ec+doetdSqVrfs7V7R9VvudbzquSvCId/Y6lQ7FFyCK8ab/PWz6OL+merHn1x2mQeKzza0nm54WpeKrZb9McdXAOw/euI3O8hiviiTe9MWkDyFVxHrWFBptVtyKjs8C3r+YVACQ03ln537PrYg9CXvzQNn34XqAkO0plSrSdonPuluHO3f8BEzQWzRVrhqmvq1l3jtpxLwakdQBs6HUJhxGG1nbncbYgwOlzypfTaz9RtvIO4XBJ5ztmwn9z3z3V6Jvko6420hsvlmpLJMAJMMEvtGWG44B3reHeZV30lLGm0B/+fxPRJ8nMXLRRnoWA5/d5DHB7yWmhmPonQ+I+cTgIlHl6zRCwvhP9TEPtb6FJM0xNgAZvF06Go6DwizFO+kvf5ZKmMioHoq8SNLsxUnT6B3hIePO4Zirab6+lnuK5E8RJjDe1EcMvmxQ6Jm96T2TubPVaKSPDF4uP5+SEKoZU6KNRMRnO08vJRAmIWbuK3JUMqI83vydISSMf5MephFtJF95N4kwETHzwOALO9J4wxOqGPWiDUf4JJEwGbG0BWeUxhuRUM64AQccazxKJkxGJJM3OGNHHPoyQikjLNqEqtxPIUxBzFzKgxnFeCMnlDHCo01FOgmHIBowNvjB/42CkDD+gzv0EfTLKgllvy5iZhvKyMeb7YkvVYTf1bgk+kC7xOgTPk1KiLqIYDsuP+QIayrGr2oTEwzjBpRwX4NQAzFzCRhzmPWb7YmJidpVKeGXE4FoRmC0aaSPQ01EaO5wqfnUdoghZYwIGcbvQbWGmxpL9REzpaeQSEfFm+0+Ru0HCWFNYARFm7SMD0MktRzAhYbxZkBIGH/lEa/W4g9jxoeAsZhStcERMwf6jHG8GRISxu/Y1PFDjfqwz1jS/46mu6lLqI2Y2dGY8veV3xAIA0aa8Nca82H0B/rRptNLXD8xRMzc1A6sjZsiIWH8959jfVXjPgwZtaONu6+alNohZi7ta57lMN5sTPA6M9QtHjFk1I022oEGjBgMSC1n7TySENZ+oRDPXBVOAGleD7DT0B+GcMTMZk/Hl5oPJDasXacRvxDMOJHZ0PJT90HiFN8aMVN/pOWsNwUAxk/PnLkufl57rIHYdA+AgGDE4MpR+ohpHIsAjJ/KPHVCY1GjAomkxohB1EkbkZ2vU/xU5qm1Z2mLGh1gnDFGJIbMp7jU8r4AcPVHFlGMqRO9FER3y8CEhoiZ0qNkQy730vz0zHPBU4+TCTvCVHukiKQO2EqEbKT5qcRTExN/070PDaS2iKSgy1fUp73yPe+nPKHgqbWExN809VE7xEzpYEx53vl4I/ipJKZKLg8PAHumPmqJSGLrk4YCcvlZmp+KnqqKNgRQZ/liNIgE8lBxzTHP9f+5iMh56rF01t1sLFtZ0B6RlDsH+YYEssMa8QuRkPdUWbTpuFvWgPaIZEze3RILngYTb2R+ynmqJNp03H1gwS2XPSLR5j7vr2y8EeNpILZO5WqbpuseWkRRWiiIZFAe5F36UnLzGWUiWTwVPJXhqxAPtYsxlJAQiTYPe0PK5YepfnrmzE/UaTh2ab4DJAOGwkMko3KT2tVBTTbkfsrG1H60CXZjPMHky+AiEpVuHmy5DWJMqr5R+Sldp9bITKrZcd2ndxXX0S2EjBiofvd+r+M+SvVTOqbW/uUubz1BCaCCRoAY6NLmQW3iONlPh556PFE7uGlcZqdpRIiBNja2H9ceHz/+4vlzSXFD/PT58x+Oj2u1zY0NtOgp0wgRQ5VKme2rL1788tPP12/duvVjIPLvres///TLixdXN0ojhYv0X1uGyzGl/PbNAAAAAElFTkSuQmCC">\n\n            </ion-avatar> -->\n\n                <h2>{{ \'info.centroDeConvenciones\' | translate }}</h2>\n\n                <button ion-button icon clear item-right>\n\n                <ion-icon name="arrow-forward"></ion-icon>\n\n            </button>\n\n            </ion-item>\n\n            <ion-item (click)="goPatrocinadores()">\n\n                <h2>{{ \'info.patrocinadores\' | translate }}</h2>\n\n                <button ion-button icon clear item-right>\n\n                <ion-icon name="arrow-forward"></ion-icon>\n\n            </button>\n\n            </ion-item>\n\n            <ion-item (click)="navegarPaginaWeb(\'https://sag.org.ar/jbag/project/vol-xxx-suppl-1/\')">\n\n                <ion-label style="white-space: unset !important;">\n\n                    <h2>{{ \'info.libroDeActas\' | translate }}</h2>\n\n                </ion-label>\n\n                <button ion-button icon clear item-right>\n\n                <ion-icon name="arrow-forward"></ion-icon>\n\n            </button>\n\n            </ion-item>\n\n            <!-- <ion-item>\n\n            <h2>Otros</h2>\n\n            <button ion-button icon clear item-right>\n\n                <ion-icon name="arrow-forward"></ion-icon>\n\n            </button>\n\n        </ion-item> -->\n\n        </ion-list>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_translation_translation__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_programa__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__conferencia_details_conferencia_details__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_favorites_list_pages_favorites_list__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, _translationProvider) {
        this.navCtrl = navCtrl;
        this._translationProvider = _translationProvider;
        this.searchQuery = '';
        this.days = '0';
        this.program = __WEBPACK_IMPORTED_MODULE_3__data_programa__["a" /* programa */].slice();
        this.searchResult = [];
        this.textSearch = false;
        console.log(this.program);
    }
    HomePage.prototype.getItems = function (ev) {
        var _this = this;
        // set val to the value of the searchbar
        var val = ev.target.value;
        this.searchResult = [];
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.textSearch = true;
            this.program.forEach(function (dia) {
                dia.cronograma.forEach(function (horario) {
                    horario.charlas.forEach(function (charla) {
                        if ((_this.eliminarDiacriticos(charla.titulo_es).toLowerCase().indexOf(_this.eliminarDiacriticos(val).toLowerCase()) > -1) ||
                            (_this.eliminarDiacriticos(charla.titulo_en).toLowerCase().indexOf(_this.eliminarDiacriticos(val).toLowerCase()) > -1)) {
                            console.log('entro al if');
                            var day = _this.searchResult.find(function (row) { return row.dia === dia.dia; });
                            if (day) {
                                day.charlas.push(charla);
                            }
                            else {
                                _this.searchResult.push({
                                    dia: dia.dia,
                                    mes: dia.mes,
                                    anio: dia.anio,
                                    charlas: [charla]
                                });
                            }
                        }
                    });
                });
            });
            console.log(this.searchResult);
        }
        else {
            this.textSearch = false;
        }
    };
    HomePage.prototype.verCharla = function (charla, programa) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__conferencia_details_conferencia_details__["a" /* ConferenciaDetailsPage */], { 'conferencia': charla, 'programa': programa });
    };
    HomePage.prototype.goFavorites = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_favorites_list_pages_favorites_list__["a" /* PagesFavoritesListPage */], { from: 'conferencias' });
    };
    HomePage.prototype.getTituloByLang = function (objeto) {
        if (this._translationProvider.lang === 'es') {
            objeto.titulo_lang = objeto.titulo_es;
        }
        else if (this._translationProvider.lang === 'en') {
            objeto.titulo_lang = objeto.titulo_en;
        }
        return objeto.titulo_lang;
    };
    HomePage.prototype.eliminarDiacriticos = function (texto) {
        return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\home\home.html"*/'<ion-header [ngClass]="{\'header-without-tab\': searchResult.length !== 0 && !textSearch}">\n\n    <header-navbar></header-navbar>\n\n    <ion-searchbar placeholder="{{ \'home.placeholder\' | translate }}" (ionInput)="getItems($event)"></ion-searchbar>\n\n    <div *ngIf="searchResult.length === 0 && !textSearch">\n\n        <ion-segment [(ngModel)]="days">\n\n            <ion-segment-button value="0">\n\n                <!-- {{ program[0].dia }} / {{ program[0].mes }} -->\n\n                {{ \'home.domingo\' | translate }}\n\n            </ion-segment-button>\n\n            <ion-segment-button value="1">\n\n                {{ \'home.lunes\' | translate }}\n\n                <!-- {{ program[1].dia }} / {{ program[0].mes }} -->\n\n            </ion-segment-button>\n\n            <ion-segment-button value="2">\n\n                {{ \'home.martes\' | translate }}\n\n                <!-- {{ program[2].dia }} / {{ program[0].mes }} -->\n\n            </ion-segment-button>\n\n            <ion-segment-button value="3">\n\n                {{ \'home.miercoles\' | translate }}\n\n                <!-- {{ program[3].dia }} / {{ program[0].mes }} -->\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </div>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content>\n\n\n\n    <div style="margin-top: 10px;" [ngSwitch]="days" *ngIf="searchResult.length === 0 && !textSearch">\n\n        <ion-list *ngSwitchCase="\'0\'">\n\n            <ion-item-group *ngFor="let cronograma of program[days].cronograma">\n\n                <ion-item-divider color="light">{{ cronograma.hora }}</ion-item-divider>\n\n                <ion-item *ngFor="let charla of cronograma.charlas" (click)="verCharla(charla, program[days])">\n\n                    <ion-label style="white-space: unset !important;">\n\n                        <h2>{{ charla.titulo_es }}</h2>\n\n                        <p>{{ charla.horario }}: {{ charla.lugar }} <span *ngIf="charla.tipo !== \'mesa\' && charla.tipo !== \'varios\'">| {{ \'home.tipo\' | translate }}: {{ \'conferencia.\'+charla.tipo | translate }}</span><span *ngIf="charla.tipo === \'mesa\'">| {{ \'home.tipo\' | translate }}: {{ \'conferencia.mesa\' | translate }}</span></p>\n\n                    </ion-label>\n\n                    <button ion-button icon clear item-right>\n\n                        <ion-icon name="arrow-forward"></ion-icon>\n\n                    </button>\n\n                </ion-item>\n\n            </ion-item-group>\n\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'1\'">\n\n            <ion-item-group *ngFor="let cronograma of program[days].cronograma">\n\n                <ion-item-divider color="light">{{ cronograma.hora }}</ion-item-divider>\n\n                <ion-item *ngFor="let charla of cronograma.charlas" (click)="verCharla(charla, program[days])">\n\n                    <ion-label style="white-space: unset !important;">\n\n                        <h2>{{ charla.titulo_es }}</h2>\n\n                        <p>{{ charla.horario }}: {{ charla.lugar }} <span *ngIf="charla.tipo !== \'mesa\' && charla.tipo !== \'varios\'">| {{ \'home.tipo\' | translate }}: {{ \'conferencia.\'+charla.tipo | translate }}</span><span *ngIf="charla.tipo === \'mesa\'">| {{ \'home.tipo\' | translate }}: {{ \'conferencia.mesa\' | translate }}</span></p>\n\n                    </ion-label>\n\n                    <button ion-button icon clear item-right>\n\n                            <ion-icon name="arrow-forward"></ion-icon>\n\n                        </button>\n\n                </ion-item>\n\n            </ion-item-group>\n\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'2\'">\n\n            <ion-item-group *ngFor="let cronograma of program[days].cronograma">\n\n                <ion-item-divider color="light">{{ cronograma.hora }}</ion-item-divider>\n\n                <ion-item *ngFor="let charla of cronograma.charlas" (click)="verCharla(charla, program[days])">\n\n                    <ion-label style="white-space: unset !important;">\n\n                        <h2>{{ charla.titulo_es }}</h2>\n\n                        <p>{{ charla.horario }}: {{ charla.lugar }} <span *ngIf="charla.tipo !== \'mesa\' && charla.tipo !== \'varios\'">| {{ \'home.tipo\' | translate }}: {{ \'conferencia.\'+charla.tipo | translate }}</span><span *ngIf="charla.tipo === \'mesa\'">| {{ \'home.tipo\' | translate }}: {{ \'conferencia.mesa\' | translate }}</span></p>\n\n                    </ion-label>\n\n                    <button ion-button icon clear item-right>\n\n                                <ion-icon name="arrow-forward"></ion-icon>\n\n                            </button>\n\n                </ion-item>\n\n            </ion-item-group>\n\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'3\'">\n\n            <ion-item-group *ngFor="let cronograma of program[days].cronograma">\n\n                <ion-item-divider color="light">{{ cronograma.hora }}</ion-item-divider>\n\n                <ion-item *ngFor="let charla of cronograma.charlas" (click)="verCharla(charla, program[days])">\n\n                    <ion-label style="white-space: unset !important;">\n\n                        <h2>{{ charla.titulo_es }}</h2>\n\n                        <p>{{ charla.horario }}: {{ charla.lugar }} <span *ngIf="charla.tipo !== \'mesa\' && charla.tipo !== \'varios\'">| {{ \'home.tipo\' | translate }}: {{ \'conferencia.\'+charla.tipo | translate }}</span><span *ngIf="charla.tipo === \'mesa\'">| {{ \'home.tipo\' | translate }}: {{ \'conferencia.mesa\' | translate }}</span></p>\n\n                    </ion-label>\n\n                    <button ion-button icon clear item-right>\n\n                                    <ion-icon name="arrow-forward"></ion-icon>\n\n                                </button>\n\n                </ion-item>\n\n            </ion-item-group>\n\n        </ion-list>\n\n\n\n    </div>\n\n\n\n    <div [ngSwitch]="days" *ngIf="searchResult.length !== 0">\n\n        <ion-item-group *ngFor="let dia of searchResult">\n\n            <ion-item-divider color="light">{{ dia.dia }}/{{ dia.mes }}/{{ dia.anio }}</ion-item-divider>\n\n            <ion-item *ngFor="let charla of dia.charlas" (click)="verCharla(charla, {dia: dia.dia, mes: dia.mes, anio: dia.anio})">\n\n                <ion-label style="white-space: unset !important;">\n\n                    <h2>{{ getTituloByLang(charla) }}</h2>\n\n                    <p>{{ charla.horario }}: {{ charla.lugar }} <span *ngIf="charla.tipo !== \'mesa\' && charla.tipo !== \'varios\'">| {{ \'home.tipo\' | translate }}: {{ \'conferencia.\'+charla.tipo | translate }}</span>\n\n                        <span *ngIf="charla.tipo === \'mesa\'">| {{ \'home.tipo\' | translate }}: {{ \'conferencia.mesa\' | translate }}</span>\n\n                    </p>\n\n                </ion-label>\n\n                <button ion-button icon clear item-right>\n\n                                        <ion-icon name="arrow-forward"></ion-icon>\n\n                                    </button>\n\n            </ion-item>\n\n        </ion-item-group>\n\n    </div>\n\n\n\n    <div style="text-align: center;padding: 10px; margin-top: 30px;" *ngIf="searchResult.length === 0 && textSearch">\n\n        <ion-icon style="font-size: 80px;" name="ios-information-circle-outline"></ion-icon>\n\n        <h1>{{ \'home.resultadosVacio\' | translate }}</h1>\n\n    </div>\n\n\n\n    <ion-fab right bottom>\n\n        <button (click)="goFavorites()" ion-fab color="danger"><ion-icon name="heart"></ion-icon></button>\n\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_translation_translation__["a" /* TranslationProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_lang_popover_lang__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_noti_popover_noti__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notifications_notifications__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





//Storage Module

/**
 * Generated class for the HeaderNavbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HeaderNavbarComponent = /** @class */ (function () {
    function HeaderNavbarComponent(popoverController, _notificationsProvider, storage) {
        this.popoverController = popoverController;
        this._notificationsProvider = _notificationsProvider;
        this.storage = storage;
        this.colorNotification = '';
        console.log('Hello HeaderNavbarComponent Component');
        this.text = 'Hello World';
        this.loadNotification();
    }
    HeaderNavbarComponent.prototype.presentPopover = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            return __generator(this, function (_a) {
                popover = this.popoverController.create(__WEBPACK_IMPORTED_MODULE_1__popover_lang_popover_lang__["a" /* PopoverLangComponent */]);
                popover.present({
                    ev: ev
                });
                return [2 /*return*/];
            });
        });
    };
    HeaderNavbarComponent.prototype.presentPopoverNoti = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var popover;
            return __generator(this, function (_a) {
                popover = this.popoverController.create(__WEBPACK_IMPORTED_MODULE_3__popover_noti_popover_noti__["a" /* PopoverNotiComponent */]);
                popover.present({
                    ev: ev
                });
                popover.onDidDismiss(function () { return _this.loadNotification(); });
                return [2 /*return*/];
            });
        });
    };
    HeaderNavbarComponent.prototype.loadNotification = function () {
        var _this = this;
        console.log('se ejecuto el load');
        this._notificationsProvider.getNotifications().subscribe(function (resp) {
            var notificationsFromServer = resp.notifications;
            _this.storage.get('notificationsStorage').then(function (data) {
                if (data === null) {
                    // Si no hay cargada ninguna notificacion en el storage
                    for (var _i = 0, notificationsFromServer_1 = notificationsFromServer; _i < notificationsFromServer_1.length; _i++) {
                        var notification = notificationsFromServer_1[_i];
                        notification.read = false;
                    }
                    _this.storage.set('notificationsStorage', notificationsFromServer).then(function () {
                        console.log('notifications updated');
                        _this.notifications = notificationsFromServer;
                        _this.notificationsQty = _this.notifications.filter(function (noti) { return noti.read; }).length;
                        console.log(_this.notifications);
                    });
                }
                else {
                    var _loop_1 = function (notification) {
                        var resultado = data.find(function (notiStorage) { return notiStorage._id === notification._id; });
                        if (!resultado) {
                            console.log('se ejecuto no hay resultado');
                            notification.read = false;
                            data.unshift(notification);
                        }
                    };
                    // Si ya hay notificaciones en el storage
                    for (var _a = 0, notificationsFromServer_2 = notificationsFromServer; _a < notificationsFromServer_2.length; _a++) {
                        var notification = notificationsFromServer_2[_a];
                        _loop_1(notification);
                    }
                    console.log(data);
                    _this.storage.set('notificationsStorage', data).then(function () {
                        _this.notifications = data;
                        console.log('se ejecuto!');
                        _this.notificationsQty = _this.notifications.filter(function (noti) { return !noti.read; }).length;
                    });
                }
            });
        });
    };
    HeaderNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'header-navbar',template:/*ion-inline-start:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\components\header-navbar\header-navbar.html"*/'<ion-navbar class="ios-top">\n\n    <ion-title>\n\n        <img style="margin-top: 30px;" src="../../assets/imgs/logo_alag.png" alt="">\n\n\n\n    </ion-title>\n\n    <ion-buttons end>\n\n        <button (click)="presentPopoverNoti($event)" *ngIf=" notificationsQty> 0" id="notification-button" ion-button clear>\n\n          <ion-icon name="notifications">\n\n              <ion-badge id="notifications-badge" color="danger">{{ notificationsQty }}</ion-badge>\n\n          </ion-icon>              \n\n      </button>\n\n        <button (click)="presentPopoverNoti($event)" *ngIf="notificationsQty === 0" ion-button icon-only>\n\n              <ion-icon name="notifications"></ion-icon>             \n\n      </button>\n\n        <button ion-button icon-only (click)="presentPopover($event)">\n\n            <ion-icon name="settings"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n</ion-navbar>'/*ion-inline-end:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\components\header-navbar\header-navbar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_notifications_notifications__["a" /* NotificationsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], HeaderNavbarComponent);
    return HeaderNavbarComponent;
}());

//# sourceMappingURL=header-navbar.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(287);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Translate Service

/*
  Generated class for the TranslationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TranslationProvider = /** @class */ (function () {
    function TranslationProvider(translate) {
        this.translate = translate;
        console.log('Hello TranslationProvider Provider');
        // tslint:disable-next-line:prefer-const
        this.lang = localStorage.getItem('lang');
        if (this.lang) {
            translate.setDefaultLang(this.lang);
        }
        else {
            this.lang = 'es';
            translate.setDefaultLang('es');
        }
    }
    TranslationProvider.prototype.switchLanguage = function (language) {
        console.log(language);
        this.lang = language;
        localStorage.setItem('lang', language);
        this.translate.use(language);
    };
    TranslationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], TranslationProvider);
    return TranslationProvider;
}());

//# sourceMappingURL=translation.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_speakers_speakers__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_trabajos_trabajos__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_popover_lang_popover_lang__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_translation_translation__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_header_navbar_header_navbar__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_notifications_notifications__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_popover_noti_popover_noti__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_notification_notification__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_notification_list_notification_list__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_conferencia_details_conferencia_details__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_pages_favorites_list_pages_favorites_list__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_start_start__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_trabajos_trabajos__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_trabajo_details_trabajo_details__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_categoria_list_categoria_list__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_plano_auditorio_plano_auditorio__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_photo_viewer__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_file__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ionic_img_viewer__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_info_centro_convencion_info_centro_convencion__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_info_patrocinadores_info_patrocinadores__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_in_app_browser__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_speakers_speaker_details_speakers_speaker_details__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Storage

// Translation Modules



function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_speakers_speakers__["a" /* SpeakersPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_trabajos_trabajos__["a" /* TrabajosPage */],
                __WEBPACK_IMPORTED_MODULE_15__components_popover_lang_popover_lang__["a" /* PopoverLangComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_header_navbar_header_navbar__["a" /* HeaderNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_popover_noti_popover_noti__["a" /* PopoverNotiComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_notification_list_notification_list__["a" /* NotificationListPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_conferencia_details_conferencia_details__["a" /* ConferenciaDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_pages_favorites_list_pages_favorites_list__["a" /* PagesFavoritesListPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_start_start__["a" /* StartPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_trabajo_details_trabajo_details__["a" /* TrabajoDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_categoria_list_categoria_list__["a" /* CategoriaListPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_plano_auditorio_plano_auditorio__["a" /* PlanoAuditorioPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_info_centro_convencion_info_centro_convencion__["a" /* InfoCentroConvencionPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_info_patrocinadores_info_patrocinadores__["a" /* InfoPatrocinadoresPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_speakers_speaker_details_speakers_speaker_details__["a" /* SpeakersSpeakerDetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/categoria-list/categoria-list.module#CategoriaListPageModule', name: 'CategoriaListPage', segment: 'categoria-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/conferencia-details/conferencia-details.module#ConferenciaDetailsPageModule', name: 'ConferenciaDetailsPage', segment: 'conferencia-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info-centro-convencion/info-centro-convencion.module#InfoCentroConvencionPageModule', name: 'InfoCentroConvencionPage', segment: 'info-centro-convencion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification-list/notification-list.module#NotificationListPageModule', name: 'NotificationListPage', segment: 'notification-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info-patrocinadores/info-patrocinadores.module#InfoPatrocinadoresPageModule', name: 'InfoPatrocinadoresPage', segment: 'info-patrocinadores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pages-favorites-list/pages-favorites-list.module#PagesFavoritesListPageModule', name: 'PagesFavoritesListPage', segment: 'pages-favorites-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/plano-auditorio/plano-auditorio.module#PlanoAuditorioPageModule', name: 'PlanoAuditorioPage', segment: 'plano-auditorio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/speakers-speaker-details/speakers-speaker-details.module#SpeakersSpeakerDetailsPageModule', name: 'SpeakersSpeakerDetailsPage', segment: 'speakers-speaker-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/speakers/speakers.module#SpeakersPageModule', name: 'SpeakersPage', segment: 'speakers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/start/start.module#StartPageModule', name: 'StartPage', segment: 'start', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trabajo-details/trabajo-details.module#TrabajoDetailsPageModule', name: 'TrabajoDetailsPage', segment: 'trabajo-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trabajos/trabajos.module#TrabajosPageModule', name: 'TrabajosPage', segment: 'trabajos', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_31_ionic_img_viewer__["a" /* IonicImageViewerModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_speakers_speakers__["a" /* SpeakersPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_trabajos_trabajos__["a" /* TrabajosPage */],
                __WEBPACK_IMPORTED_MODULE_15__components_popover_lang_popover_lang__["a" /* PopoverLangComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_header_navbar_header_navbar__["a" /* HeaderNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_popover_noti_popover_noti__["a" /* PopoverNotiComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_notification_list_notification_list__["a" /* NotificationListPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_conferencia_details_conferencia_details__["a" /* ConferenciaDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_pages_favorites_list_pages_favorites_list__["a" /* PagesFavoritesListPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_start_start__["a" /* StartPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_trabajo_details_trabajo_details__["a" /* TrabajoDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_categoria_list_categoria_list__["a" /* CategoriaListPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_plano_auditorio_plano_auditorio__["a" /* PlanoAuditorioPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_info_centro_convencion_info_centro_convencion__["a" /* InfoCentroConvencionPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_info_patrocinadores_info_patrocinadores__["a" /* InfoPatrocinadoresPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_speakers_speaker_details_speakers_speaker_details__["a" /* SpeakersSpeakerDetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_translation_translation__["a" /* TranslationProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_notifications_notifications__["a" /* NotificationsProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_trabajos_trabajos__["a" /* TrabajosProvider */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fechaTrabajos; });
var fechaTrabajos = [
    {
        nombre: 'Citogenética Animal',
        fecha: '09/10/2019'
    },
    {
        nombre: 'Citogenética Humana',
        fecha: '07/10/2019'
    },
    {
        nombre: 'Citogenética Vegetal',
        fecha: '08/10/2019'
    },
    {
        nombre: 'Farmacogenética',
        fecha: '07/10/2019'
    },
    {
        nombre: 'Genética de Micoorganismos',
        fecha: '07/10/2019'
    },
    {
        nombre: 'Genética de Poblaciones y Evolución',
        fecha: '08/10/2019'
    },
    {
        nombre: 'Genética Humana',
        fecha: '08/10/2019'
    },
    {
        nombre: 'Genética Médica',
        fecha: '09/10/2019'
    },
    {
        nombre: 'Genética Vegetal',
        fecha: '08/10/2019'
    },
    {
        nombre: 'Genética y Educación',
        fecha: '07/10/2019'
    },
    {
        nombre: 'Genética y Mejoramiento Animal',
        fecha: '07/10/2019'
    },
    {
        nombre: 'Genómica y Genética Molecular',
        fecha: '07/10/2019'
    },
    {
        nombre: 'Mejoramiento Vegetal',
        fecha: '09/10/2019'
    },
    {
        nombre: 'Mutagénesis, Carcinogénesis y Teratogénesis Ambiental',
        fecha: '07/10/2019'
    }
];
//# sourceMappingURL=fechaTrabajos.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return disertantes; });
var disertantes = [
    {
        nombre: 'Marcelo Guerra',
        lugarTrabajo: 'Brasil',
        image: '../../assets/imgs/trabajos/marcelo-guerra.JPG'
    },
    {
        nombre: 'Norma Circe Magnelli',
        lugarTrabajo: 'Instituto de Genética, Facultad de Ciencias Médicas, UNCuyo, Argentina.',
        image: '../../assets/imgs/trabajos/Norma-Circe-Magnelli.JPG'
    },
    {
        nombre: 'Mónica Sans',
        lugarTrabajo: 'Departamento de Antropología Biológica, Universidad de la República, Uruguay.',
        image: '../../assets/imgs/trabajos/Monica-Sans.JPG'
    },
    {
        nombre: 'Michael Goddard',
        lugarTrabajo: 'University of Melbourne and Agriculture Victoria, Australia.',
        image: '../../assets/imgs/trabajos/Michael-Goddard.JPG'
    },
    {
        nombre: 'Pablo Cavagnaro',
        lugarTrabajo: 'CONICET- INTA EEA La Consulta, Fac. Cs. Agrarias, UNCuyo, Argentina.',
        image: '../../assets/imgs/trabajos/Pablo-Cavagnaro.JPG'
    },
    {
        nombre: 'Marcio C. Silva-filho',
        lugarTrabajo: 'Universidade de São Paulo.',
        image: '../../assets/imgs/trabajos/Marcio-Silva-filho.JPG'
    },
    {
        nombre: 'Stef De Haan',
        lugarTrabajo: 'International Potato Center (CIP), Perú.',
        image: '../../assets/imgs/trabajos/Stef-De-Haan.JPG',
        image2: '../../assets/imgs/trabajos/Stef-De-Haan2.JPG'
    },
    {
        nombre: 'Ricardo Masuelli',
        lugarTrabajo: 'Facultad de Ciencias Agrarias, IBAM-CONICET-UNCUYO, Argentina.',
        image: '../../assets/imgs/trabajos/Ricardo-Masuelli.JPG'
    },
    {
        nombre: 'Mauricio Moraga',
        lugarTrabajo: 'Programa de Genética Humana, ICBM, Facultad de Medicina, Universidad de Chile, Santiago, Chile; Departamento de Antropología, Facultad de Ciencias Sociales, Universidad de Chile, Santiago, Chile',
        image: '../../assets/imgs/trabajos/Mauricio-Moraga.JPG'
    },
    {
        nombre: 'Sandro Bonatto',
        lugarTrabajo: 'Escola de Ciências, Pontifícia Universidade Católica do Rio Grande do Sul, Brasil.',
        image: '../../assets/imgs/trabajos/Sandro-Bonatto.JPG'
    },
    {
        nombre: 'Jonas Alex Morales Saute',
        lugarTrabajo: 'Serviço de Genética Médica, Hospital de Clinicas de Porto Alegre.',
        image: '../../assets/imgs/trabajos/Jonas-Alex-Morales-Saute.JPG'
    },
    {
        nombre: 'Michel Naslavsky',
        lugarTrabajo: 'Universidade de São Paulo.',
        image: '../../assets/imgs/trabajos/Michel-Naslavsky.JPG'
    },
    {
        nombre: 'Leonela Natalia Luce',
        lugarTrabajo: 'Universidad de Buenos Aires, Facultad de Farmacia y Bioquímica, Cátedra de Genética, Buenos Aires, Argentina; CONICET- Universidad de Buenos Aires, Instituto de Inmunología, Genética y Metabolismo (INIGEM), Buenos Aires, Argentina.',
        image: '../../assets/imgs/trabajos/Leonela-Natalia-Luce.JPG'
    },
    {
        nombre: 'Fernando Suarez-obando',
        lugarTrabajo: 'Instituto de Genética Humana, Facultad de Medicina, Pontificia Universidad Javeriana; Servicio de Genética, Hospital Universitario San Ignacio, Colombia.',
        image: '../../assets/imgs/trabajos/Fernando-Suarez-obando.JPG'
    },
    {
        nombre: 'Alberto Luis Rosa',
        lugarTrabajo: 'IRNASUS-CONICET/FCQ-UCC; Fundación Allende; Sanatorio Allende, Argentina.',
        image: '../../assets/imgs/trabajos/Alberto-Luis-Rosa.JPG'
    },
    {
        nombre: 'Jorge Alfredo Bevilacqua',
        lugarTrabajo: 'Hospital Clínico Universidad de Chile, Facultad de Medicina, Universidad de Chile.',
        image: '../../assets/imgs/trabajos/Jorge-Alfredo-Bevilacqua.JPG'
    },
    {
        nombre: 'Mariela Larrandaburu',
        lugarTrabajo: 'Ministerio de Salud Pública, Montevideo, Uruguay.',
        image: '../../assets/imgs/trabajos/Mariela-Larrandaburu.JPG',
        image2: '../../assets/imgs/trabajos/Mariela-Larrandaburu2.JPG'
    },
    {
        nombre: 'Rosa Liascovich',
        lugarTrabajo: 'Centro Nacional de Genética Médica, ANLIS, Ministerio de Salud, Argentina.',
        image: '../../assets/imgs/trabajos/Rosa-Liascovich.JPG'
    },
    {
        nombre: 'Ignacio Zarante',
        lugarTrabajo: 'Pontificia Universidad Javeriana Bogotá.',
        image: '../../assets/imgs/trabajos/Ignacio-Zarante.JPG'
    },
    {
        nombre: 'Iêda Maria Orioli',
        lugarTrabajo: 'Department of Genetics, Institute of Biology, Federal University of Rio de Janeiro, Rio de Janeiro, Brazil; National Institute of Population Medical Genetics (INAGEMP), Porto Alegre, Brasil.',
        image: '../../assets/imgs/trabajos/Ieda-Maria-Orioli.JPG'
    },
    {
        nombre: 'Mev Dominguez Valentin',
        lugarTrabajo: 'Oslo University Hospital, Noruega.',
        image: '../../assets/imgs/trabajos/Mev-Dominguez-Valentin.JPG'
    },
    {
        nombre: 'Pilar Carvallo',
        lugarTrabajo: 'Facultad de Ciencias Biológicas, Pontificia Universidad Católica de Chile.',
        image: '../../assets/imgs/trabajos/Pilar-Carvallo.JPG'
    },
    {
        nombre: 'Benedito Rossi',
        lugarTrabajo: 'Brazil.',
        image: '../../assets/imgs/trabajos/Benedito-Rossi.JPG'
    },
    {
        nombre: 'Adriana Della Valle',
        lugarTrabajo: 'Hospital Central de las Fuerzas Armadas, Montevideo.',
        image: '../../assets/imgs/trabajos/Adriana-Della-Valle.JPG'
    },
    {
        nombre: 'Carlos Vaccaro',
        lugarTrabajo: 'Hospital Italiano Buenos Aires, Argentina.',
        image: '../../assets/imgs/trabajos/Carlos-Vaccaro.JPG'
    },
    {
        nombre: 'Elsa Lucila Camadro',
        lugarTrabajo: 'FCA, Universidad Nacional de Mar del Plata, Argentina.',
        image: '../../assets/imgs/trabajos/Elsa-Lucila-Camadro.JPG'
    },
    {
        nombre: 'Luciana Carla Silvestri',
        lugarTrabajo: 'INCIHUSA, CONICET MENDOZA, Argentina.',
        image: '../../assets/imgs/trabajos/Luciana-Carla-Silvestri.JPG'
    },
    {
        nombre: 'Josita Soares Monteiro',
        lugarTrabajo: 'Universidade Federal de Santa Maria, Brasil.',
        image: '../../assets/imgs/trabajos/Josita-Soares-Monteiro.JPG'
    },
    {
        nombre: 'Guillermo Vila Melo',
        lugarTrabajo: 'Buenos Aires, Argentina.',
        image: '../../assets/imgs/trabajos/Guillermo-Vila-Melo.JPG'
    },
    {
        nombre: 'Andrea Pedrosa-harand',
        lugarTrabajo: 'Departamento de Botânica, Universidade Federal of Pernambuco, Recife-PE, Brasil.',
        image: '../../assets/imgs/trabajos/Andrea-Pedrosa-harand.JPG',
        image2: '../../assets/imgs/trabajos/Andrea-Pedrosa-harand2.JPG'
    },
    {
        nombre: 'Ana Christina Brasileiro-vidal',
        lugarTrabajo: 'Universidade Federal de Pernambuco, Brasil.',
        image: '../../assets/imgs/trabajos/Ana-Christina-Brasileiro-vidal.JPG'
    },
    {
        nombre: 'Giovana Torres',
        lugarTrabajo: 'Universidade Federal de Lavras, Brasil.',
        image: '../../assets/imgs/trabajos/Giovana-Torres.JPG'
    },
    {
        nombre: 'Julio Pieczarka',
        lugarTrabajo: 'Universidade Federal do Para, Brasil.',
        image: '../../assets/imgs/trabajos/Julio-Pieczarka.JPG'
    },
    {
        nombre: 'Luis R Zapata Ortiz',
        lugarTrabajo: 'ICR, London, UK.',
        image: '../../assets/imgs/trabajos/Luis-Zapata-Ortiz.JPG',
        image2: '../../assets/imgs/trabajos/Luis-Zapata-Ortiz2.JPG'
    },
    {
        nombre: 'Dario Riccardo Valenzano',
        lugarTrabajo: 'Max Planck Institute for Biology of Ageing, Cologne, Germany.',
        image: '../../assets/imgs/trabajos/Dario-Riccardo-Valenzano.JPG'
    },
    {
        nombre: 'Gregorio Iraola',
        lugarTrabajo: 'Institut Pasteur de Montevideo, Uruguay.',
        image: '../../assets/imgs/trabajos/Gregorio-Iraola.JPG'
    },
    {
        nombre: 'Daniela Bezdan',
        lugarTrabajo: 'Weill Cornell Medicine, USA.',
        image: '../../assets/imgs/trabajos/Daniela-Bezdan.JPG'
    },
    {
        nombre: 'Vanesa Gottifredi',
        lugarTrabajo: 'Fundación Instituto Leloir, Buenos Aires, Argentina.',
        image: '../../assets/imgs/trabajos/Vanesa-Gottifredi.JPG',
        image2: '../../assets/imgs/trabajos/Vanesa-Gottifredi2.JPG'
    },
    {
        nombre: 'Gaston Soria',
        lugarTrabajo: 'CIBICI-CONICET, Universidad Nacional de Córdoba, Argentina.',
        image: '../../assets/imgs/trabajos/Gaston-Soria.JPG'
    },
    {
        nombre: 'Wilner Martinez',
        lugarTrabajo: 'Epigenetics and Genomic Instability Laboratory, Instituto de Investigaciones Biológicas Clemente Estable, Montevideo, Uruguay.',
        image: '../../assets/imgs/trabajos/Wilner-Martinez.JPG'
    },
    {
        nombre: 'Clarissa Rocha',
        lugarTrabajo: 'Federal University of Sao Paulo, Brazil.',
        image: '../../assets/imgs/trabajos/Clarissa-Rocha.JPG',
        image2: '../../assets/imgs/trabajos/Clarissa-Rocha2.JPG'
    },
    {
        nombre: 'Maria Rosa Lanari',
        lugarTrabajo: 'INTA EEA Bariloche, Argentina.',
        image: '../../assets/imgs/trabajos/Maria-Rosa-Lanari.JPG',
        image2: '../../assets/imgs/trabajos/Maria-Rosa-Lanari2.JPG'
    },
    {
        nombre: 'Amparo Martinez',
        lugarTrabajo: 'Departamento de Genética, Universidad de Córdoba, España.',
        image: '../../assets/imgs/trabajos/Amparo-Martinez.JPG'
    },
    {
        nombre: 'Juan Carlos Marín Contreras',
        lugarTrabajo: 'Departamento de Ciencias Básicas, Universidad del Bío-Bío, Chile.',
        image: '../../assets/imgs/trabajos/Juan-Carlos-Marin-Contreras.JPG'
    },
    {
        nombre: 'Samuel Rezende Paiva',
        lugarTrabajo: 'Embrapa Recursos Genéticos e Biotecnologia, Prédio Conservação Germoplasma, Laboratório Genética Animal, Brasília, DF, Brasil.',
        image: '../../assets/imgs/trabajos/Samuel-Rezende-Paiva.JPG'
    },
    {
        nombre: 'Elzbieta Martyniuk',
        lugarTrabajo: 'Department of Animal Genetics and Breeding, Warsaw University of Life Sciences, Poland.',
        image: '../../assets/imgs/trabajos/Elzbieta-Martyniuk.JPG'
    },
    {
        nombre: 'Guillermo Pratta',
        lugarTrabajo: 'IICAR, Argentina.',
        image: '../../assets/imgs/trabajos/Guillermo-Pratta.JPG',
        image2: '../../assets/imgs/trabajos/Guillermo-Pratta2.JPG'
    },
    {
        nombre: 'Pablo Reeb',
        lugarTrabajo: 'Universidad Nacional del Comahue, Argentina.',
        image: '../../assets/imgs/trabajos/Pablo-Reeb.JPG'
    },
    {
        nombre: 'Maria Vibranovski',
        lugarTrabajo: 'Department of Genetics and Evolutionary Biology, Institute of Biosciences, Universidade de São Paulo, Brasil.',
        image: '../../assets/imgs/trabajos/Maria-Vibranovski.JPG'
    },
    {
        nombre: 'Marco Aurelio Cristancho',
        lugarTrabajo: 'BIOS, Colombia.',
        image: '../../assets/imgs/trabajos/Marco-Aurelio-Cristancho.JPG'
    },
    {
        nombre: 'Lavinia Schuler Faccini',
        lugarTrabajo: 'Universidade Federal do Rio Grande do Sul, Brasil.',
        image: '../../assets/imgs/trabajos/Lavinia-Schuler-Faccini.JPG',
        image2: '../../assets/imgs/trabajos/Lavinia-Schuler-Faccini2.JPG'
    },
    {
        nombre: 'Maria Cátira Bortolini',
        lugarTrabajo: 'Universidade Federal do Rio Grande do Sul, Brasil.',
        image: '../../assets/imgs/trabajos/Maria-Catira-Bortolini.JPG'
    },
    {
        nombre: 'Francyne Kubaski',
        lugarTrabajo: 'MGS- HCPA, UFRGS, INAGEMP, Fundação Médica do RS, Porto Alegre, Brazil.',
        image: '../../assets/imgs/trabajos/Francyne-Kubaski.JPG'
    },
    {
        nombre: 'Harvy Velasco',
        lugarTrabajo: 'Unidad de Genética, DINAMICA IPS, Medellín, Colombia.',
        image: '../../assets/imgs/trabajos/Harvy-Velasco.JPG',
        image2: '../../assets/imgs/trabajos/Harvy-Velasco2.JPG'
    },
    {
        nombre: 'Maria Ana Redal',
        lugarTrabajo: 'INFIBIOC, FFyB, UBA, Argentina.',
        image: '../../assets/imgs/trabajos/Maria-Ana-Redal.JPG'
    },
    {
        nombre: 'Luis Quiñones',
        lugarTrabajo: 'Facultad de Medicina, Universidad de Chile.',
        image: '../../assets/imgs/trabajos/Luis-Quinones.JPG'
    },
    {
        nombre: 'Julian Chamorro',
        lugarTrabajo: 'Laboratorio de Hemostasis y Trombosis, Hospital de Enfermedades Infecciosas “F.J. Muñíz”, Buenos Aires, Argentina.',
        image: '../../assets/imgs/trabajos/Julian-Chamorro.JPG'
    },
    {
        nombre: 'Patricia Esperon',
        lugarTrabajo: 'Departamento Bioquímica Clínica, Facultad  de Química General, Montevideo, Uruguay.',
        image: '../../assets/imgs/trabajos/Patricia-Esperon.JPG'
    },
    {
        nombre: 'Germán Roberto Perez',
        lugarTrabajo: 'FCByF (UNR) - Gammalab (Grupo Gamma), Rosario, Argentina.',
        image: '../../assets/imgs/trabajos/German-Roberto-Perez.JPG'
    },
    {
        nombre: 'Germán Roberto Perez',
        lugarTrabajo: 'FCByF (UNR) - Gammalab (Grupo Gamma), Rosario, Argentina.',
        image: '../../assets/imgs/trabajos/German-Roberto-Perez.JPG'
    },
    {
        nombre: 'Monica Poverene',
        lugarTrabajo: 'Universidad Nacional del Sur, Argentina.',
        image: '../../assets/imgs/trabajos/Monica-Poverene.JPG',
        image2: '../../assets/imgs/trabajos/Monica-Poverene2.JPG'
    },
    {
        nombre: 'Steve Beebe',
        lugarTrabajo: 'Centro Internacional de Agricultura Tropical (CIAT), Colombia.',
        image: '../../assets/imgs/trabajos/Steve-Beebe.JPG'
    },
    {
        nombre: 'Carlos Ovalle',
        lugarTrabajo: 'Chile.',
        image: '../../assets/imgs/trabajos/Carlos-Ovalle.JPG'
    },
    {
        nombre: 'Marcelo Medeiros',
        lugarTrabajo: 'Embrapa, Brazil.',
        image: '../../assets/imgs/trabajos/Marcelo-Medeiros.JPG'
    },
    {
        nombre: 'Jorge Braulio Garcia',
        lugarTrabajo: 'INEVH, Argentina.',
        image: '../../assets/imgs/trabajos/Jorge-Braulio-Garcia.JPG'
    },
    {
        nombre: 'Jorge Braulio Garcia',
        lugarTrabajo: 'INEVH, Argentina.',
        image: '../../assets/imgs/trabajos/Jorge-Braulio-Garcia.JPG'
    },
    {
        nombre: 'Cintia Fabbri',
        lugarTrabajo: 'INEVH, Argentina.',
        image: '../../assets/imgs/trabajos/Cintia-Fabbri.JPG'
    },
    {
        nombre: 'Luiz Alcantara',
        lugarTrabajo: 'Fundação Oswaldo Cruz, Brazil.',
        image: '../../assets/imgs/trabajos/Luiz-Alcantara.JPG'
    },
    {
        nombre: 'Gabriel Iglesias',
        lugarTrabajo: 'Laboratorio de Virus Emergentes, Departamento de Ciencia y Tecnología, Universidad Nacional de Quilmes, Argentina.',
        image: '../../assets/imgs/trabajos/Gabriel-Iglesias.JPG'
    },
    {
        nombre: 'Carina Noé Sen',
        lugarTrabajo: 'Instituto Nacional de Enfermedades Virales Humanas “Dr. Julio I. Maiztegui” (INEVH), Pergamino, Buenos Aires, Argentina.',
        image: '../../assets/imgs/trabajos/Carina-Noe-Sen.JPG'
    },
    {
        nombre: 'Ivana Evelin Kovalsky',
        lugarTrabajo: 'Instituto de Botánica del Nordeste (UNNE-CONICET).',
        image: '../../assets/imgs/trabajos/Ivana-Evelin-Kovalsky.JPG',
        image2: '../../assets/imgs/trabajos/Ivana-Evelin-Kovalsky2.JPG'
    },
    {
        nombre: 'Franco Chiarini',
        lugarTrabajo: 'Instituto Multidisciplinario de Biología Vegetal, CONICET-UNC, Córdoba, Argentina.',
        image: '../../assets/imgs/trabajos/Franco-Chiarini.JPG'
    },
    {
        nombre: 'Eliana Regina Forni Martins',
        lugarTrabajo: 'Universidade Estadual de Campinas-UNICAMP, Brasil.',
        image: '../../assets/imgs/trabajos/Eliana-Regina-Forni-Martins.JPG'
    },
    {
        nombre: 'Gisela Mariel Via Do Pico',
        lugarTrabajo: 'Instituto de Botánica del Nordeste (UNNE-CONICET)',
        image: '../../assets/imgs/trabajos/Gisela-Mariel-Via-Do-Pico.JPG'
    },
    {
        nombre: 'María Irma De Las Mercedes Hidalgo',
        lugarTrabajo: 'Cátedra de Genética, Facultad de Ciencias Agrarias, Universidad Nacional del Nordeste.',
        image: '../../assets/imgs/trabajos/Maria-Irma-De-Las-Mercedes-Hidalgo.JPG'
    },
    {
        nombre: 'Ana Isabel Honfi',
        lugarTrabajo: 'Programa de Estudios Florísticos y Genética Vegetal, Instituto de Biología Subtropical (CONICET- UNaM) nodo Posadas, Facultad de Ciencias Exactas Químicas y Naturales, Universidad Nacional de Misiones, Argentina.',
        image: '../../assets/imgs/trabajos/Ana-Isabel-Honfi.JPG'
    },
    {
        nombre: 'Angela Solano',
        lugarTrabajo: 'INBIOMED, Fac. de Medicina, UBA/CONICET y Genotipificación, DAC, CEMIC, Argentina.',
        image: '../../assets/imgs/trabajos/Angela-Solano.JPG',
        image2: '../../assets/imgs/trabajos/Angela-Solano2.JPG'
    },
    {
        nombre: 'Lilian Jara',
        lugarTrabajo: 'Instituto de Ciencias Biomédicas, Facultad de Medicina, Universidad de Chile.',
        image: '../../assets/imgs/trabajos/Lilian-Jara.JPG'
    },
    {
        nombre: 'Alejandra Mampel',
        lugarTrabajo: 'Hospital Universitario, UN de Cuyo, Mendoza, Argentina.',
        image: '../../assets/imgs/trabajos/Alejandra-Mampel.JPG'
    },
    {
        nombre: 'Alejandra Mampel',
        lugarTrabajo: 'Hospital Universitario, UN de Cuyo, Mendoza, Argentina.',
        image: '../../assets/imgs/trabajos/Alejandra-Mampel.JPG'
    },
    {
        nombre: 'Rocio Ortiz-lopez',
        lugarTrabajo: 'Tecnológico de Monterrey, Monterrey, Nuevo León.',
        image: '../../assets/imgs/trabajos/Rocio-Ortiz-lopez.JPG'
    },
    {
        nombre: 'Mario Poli',
        lugarTrabajo: 'INTA, CICVyA-Instituto de Genética, Argentina.',
        image: '../../assets/imgs/trabajos/Mario-Poli.JPG',
        image2: '../../assets/imgs/trabajos/Mario-Poli2.JPG'
    },
    {
        nombre: 'Pedro Alejandro Vozzi',
        lugarTrabajo: 'INTA EEA Chubut, Argentina.',
        image: '../../assets/imgs/trabajos/Pedro-Alejandro-Vozzi.JPG'
    },
    {
        nombre: 'Germán Kaiser',
        lugarTrabajo: 'Grupo de Biotecnología de la Reproducción, INTA Balcarce, Argentina.',
        image: '../../assets/imgs/trabajos/German-Kaiser.JPG'
    },
    {
        nombre: 'Maria Silvia Llambí',
        lugarTrabajo: 'Facultad de Veterinaria, UdelaR-Uruguay.',
        image: '../../assets/imgs/trabajos/Maria-Silvia-Llambi.JPG'
    },
    {
        nombre: 'Gustavo Augusto Gutierrez Reynoso',
        lugarTrabajo: 'Universidad Nacional Agraria La Molina, Perú.',
        image: '../../assets/imgs/trabajos/Gustavo-Augusto-Gutierrez-Reynoso.JPG'
    },
    {
        nombre: 'Gustavo Rubén Rodríguez',
        lugarTrabajo: 'Coordinador Maestría en Genética Vegetal de la Universidad Nacional de Rosario (UNR) y el Instituto Nacional de Tecnología Agropecuaria (INTA); Facultad de Ciencias Agrarias, Universidad Nacional de Rosario, Santa Fe, Argentina.',
        image: '../../assets/imgs/trabajos/Gustavo-Ruben-Rodriguez.JPG'
    },
    {
        nombre: 'Ignacio Torrent',
        lugarTrabajo: 'Bayer Argentina.',
        image: '../../assets/imgs/trabajos/Ignacio-Torrent.JPG'
    },
    {
        nombre: 'María Soledad Alessandro',
        lugarTrabajo: 'INTA La Consulta, Mendoza Argentina.',
        image: '../../assets/imgs/trabajos/Maria-Soledad-Alessandro.JPG'
    },
    {
        nombre: 'Jose Colazo',
        lugarTrabajo: 'GTMGA-INTA, Grupo de Trabajo Mejoramiento Genético de Arroz, Entre Ríos, Argentina.',
        image: '../../assets/imgs/trabajos/Jose-Colazo.JPG'
    },
    {
        nombre: 'Gustavo Lobos',
        lugarTrabajo: 'Maule, Chile.',
        image: '../../assets/imgs/trabajos/Gustavo-Lobos.JPG'
    },
    {
        nombre: 'Luciana Bolsoni Lourenço',
        lugarTrabajo: 'Unicamp, Campinas-SP, Brasil.',
        image: '../../assets/imgs/trabajos/Luciana-Bolsoni-Lourenco.JPG'
    },
    {
        nombre: 'Diogo Cabral-de-mello',
        lugarTrabajo: 'Department of Biology, Institute of Biosciences, Sao Paulo State University (UNESP), Rio Claro, SP, Brazil.',
        image: '../../assets/imgs/trabajos/Diogo-Cabral-de-mello.JPG'
    },
    {
        nombre: 'Magdalena Vaio',
        lugarTrabajo: 'Facultad de Agronomía, Universidad de la República, Uruguay.',
        image: '../../assets/imgs/trabajos/Magdalena-Vaio.JPG'
    },
    {
        nombre: 'Sergio Sebastian Samoluk',
        lugarTrabajo: 'IBONE, Argentina.',
        image: '../../assets/imgs/trabajos/Sergio-Sebastian-Samoluk.JPG'
    },
    {
        nombre: 'Augusto Rojas-martínez',
        lugarTrabajo: 'Tecnológico de Monterrey, México.',
        image: '../../assets/imgs/trabajos/Augusto-Rojas-martinez.JPG',
        image2: '../../assets/imgs/trabajos/Augusto-Rojas-martinez2.JPG'
    },
    {
        nombre: 'Maria Teresa Sanseverino',
        lugarTrabajo: 'Serviço de Genetica Medica-Hcpa, Escola de Medicina PUCRS.RS, Brasil.',
        image: '../../assets/imgs/trabajos/Maria-Teresa-Sanseverino.JPG'
    },
    {
        nombre: 'Miguel Del Campo Casanelles',
        lugarTrabajo: 'University of California San Diego, USA.',
        image: '../../assets/imgs/trabajos/Miguel-Del-Campo-Casanelles.JPG'
    },
    {
        nombre: 'Silvia Castillo Taucher',
        lugarTrabajo: 'Sección Genética Hospital Clínico, Universidad de Chile, Chile.',
        image: '../../assets/imgs/trabajos/Silvia-Castillo-Taucher.JPG'
    },
    {
        nombre: 'Silvia Castillo Taucher',
        lugarTrabajo: 'Sección Genética Hospital Clínico, Universidad de Chile, Chile.',
        image: '../../assets/imgs/trabajos/Silvia-Castillo-Taucher.JPG'
    },
    {
        nombre: 'Graciela Del Rey',
        lugarTrabajo: 'Centro de Investigaciones Endocrinológicas “Dr. César Bergadá”, CEDIE-CONICET. FEI. Hospital de Niños “Ricardo Gutiérrez”, Argentina.',
        image: '../../assets/imgs/trabajos/Graciela-Del-Rey.JPG'
    },
    {
        nombre: 'Luis Pablo Gravina',
        lugarTrabajo: 'Hospital de Pediatría Garrahan, Buenos Aires, Argentina.',
        image: '../../assets/imgs/trabajos/Luis-Pablo-Gravina.JPG'
    },
    {
        nombre: 'Laura Valinotto',
        lugarTrabajo: 'Centro de Investigaciones en Genodermatosis y Epidermólisis Ampollar (CEDIGEA), Facultad de Medicina, UBA; Hospital de Niños R. Gutiérrez, Argentina; CONICET, Argentina.',
        image: '../../assets/imgs/trabajos/Laura-Valinotto.JPG'
    },
    {
        nombre: 'Eduardo Fidel Tizzano',
        lugarTrabajo: 'Área Genética Clínica y Molecular, Hospital Universitario Valle Ebron, Barcelona, España.',
        image: '../../assets/imgs/trabajos/Eduardo-Fidel-Tizzano.JPG'
    },
    {
        nombre: 'Carlos Bacino',
        lugarTrabajo: 'Texas Childrens Hospital, USA.',
        image: '../../assets/imgs/trabajos/Carlos-Bacino.JPG'
    },
    {
        nombre: 'Maura Helena Manfri',
        lugarTrabajo: 'Departamento de Biologia - FFCLRP - Universidade de São Paulo, Brasil.',
        image: '../../assets/imgs/trabajos/Maura-Helena-Manfri.JPG'
    },
    {
        nombre: 'Therese Markow',
        lugarTrabajo: 'LANGEBIO-CINVESTAV, Irapuato, Guanajuato, Mexico and Division of Biological Sciences UCSD La Jolla, California, USA.',
        image: '../../assets/imgs/trabajos/Therese-Markow.JPG'
    },
    {
        nombre: 'Carlos Machado',
        lugarTrabajo: 'University of Maryland, USA.',
        image: '../../assets/imgs/trabajos/Carlos-Machado.JPG'
    },
    {
        nombre: 'Antonio Bernardo Carvalho',
        lugarTrabajo: 'Universidade Federal do Rio de Janeiro, Brazil.',
        image: '../../assets/imgs/trabajos/Antonio-Bernardo-Carvalho.JPG'
    },
    {
        nombre: 'Antonio Bernardo Carvalho',
        lugarTrabajo: 'Universidade Federal do Rio de Janeiro, Brazil.',
        image: '../../assets/imgs/trabajos/Antonio-Bernardo-Carvalho.JPG'
    },
    {
        nombre: 'Marcia Margis-pinheiro',
        lugarTrabajo: 'Universidade Federal do Rio Grande do Sul, Brazil.',
        image: '../../assets/imgs/trabajos/Marcia-Margis-pinheiro.JPG'
    },
    {
        nombre: 'Michael Frei',
        lugarTrabajo: 'University of Bonn, Germany',
        image: '../../assets/imgs/trabajos/Michael-Frei.JPG'
    },
    {
        nombre: 'Hannetz Roschzttardtz',
        lugarTrabajo: 'Facultad de Ciencias Biológicas, Pontificia Universidad Católica de Chile, Chile.',
        image: '../../assets/imgs/trabajos/Hannetz-Roschzttardtz.JPG'
    },
    {
        nombre: 'Felipe Ricachenevsky',
        lugarTrabajo: 'Universidade Federal de Santa Maria, Brazil.',
        image: '../../assets/imgs/trabajos/Felipe-Ricachenevsky.JPG'
    },
    {
        nombre: 'María Cristina Acosta',
        lugarTrabajo: 'Instituto Multidisciplinario de Biología Vegetal (IMBIV) CONICET-UNC, Argentina.',
        image: '../../assets/imgs/trabajos/Maria-Cristina-Acosta.JPG'
    },
    {
        nombre: 'Marisel Scaldaferro',
        lugarTrabajo: 'Instituto Multidisciplinario de Biología Vegetal (IMBIV), CONICET-Universidad Nacional de Córdoba, Córdoba, Argentina.',
        image: '../../assets/imgs/trabajos/Marisel-Scaldaferro.JPG'
    },
    {
        nombre: 'Graciela Esther González',
        lugarTrabajo: 'IEGEBA-CONICET, Argentina.',
        image: '../../assets/imgs/trabajos/Graciela-Esther-Gonzalez.JPG'
    },
    {
        nombre: 'Maria Laura Las Peñas',
        lugarTrabajo: 'IMBIV, Argentina.',
        image: '../../assets/imgs/trabajos/Maria-Laura-Las-Penas.JPG'
    },
    {
        nombre: 'Paola Gaiero',
        lugarTrabajo: 'Facultad de Agronomía, Universidad de la República',
        image: '../../assets/imgs/trabajos/Paola-Gaiero.JPG'
    },
    {
        nombre: 'Alejandra Marcela Ortiz',
        lugarTrabajo: 'IBONE, Argentina.',
        image: '../../assets/imgs/trabajos/Alejandra-Marcela-Ortiz.JPG'
    },
    {
        nombre: 'María Florencia Realini',
        lugarTrabajo: 'IBONE, Argentina.',
        image: '../../assets/imgs/trabajos/Maria-Florencia-Realini.JPG'
    },
    {
        nombre: 'Gabriela Repetto',
        lugarTrabajo: 'RM, Chile.',
        image: '../../assets/imgs/trabajos/Gabriela-Repetto.JPG'
    },
    {
        nombre: 'Iscia Lopes-cendes',
        lugarTrabajo: 'Department of Medical Genetics and Genomic Medicine, School of Medical Sciences, and the Brazilian Institute of Neuroscience and Neurotechnology (BRAINN), Campinas, SP, Brazil.',
        image: '../../assets/imgs/trabajos/Iscia-Lopes-cendes.JPG'
    },
    {
        nombre: 'Marta Ascurra',
        lugarTrabajo: 'Programa Nacional de Prevención de Defectos Congénitos, Ministerio de Salud, Paraguay.',
        image: '../../assets/imgs/trabajos/Marta-Ascurra.JPG'
    },
    {
        nombre: 'Gonzalo Encina',
        lugarTrabajo: 'Centro de Genética y Genómica, Instituto de Ciencias e Innovación en Medicina, Facultad de Medicina - Clínica Alemana, Universidad del Desarrollo, Santiago, Chile.',
        image: '../../assets/imgs/trabajos/Gonzalo-Encina.JPG'
    },
    {
        nombre: 'Liliana Picardi',
        lugarTrabajo: 'Universidad Nacional de Rosario, Argentina.',
        image: '../../assets/imgs/trabajos/Liliana-Picardi.JPG'
    },
    {
        nombre: 'Sergio Feingold',
        lugarTrabajo: 'INTA, Balcarce, Argentina',
        image: '../../assets/imgs/trabajos/Sergio-Feingold.JPG'
    },
    {
        nombre: 'Nicolás Mucci',
        lugarTrabajo: 'INTA, Balcarce, Argentina.',
        image: '../../assets/imgs/trabajos/Nicolas-Mucci.JPG'
    },
    {
        nombre: 'Agustin Zsögön',
        lugarTrabajo: 'Universidade Federal de Viçosa, Brazil; 2Universidade de São Paulo, Brazil.',
        image: '../../assets/imgs/trabajos/Agustin-Zsogon.JPG'
    },
    {
        nombre: 'Lluis Montoliu',
        lugarTrabajo: 'CNB-CSIC, España.',
        image: '../../assets/imgs/trabajos/Lluis-Montoliu.JPG'
    },
    {
        nombre: 'Clara Pritsch',
        lugarTrabajo: 'Facultad de Agronomía, UDELAR, Uruguay.',
        image: '../../assets/imgs/trabajos/Clara-Pritsch.JPG'
    },
    {
        nombre: 'Susana Noemí Marcucci Poltri',
        lugarTrabajo: 'Instituto de Agrobiotecnología y Biología Molecular, (IABIMO), Instituto Nacional de Tecnología Agropecuaria y Consejo Nacional de Investigaciones Científicas y Tecnológicas (INTA-CONICET), Hurlingham, Buenos Aires, Argentina.',
        image: '../../assets/imgs/trabajos/Susana-Noemi-Marcucci-Poltri.JPG'
    },
    {
        nombre: 'Marianella Fernanda Quezada Macchiavello',
        lugarTrabajo: 'Universidad de la República, Facultad de Agronomía, Uruguay.',
        image: '../../assets/imgs/trabajos/Marianella-Fernanda-Quezada-Macchiavello.JPG'
    },
    {
        nombre: 'Antonio Augusto Franco Garcia',
        lugarTrabajo: 'Departamento Genética, Escola Superior de Agricultura Luiz de Queiroz, Universidade de São Paulo, Brazil.',
        image: '../../assets/imgs/trabajos/Antonio-Augusto-Franco-Garcia.JPG'
    },
    {
        nombre: 'Maria Lucia Carneiro Vieira',
        lugarTrabajo: 'Universidade de São Paulo, Brazil.',
        image: '../../assets/imgs/trabajos/Maria-Lucia-Carneiro-Vieira.JPG'
    },
    {
        nombre: 'Viviana Solís Neffa',
        lugarTrabajo: 'IBONE (UNNE-CONICET), FACENA (UNNE), Argentina.',
        image: '../../assets/imgs/trabajos/Viviana-Solis-Neffa.JPG',
        image2: '../../assets/imgs/trabajos/Viviana-Solis-Neffa2.JPG'
    },
    {
        nombre: 'Freitas Loreta',
        lugarTrabajo: 'Universidade Federal do Rio Grande do Sul, Brazil.',
        image: '../../assets/imgs/trabajos/Freitas-Loreta.JPG'
    },
    {
        nombre: 'Pablo Speranza',
        lugarTrabajo: 'Facultad de Agronomía, Universidad de la República, Montevideo, Uruguay.',
        image: '../../assets/imgs/trabajos/Pablo-Speranza.JPG'
    },
];
//# sourceMappingURL=disertantes.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return programa; });
var programa = [
    {
        dia: 6,
        mes: 10,
        anio: 2019,
        cronograma: [{
                hora: '9:30 Hs.',
                charlas: [
                    {
                        id: 1,
                        titulo_es: 'Análisis de grandes bases de datos en estudios genéticos',
                        titulo_en: 'Análisis de grandes bases de datos en estudios genéticos',
                        tipo: 'curso',
                        desc_es: '<p>La Biología se está convirtiendo de una Ciencia principalmente descriptiva a otra basada en el estudio del flujo de información y en la prospección y disección de una gran cantidad de datos. Este curso pretende introducir en el análisis de bases de datos de alta dimensionalidad en Genética, como contribución al conocimiento de la vida en sus aspectos molecular, individual, poblacional, ecosistémico y evolutivo.</p>',
                        desc_en: '<p>Biology is being converted from a primarily descriptive science to another based on the study of the flow of information and the prospecting and dissection of a large amount of data. This course aims to introduce into the analysis of databases of high dimensionality in Genetics, as a contribution to the knowledge of life in its molecular, individual, population, ecosystem and evolutionary aspects. </p> ',
                        horario: '9:30 - 16:30',
                        lugar: 'Centro Civit',
                        coordinadora: 'Dr. Guillermo Pratta, IICAR (CONICET/UNR), Argentina.',
                        docentes: [
                            'Dr. Pablo Reebs. Facultad de Ciencias Agrarias UNCo, Argentina.',
                            'Dr. Gustavo Rodríguez, IICAR (CONICET/UNR), Argentina.',
                            'Dr. Marco Cristancho, Universidad de Los Andes, Colombia.',
                            'Dr. Guillermo Pratta, IICAR (CONICET/UNR), Argentina.'
                        ],
                        contenidos: [
                            'Introducción a las Grandes Bases de Datos: generación, curado, sistematización, análisis, interpretación. Reducción de la dimensionalidad. Grandes Bases de Datos en Genética: aplicaciones en distintos niveles de la organización biológica. Manejo de softwares.'
                        ]
                    }
                ]
            },
            {
                hora: '10:00 Hs.',
                charlas: [
                    {
                        id: 2,
                        titulo_es: 'Meta-análisis de estudios genéticos: manos a la obra',
                        titulo_en: 'Meta-análisis de estudios genéticos: manos a la obra',
                        tipo: 'curso',
                        desc_es: '<p>La aplicación de meta-análisis (MA) permite el análisis combinado de un conjunto de estudios sobre un tema de interés, cuyos resultados son obtenidos de forma independiente. La finalidad de evaluar estos resultados conjuntamente es realizar una síntesis y obtener estimaciones globales de los efectos de interés con métricas apropiadas. La técnica puede ser aplicada para sintetizar estudios de QTL y posicionar con mayor evidencia estadística loci asociados a caracteres de importancia agronómica. Luego de una revisión sistemática de estudios de mapeo de QTL, tanto en poblaciones biparentales como el mapeo asociativo en poblaciones diversas, el MA se aplica para consolidar hallazgos y obtener estimaciones globales. El objetivo del presente curso es ofrecer una visión de los principios que rigen la síntesis de la evidencia científica en estudios genéticos mediante aplicaciones de rutinas de software que permiten realizar MA a partir de una recopilación de estudios de QTL en poblaciones vegetales. También se extenderá el uso de la técnica de MA hacia la estimación de otros efectos de interés en estudios de asociación genética.</p>',
                        desc_en: '<p>La aplicación de meta-análisis (MA) permite el análisis combinado de un conjunto de estudios sobre un tema de interés, cuyos resultados son obtenidos de forma independiente. La finalidad de evaluar estos resultados conjuntamente es realizar una síntesis y obtener estimaciones globales de los efectos de interés con métricas apropiadas. La técnica puede ser aplicada para sintetizar estudios de QTL y posicionar con mayor evidencia estadística loci asociados a caracteres de importancia agronómica. Luego de una revisión sistemática de estudios de mapeo de QTL, tanto en poblaciones biparentales como el mapeo asociativo en poblaciones diversas, el MA se aplica para consolidar hallazgos y obtener estimaciones globales. El objetivo del presente curso es ofrecer una visión de los principios que rigen la síntesis de la evidencia científica en estudios genéticos mediante aplicaciones de rutinas de software que permiten realizar MA a partir de una recopilación de estudios de QTL en poblaciones vegetales. También se extenderá el uso de la técnica de MA hacia la estimación de otros efectos de interés en estudios de asociación genética.</p>',
                        horario: '10:00 - 16:00',
                        lugar: 'Centro Civit',
                        modalidad: 'Cada participante deberá asistir con notebook y tener instalado el software libre Zotero (gestor bibliográfico), los software estadísticos R e Info-Gen. Previo al curso se enviarán instrucciones para su descarga.',
                        coordinadora: 'Dra. Mónica Balzarini. FCA. Universidad Nacional de Córdoba. Argentina.',
                        duracion: '6hs.',
                        simposistas: [
                            'Dra. Mónica Balzarini. FCA. Universidad Nacional de Córdoba. Argentina.',
                            'Dra. Cecilia Bruno. FCA. Universidad Nacional de Córdoba. Argentina.',
                            'Dra. Natalia Bonamico. FAV. Universidad Nacional de Río Cuarto. Argentina.',
                            'Dr. Ezequiel Rossi. FAV. Universidad Nacional de Río Cuarto. Argentina.'
                        ],
                        contenidos: [
                            'Revisión Sistemática. Principios y claves para implementarla. Práctica de búsqueda avanzada en plataformas digitales y manejo de gestores bibliográficos.',
                            'Meta-análisis de efectos genéticos de interés (ejemplo variables continuas y binarias).',
                            'Implementación de códigos de MA escritos en R, a través de la Interfase de Info-Gen.',
                            'Interpretaciones'
                        ]
                    }
                ]
            },
            {
                hora: '13:00 Hs.',
                charlas: [
                    {
                        id: 3,
                        titulo_es: 'Teoría de juegos y presentación del libro sobre el tema editado por la SAG',
                        titulo_en: 'Teoría de juegos y presentación del libro sobre el tema editado por la SAG',
                        tipo: 'curso',
                        desc_es: '<p>La Teoría de los Juegos: el área de la matemática que a partir del uso de modelos estudia las tomas de decisiones y las interacciones en lo que se conoce como estructuras formalizadas de incentivos. Es decir, la lógica que usamos siempre que interactuamos con otro ser humano cuando, por ejemplo, tratamos de quedarnos con el último pedazo de torta en la cafetería o le hacemos un favor a un colega que esperamos retorne en el futuro.</p><p>Hoy en día, la Teoría de los Juegos es usada por muchas personas distintas en un amplio espectro de intereses. «La principal razón de su éxito fue la variedad de escenarios en los que la gente empezó a darse cuenta que tenían que pensar formal y sistemáticamente sobre las interacciones estratégicas».</p>',
                        desc_en: '<p>La Teoría de los Juegos: el área de la matemática que a partir del uso de modelos estudia las tomas de decisiones y las interacciones en lo que se conoce como estructuras formalizadas de incentivos. Es decir, la lógica que usamos siempre que interactuamos con otro ser humano cuando, por ejemplo, tratamos de quedarnos con el último pedazo de torta en la cafetería o le hacemos un favor a un colega que esperamos retorne en el futuro.</p><p>Hoy en día, la Teoría de los Juegos es usada por muchas personas distintas en un amplio espectro de intereses. «La principal razón de su éxito fue la variedad de escenarios en los que la gente empezó a darse cuenta que tenían que pensar formal y sistemáticamente sobre las interacciones estratégicas».</p>',
                        horario: '13:00 - 16:00',
                        duracion: '3 Hs.',
                        lugar: 'Universidad Maza',
                        docentes: [
                            'David Almorza Gomar. Dpto. de Estadística experimental. Universidad de Cádiz, España.'
                        ],
                        contenidos: [
                            'Ideas básicas de la Teoría de Juegos.',
                            'Cálculo del momento de equilibrio.',
                            'Regla de Dominación.',
                            'Juegos bimatriciales.',
                            'El dilema del prisionero y otros dilemas.',
                            'Aplicaciones.'
                        ]
                    },
                    {
                        id: 4,
                        titulo_es: 'Reunión Latin America – Grupo de estudios de tumores hereditarios (LA-GETH)',
                        titulo_en: 'Latin America Meeting - Group of hereditary tumor studies (LA-GETH)',
                        tipo: 'varios',
                        horario: '13:00 - 16:00',
                        duracion: '3 Hs.',
                        lugar: 'Centro Civit'
                    },
                    {
                        id: 5,
                        titulo_es: 'Genética y genómica de la vid. Una perspectiva regional y multisectorial',
                        titulo_en: 'Genética y genómica de la vid. Una perspectiva regional y multisectorial',
                        tipo: 'simposio',
                        horario: '13:00 - 16:00',
                        lugar: 'Centro Civit',
                        coordinadora: 'Diego Lijavetzky. IBAM (CONICET-UNCuyo). Mendoza. Argentina.',
                        simposistas: [
                            {
                                titulo: 'Decoding the secrets of Malbec genome by the analysis of the clonal genomic variation. ',
                                desc: 'Calderón L.1, N. Mauri2, C. Muñoz1, L. Bree3, P. Carbonell-bejerano2, D. Bergamín3, C. Royo2, C. Sola3, J.M.. Martínez-zapater2, D. Lijavetzky1. 1 Instituto de Biología Agrícola de Mendoza (IBAM), CONICET, UNCuyo, FCA, Chacras de Coria, Mendoza, Argentina; 2 Instituto de Ciencias de la Vid y del Vino, Consejo Superior de Investigaciones Científicas-Universidad de La Rioja-Gobierno de La Rioja, Logrono, Spain; 3 Vivero Mercier Argentina, Pedriel, Luján de Cuyo, Mendoza, Argentina.'
                            },
                            {
                                titulo: 'Búsqueda de genes y marcadores asociados a tamaño de baya en vid de mesa, carácter cuantitativo y complejo.',
                                desc: 'Muñoz – Espinoza C., G. Ravest, M. Burgos, P. Jiménez, S. Bustos, M.H. Castro, P. Hinrichsen. INIA La Platina. Chile.'
                            },
                            {
                                titulo: 'El genoma de Tannat: herramientas ómicas al servicio de la vitivinicultura uruguaya.',
                                desc: 'Da Silva C.1, A. Ferrarini2, E. Boido3, C. Gaggero4, M. Delledonne2, F. Carrau3. 1 PDU Espacio de Biología Vegetal del Noreste, Centro Universitario de Tacuarembó, Universidad de la República, Uruguay; 2 Centro di Genomica Funzionale, Dipartimento di Biotecnologie, Universitá degli Studi di Verona, Italia; 3 Área Enología y Biotecnología de Fermentación, Facultad de Química, Universidad de la República, Uruguay; 4 Departamento de Biología Molecular, Instituto de Investigaciones Biológicas Clemente Estable, Uruguay.'
                            },
                            {
                                titulo: 'Selecciones masales y clonales de Malbec en Argentina.',
                                desc: 'Sola C.1. 1 Vivero Mercier Argentina S.A. Argentina.'
                            },
                            {
                                titulo: 'Malbec argentino: ciencia al servicio de la diversidad genétic.',
                                desc: 'Alonso R.1, F. Buscema1. 1 Catena Institute of Wine. Argentina.'
                            }
                        ]
                    }
                ]
            },
            {
                hora: '18:00 Hs.',
                charlas: [
                    {
                        id: 6,
                        titulo_es: 'OPENING SESSION',
                        titulo_en: 'OPENING SESSION',
                        tipo: 'varios',
                        horario: '18:00 - 20:30',
                        lugar: 'Sala 1 (Bustelo)',
                    },
                    {
                        id: 7,
                        titulo_es: 'Conferencia F Sáez, SAG: La Genética Médica y la Medicina hoy.',
                        titulo_en: 'Conferencia F Sáez, SAG: La Genética Médica y la Medicina hoy.',
                        tipo: 'conferencia',
                        horario: '18:00 - 20:30',
                        lugar: 'Sala 1 (Bustelo)',
                        autor: 'Norma C. Magnelli. Facultad de Ciencias Médicas. UNCuyo. Argentina.',
                        autorDesc: '<p>Médica y Doctora en Medicina. Fue becaria de la Fundación Rockefeller en la Universidad de San Pablo, bajo la dirección de Oswaldo Frota Pessoa y en la de Wisconsin  bajo la dirección de Klaus Patau. Fundadora del Instituto de Genética de la Facultad de Ciencias Médicas de la UNCuyo. Autora de artículos de la especialidad en revistas y libros nacionales y extranjeros.</p><p>Presidente de la Sociedad Argentina de Genética e integrante del Consejo Asesor y Editorial de Mendeliana. Secretaria Académica y Decana de la Facultad de Ciencias Médicas de la UNCuyo.</p><p>Ha recibido distinciones por la labor en investigación, docencia y por la formación de recursos humanos.</p>'
                    }
                ]
            }
        ]
    },
    {
        dia: 7,
        mes: 10,
        anio: 2019,
        cronograma: [
            {
                hora: '8:00 Hs.',
                charlas: [
                    {
                        id: 8,
                        titulo_es: 'Colocación de posters',
                        titulo_en: 'Poster set up',
                        tipo: 'varios',
                        horario: '8:00 - 8:30',
                        lugar: '',
                        categorias: [
                            {
                                nombre_es: 'Citogenética Humana',
                                nombre_en: 'Human Cytogenetics'
                            },
                            {
                                nombre_es: 'Farmacogenética',
                                nombre_en: 'Pharmacogenetics'
                            },
                            {
                                nombre_es: 'Genética de Microorganismos',
                                nombre_en: 'Genetics of Microorganisms'
                            },
                            {
                                nombre_es: 'Genética y Educación',
                                nombre_en: 'Genetics and Education'
                            },
                            {
                                nombre_es: 'Genética y Mejoramiento Animal',
                                nombre_en: 'Genetics and Animal Breeding'
                            },
                            {
                                nombre_es: 'Genómica y Genética Molecular',
                                nombre_en: 'Genomics and Molecular Genetics'
                            },
                            {
                                nombre_es: 'Mutagénesis, Carcinogénesis y Teratogénesis Ambiental',
                                nombre_en: 'Mutagenesis, Carcinogenesis and Environmental Teratogenesis'
                            }
                        ]
                    }
                ]
            },
            {
                hora: '8:30 Hs.',
                charlas: [
                    {
                        id: 9,
                        titulo_es: 'División celular mitótica y meiótica 3D: una experiencia de aprendizaje con realidad aumentada',
                        titulo_en: 'División celular mitótica y meiótica 3D: una experiencia de aprendizaje con realidad aumentada',
                        tipo: 'taller',
                        responsables: 'Francisco López Cortés, Claudio Palma-Rojas, Camilo Ibacache, Cristian Araya-Jaime. Universidad La Serena. Chile.',
                        horario: '8:30 - 10:30',
                        lugar: 'Uspallata. Sala 4.',
                        temario: [
                            'Introducción: Presentación y caracterización de la tecnología de realidad aumentada.',
                            'Estrategias de aprendizaje utilizando la realidad aumentada para la enseñanza de los procesos de reproducción celular.',
                            'Presentación y utilización de las aplicaciones móviles:',
                            'DIVISIÓN MITÓTICA 3 D: Una experiencia de aprendizaje en Realidad Aumentada',
                            'DIVISIÓN MEIÓTICA 3D: Una experiencia de aprendizaje en Realidad Aumentada'
                        ]
                    },
                    {
                        id: 10,
                        titulo_es: 'Sistemas de vigilancia de anomalías congénitas en Am Latina y el Caribe',
                        titulo_en: 'Sistemas de vigilancia de anomalías congénitas en Am Latina y el Caribe',
                        tipo: 'simposio',
                        horario: '8:30 - 10:30',
                        lugar: 'Bustelo. Sala 1',
                        coordinadora: 'Mariela Larrandaburu. Ministerio de Salud. Montevideo, Uruguay.',
                        simposistas: [
                            {
                                titulo: 'Registro nacional de defectos congénitos y enfermedades raras, herramienta para la vigilancia de las anomalías congénitas en Uruguay.',
                                desc: 'Larrandaburu M.1. 1 Ministerio de Salud Pública, Montevideo, Uruguay.'
                            },
                            {
                                titulo: 'Vigilancia de las anomalías congénitas en Argentina, experiencia de la Red Nacional de Anomalías Congénitas (RENAC).',
                                desc: 'Liascovich R.1. 1 Centro Nacional de Genética Médica, ANLIS, Ministerio de Salud. Argentina. '
                            },
                            {
                                titulo: 'Experiencia en el desarrollo del Sistema de Vigilancia de Anomalías Congénitas en Bogotá y Cali. ',
                                desc: 'Ignacio Zarante. Universidad Javeriana de Bogotá. Colombia.'
                            },
                            {
                                titulo: 'RELAMC: Latin American Congenital Malformation Network.',
                                desc: 'Orioli I.M.1,2, H. Dolk3, D.M. Correa1,2, I. Zarante4, E.S.R. Vico5, R.A. Pardo6,7, F.M. Carvalho8,2, F.M.S. Soares1,2. 1 Department of Genetics, Institute of Biology, Federal University of Rio de Janeiro, Rio de Janeiro, Brazil; 2 National Institute of Population Medical Genetics (INAGEMP), Porto Alegre, Brasil ; 3 Maternal Fetal and Infant Research Centre, Institute of Nursing and Health Research, Ulster University, Shore Rd, Newtownabbey, Northern Ireland, UK; 4 Human Genetics Institute, School of Medicine, Pontificia Universidad Javeriana, Bogotá, Colombia; 5 Municipal Health Secretary of São Paulo, São Paulo, Brazil; 6 Hospital Clínico Universidad de Chile, Santiago, Chile; 7 Hospital Dr. Sótero del Río, Santiago, Chile; 8 Laboratory of Congenital Malformation Epidemiology, Oswaldo Cruz Institute, FIOCRUZ, Rio de Janeiro, Brazil.'
                            }
                        ]
                    },
                    {
                        id: 11,
                        titulo_es: 'Update in cancer genetics and implementation challenges for precision medicine in Latin America',
                        titulo_en: 'Update in cancer genetics and implementation challenges for precision medicine in Latin America',
                        tipo: 'simposio',
                        horario: '8:30 - 10:30',
                        lugar: 'Bustelo. Sala 2',
                        coordinadora: 'Mev Domínguez Valentin. Oslo University Hospital. Oslo, Noruega.',
                        simposistas: [
                            {
                                titulo: 'La genética del cáncer de mama en Latinoamérica. Mutaciones fundadoras en BRCA1 y BRCA2 en Chile, Colombia, Brasil y México.',
                                desc: 'Pilar Carvallo. Pontificia Universidad Católica de Chile. Santiago, Chile.'
                            },
                            {
                                titulo: 'Precision medicine for breast and ovarian cancer in Latin America.',
                                desc: 'Rossi B.M.1, E.I. Palmero1. 1 Brazil.'
                            },
                            {
                                titulo: 'Estrategias y recomendaciones oficiales nacionales para síndromes hereditarios.',
                                desc: 'Adriana della Valle.  Hospital de las Fuerzas Armadas. Montevideo, Uruguay.'
                            },
                            {
                                titulo: 'Nuevos genes en el diagnóstico del cáncer colorrectal hereditario.',
                                desc: 'Carlos Vaccaro. Hospital Italiano de Buenos Aires. Buenos Aires, Argentina.'
                            }
                        ]
                    },
                    {
                        id: 12,
                        titulo_es: 'Recursos genéticos y sociedad',
                        titulo_en: 'Recursos genéticos y sociedad',
                        tipo: 'simposio',
                        horario: '8:30 - 10:30',
                        lugar: 'Magna. Sala 3',
                        coordinadora: 'Elsa Camadro. Universidad Nacional de Mar del Plata. CONICET. Argentina.',
                        simposistas: [
                            {
                                titulo: 'Marco jurídico para el acceso y utilización de recursos genéticos en América Latina: el caso de Argentina,Brasil y Perú. ',
                                desc: 'Silvestri L.C.1. 1 INCIHUSA CONICET MENDOZA. Argentina.'
                            },
                            {
                                titulo: 'Política y Legislación Ambiental, y Manejo de Áreas Silvestres en Brasil.',
                                desc: 'Josita Monteiro, Universidad Federal de Santa María, Río Grande del Sur.'
                            },
                            {
                                titulo: 'Comunidades indígenas y pequeños productores como agentes clave en la conservación y evolución de los cultivos. ',
                                desc: 'Stef de Haan, CIP, Perú.'
                            },
                            {
                                titulo: 'Prácticas ganaderas y desarrollo territorial sustentable en comunidades aborígenes y campesinas de regiones áridas y semiáridas. ',
                                desc: 'Guillermo Vila Melo, Argentina.'
                            }
                        ]
                    },
                    {
                        id: 13,
                        titulo_es: 'Marcelo Guerra',
                        titulo_en: 'Marcelo Guerra',
                        tipo: 'conferencia',
                        horario: '8:30 - 10:30',
                        lugar: 'Plumerillo. Sala 5'
                    },
                    {
                        id: 14,
                        titulo_es: 'Impactos da Pintura Cromossômica na Citogenética Comparativa',
                        titulo_en: 'Impactos da Pintura Cromossômica na Citogenética Comparativa',
                        tipo: 'simposio',
                        horario: '8:30 - 10:30',
                        lugar: 'Plumerillo. Sala 5',
                        coordinadora: 'Andrea Pedrosa-Harand. Departamento de Botânica, UFPE, Recife/PE, Brasil.',
                        simposistas: [
                            {
                                titulo: 'Rearranjos cromossômicos entre espécies de Vigna e Phaseolus vulgaris revelados por BAC-FISH e Oligo-FISH. ',
                                desc: 'Brasileiro-Vidal A.C.1, F.O. Bustamante1, L.V. Martins1,2, A.R.S. Oliveira1, E.V. Vasconcelos1, S.W.D.S.I. Alves1, H. Zhao2, V.A. Costa1, G.S. Lima1, A.F. Costa3, M.. Muñoz-amatriaín4, T.J. Close4, A.M. Benko-iseppon1, A. Pedrosa-harand1, J. Jiang2. 1 Universidade Federal de Pernambuco; 2 Michigan State University; 3 Instituto Agronômico de Pernambuco; 4 University of California. '
                            },
                            {
                                titulo: 'Oligo-FISH em plantas: o caso de Solanum.',
                                desc: 'Torres G.1, G. Tomaz Braz2. 1 Universidade Federal de Lavras; 2 Michigan State Universit.'
                            },
                            {
                                titulo: 'Pintura cromossômica em mamíferos e outros grupos animais: inferências possiveis dos resutados.',
                                desc: 'Julio Pieczarka. Centro de Estudos Avançados da Biodiversidade. Universidade Federal do Pará, Beelém, Pará, Brasil.'
                            }
                        ]
                    },
                ]
            },
            {
                hora: '10:30 Hs.',
                charlas: [
                    {
                        id: 15,
                        titulo_es: 'Sección de posters',
                        titulo_en: 'Posters Section',
                        tipo: 'varios',
                        horario: '10:30 - 12:00',
                        lugar: '',
                        categorias: [
                            {
                                nombre_es: 'Citogenética Humana',
                                nombre_en: 'Human Cytogenetics'
                            },
                            {
                                nombre_es: 'Farmacogenética',
                                nombre_en: 'Pharmacogenetics'
                            },
                            {
                                nombre_es: 'Genética de Microorganismos',
                                nombre_en: 'Genetics of Microorganisms'
                            },
                            {
                                nombre_es: 'Genética y Educación',
                                nombre_en: 'Genetics and Education'
                            },
                            {
                                nombre_es: 'Genética y Mejoramiento Animal',
                                nombre_en: 'Genetics and Animal Breeding'
                            },
                            {
                                nombre_es: 'Genómica y Genética Molecular',
                                nombre_en: 'Genomics and Molecular Genetics'
                            },
                            {
                                nombre_es: 'Mutagénesis, Carcinogénesis y Teratogénesis Ambiental',
                                nombre_en: 'Mutagenesis, Carcinogenesis and Environmental Teratogenesis'
                            }
                        ]
                    }
                ]
            },
            {
                hora: '12:00 Hs.',
                charlas: [
                    {
                        id: 16,
                        titulo_es: 'Conferencia Constancio Lázaro, SUG: Diversidad genética humana en América Latina: implicaciones médicas e identitarias. Mónica Sans.',
                        titulo_en: 'Conferencia Constancio Lázaro, SUG: Diversidad genética humana en América Latina: implicaciones médicas e identitarias. Mónica Sans.',
                        tipo: 'conferencia',
                        horario: '12:00 - 13:00',
                        lugar: 'Bustelo. Sala 1',
                        autor: 'Mónica Sans. Departamento de Antropología Biológica. Faculltad de Humanidades y Ciencias de la Educación. UDeLaR. Uruguay.',
                        autorDesc: '<p>Es Antropóloga (1983), posee Maestría (1991) y Doctorado (1994) en Biología (Genética) (UDeLaR-PEDECIBA). Es actualmente Prof. Titular de Antropología Biológica, Coordinadora de la Licenciatura en Antropología, Investigadora del PEDECIBA e integrante del Sistena Nacional de Investigadores. Fue Directora de la Licenciatura en Biología Humana y Coordinadora del Instituto de Antropología; Presidente de la Sociedad Uruguaya de Genética y de la Asociación Latinoamericana de Antropología Biológica, y Vice-Presidente de la Asociación Latinoamericana de Genética. Recibió el Premio al “Académico de trayectoria más distinguida” de la ALAB (2018). Ha publicado más de 100 artículos, libros y capítulos de libros, fundamentalmente sobre las poblaciones humanas de Uruguay y la región, la ancestría indígena y el mestizaje.</p>'
                    }
                ]
            },
            {
                hora: '13:00 Hs.',
                charlas: [
                    {
                        id: 17,
                        titulo_es: 'Libre',
                        titulo_en: 'Free',
                        tipo: 'varios',
                        horario: '13:00 - 14:30',
                        lugar: ''
                    }
                ]
            },
            {
                hora: '14:30 Hs.',
                charlas: [
                    {
                        id: 18,
                        titulo_es: 'Conferencia IGF: Genetics of complex traits in livestock and humans. Michael Goddard.',
                        titulo_en: 'Conferencia IGF: Genetics of complex traits in livestock and humans. Michael Goddard.',
                        tipo: 'conferencia',
                        horario: '14:30 - 15:30',
                        lugar: 'Bustelo. Sala 1.',
                        autor: 'Michael Goddard. University of Melbourne. Australia.',
                        autorDesc: '<p>Michael Goddard is distinguished for his research into quantitative genetics and the genetic improvement of livestock, in particular by incorporation of molecular genetic data. He co-proposed and developed ‘genomic selection’ in which dense molecular markers are fitted to quantitative data by using linkage disequilibrium with QTL, thereby enabling more accurate selection decisions, including among animals without phenotypic records. Within a decade, it is being used world wide in animal improvement programmes and has potential in plant breeding and prediction of risk of genetic disease in humans.</p>'
                    }
                ]
            },
            {
                hora: '15.45 Hs.',
                charlas: [
                    {
                        id: 19,
                        titulo_es: 'Genetics and microorganisms',
                        titulo_en: 'Genetics and microorganisms',
                        tipo: 'simposio',
                        horario: '15.45 – 17.45',
                        lugar: 'Magna. Sala 3',
                        coordinadora: 'Luis Zapata. The Institute of Cancer Research, London, UK.',
                        simposistas: [
                            {
                                titulo: 'Systemic regulation of ageing by the gut microbiota. ',
                                desc: 'Valenzano D.R.1. 1 Max Planck Institute for Biology of Ageing. Cologne, Germany.'
                            },
                            {
                                titulo: 'Surveying the gut microbiota from urban wastewater: implications in risk assessment and public health.',
                                desc: 'Fresia P.1, V. Antelo1, C. Salazar1, M. Giménez1, G. Iraola1. 1 Institut Pasteur de Montevideo. Uruguay.'
                            },
                            {
                                titulo: 'Novel technologies to identify antimicrobial resistances in hospitals, urban environments and on the NASA international space station. ',
                                desc: 'Bezdan D.1, D. Danko1, C. Meyden1, C. Mason1. 1 Weill Cornell Medicine. '
                            },
                            {
                                titulo: 'The rise and fall of cancer clones under immune attack.',
                                desc: 'Zapata Ortiz L.R.1, A. Sottoriva1. 1 ICR. London, UK.'
                            }
                        ]
                    },
                    {
                        id: 20,
                        titulo_es: 'Genome Instability and Cancer',
                        titulo_en: 'Genome Instability and Cancer',
                        tipo: 'simposio',
                        horario: '15.45 – 17.45',
                        lugar: 'Bustelo. Sala 1',
                        coordinadora: 'Vanesa Gottifredi. Fundación Instituto Leloir, IIBBA/ CONICET. Buenos Aires, Argentina.',
                        simposistas: [
                            {
                                titulo: 'Dissection of molecular triggers for genomic instability and cell death in cells treated with Chk1 inhibitors.',
                                desc: 'Calzetta N.L.1, M. Gonzalez Besteiro1, V. Gottifredi1. 1 Fundación Instituto Leloir. Buenos Aires, Argentina.'
                            },
                            {
                                titulo: 'Identificación de blancos moleculares para oncología de precisión en cánceres BRCA-deficientes mediante inducción de letalidad sintética. ',
                                desc: 'Soria G.1. 1 CIBICI-CONICET, Universidad Nacional de Córdoba. Argentina.'
                            },
                            {
                                titulo: 'HPV E6 and E7 onco-proteins sensitize human keratinocytes to oxidative damage. ',
                                desc: 'Acosta S.1, E. Boccardo2, W. Martinez1. 1 Epigenetics and Genomic Instability Laboratory. Instituto de Investigaciones Biológicas Clemente Estable, Montevideo, Uruguay; 2 Oncovirology Laboratory. University of Sao Paulo, Brazil. '
                            },
                            {
                                titulo: 'Revealing temozolomide resistance mechanisms via genome-wide crispr libraries.',
                                desc: 'Rocha C.1, A.. Rocha2, L.. Gomes3, M. Molina3, C. Menck3. 1 Federal University of Sao Paulo; 2 Sao Paulo State University; 3 University of Sao Paulo. Brazil.'
                            }
                        ]
                    },
                    {
                        id: 21,
                        titulo_es: 'Caracterización, conservación y uso de recursos zoogenéticos',
                        titulo_en: 'Caracterización, conservación y uso de recursos zoogenéticos',
                        tipo: 'simposio',
                        horario: '15.45 – 17.45',
                        lugar: 'Plumerillo. Sala 5',
                        coordinadora: 'María Rosa Lanari. INTA Bariloche. Argentina.',
                        simposistas: [
                            {
                                titulo: 'Caracterización de bovinos y cabras iberoamericanos.',
                                desc: 'Amparo Martínez. Universidad de Córdoba. España.'
                            },
                            {
                                titulo: 'Diversidad genética e historia demográfica de los camélidos sudamericanos',
                                desc: 'Juan Carlos Marín. Universidad del Bío Bío, Chile.'
                            },
                            {
                                titulo: '¿La caracterización genómica ha mejorado la conservación de los recursos zoogenéticos?',
                                desc: 'Samuel Rezende Paiva. EMBRAPA Recursos Genéticos y Biotecnología. Brasil.'
                            },
                            {
                                titulo: 'Recursos locales ante la catástrofe: el caso de la cabra Criolla Neuquina.',
                                desc: 'Lanari M.R.1, P. Losardo2, M.J. Pérez Centeno3. 1 INTA EEA Bariloche; 2 Subsecretaría de Agricultura Familiar; 3 INTA IPAF Patagonia. Argentina.'
                            },
                            {
                                titulo: 'Challenges of implementation of access and benefit sharing measures in livestock sector: animal breeding, research and genebanking. ',
                                desc: 'Martyniuk E.1. 1 Department of Animal Genetics and Breeding, Warsaw University of Life Sciences. Poland.'
                            }
                        ]
                    },
                    {
                        id: 22,
                        titulo_es: 'Análisis de bases de datos de alta dimensionalidad en el estudio del genoma y su expresión',
                        titulo_en: 'Análisis de bases de datos de alta dimensionalidad en el estudio del genoma y su expresión',
                        tipo: 'simposio',
                        horario: '15.45 – 17.45',
                        lugar: 'Bustelo. Sala 2',
                        coordinadora: 'Guillermo R. Pratta. IICAR-CONICET-UNR. Facultad de Ciencias Agrarias, Universidad Nacional de Rosario, Zavalla, Santa Fe, Argentina.',
                        simposistas: [
                            {
                                titulo: 'Aprendizaje estadístico en grandes bases de datos. ',
                                desc: 'Reeb P.1, J.P. Steibel2, S. Bramardi1. 1 Universidad Nacional del Comahue; 2 Michigan State University. '
                            },
                            {
                                titulo: 'Haploid selection driving new gene male germline expression',
                                desc: 'Raíces J.1, P. Otto1, M. Vibranovski1. 1 Department of Genetics and Evolutionary Biology, Institute of Biosciences, Universidade de São Paulo. Brasil.'
                            },
                            {
                                titulo: 'Molecular data mining technologies for the study of genomes relevant to latin american countries. ',
                                desc: 'Cristancho M.A.1, A.. Noreña2, A. Gonzalez2, J. Mosquera2, K. Botero2. 1 BIOS; 2 Centro de Bioinformática y Biología Computacional. Colombia.'
                            },
                            {
                                titulo: 'Reducción de la dimensionalidad de datos en análisis del genoma y su expresión.',
                                desc: 'Cabodevila V.G.1, A.P. Del Medico1, L. Kpvalevski2, P. Macat2, M.B. Bianchi3, M.B. Quaglino2, M.S. Vitelleschi2, G.R. Pratta1. 1 IICAR; 2 IITAE, Facultad de Ciencias Económicas y Estadística UNR; 3 Cátedra de Botánica, Facultad de Ciencias Agrarias UNR. Argentina.'
                            }
                        ]
                    },
                    {
                        id: 23,
                        titulo_es: 'PRESENTACIÓN TÉCNICA. MGI Americas Inc.',
                        titulo_en: 'PRESENTACIÓN TÉCNICA. MGI Americas Inc.',
                        tipo: 'varios',
                        horario: '15.45 – 17.45',
                        lugar: 'Uspallata. Sala 4'
                    },
                ]
            },
            {
                hora: '17:45 Hs.',
                charlas: [
                    {
                        id: 24,
                        titulo_es: 'Intervalo',
                        titulo_en: 'Interval',
                        tipo: 'varios',
                        horario: '17:45 - 18:15',
                    }
                ]
            },
            {
                hora: '18:15 Hs.',
                charlas: [
                    {
                        id: 25,
                        titulo_es: 'Conferencia SAG. Desarrollo de nuevas herramientas genómicas para zanahoria y su impacto en la investigación y el mejoramiento. Pablo Cavagnaro.',
                        titulo_en: 'Conferencia SAG. Desarrollo de nuevas herramientas genómicas para zanahoria y su impacto en la investigación y el mejoramiento. Pablo Cavagnaro.',
                        tipo: 'conferencia',
                        horario: '18.15 – 19.15',
                        lugar: 'Bustelo. Sala 1',
                        autor: 'Pablo Cavagnaro. INTA E.E.A. La Consulta. Mendoza. Argentina.',
                        autorDesc: '<p>Especialidad: Genética y mejoramiento hortícola. Ingeniero agrónomo (1999) y Doctor en Ciencias Biológicas (2007), egresado de la Universidad Nacional de Cuyo, Argentina. Posdoctorado en la Universidad de Wisconsin, USA. Actualmente es Investigador Independiente del CONICET con lugar de trabajo en el INTA E.E.A. La Consulta. Su principal línea de investigación ha sido el desarrollo de herramientas moleculares y genómicas para asistir los programas de mejoramiento hortícola, principalmente en zanahoria, ajo y cebolla, y su aplicación para investigar las bases genéticas de algunos caracteres relacionados a las propiedades benéficas para la salud de estas hortalizas.</p>'
                    }
                ]
            },
            {
                hora: '19:15 Hs.',
                charlas: [
                    {
                        id: 26,
                        titulo_es: 'Asamblea ALAG',
                        titulo_en: 'Asamblea ALAG',
                        tipo: 'varios',
                        horario: '19:15 Hs.',
                        lugar: 'Bustelo. Sala 1'
                    }
                ]
            }
        ]
    },
    {
        dia: 8,
        mes: 10,
        anio: 2019,
        cronograma: [
            {
                hora: '8:00 Hs.',
                charlas: [
                    {
                        id: 27,
                        titulo_es: 'Colocación de posters',
                        titulo_en: 'Poster placement',
                        tipo: 'varios',
                        horario: '8:00 - 8:30',
                        lugar: '',
                        categorias: [
                            {
                                nombre_es: 'Citogenética Vegetal',
                                nombre_en: 'Plant Cytogenetics'
                            },
                            {
                                nombre_es: 'Genética de Poblaciones y Evolución',
                                nombre_en: 'Population Genetics and Evolution'
                            },
                            {
                                nombre_es: 'Genética Humana',
                                nombre_en: 'Human Genetics'
                            },
                            {
                                nombre_es: 'Genética Vegetal',
                                nombre_en: 'Plant Genetics'
                            }
                        ]
                    },
                ]
            },
            {
                hora: '8:30 Hs.',
                charlas: [
                    {
                        id: 28,
                        titulo_es: 'Genética médica populacional na America Latina',
                        titulo_en: 'Genética médica populacional na America Latina',
                        tipo: 'simposio',
                        horario: '8:30 - 10:30',
                        lugar: 'Bustelo. Sala 1',
                        coordinadora: 'Lavinia Schuler-Faccini. Universidade Federal do Rio Grande do Sul. Porto Alegre, Brasil.',
                        simposistas: [
                            {
                                titulo: 'Censo nacional de isolados no Brasil. ',
                                desc: 'Lavinia Schuler-Faccini. Universidade Federal do Rio Grande do Sul. Porto Alegre, Brasil. '
                            },
                            {
                                titulo: 'Adaptation and coadaptation of genes and culture in american native populations of South America.',
                                desc: 'Bortolini M.C.1. 1 Universidade Federal do Rio Grande do Sul. Brasil.'
                            },
                            {
                                titulo: 'Approaching clusters of mucopolysaccharidoses in Latin America with population medical genetics tools. ',
                                desc: 'Kubaski F.1, F. Trapp2, F. Bender2, F. Bittencourt2, D. Malaga3, A. Bochernitsan2, J. De Mari2, F. Gameleira4, C. Ferrán5, J.. Ramirez5, F.. Jaquez5, A.C. Brusius-facchin3, S.. Leistner-segal3, M.G. Burin2, K.. Michelin-tirelli2, S.S.. Lopes6, P.F.. Medeiros6, A.X.. Acosta7, K.A.. Sandes8, M.L.C… Moreira9, H.P.Q.. Montano10, M.L.S.. Villareal11, H.M.B.. Sandoval12, R.. Bareiro13, G.. Cossio14, R.. Giugliani1. 1 MGS- HCPA, UFRGS, INAGEMP, Fundação Médica do RS, Porto Alegre, Brazil; 2 MGS-HCPA, Porto Alegre, Brazil; 3 MGS-HCPA, UFRGS, INAGEMP, Porto Alegre, Brazil; 4 Health Secretary, Municipality of Ouro Preto, Brazil; 5 Hospital Infantil Dr. Robert Reid Cabral, Santo Domingo, Dominican Republic; 6 Department of Biology, UFPB, Campina Grande, Brazil; 7 Department of Pediatrics, UFBA, Salvador, Brazil; 8 Laboratório Imunologia, UFBA, Salvador, Brazil; 9 Hospital Santa Casa da Misericordia, Campo Grande, Brazil; 10 Hospital Verdi Cevallos, Portoviejo, Ecuador; 11 Fundacion Cardioinfantil de Bogota, Colombia; 12 Hospital Provincial Del Puyo, Ecuador; 13 Hospital Adventista do Penfigo, Campo Grande, Brazil; 14 Hospital del Niño de Panamá, Panamá, Panamá. '
                            },
                            {
                                titulo: 'Genética médica comunitaria en Colombia: experiencia en Boyacá.',
                                desc: 'Velasco H.1,2, L. Torres2, Y. Sanchez3, A.. Martin1,2, L. Umaña4, S. Santos 5, T. Vinasco5, R. Pacheco1,2. 1 BOGOTA COLOMBIA; 2 UNIVERSIDAD NACIONAL DE COLOMBIA; 3 UNIVERSIDAD PEDAGOGICA Y TECNOLOGICA DE COLOMBIA ; 4 Universidad de Texas SW ; 5 Laboratorio de Genética Humana y Médica – Universidad Federal de Pará. '
                            }
                        ]
                    },
                    {
                        id: 29,
                        titulo_es: 'Farmacogenómica y Medicina de Precisión',
                        titulo_en: 'Farmacogenómica y Medicina de Precisión',
                        tipo: 'simposio',
                        horario: '8:30 - 10:30',
                        lugar: 'Bustelo. Sala 2',
                        coordinadora: 'Maria Ana Redal. Facultad de Farmacia y Bioquímica, UBA. Buenos Aires, Argentina.',
                        simposistas: [
                            {
                                titulo: 'Farmacogenómica cardiovascular: experiencias en terapia anticoagulante. ',
                                desc: 'Quiñones L.A.1, A. Roco2, E. Nieto3, M. Suarez1. 1 Facultad de Medicina, Universidad de Chile; 2 Servicio de Salud Occidente, Ministerio de Salud Chile; 3 Hospital San Juan de Dios, Santiago, Chile.  '
                            },
                            {
                                titulo: 'Medicina de Precisión en enfermedades infecciosas. Farmacogenómica de la Tuberculosis.',
                                desc: 'Julián Chamorro. Hospital Muñiz. Buenos Aires, Argentina.'
                            },
                            {
                                titulo: 'Variabilidad individual en la respuesta y toxicidad a metrotexate. ',
                                desc: 'Patricia Esperón. Agdo. Biología Molecular. Dpto. Bioquímica Clínica. Facultad de Química. Montevideo, Uruguay. '
                            },
                            {
                                titulo: 'Biomarcadores moleculares en gliomas y su importancia en la farmacogenómica.',
                                desc: 'Germán Pérez. Grupo Gamma. Facultad de Ciencias Bioquímicas y Farmacéuticas, Universidad Nacional de Rosario (UNR). Rosario, Argentina.'
                            }
                        ]
                    },
                    {
                        id: 30,
                        titulo_es: 'Recursos Genéticos Vegetales en el pre-mejoramiento genético',
                        titulo_en: 'Recursos Genéticos Vegetales en el pre-mejoramiento genético',
                        tipo: 'simposio',
                        horario: '8:30 - 10:30',
                        lugar: 'Magna. Sala 3',
                        coordinadora: 'Mónica Poverene. UNSur, Bahía Blanca, Argentina.',
                        simposistas: [
                            {
                                titulo: 'Implicaciones de la evolución del género Phaseolus para su uso en mejoramiento del poroto.  ',
                                desc: 'Beebe S.1, D. Debouck1. 1 Centro Internacional de Agricultura Tropical (CIAT). Colombia. '
                            },
                            {
                                titulo: 'Recursos genéticos y pre-mejoramiento de girasol (Helianthus annuus l.). ',
                                desc: 'Mónica Poverene. UNSur, Bahía Blanca, Argentina.'
                            },
                            {
                                titulo: 'Developing an alfalfa GWAS-population for understanding genetic complexity of drought tolerance in mediterranean environments. ',
                                desc: 'Inostroza L..1, C. Ovalle1, A. Del Pozo1, S.. Espìnoza1, V. Barahona1, M. Gerding1, A. Humphries2. 1 Chile; 2 Australia.  '
                            },
                            {
                                titulo: 'Germplasm collecting: filling the gaps on crop wild relatives in ex situ collections in Brazil.',
                                desc: 'Marcelo Brilhante. EMBRAPA, Brasil. '
                            }
                        ]
                    },
                    {
                        id: 38,
                        titulo_es: 'Un cambio de mirada en la cría animal aprovechando la información genómica',
                        titulo_en: 'Un cambio de mirada en la cría animal aprovechando la información genómica',
                        tipo: 'simposio',
                        horario: '8:30 - 10:30',
                        lugar: 'Plumerillo. Sala 5',
                        coordinadora: 'Poli M.1. 1 INTA. CICVyA-Instituto de Genetica. Argentina.',
                        simposistas: [
                            {
                                titulo: 'Estrategias de investigación multidisciplinarias usando información genómica para la elección de animales superiores.',
                                desc: 'Poli M.1. 1 INTA. CICVyA-Instituto de Genética. Argentina. '
                            },
                            {
                                titulo: 'Mejoramiento genético de ovinos en la Patagonia: actualidad y desafíos ante nuevos escenarios climáticos y comerciales.',
                                desc: 'Vozzi P.A.1. 1 INTA EEA Chubut. Argentina.'
                            },
                            {
                                titulo: 'Clonación equina, herramienta práctica para preservar genética.',
                                desc: 'Kaiser G.1, N. Mucci1, J.. Mertián2, R. Santa Cruz2. 1 Grupo de Biotecnologia de la Reproduccion, INTA Balcarce; 2 Crestview Genetics Argentina.'
                            },
                            {
                                titulo: 'El cerdo Criollo Pampa Rocha de Uruguay como recurso zoogenético local (una mirada desde la genética).',
                                desc: 'Llambí M.S.1, M. Montenegro1, C. Carballo2, G. Castro1. 1 Facultad de Veterinaria, UdelaR-Uruguay; 2 Facultad de Agronomía, UdelaR-Uruguay. '
                            },
                            {
                                titulo: 'Avances en el conocimiento del genoma de la alpaca. ',
                                desc: 'Gutierrez Reynoso G.A.1, F.A. Ponce De Leon2. 1 UNIVERSIDAD NACIONAL AGRARIA LA MOLINA; 2 UNIVERSITY OF MINNESOTA.'
                            }
                        ]
                    },
                    {
                        id: 32,
                        titulo_es: 'Poliploidía',
                        titulo_en: 'Poliploidía',
                        tipo: 'simposio',
                        horario: '8:30 - 10:30',
                        lugar: 'Plumerillo. Sala 5',
                        coordinadora: 'Evelin Kovalsky. Facultad de Ciencias Exactas y Naturales y Agrimensura, Corrientes, Argentina.',
                        simposistas: [
                            {
                                titulo: 'Solanum elaeagnifolium: poliploidía y biogeografía. ',
                                desc: 'Chiarini F.1, M. Mancini2, L. Stiefkens2. 1 Argentina; 2 Instituto Multidisciplinario de Biología Vegetal (CONICET-UNC). '
                            },
                            {
                                titulo: 'Psidium cattleyanum sabine (myrtaceae) como modelo de estudo de citogeografia e de diversidade em citótipos poliploides.',
                                desc: 'Forni Martins E.R.1, R. Moura Machado1, F.. Ancelmo De Oliveira1, F. Matos Alves1, A.C. Devides Castello1, A. Pereira De Souza1. 1 Universidade Estadual de Campinas – UNICAMP. '
                            },
                            {
                                titulo: 'Citogeografía de especies del género sudamericano Chrysolaena (vernonieae, asteraceae).',
                                desc: 'Via Do Pico G.M.1,2, M.B. Angulo1,2, Y.D.J. Pérez1, M. Dematteis1,2. 1 Instituto de Botánica del Nordeste (UNNE-CONICET); 2 Facultad de Ciencias Exactas y Naturales y Agrimensura (UNNE). Argentina.'
                            },
                            {
                                titulo: 'Dinámica de zonas mixtas diploide-poliploide en Turnera sidoides.',
                                desc: 'Kovalsky I.E.1,2, S.A. Fernández1,2, V.G. Solís Neffa1,2. 1 Instituto de Botánica del Nordeste (UNNE-CONICET); 2 Facultad de Ciencias Exactas y Naturales y Agrimensura (UNNE). Argentina.'
                            },
                            {
                                titulo: 'Abordaje desde la citogenética clásica y molecular de las relaciones entre especies de distintos niveles de ploidía en Andropogon l.',
                                desc: 'Hidalgo M.I.M.1, E.J.. Greizerstein2, G.A. Norrmann1. 1 Cátedra de Genética. Facultad de Ciencias Agrarias. Universidad Nacional del Nordeste; 2 Cátedra de Mejoramiento Genético. Facultad de Ciencias Agrarias, UNLZ, Llavallol, Argentina. IIPAAS (FCA, UNLZ-CIC). Argentina.'
                            },
                            {
                                titulo: 'Origen y distribucion geografica de algunos poliploides en Paspalum.',
                                desc: 'Honfi A.I.1. 1 Programa de Estudios Florísticos y Genética Vegetal, Instituto de Biología Subtropical (CONICET- UNaM) nodo Posadas, Facultad de Ciencias Exactas Químicas y Naturales, Universidad Nacional de Misiones. Argentina. '
                            }
                        ]
                    }
                ]
            },
            {
                hora: '10:30 Hs.',
                charlas: [
                    {
                        id: 33,
                        titulo_es: 'Sección de posters',
                        titulo_en: 'Posters Section',
                        tipo: 'varios',
                        horario: '10:30 - 12:00',
                        lugar: '',
                        categorias: [
                            {
                                nombre_es: 'Citogenética Vegetal',
                                nombre_en: 'Plant Cytogenetics'
                            },
                            {
                                nombre_es: 'Genética de Poblaciones y Evolución',
                                nombre_en: 'Population Genetics and Evolution'
                            },
                            {
                                nombre_es: 'Genética Humana',
                                nombre_en: 'Human Genetics'
                            },
                            {
                                nombre_es: 'Genética Vegetal',
                                nombre_en: 'Plant Genetics'
                            }
                        ]
                    }
                ]
            },
            {
                hora: '12:00 Hs.',
                charlas: [
                    {
                        id: 34,
                        titulo_es: 'Conferencia SBG: A unique insect-fungal interaction leads to pokka boheng disease in sugarcane. Marcio de Castro Silva Filho',
                        titulo_en: 'Conferencia SBG: A unique insect-fungal interaction leads to pokka boheng disease in sugarcane. Marcio de Castro Silva Filho',
                        tipo: 'conferencia',
                        horario: '12.00 – 13.00',
                        lugar: 'Bustelo. Sala 1',
                        autor: 'Marcio de Castro Silva Filho. Universidade do Sao Paulo. Brasil.',
                        autorDesc: '<p>PhD in Plant Molecular Biology by the University of Louvain, Belgium. Full Member of the Brazilian Academy of Sciences, Full Professor of the Genetics, University of São Paulo (USP), President of the Brazilian Society of Genetics (2018-2020), Commander of the National Order of Scientific Merit, Deputy Provost of Postgraduate studies at USP. President-elect of the National Forum of Pro-Rectors of Research and Post-Graduation (FOPROP).</p>'
                    }
                ]
            },
            {
                hora: '13:00 Hs.',
                charlas: [
                    {
                        id: 35,
                        titulo_es: 'Libre',
                        titulo_en: 'Free',
                        tipo: 'varios',
                        horario: '13.00 – 14.30',
                        lugar: ''
                    }
                ]
            },
            {
                hora: '14:30 Hs.',
                charlas: [
                    {
                        id: 36,
                        titulo_es: 'Conferencia ALAG: La dinámica contemporánea de conservación de los recursos genéticos de cultivos: el caso de la papa en su centro de origen. Stefan De Haan',
                        titulo_en: 'Conferencia ALAG: La dinámica contemporánea de conservación de los recursos genéticos de cultivos: el caso de la papa en su centro de origen. Stefan De Haan',
                        tipo: 'conferencia',
                        horario: '14.30 – 15.30',
                        lugar: 'Bustelo. Sala 1',
                        autor: 'Stefan De Haan. Centro Internacional de la Papa (CIP). Perú.',
                        autorDesc: '<p>Stef de Haan trabaja como investigador principal en el Centro Internacional de la Papa (CIP) en Perú. Tiene un PhD en Biosistemática y MSc en Agroecología. Tiene un interés particular en el manejo contemporáneo y el uso in-situ de recursos genéticos de cultivos con un enfoque geográfico en los Andes y el sudeste asiático. Su principal enfoque de investigación ha sido comprender la conservación y el uso de los recursos genéticos bajo la gestión de los agricultores, incluso la evolución continua, sistemas de semillas, patrones geoespaciales, la nutrición humana y acuerdos de distribución de beneficios. Actualmente coordina la Iniciativa Andina del CIP con un enfoque en la agrobiodiversidad, los sistemas alimentarios y el cambio climático.</p>'
                    }
                ]
            },
            {
                hora: '15:45 Hs.',
                charlas: [
                    {
                        id: 37,
                        titulo_es: 'Desafíos en el diagnóstico genético: Nodos del Human Variome Project en Sudamérica.',
                        titulo_en: 'Desafíos en el diagnóstico genético: Nodos del Human Variome Project en Sudamérica.',
                        tipo: 'simposio',
                        horario: '15:45 - 17:45',
                        lugar: 'Bustelo. Sala 2',
                        coordinadora: 'Solano A.R.1. 1 INBIOMED, Fac. de Medicina, UBA/CONICET y Genotipificación, DAC, CEMIC. Argentina.',
                        simposistas: [
                            {
                                titulo: 'Nodo argentino del Human Variome Project: diagnóstico genético por análisis de ADN en Argentina. Interacción y cooperación latinoamericanas.',
                                desc: 'Solano A.R.1. 1 INBIOMED, Fac de Medicina, UBA/CONICET y Genotipificación, DAC, CEMIC. Argentina.'
                            },
                            {
                                titulo: 'The brazilian node of the Human Variome Project.',
                                desc: 'S. Rocha C.1,2, B. S. Carvalho2,3, I.. Lopes-cendes1,2. 1 Department of Medical Genetics and Genomic Medicine, School of Medical Sciences, University of Campinas (UNICAMP), Campinas, SP, BRAZIL; 2 Brazilian Institute of Neuroscience and Neurotechnology (BRAINN), Campinas, SP, BRAZIL; 3 Department of Statistics, Institute of Mathematics, Statistics and Scientific Computing; University of Campinas (UNICAMP), Campinas, SP, BRAZIL. '
                            },
                            {
                                titulo: 'Variantes de susceptibilidad al cáncer de mama hereditario. Un camino hacia la medicina genómica.',
                                desc: 'Jara L..1. 1 Instituto de Ciencias Biomédicas, Facultad de Medicina, Universidad de Chile. '
                            },
                            {
                                titulo: 'El asesoramiento genético oncológico y la optimización del abordaje de pacientes de alto riesgo.',
                                desc: 'Mampel A.1,2,3. 1 Hospital Universitario, UN de Cuyo, Mendoza, Argentina; 2 Instituto de Genética, FC Médicas, UN de Cuyo, Mendoza, Argentina; 3 Centro Oncológico de Integración Regional (COIR), Mendoza, Argentina. '
                            },
                            {
                                titulo: 'Detección de portadoras de mutaciones en cáncer de mama hereditario del programa TEC Salud, Monterrey,México.',
                                desc: 'Ortiz-lopez R.1, D. Aguilar Y Méndez1, C. Villarreal Garza1. 1 TECNOLOGICO DE MONTERREY, MONTERREY, NUEVO LEÓN. México. '
                            }
                        ]
                    },
                    {
                        id: 31,
                        titulo_es: 'Impacto de las nuevas tecnologías moleculares en el estudio de las Zoonosis Virales emergentes y reemergentes en América',
                        titulo_en: 'Impacto de las nuevas tecnologías moleculares en el estudio de las Zoonosis Virales emergentes y reemergentes en América',
                        tipo: 'simposio',
                        horario: '15:45 - 17:45',
                        lugar: 'Uspallata. Sala 4',
                        coordinadora: 'Jorge B. García. INEVH J.I Maiztegui. Pergamino, Argentina.',
                        simposistas: [
                            {
                                titulo: 'Herramientas moleculares utilizadas actualmente para la vigilancia y caracterización genética de Arbovirus en Argentina. ',
                                desc: 'Fabbri C.1. 1 INEVH. Argentina. '
                            },
                            {
                                titulo: 'Mobile real time genomic of arboviruses in Brazil. ',
                                desc: 'Alcantara L.1. 1 Fundação Oswaldo Cruz. Brasil.'
                            },
                            {
                                titulo: 'Impacto de las nuevas tecnologías moleculares en el estudio de las zoonosis virales emergentes y reemergentes en América.',
                                desc: 'Iglesias G.1. 1 Laboratorio de Virus Emergentes. Departamento de Ciencia y Tecnología. Universidad Nacional de Quilmes. Argentina. '
                            },
                            {
                                titulo: 'Aplicación de herramientas bioinformáticas en virología: análisis filodinámico de los hantavirus de Argentina.',
                                desc: 'Sen C.N.1, J.B. García1. 1 Instituto Nacional de Enfermedades Virales Humanas «Dr. Julio I. Maiztegui» (INEVH). Pergamino, Buenos Aires, Argentina.'
                            }
                        ]
                    },
                    {
                        id: 39,
                        titulo_es: 'Perspectivas en el Mejoramiento Vegetal desde la Maestría en Genética Vegetal (UNR-INTA) y sus 40 años en la formación académica de posgrado',
                        titulo_en: 'Perspectivas en el Mejoramiento Vegetal desde la Maestría en Genética Vegetal (UNR-INTA) y sus 40 años en la formación académica de posgrado',
                        tipo: 'simposio',
                        horario: '15:45 - 17:45',
                        lugar: 'Magna. Sala 3',
                        coordinadora: 'Gustavo Rodríguez. IICAR-CONICET-UNR. Cátedra de Genética. Facultad de Ciencias Agrarias, Universidad Nacional de Rosario. Zavalla, Santa Fe, Argentina.',
                        simposistas: [
                            {
                                titulo: 'Caracterización molecular y mapeo por asociación para la resistencia al tizón común (Exserohilum turcicum) en líneas públicas de maíz templado.',
                                desc: 'Torrent I.1, R.D. Lorea2, J. Roig1, M.D.P. Gonzalez3. 1 Bayer Argentina; 2 EEA INTA Pergamino-UNNOBA; 3 Facultad de Ciencias Agrarias-UNR. '
                            },
                            {
                                titulo: 'Mejoramiento genético de zanahoria (Daucus carota l.).',
                                desc: 'Alessandro M.S.1. 1 INTA. Argentina.'
                            },
                            {
                                titulo: 'Mejoramiento genético de arroz.',
                                desc: 'Colazo J.1, A. Livore1. 1 GTMGA-INTA. Grupo de Trabajo Mejoramiento Genético de Arroz . Argentina.'
                            },
                            {
                                titulo: 'Latin America: a development pole for phenomics.',
                                desc: 'Lobos G.1. 1 Maule. Chile.'
                            }
                        ]
                    },
                    {
                        id: 40,
                        titulo_es: 'Secuencias repetidas de ADN, cromosomas y evolución',
                        titulo_en: 'Secuencias repetidas de ADN, cromosomas y evolución',
                        tipo: 'simposio',
                        horario: '15:45 - 17:45',
                        lugar: 'Bustelo. Sala 1',
                        coordinadora: 'Andrea Pedrosa-Harand. Departamento de Botânica, UFPE, Recife/PE, Brasil.',
                        simposistas: [
                            {
                                titulo: 'As diferentes faces do PcP190 – Um DNA satélite derivado de DNAr 5S e amplamente distribuído em anuros.',
                                desc: 'Lourenço L.B.1. 1 Unicamp, Campinas-SP, Brasil.'
                            },
                            {
                                titulo: ' Satellite DNAs illuminate origin and evolution of sex and B chromosomes in grasshoppers.',
                                desc: 'Cabral-de-mello D.C.1. 1 Department of Biology, Institute of Biosciences, Sao Paulo State University (UNESP), Rio Claro, SP, Brazil. '
                            },
                            {
                                titulo: 'Alopoliploidía y divergencia de secuencias repetidas de ADN en especies del género Paspalum (gramineae).',
                                desc: 'Vaio M.1. 1 Facultad de Agronomía. Uruguay. '
                            },
                            {
                                titulo: 'Composición de las regiones de heterocromatina en los diferentes genomas de la sección Arachis (genero Arachis, leguminosae).',
                                desc: 'Samoluk S.S.1. 1 IBONE. Argentina. '
                            }
                        ]
                    }
                ]
            },
            {
                hora: '17:45 Hs.',
                charlas: [
                    {
                        id: 41,
                        titulo_es: 'Intervalo',
                        titulo_en: 'Interval',
                        tipo: 'varios',
                        horario: '17:45 – 18.15',
                        lugar: ''
                    }
                ]
            },
            {
                hora: '18:15 Hs.',
                charlas: [
                    {
                        id: 42,
                        titulo_es: 'Conferencia E Favret, SAG: Variabilidad genética y epigenética en especies tuberosas de Solanum. Ricardo Masuelli.',
                        titulo_en: 'Conferencia E Favret, SAG: Variabilidad genética y epigenética en especies tuberosas de Solanum. Ricardo Masuelli.',
                        tipo: 'conferencia',
                        horario: '18:15 – 19:15',
                        lugar: 'Bustelo. Sala 1',
                        autor: 'Ricardo Masuelli. Instituto de Biología Agrícola de Mendoza. CONICET. Argentina. ',
                        autorDesc: '<p>Especialidad: Genética Agronómica. Egresado en 1987 con el título de Ingeniero Agrónomo de la Facultad de Ciencias Agrarias de la Universidad Nacional de Cuyo. Magister en Producción Vegetal, 1989, y Doctor en Ciencias Agrarias, 1992, Universidad Nacional de Mar del Plata. Posdoctorado en la Universidad de Washington, Seattle, USA. Actualmente es Profesor Titular de Genética en la Facultad de Ciencias Agrarias de la U.N. de Cuyo e Investigador Principal del CONICET. Dirige el Laboratorio de Biología Molecular del Instituto de Biología Agrícola Mendoza (IBAM) CONICET-UNCuyo.</p>'
                    },
                    {
                        id: 43,
                        titulo_es: 'ESPACIO UNNOBA: Coordinadora: María Alejandra Morales. UNNOBA y Red Nacional de Laboratorios de Dengue y otros Arbovirus, Instituto Maiztegui de Pergamino, Argentina.',
                        titulo_en: 'ESPACIO UNNOBA: Coordinadora: María Alejandra Morales. UNNOBA y Red Nacional de Laboratorios de Dengue y otros Arbovirus, Instituto Maiztegui de Pergamino, Argentina.',
                        tipo: 'varios',
                        horario: '18:15 – 19:15',
                        lugar: 'Magna. Sala 3',
                        desc_es: '<p>– Charla – Debate Experiencia Zibra (ZIKA/Brasil): Lineamientos de un proyecto de secuenciación genómica viral que lleva  ciencia e innovación al terreno,  priorizando: educación, acceso abierto, igualdad de género, compromiso social y respeto a los derechos y normas éticas. Luiz Carlos Alcantara. Fundação Oswaldo Cruz, Brasil.</p><p>–  La introducción de Zika en el continente Americano: Complicaciones en el diagnóstico y avances en la temática. Néstor G. Iglesias Laboratorio de Virus Emergentes. Departamento de Ciencia y Tecnología. Universidad Nacional de Quilmes, Argentina.</p>',
                        desc_en: '<p>– Charla – Debate Experiencia Zibra (ZIKA/Brasil): Lineamientos de un proyecto de secuenciación genómica viral que lleva  ciencia e innovación al terreno,  priorizando: educación, acceso abierto, igualdad de género, compromiso social y respeto a los derechos y normas éticas. Luiz Carlos Alcantara. Fundação Oswaldo Cruz, Brasil.</p><p>–  La introducción de Zika en el continente Americano: Complicaciones en el diagnóstico y avances en la temática. Néstor G. Iglesias Laboratorio de Virus Emergentes. Departamento de Ciencia y Tecnología. Universidad Nacional de Quilmes, Argentina.</p>'
                    }
                ]
            },
            {
                hora: '19:15 Hs.',
                charlas: [
                    {
                        id: 44,
                        titulo_es: 'Asamblea ALAG',
                        titulo_en: 'Asamblea ALAG',
                        tipo: 'varios',
                        horario: '19:15 Hs.',
                        lugar: 'Plumerillo. Sala 5'
                    }
                ]
            },
        ]
    },
    {
        dia: 9,
        mes: 10,
        anio: 2019,
        cronograma: [
            {
                hora: '8:00 Hs.',
                charlas: [
                    {
                        id: 45,
                        titulo_es: 'Colocación de posters',
                        titulo_en: 'Poster placement',
                        tipo: 'varios',
                        horario: '8:00 - 8:30',
                        lugar: '',
                        categorias: [
                            {
                                nombre_es: 'Citogenética Animal',
                                nombre_en: 'Animal Cytogenetics'
                            },
                            {
                                nombre_es: 'Genética Médica',
                                nombre_en: 'Medical Genetics'
                            },
                            {
                                nombre_es: 'Mejoramiento Vegetal',
                                nombre_en: 'Plant Breeding'
                            }
                        ]
                    }
                ]
            },
            {
                hora: '8:30 Hs.',
                charlas: [
                    {
                        id: 46,
                        titulo_es: 'A consortium for studying the effects of the prenatal exposure to alcohol, tobacco and drugs in Latin-America',
                        titulo_en: 'A consortium for studying the effects of the prenatal exposure to alcohol, tobacco and drugs in Latin-America',
                        tipo: 'simposio',
                        horario: '8:30 - 10:30',
                        lugar: 'Bustelo. Sala 1',
                        coordinadora: 'Rojas Martinez A.1 1 Tecnológico de Monterrey; Mexico.',
                        simposistas: [
                            {
                                titulo: 'Young pregnancy and prenatal exposure to alcohol, tobacco and drugs in Monterrey, Mexico.',
                                desc: 'Rojas Martinez A.1, V.J. Lara Diaz1, A.L. Ruiz Barreto1. 1 Tecnológico de Monterrey. Mexico.'
                            },
                            {
                                titulo: 'Epidemiología y carga del trastornos del espectro alcohólico fetal (TEAF) en América Latina.',
                                desc: 'Sanseverino M.T.1. 1 Serviço de Genetica Medica-Hcpa; Escola de Medicina PUCRS.RS. Brasil. '
                            },
                            {
                                titulo: 'Dismorfología y desórdenes del neurodesarrollo de los TEAF. Dysmorphology and neurobehavioral disorders in FASD. ',
                                desc: 'Del Campo Casanelles M..1. 1 University of California San Diego. '
                            },
                            {
                                titulo: 'Consorcio fALCON (Fetal Alcohol Latinoamerican Consortium).',
                                desc: 'Castillo Taucher S.1. 1 Sección Genética Hospital Clínico Universidad de Chile. '
                            }
                        ]
                    },
                    {
                        id: 47,
                        titulo_es: 'Aspectos genómicos en el diagnóstico de enfermedades pediátricas',
                        titulo_en: 'Aspectos genómicos en el diagnóstico de enfermedades pediátricas',
                        tipo: 'simposio',
                        horario: '8:30 - 10:30',
                        lugar: 'Bustelo. Sala 2',
                        coordinadora: 'Graciela del Rey. Laboratorio de Citogenética. Centro de Investigaciones Endocrinológicas “Dr. César Bergadá” (CEDIE). CONICET. FEI y División de Endocrinología, Hospital de Niños “Ricardo Gutiérrez”. Buenos Aires. Argentina',
                        simposistas: [
                            {
                                titulo: 'Aplicación de la secuenciación de nueva generación en el diagnóstico de enfermedades genéticas en pediatría. ',
                                desc: 'Luis Pablo Gravina. Laboratorio de Biología Molecular – Servicio de Genética. Hospital de Pediatría Garrahan. Buenos Aires, Argentina.'
                            },
                            {
                                titulo: 'Abordaje del diagnóstico molecular de enfermedades poco frecuentes: genodermatosis. ',
                                desc: 'Valinotto L.1,2,3, S.. Lusso1, A. Mistchenko1,2, G.. Manzur1,2, M.. Natale1. 1 Centro de Investigaciones en Genodermatosis y Epidermólisis Ampollar (CEDIGEA) – Facultad de Medicina, UBA; 2 Hospital de Niños R Gutiérrez; 3 CONICET. Argentina. '
                            },
                            {
                                titulo: 'Ejemplos de la integración funcional de la genómica en la práctica clínica en un hospital de alta complejidad: hacia el nuevo genetista.',
                                desc: 'Tizzano E.F.1. 1 España. '
                            },
                            {
                                titulo: 'Nuevos estudios moleculares aplicados a las enfermedades raras en clínica e investigación.',
                                desc: 'Bacino C.1. 1 Texas Children’s Hospital. '
                            }
                        ]
                    },
                    {
                        id: 48,
                        titulo_es: 'Genome and chromosome evolution of Drosophila species of the Americas',
                        titulo_en: 'Genome and chromosome evolution of Drosophila species of the Americas',
                        tipo: 'simposio',
                        horario: '8:30 - 10:30',
                        lugar: 'Uspallata. Sala 4',
                        coordinadora: 'Maura Helena Manfrin. Universidade de São  Paulo. San Pablo, Brasil.',
                        simposistas: [
                            {
                                titulo: 'Genome evolution and adaptation in cactophilic mexican drosophila of the sonora desert.',
                                desc: 'Markow T.1. 1 LANGEBIO-CINVESTAV. Irapuato, Guanajuato, Mexico and Division of Biological Sciences UCSD La Jolla, California, USA. '
                            },
                            {
                                titulo: 'The role of chromosomal inversions on patterns of genomic differentiation in the Drosophila pseudoobscura species group.',
                                desc: 'Machado C.1, J. Carpinteyro1. 1 University of Maryland. '
                            },
                            {
                                titulo: 'An improved genome assembly for drosophila navojoa, the basal species in the mojavensis cluster.',
                                desc: 'Vanderline T.1, E. Dupim1, N. Nazario-yepiz2, A.B. Carvalho1. 1 Universidade Federal do Rio de Janeiro; 2 Instituto Politécnico Nacional (CINVESTAV).'
                            }
                        ]
                    },
                    {
                        id: 49,
                        titulo_es: 'The challenges of mineral nutrition in plants facing environmental stresses: molecular aspects',
                        titulo_en: 'The challenges of mineral nutrition in plants facing environmental stresses: molecular aspects',
                        tipo: 'simposio',
                        horario: '8:30 - 10:30',
                        lugar: 'Magna. Sala 3',
                        coordinadora: 'Marcia Margis-Pinheiro. Universidade Federal do Rio Grande do Sul. Porto Alegre. Brasil.',
                        simposistas: [
                            {
                                titulo: 'Genetic approaches to adapt rice production to iron toxicity. ',
                                desc: 'Frei M.1, L. Wu1, A. Wairich2, F. Ricachenevsky3, R. Margis2, J.P. Fett2, M. Margis-pinheiro2. 1 University of Bonn; 2 Universidad Federal de Rio Grande do Sul; 3 Universidad Federal de Santa Catarina. '
                            },
                            {
                                titulo: 'The diverse iron distribution in eudicotyledoneae seeds: from Arabidopsis to quinoa.',
                                desc: 'Ibeas M.1, S. Grant-grant1, J. Vargas-perez1, N.. Navarro1, I. Abreu2, H. Castillo-michel3, N. Avalos-cembrano1, J. Paez-valencia4, F. Perez1, M. Gonzalez-guerrero2, H. Roschzttardtz1. 1 Facultad de Ciencias Biológicas, Pontificia Universidad Católica de Chile; 2 Universidad Politécnica de Madrid; 3 European Synchrotron Radiation Facility (ESRF); 4 Department of Botany, University of Wisconsin-Madison.'
                            },
                            {
                                titulo: 'Who controls the ionome? Multiple approaches to identify genes regulating elemental variation in Arabidopsis and rice.',
                                desc: 'Ricachenevsky F.1. 1 Universidade Federal de Santa Maria. Brazil.'
                            }
                        ]
                    },
                    {
                        id: 50,
                        titulo_es: 'Citogenética y Evolución Vegetal',
                        titulo_en: 'Citogenética y Evolución Vegetal',
                        tipo: 'simposio',
                        horario: '8:30 - 10:30',
                        lugar: 'Plumerillo. Sala 5',
                        coordinadora: 'Cristina Acosta. Instituto Multidisciplinario de Biología Vegetal (IMBIV), Córdoba. Argentina.',
                        simposistas: [
                            {
                                titulo: 'Datos moleculares y cariotípicos plantean posible especiación a partir de dos especies simpátricas de Capsicum (C. recurvatum y C. schottianum).',
                                desc: 'Scaldaferro M.1, C. Carrizo García1, G. Barboza1. 1 Instituto Multidisciplinario de Biología Vegetal (IMBIV), CONICET-Universidad Nacional de Córdoba.Córdoba, Argentina. '
                            },
                            {
                                titulo: 'Afinidades genómicas entre el maíz y los teosintes reveladas por citogenética clásica y molecular.',
                                desc: 'González G.E.1. 1 IEGEBA-CONICET. Argentina.'
                            },
                            {
                                titulo: 'Reconstrucción filogenética del género Tephrocactus (Cactaceae) basada en datos moleculares, morfológicos y citogenéticos.',
                                desc: 'Las Peñas M.L.1. 1 IMBIV. Argentina.'
                            },
                            {
                                titulo: 'Parientes silvestres de la papa: herramientas citogenéticas y genómicas para evaluar homología cromosómica y colinealidad.',
                                desc: 'Gaiero P.1, F.. Vilaró1,2, E. Schranz3, H. De Jong3, P. Speranza1. 1 Facultad de Agronomia, Universidad de la República ; 2 Instituto de Investigaciones Agropecuarias, Uruguay; 3 Wageningen University and Research. '
                            },
                            {
                                titulo: 'Estudios citogenéticos y evolutivos de Arachis glabrata (especie tetraploide forrajera) y especies afines.',
                                desc: 'Ortiz A.M.1, L. Chalup1, G. Seijo1, G. Lavia1. 1 IBONE. Argentina. '
                            },
                            {
                                titulo: 'Variabilidad cariotípica de los maíces guaraníes del noreste de Argentina (NEA). ',
                                desc: 'Realini M.F.1,2. 1 Consejo Nacional de Investigaciones Científicas y Técnicas (CONICET), Instituto de Ecología, Genética y Evolución (IEGEBA), Ciudad Autónoma de Buenos Aires, Argentina.; 2 Facultad de Ciencias Exactas y Naturales, Universidad de Buenos Aires, Departamento de Ecología, Genética y Evolución, Laboratorio de Citogenética y Evolución (LaCyE), Ciudad Autónoma de Buenos Aires, Argentina.'
                            }
                        ]
                    },
                ]
            },
            {
                hora: '10:30 Hs.',
                charlas: [
                    {
                        id: 51,
                        titulo_es: 'Sección de posters',
                        titulo_en: 'Posters Section',
                        tipo: 'varios',
                        horario: '10:30 - 12:00',
                        lugar: '',
                        categorias: [
                            {
                                nombre_es: 'Citogenética Animal',
                                nombre_en: 'Animal Cytogenetics'
                            },
                            {
                                nombre_es: 'Genética Médica',
                                nombre_en: 'Medical Genetics'
                            },
                            {
                                nombre_es: 'Mejoramiento Vegetal',
                                nombre_en: 'Plant Breeding'
                            }
                        ]
                    }
                ]
            },
            {
                hora: '12:00 Hs.',
                charlas: [
                    {
                        id: 52,
                        titulo_es: 'Conferencia Danko Brncic, SOCHIGEN: Escudriñando el pasado de las poblaciones originarias y mestizas del Cono Sur de Sudamérica mediante marcadores genéticos de herencia uniparental. Mauricio Moraga Vergara.',
                        titulo_en: 'Conferencia Danko Brncic, SOCHIGEN: Escudriñando el pasado de las poblaciones originarias y mestizas del Cono Sur de Sudamérica mediante marcadores genéticos de herencia uniparental. Mauricio Moraga Vergara.',
                        tipo: 'conferencia',
                        horario: '12:00 – 13:00',
                        lugar: 'Bustelo. Sala 1',
                        autor: 'Mauricio Moraga Vergara. Universidad de Chile. Chile.',
                        autorDesc: '<p>Doctor en Bioquímica, Universidad de Chile; Bioquímico, Universidad de Chile. Profesor Asociado, Programa de Genética Humana, Instituto de Ciencias Biomédicas, Facultad de Medicina, y Departamento de Antropología, Facultad de Ciencias Sociales, Universidad de Chile.  Past president Sociedad de Genética de Chile, 2012-2013. Past president Asociación Latinoamericana de Antropología Biológica, 2014-2016. Su línea de investigación principal ha estado centrada en el estudio de las poblaciones originarias y mestizas de Chile y Sudamérica, mediante el uso de marcadores de herencia uniparental (ADN mitocondrial y cromosoma Y) así como autosómicos.  Ha trabajado tanto con muestras actuales como con ADN antiguo ayudando a entender las dinámicas del poblamiento de la Patagonia occidental. </p>'
                    },
                ]
            },
            {
                hora: '13:00 Hs.',
                charlas: [
                    {
                        id: 53,
                        titulo_es: 'Libre',
                        titulo_en: 'Free',
                        tipo: 'varios',
                        horario: '13:00 – 14:30'
                    },
                ]
            },
            {
                hora: '14:30 Hs.',
                charlas: [
                    {
                        id: 54,
                        titulo_es: 'Conferencia SLACE: Uma visão genômica da filogenia e hibridação de espécies em mamíferos. Sandro Luis Bonatto.',
                        titulo_en: 'Conferencia SLACE: Uma visão genômica da filogenia e hibridação de espécies em mamíferos. Sandro Luis Bonatto.',
                        tipo: 'conferencia',
                        horario: '14:30 – 15:30',
                        lugar: 'Bustelo. Sala 1',
                        autor: 'Sandro Luis Bonatto. Escola de Ciências. Pontifícia Universidade Católica do Rio Grande do Sul. Brazil.',
                        autorDesc: '<p>Possui graduação no Curso de Ciências Biológicas (Bacharelado) pela Universidade Federal do Rio Grande do Sul, mestrado em Ciências Biológicas (Entomologia) pela Universidade Federal do Paraná e doutorado em Genética e Biologia Molecular pela Universidade Federal do Rio Grande do Sul. Atualmente é professor adjunto da Escola de Ciências na Pontifícia Universidade Católica do Rio Grande do Sul, onde coordena do Laboratório de Biologia Genômica e Molecular e orienta no Programa de Pós-Graduação em Ecologia e Evolução da Biodiversidade. Tem experiência na área de Genética e Zoologia, atuando principalmente nos seguintes temas: genômica da conservação, ecologia molecular, evolução animal e filogenia e sistemática molecular, tendo publicado mais de 130 artigos científicos.</p>'
                    },
                ]
            },
            {
                hora: '15:45 Hs.',
                charlas: [
                    {
                        id: 55,
                        titulo_es: 'Enfermedades Raras en Latinoamérica: realidades y desafíos',
                        titulo_en: 'Enfermedades Raras en Latinoamérica: realidades y desafíos',
                        tipo: 'simposio',
                        horario: '15:45 - 17:45',
                        lugar: 'Bustelo. Sala 2',
                        coordinadora: 'Gabriela Repetto. Facultad de Medicina, Clínica Alemana Universidad del Desarrollo. Santiago, Chile.',
                        simposistas: [
                            {
                                titulo: 'Data sharing.',
                                desc: 'Lopes-cendes I..1. 1 Department of Medical Genetics and Genomic Medicine, School of Medical Sciences, and the Brazilian Institute of Neuroscience and Neurotechnology (BRAINN), Campinas, SP, BRAZIL. '
                            },
                            {
                                titulo: 'Bioética y enfermedades raras.',
                                desc: 'Ascurra M.1. 1 Programa Nacional de Prevención de Defectos Congénitos-Ministerio de Salud. Paraguay.'
                            },
                            {
                                titulo: 'Exomic sequencing of chilean patients with rare undiagnosed diseases.',
                                desc: 'Encina G.1, B. Rebolledo-jaramillo1, M. Rojas1, C. Poli1, L.M. Martin1, S. Fisher2, G. Repetto1. 1 Centro de Genética y Genómica, Instituto de Ciencias e Innovación en Medicina, Facultad de Medicina – Clínica Alemana, Universidad del Desarrollo; 2 Facultad de Medicina – Clínica Alemana, Universidad del Desarrollo. '
                            },
                            {
                                titulo: 'Escenarios de manejo de las enfermedades raras en latinoamérica palabras.',
                                desc: 'Velasco H.1. 1 Medellín, Colombia.'
                            }
                        ]
                    },
                    {
                        id: 56,
                        titulo_es: 'La herramienta tecnológica que deslumbra: la edición de genes',
                        titulo_en: 'La herramienta tecnológica que deslumbra: la edición de genes',
                        tipo: 'simposio',
                        horario: '15:45 - 17:45',
                        lugar: 'Bustelo. Sala 1',
                        coordinadora: 'Liliana Amelia Picardi. IICAR (CONICET-UNR). Argentina.',
                        simposistas: [
                            {
                                titulo: 'El desafío de la edición de genomas en Argentina y la región. ',
                                desc: 'Feingold S.1. 1 Argentina. '
                            },
                            {
                                titulo: 'Modificación genética en animales. Pasado, presente y futuro.',
                                desc: 'Mucci N.1. 1 INTA. Argentina.'
                            },
                            {
                                titulo: 'Crop breeding using genome engineering: new tools in an old toolbox.',
                                desc: 'Zsögön A.1, L.E.P. Peres2. 1 Universidade Federal de Viçosa; 2 Universidade de São Paulo. Brazil.'
                            },
                            {
                                titulo: 'La edición de genes en modelos animales y su transferencia al genoma humano. Preguntas necesarias a plantear.',
                                desc: 'Lluis Montoliu. Centro Nacional de Biotecnología (CNB-CSIC) Campo de Cantoblanco – Madrid. España.'
                            }
                        ]
                    },
                    {
                        id: 57,
                        titulo_es: 'Genetic and Genomic Studies in Tropical and Sub-tropical Crop Plants',
                        titulo_en: 'Genetic and Genomic Studies in Tropical and Sub-tropical Crop Plants',
                        tipo: 'simposio',
                        horario: '15:45 - 17:45',
                        lugar: 'Uspallata. Sala 4',
                        coordinadora: 'Clara Pritsch. Facultad de Agronomía, UDELAR. Montevideo, Uruguay.',
                        simposistas: [
                            {
                                titulo: 'Molecular breeding in Eucalyptus. ',
                                desc: 'Susana Marcucci Poltri. INTA Castelar. Buenos Aires, Argentina.'
                            },
                            {
                                titulo: 'Multipopulation QTL analyses for fruit quality traits in Acca sellowiana.',
                                desc: 'Marianella Quezada. Facultad de Agronomía, UDELAR. Montevideo, Uruguay.'
                            },
                            {
                                titulo: 'Genotyping and building linkage maps in complex autopolyploid species.',
                                desc: 'Augusto Garcia. Escola Superior de Agronomia Luiz de Queiroz, USP. Brasil.'
                            },
                            {
                                titulo: 'Revisiting meiosis in sugarcane: chromosomal irregularities, the prevalence of bivalent configurations and implications for breeding. ',
                                desc: 'Maria Lucia Carneiro. Escola Superior de Agricultura Luiz de Queiroz, Universidade de São Paulo.  Brasil.'
                            }
                        ]
                    },
                    {
                        id: 58,
                        titulo_es: 'Evolución de la flora sudamericana',
                        titulo_en: 'Evolución de la flora sudamericana',
                        tipo: 'simposio',
                        horario: '15:45 - 17:45',
                        lugar: 'Plumerillo. Sala 5',
                        coordinadora: 'Viviana Solís Neffa. Instituto de Botánica del Nordeste (IBONE), Corrientes Argentina.',
                        simposistas: [
                            {
                                titulo: 'Phylogeographic approaches for south american grassland species.',
                                desc: 'Freitas L.1. 1 Universidade Federal do Rio Grande do Sul. Brazil.'
                            },
                            {
                                titulo: 'Eventos geo-climáticos involucrados en la diversificación de plantas nativas de Sudamérica. ',
                                desc: 'Acosta M.C.1, A. Cosacov1, M.A. Scaldaferro1,2, D.L. Aguilar1,2, M.S. Chiabrando1,2, A.A. Cocucci1,2, A.N. Sérsic1. 1 Instituto Multidisciplinario de Biología Vegetal (IMBIV) CONICET-UNC; 2 Facultad de Ciencias Exactas, Físicas y Naturales, Universidad Nacional de Córdoba. Argentina.'
                            },
                            {
                                titulo: 'Huellas de refugios, expansión y contracción en la flora uruguaya.',
                                desc: 'Speranza P.1. 1 Facultad de Agronomía, Universidad de la República, Montevideo, Uruguay. '
                            },
                            {
                                titulo: 'Patrones de diversidad genética y evolución de especies de la flora del gran chaco sudamericano.',
                                desc: 'Solís Neffa V..1, E. Paredes1, N. Almirón1, S. Fernández1, C. Silva1, S. Moreno1, E. Kovalsky1. 1 IBONE (UNNE-CONICET) – FACENA (UNNE).  '
                            }
                        ]
                    },
                    {
                        id: 59,
                        titulo_es: 'Redes colaborativas y compartir datos en enfermedades genéticas neuromusculares',
                        titulo_en: 'Redes colaborativas y compartir datos en enfermedades genéticas neuromusculares',
                        tipo: 'mesa',
                        horario: '15:45 - 17:45',
                        lugar: 'Magna. Sala 3',
                        coordinadora: 'Morales Saute J A. Serviço de Genética Médica, Hospital de Clinicas de Porto Alegre. Brasil.',
                        panelistas: [
                            {
                                titulo: '“Arquivo Brasileiro Online de Mutações” (ABraOM) can contribute to the neuromuscular genetics field?',
                                desc: 'Naslavsky M.1, G.L. Yamamoto 1,2, L. Santos E Souza1, M. Oliveira Scliar 1, J. Wang 1, Y. Aparacida De O. Duarte 1, M.R. Passos-bueno 1, M. Vainzof 1, M. Zatz 1. 1 Universidade de São Paulo. 2 Boston Children’s Hospital and Harvard Medical School.'
                            },
                            {
                                titulo: 'The experience with WES for diagnosis of small mutations in DMD in Argentin',
                                desc: 'Luce .L. 1,2, M. Carcione 1,2, C. Mazzanti 1,2, F. Giliberto 1,2. 1 Universidad de Buenos Aires, Facultad de Farmacia y Bioquímica, Cátedra de Genética. Buenos Aires, Argentina. 2 CONICET – Universidad de Buenos Aires, Instituto de Inmunología, Genética y Metabolismo (INIGEM). Buenos Aires, Argentina.'
                            },
                            {
                                titulo: 'Distrofia muscular de Duchenne. Registros y bases de datos en Colombia.',
                                desc: 'Suarez-Obando F. 1,2. 1 Instituto de Genética Humana. Facultad de Medicina. Pontificia Universidad Javeriana. 2 Servicio de Genética. Hospital Universitario San Ignacio. Colombia.'
                            },
                            {
                                titulo: 'Studies on facioscapulohumeral muscular dystrophy in Argentina',
                                desc: 'Rosa A.L. 1,2,3, J. Quintero 1, S. Pagnoni 1,2. 1 IRNASUS-CONICET / FCQ – UCC. 2 Fundacion Allende; 3 Sanatorio Allende. Argentina.'
                            },
                            {
                                titulo: 'Preliminary data on the genetics of limb girdle muscle weakness in Chile',
                                desc: 'Bevilacqua J.A. 1, P. González-hormazábal 2, C. Castiglioni 3, P. Caviedes 2, L. Jara 2.  1 Hospital Clínico Universidad de Chile/Facultad de Medicina, Universidad de Chile. 2 ICBM, Facultad de Medicina, Universidad de Chile, Santiago, Chile. 3 Clinica Las Condes, Santiago, Chile.'
                            }
                        ]
                    },
                ]
            },
            {
                hora: '17:45 Hs.',
                charlas: [
                    {
                        id: 60,
                        titulo_es: 'Intervalo',
                        titulo_en: 'Interval',
                        tipo: 'varios',
                        horario: '17:45 – 18:15'
                    },
                ]
            },
            {
                hora: '18:15 Hs.',
                charlas: [
                    {
                        id: 61,
                        titulo_es: 'Acto de cierre y fiesta clausura',
                        titulo_en: 'Closing ceremony and closing party',
                        tipo: 'varios',
                        horario: '18:15 – 19:15',
                        lugar: 'Bustelo. Sala 1'
                    },
                ]
            },
        ]
    }
];
//# sourceMappingURL=programa.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_start_start__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { TabsPage } from '../pages/tabs/tabs';

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_start_start__["a" /* StartPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the NotificationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NotificationsProvider = /** @class */ (function () {
    function NotificationsProvider(http) {
        this.http = http;
        console.log('Hello NotificationsProvider Provider');
    }
    NotificationsProvider.prototype.getNotifications = function () {
        var url = __WEBPACK_IMPORTED_MODULE_5__config_config__["b" /* URL_SERVICES */] + '/notification/' + __WEBPACK_IMPORTED_MODULE_5__config_config__["a" /* CONGRESO_ID */];
        return this.http.get(url);
    };
    NotificationsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], NotificationsProvider);
    return NotificationsProvider;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenciaDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_translation_translation__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Storage Module

var ConferenciaDetailsPage = /** @class */ (function () {
    function ConferenciaDetailsPage(navCtrl, navParams, _translationProvider, storage, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._translationProvider = _translationProvider;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.fechaConferencia = new Date();
        this.isFavorite = false;
        this.conferencia = this.navParams.get('conferencia');
        this.programa = this.navParams.get('programa');
        this.fechaConferencia.setFullYear(this.programa.anio, this.programa.mes - 1, this.programa.dia);
        console.log(this.conferencia);
        this.storage.get('favoriteConferences').then(function (data) {
            console.log(data);
            if (data !== null) {
                var conferencieInFavorites = data.find(function (row) { return row.conferencia.id === _this.conferencia.id; });
                if (conferencieInFavorites) {
                    _this.isFavorite = true;
                }
            }
        });
    }
    ConferenciaDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConferenciaDetailsPage');
    };
    ConferenciaDetailsPage.prototype.getTituloByLang = function (objeto) {
        if (this._translationProvider.lang === 'es') {
            objeto.titulo_lang = objeto.titulo_es;
        }
        else if (this._translationProvider.lang === 'en') {
            objeto.titulo_lang = objeto.titulo_en;
        }
        return objeto.titulo_lang;
    };
    ConferenciaDetailsPage.prototype.getDescByLang = function (objeto) {
        if (this._translationProvider.lang === 'es') {
            objeto.desc_lang = objeto.desc_es;
        }
        else if (this._translationProvider.lang === 'en') {
            objeto.desc_lang = objeto.desc_en;
        }
        return objeto.desc_lang;
    };
    ConferenciaDetailsPage.prototype.agregarFavorito = function () {
        var _this = this;
        if (!this.isFavorite) {
            this.storage.get('favoriteConferences').then(function (data) {
                console.log(data);
                if (data === null) {
                    var favoriteConferences = [];
                    favoriteConferences.push({ conferencia: _this.conferencia, programa: _this.programa });
                    _this.storage.set('favoriteConferences', favoriteConferences).then(function () {
                        console.log('notifications updated');
                        _this.isFavorite = true;
                    });
                }
                else {
                    data.push({ conferencia: _this.conferencia, programa: _this.programa });
                    _this.storage.set('favoriteConferences', data).then(function () {
                        console.log('notifications updated');
                        _this.isFavorite = true;
                    });
                }
                var message;
                if (_this._translationProvider.lang === 'es') {
                    message = 'Agregado correctamente a Favoritos.';
                }
                else {
                    message = 'Successfully added to Favorites.';
                }
                var toast = _this.toastCtrl.create({
                    message: message,
                    duration: 2000
                });
                toast.present();
            });
        }
        else {
            this.storage.get('favoriteConferences').then(function (data) {
                console.log(data);
                if (data !== null) {
                    var indexFavorite = data.findIndex(function (row) { return row.conferencia.id === _this.conferencia.id; });
                    if (indexFavorite !== -1) {
                        data.splice(indexFavorite, 1);
                        _this.storage.set('favoriteConferences', data).then(function () {
                            console.log('notifications updated');
                            _this.isFavorite = false;
                            var message;
                            if (_this._translationProvider.lang === 'es') {
                                message = 'Borrado correctamente de Favoritos.';
                            }
                            else {
                                message = 'Successfully deleted from Favorites.';
                            }
                            var toast = _this.toastCtrl.create({
                                message: message,
                                duration: 2000
                            });
                            toast.present();
                        });
                    }
                }
            });
        }
    };
    ConferenciaDetailsPage.prototype.getFavoriteColor = function () {
        if (this.isFavorite) {
            return 'red';
        }
        else {
            return 'grey';
        }
    };
    ConferenciaDetailsPage.prototype.getCategoriaByLang = function (categoria) {
        if (this._translationProvider.lang === 'es') {
            categoria.nombre_lang = categoria.nombre_es;
        }
        else if (this._translationProvider.lang === 'en') {
            categoria.nombre_lang = categoria.nombre_en;
        }
        return categoria.nombre_lang;
    };
    ConferenciaDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-conferencia-details',template:/*ion-inline-start:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\conferencia-details\conferencia-details.html"*/'<!--\n\n  Generated template for the ConferenciaDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <div *ngIf="conferencia.tipo === \'simposio\'">\n\n            <ion-title>{{ \'conferencia.simposioTitle\' | translate }}</ion-title>\n\n        </div>\n\n        <div *ngIf="conferencia.tipo === \'conferencia\'">\n\n            <ion-title>{{ \'conferencia.conferenciaTitle\' | translate }}</ion-title>\n\n        </div>\n\n        <div *ngIf="conferencia.tipo === \'mesa\'">\n\n            <ion-title>{{ \'conferencia.mesaTitle\' | translate }}</ion-title>\n\n        </div>\n\n        <div *ngIf="conferencia.tipo === \'taller\'">\n\n            <ion-title>{{ \'conferencia.tallerTitle\' | translate }}</ion-title>\n\n        </div>\n\n        <div *ngIf="conferencia.tipo === \'curso\'">\n\n            <ion-title>{{ \'conferencia.cursoTitle\' | translate }}</ion-title>\n\n        </div>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-card>\n\n\n\n        <ion-item>\n\n            <ion-label style="white-space: unset !important;">\n\n                <h1>{{ getTituloByLang(conferencia) }}</h1>\n\n                <p>{{ fechaConferencia | date }} - Lugar: {{ conferencia.lugar }}</p>\n\n            </ion-label>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <span item-start>Horario: {{ conferencia.horario }}</span>\n\n            <button ion-button icon-start clear item-end color="{{getFavoriteColor()}}" (click)="agregarFavorito()">\n\n            <ion-icon name="heart"></ion-icon>\n\n            {{ \'conferencia.favorito\' | translate }}\n\n          </button>\n\n        </ion-item>\n\n\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n\n\n        <ion-item *ngIf="conferencia?.coordinadora">\n\n            <span item-start>Coordinador</span>\n\n            <ion-label style="white-space: unset !important;">\n\n                {{conferencia.coordinadora}}\n\n            </ion-label>\n\n        </ion-item>\n\n        <ion-item *ngIf="conferencia?.docentes && conferencia?.docentes.length > 0">\n\n            <span item-start>Docentes</span>\n\n            <ion-label style="white-space: unset !important;">\n\n                <ul>\n\n                    <li *ngFor="let docente of conferencia?.docentes">{{docente}}</li>\n\n                </ul>\n\n            </ion-label>\n\n        </ion-item>\n\n\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n\n\n        <ion-item *ngIf="conferencia?.responsables">\n\n            <span item-start>Responsable</span>\n\n            <ion-label style="white-space: unset !important;">\n\n                {{conferencia.responsables}}\n\n            </ion-label>\n\n        </ion-item>\n\n        <ion-item *ngIf="conferencia?.temario && conferencia?.temario.length > 0">\n\n            <ion-label style="white-space: unset !important;">\n\n                <h3>Temario</h3>\n\n                <ul>\n\n                    <li *ngFor="let tema of conferencia?.temario">{{tema}}</li>\n\n                </ul>\n\n            </ion-label>\n\n        </ion-item>\n\n\n\n    </ion-card>\n\n\n\n    <ion-card *ngIf="conferencia?.autor">\n\n        <ion-item *ngIf="conferencia?.autor">\n\n            <span item-start>Autor</span>\n\n            <ion-label style="white-space: unset !important;">\n\n                {{conferencia.autor}}\n\n            </ion-label>\n\n        </ion-item>\n\n        <ion-item *ngIf="conferencia?.autorDesc" style="white-space: unset !important;">\n\n            <ion-label style="white-space: unset !important;">\n\n                <h3>Descripcion</h3>\n\n                <p [innerHTML]="conferencia.autorDesc"></p>\n\n            </ion-label>\n\n        </ion-item>\n\n    </ion-card>\n\n\n\n    <ion-card *ngIf="conferencia?.contenidos && conferencia?.contenidos.length > 0">\n\n        <ion-item>\n\n            <ion-label style="white-space: unset !important;">\n\n                <h3>Contenidos</h3>\n\n                <ul>\n\n                    <li *ngFor="let contenido of conferencia?.contenidos">{{contenido}}</li>\n\n                </ul>\n\n            </ion-label>\n\n        </ion-item>\n\n    </ion-card>\n\n\n\n    <ion-card *ngIf="conferencia.simposistas && conferencia.simposistas.length > 0">\n\n        <ion-item>\n\n            <ion-label style="white-space: unset !important;">\n\n                <h3>Simposistas</h3>\n\n                <ul>\n\n                    <li *ngFor="let simposista of conferencia?.simposistas">\n\n                        <h4>{{ simposista.titulo }}</h4>\n\n                        <p>{{simposista.desc}}</p>\n\n                    </li>\n\n                </ul>\n\n            </ion-label>\n\n        </ion-item>\n\n    </ion-card>\n\n\n\n    <ion-card *ngIf="conferencia.panelistas && conferencia.panelistas.length > 0">\n\n        <ion-item>\n\n            <ion-label style="white-space: unset !important;">\n\n                <h3>Panelistas</h3>\n\n                <ul>\n\n                    <li *ngFor="let panelista of conferencia?.panelistas">\n\n                        <h4>{{ panelista.titulo }}</h4>\n\n                        <p>{{panelista.desc}}</p>\n\n                    </li>\n\n                </ul>\n\n            </ion-label>\n\n        </ion-item>\n\n    </ion-card>\n\n\n\n    <ion-card *ngIf="conferencia.categorias && conferencia.categorias.length > 0">\n\n        <ion-item>\n\n            <ion-label style="white-space: unset !important;">\n\n                <h3>Categorias</h3>\n\n                <ul>\n\n                    <li *ngFor="let categoria of conferencia?.categorias">\n\n                        {{getCategoriaByLang(categoria)}}\n\n                    </li>\n\n                </ul>\n\n            </ion-label>\n\n        </ion-item>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n\n\n        <ion-item *ngIf="conferencia?.desc_es">\n\n            <ion-label style="white-space: unset !important;">\n\n                <p innerHtml="{{getDescByLang(conferencia)}}"></p>\n\n            </ion-label>\n\n        </ion-item>\n\n\n\n    </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\conferencia-details\conferencia-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_translation_translation__["a" /* TranslationProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], ConferenciaDetailsPage);
    return ConferenciaDetailsPage;
}());

//# sourceMappingURL=conferencia-details.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_translation_translation__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Storage Module

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl, navParams, _translationProvider, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._translationProvider = _translationProvider;
        this.storage = storage;
        this.notification = this.navParams.get('notification');
        console.log(this.notification);
        this.marcarLeido(this.notification);
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
    };
    NotificationPage.prototype.getTituloByLang = function (objeto) {
        if (this._translationProvider.lang === 'es') {
            objeto.titulo_lang = objeto.titulo_es;
        }
        else if (this._translationProvider.lang === 'en') {
            objeto.titulo_lang = objeto.titulo_en;
        }
        return objeto.titulo_lang;
    };
    NotificationPage.prototype.getContentByLang = function (objeto) {
        if (this._translationProvider.lang === 'es') {
            objeto.content_lang = objeto.content_es;
        }
        else if (this._translationProvider.lang === 'en') {
            objeto.content_lang = objeto.content_en;
        }
        return objeto.content_lang;
    };
    NotificationPage.prototype.marcarLeido = function (notification) {
        var _this = this;
        console.log('marcarLeido ejecutado');
        this.storage.get('notificationsStorage').then(function (data) {
            var resultado = data.find(function (notiStorage) { return notiStorage._id === notification._id; });
            resultado.read = true;
            console.log(resultado);
            console.log(data);
            _this.storage.set('notificationsStorage', data).then(function () {
                console.log('notifications updated');
            });
        });
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\notification\notification.html"*/'<!--\n\n  Generated template for the NotificationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            <img src="../../assets/imgs/logo_alag.png" alt="">\n\n\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h1>Notificación</h1>\n\n    <h2 *ngIf="notification">{{ getTituloByLang(notification) }}</h2>\n\n    <div [innerHTML]="getContentByLang(notification)" *ngIf="notification"></div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\notification\notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_translation_translation__["a" /* TranslationProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesFavoritesListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_translation_translation__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__conferencia_details_conferencia_details__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__trabajo_details_trabajo_details__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Storage Module




/**
 * Generated class for the PagesFavoritesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PagesFavoritesListPage = /** @class */ (function () {
    function PagesFavoritesListPage(navCtrl, navParams, storage, _translationProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this._translationProvider = _translationProvider;
        this.conferencias = [];
        this.trabajos = [];
        this.lista = '0';
        this.storage.get('favoriteConferences').then(function (data) {
            console.log(data);
            if (data && data.length > 0) {
                data.forEach(function (conferencia) {
                    var day = _this.conferencias.find(function (row) { return row.dia === conferencia.programa.dia; });
                    console.log('encontro dia', day);
                    if (day) {
                        day.conferencias.push(conferencia);
                    }
                    else {
                        _this.conferencias.push({ dia: conferencia.programa.dia,
                            mes: conferencia.programa.mes,
                            anio: conferencia.programa.anio,
                            conferencias: [conferencia] });
                    }
                });
                _this.conferencias.sort(function (a, b) { return (a.dia > b.dia) ? 1 : -1; });
                _this.conferencias.forEach(function (dia) {
                    dia.conferencias.sort(function (a, b) { return (a.conferencia.id > b.conferencia.id) ? 1 : -1; });
                });
                console.log('conferencias', _this.conferencias);
            }
        });
        this.storage.get('favoriteTrabajos').then(function (data) {
            console.log(data);
            if (data && data.length > 0) {
                _this.trabajos = data;
            }
        });
        var from = this.navParams.get('from');
        if (from === 'conferencias') {
            this.lista = '0';
        }
        else {
            this.lista = '1';
        }
    }
    PagesFavoritesListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PagesFavoritesListPage');
    };
    PagesFavoritesListPage.prototype.getTituloByLang = function (objeto) {
        if (this._translationProvider.lang === 'es') {
            objeto.titulo_lang = objeto.titulo_es;
        }
        else if (this._translationProvider.lang === 'en') {
            objeto.titulo_lang = objeto.titulo_en;
        }
        return objeto.titulo_lang;
    };
    PagesFavoritesListPage.prototype.verCharla = function (charla, programa) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__conferencia_details_conferencia_details__["a" /* ConferenciaDetailsPage */], { 'conferencia': charla, 'programa': programa });
    };
    PagesFavoritesListPage.prototype.inicialesNombres = function (nombres) {
        var iniciales = '';
        var arrayNombres = nombres.split(' ');
        for (var _i = 0, arrayNombres_1 = arrayNombres; _i < arrayNombres_1.length; _i++) {
            var nombre = arrayNombres_1[_i];
            iniciales = iniciales + nombre.substr(0, 1) + '.';
        }
        return iniciales.toUpperCase();
    };
    PagesFavoritesListPage.prototype.verTrabajo = function (trabajo) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__trabajo_details_trabajo_details__["a" /* TrabajoDetailsPage */], { 'trabajo': trabajo });
    };
    PagesFavoritesListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pages-favorites-list',template:/*ion-inline-start:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\pages-favorites-list\pages-favorites-list.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{ \'favorites.favorites\' | translate }}</ion-title>\n    </ion-navbar>\n    <div>\n        <ion-segment [(ngModel)]="lista">\n            <ion-segment-button value="0">\n                Cronograma\n            </ion-segment-button>\n            <ion-segment-button value="1">\n                Trabajos\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n</ion-header>\n\n<ion-content>\n\n    <div [ngSwitch]="lista">\n        <ion-list *ngSwitchCase="\'0\'">\n            <ion-item-group *ngFor="let dia of conferencias">\n                <ion-item-divider color="light">{{ dia.dia }}/{{ dia.mes }}/{{ dia.anio }}</ion-item-divider>\n                <ion-item *ngFor="let charla of dia.conferencias" (click)="verCharla(charla.conferencia, charla.programa)">\n                    <ion-label style="white-space: unset !important;">\n                        <h2>{{ getTituloByLang(charla.conferencia) }}</h2>\n                        <p>{{ charla.conferencia.horario }}: {{ charla.conferencia.lugar }} <span *ngIf="charla.conferencia.tipo !== \'mesa\' && charla.conferencia.tipo !== \'varios\'">| Tipo: {{ \'conferencia.\'+charla.conferencia.tipo | translate }}</span>\n                            <span *ngIf="charla.conferencia.tipo === \'mesa\'">| Tipo: {{ \'conferencia.mesa\' | translate }}</span>\n                        </p>\n                    </ion-label>\n                    <button ion-button icon clear item-right>\n                                            <ion-icon name="arrow-forward"></ion-icon>\n                                        </button>\n                </ion-item>\n            </ion-item-group>\n            <div style="text-align: center;padding: 10px; margin-top: 30px;" *ngIf="conferencias.length === 0">\n                <ion-icon style="font-size: 80px;" name="ios-information-circle-outline"></ion-icon>\n                <h1>{{ \'favorites.vacio\' | translate }}</h1>\n            </div>\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'1\'">\n            <ion-list *ngIf="trabajos.length > 0">\n                <ion-item *ngFor="let trabajo of trabajos" (click)="verTrabajo(trabajo.trabajo)">\n                    <ion-label style="white-space: unset !important;">\n                        <h2>{{ trabajo.trabajo.titulo }}</h2>\n                        <p>\n                            <span *ngFor="let autor of trabajo.trabajo.autores, let i = index">\n                                            {{autor.apellido}} {{inicialesNombres(autor.nombres)}}\n                                            <span *ngIf="i !== trabajo.trabajo.autores.length -1">,</span>\n                            </span>\n                        </p>\n                    </ion-label>\n                    <button ion-button icon clear item-right>\n                                <ion-icon name="arrow-forward"></ion-icon>\n                            </button>\n                </ion-item>\n            </ion-list>\n        </ion-list>\n\n    </div>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\pages-favorites-list\pages-favorites-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_translation_translation__["a" /* TranslationProvider */]])
    ], PagesFavoritesListPage);
    return PagesFavoritesListPage;
}());

//# sourceMappingURL=pages-favorites-list.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajoDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_translation_translation__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_fechaTrabajos__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Storage Module



var TrabajoDetailsPage = /** @class */ (function () {
    function TrabajoDetailsPage(navCtrl, navParams, storage, _translationProvider, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this._translationProvider = _translationProvider;
        this.toastCtrl = toastCtrl;
        this.isFavorite = false;
        this.trabajo = this.navParams.get('trabajo');
        this.trabajo.fecha = this.getFechaTrabajo();
        console.log(this.trabajo);
        this.storage.get('favoriteTrabajos').then(function (data) {
            console.log(data);
            if (data !== null) {
                var trabajoInFavorites = data.find(function (row) { return row.trabajo._id === _this.trabajo._id; });
                if (trabajoInFavorites) {
                    _this.isFavorite = true;
                }
            }
        });
    }
    TrabajoDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrabajoDetailsPage');
    };
    TrabajoDetailsPage.prototype.getFechaTrabajo = function () {
        var _this = this;
        var categoria = __WEBPACK_IMPORTED_MODULE_4__data_fechaTrabajos__["a" /* fechaTrabajos */].find(function (categ) {
            return categ.nombre ===
                _this.trabajo.categoriasTrabajo[_this.trabajo.categoriasTrabajo.length - 1].nombre_es;
        });
        if (categoria) {
            return categoria.fecha;
        }
        else {
            return false;
        }
    };
    TrabajoDetailsPage.prototype.superindiceLugares = function (lugaresTrabajo) {
        var superindice = '';
        if (lugaresTrabajo) {
            for (var _i = 0, lugaresTrabajo_1 = lugaresTrabajo; _i < lugaresTrabajo_1.length; _i++) {
                var lugar = lugaresTrabajo_1[_i];
                if (superindice === '') {
                    superindice = superindice + lugar;
                }
                else {
                    superindice = superindice + ',' + lugar;
                }
            }
        }
        return superindice;
    };
    TrabajoDetailsPage.prototype.inicialesNombres = function (nombres) {
        var iniciales = '';
        var arrayNombres = nombres.split(' ');
        for (var _i = 0, arrayNombres_1 = arrayNombres; _i < arrayNombres_1.length; _i++) {
            var nombre = arrayNombres_1[_i];
            iniciales = iniciales + nombre.substr(0, 1) + '.';
        }
        return iniciales.toUpperCase();
    };
    TrabajoDetailsPage.prototype.agregarFavorito = function () {
        var _this = this;
        if (!this.isFavorite) {
            this.storage.get('favoriteTrabajos').then(function (data) {
                console.log(data);
                if (data === null) {
                    var favoriteTrabajo = [];
                    favoriteTrabajo.push({ trabajo: _this.trabajo });
                    _this.storage.set('favoriteTrabajos', favoriteTrabajo).then(function () {
                        console.log('notifications updated');
                        _this.isFavorite = true;
                    });
                }
                else {
                    data.push({ trabajo: _this.trabajo });
                    _this.storage.set('favoriteTrabajos', data).then(function () {
                        console.log('notifications updated');
                        _this.isFavorite = true;
                    });
                }
                var message;
                if (_this._translationProvider.lang === 'es') {
                    message = 'Agregado correctamente a Favoritos.';
                }
                else {
                    message = 'Successfully added to Favorites.';
                }
                var toast = _this.toastCtrl.create({
                    message: message,
                    duration: 2000
                });
                toast.present();
            });
        }
        else {
            this.storage.get('favoriteTrabajos').then(function (data) {
                console.log(data);
                if (data !== null) {
                    var indexFavorite = data.findIndex(function (row) { return row.trabajo._id === _this.trabajo._id; });
                    if (indexFavorite !== -1) {
                        data.splice(indexFavorite, 1);
                        _this.storage.set('favoriteTrabajos', data).then(function () {
                            console.log('notifications updated');
                            _this.isFavorite = false;
                            var message;
                            if (_this._translationProvider.lang === 'es') {
                                message = 'Borrado correctamente de Favoritos.';
                            }
                            else {
                                message = 'Successfully deleted from Favorites.';
                            }
                            var toast = _this.toastCtrl.create({
                                message: message,
                                duration: 2000
                            });
                            toast.present();
                        });
                    }
                }
            });
        }
    };
    TrabajoDetailsPage.prototype.getFavoriteColor = function () {
        if (this.isFavorite) {
            return 'red !important';
        }
        else {
            return 'grey';
        }
    };
    TrabajoDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trabajo-details',template:/*ion-inline-start:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\trabajo-details\trabajo-details.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{ \'trabajos.detailsTrabajos\' | translate }}</ion-title>\n        <ion-buttons end>\n            <button *ngIf="isFavorite" style="color: blue !important;" ion-button icon-start clear end (click)="agregarFavorito()">\n                        <ion-icon name="heart"></ion-icon>\n                        {{ \'conferencia.favorito\' | translate }}\n                      </button>\n            <button *ngIf="!isFavorite" ion-button icon-start clear end (click)="agregarFavorito()">\n                            <ion-icon name="heart"></ion-icon>\n                            {{ \'conferencia.favorito\' | translate }}\n                          </button>\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-item>\n        <ion-badge *ngIf="trabajo.fecha">Fecha: {{trabajo.fecha}}</ion-badge>\n        <ion-badge *ngIf="trabajo.codigoTrabajo" item-end>{{ \'conferencia.codigo\' | translate }}: {{trabajo.codigoTrabajo}}</ion-badge>\n    </ion-item>\n    <ion-card>\n\n        <ion-item>\n            <ion-label style="white-space: unset !important;">\n                <h1>{{ trabajo.titulo | uppercase }}</h1>\n                <p>\n                    <span *ngFor="let autor of trabajo.autores, let i = index">\n                                                <span *ngIf="i === 0">\n                                                        {{ autor.apellido }} {{ inicialesNombres(autor.nombres) }}<sup>{{ superindiceLugares(autor.lugaresTrabajo) }}</sup><span *ngIf="trabajo.autores.length !== i+1">, </span>\n                    <span *ngIf="trabajo.autores.length === i+1">. </span>\n                    </span>\n                    <span *ngIf="i !== 0">\n                                                        {{ inicialesNombres(autor.nombres) }} {{ autor.apellido }}<sup>{{ superindiceLugares(autor.lugaresTrabajo) }}</sup><span *ngIf="trabajo.autores.length !== i+1">, </span>\n                    <span *ngIf="trabajo.autores.length === i+1">. </span>\n                    </span>\n                    </span>\n                    <span *ngFor="let lugar of trabajo.lugaresTrabajo, let i = index"><span *ngIf="lugar.usado"><sup>{{ lugar.id }}</sup> {{ lugar.nombre }}</span><span *ngIf="i+1 !== trabajo.lugaresTrabajo.length">; </span><span *ngIf="i+1 === trabajo.lugaresTrabajo.length">. </span></span>\n                    <br><span>E-mail: {{ trabajo.contactoAutor }}</span>\n                </p>\n            </ion-label>\n        </ion-item>\n\n    </ion-card>\n\n    <ion-card>\n        <ion-item>\n            <ion-label style="white-space: unset !important;">\n                <p [innerHTML]="trabajo.textoTrabajo"></p>\n            </ion-label>\n        </ion-item>\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bruno\Desktop\Proyectos\alag-app-ionic\alagApp\src\pages\trabajo-details\trabajo-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_translation_translation__["a" /* TranslationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], TrabajoDetailsPage);
    return TrabajoDetailsPage;
}());

//# sourceMappingURL=trabajo-details.js.map

/***/ })

},[279]);
//# sourceMappingURL=main.js.map