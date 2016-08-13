import { bootstrap }    from '@angular/platform-browser-dynamic';
import { APP_ROUTES_PROVIDER } from './app.routes';
import { AppComponent } from './app.component';

bootstrap(AppComponent, [APP_ROUTES_PROVIDER]);
