import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { appRouting, routes } from './app/app.routes';
import {IonicModule} from "@ionic/angular"
import {importProvidersFrom} from "@angular/core"
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    appRouting,
    provideHttpClient(),
    importProvidersFrom(IonicModule.forRoot({})),
  ],
});