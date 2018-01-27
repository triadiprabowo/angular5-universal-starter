/*
** ----------------------------------------------
** import required dependencies
** @return class
** ----------------------------------------------
*/

// import app component
import { AppComponent } from './app.component';

// import landing component
import { LandingComponent } from './pages/landing/landing.component';

// shared components, directives, guards, interceptor, pipe, services
import { CookieService } from './shared/services/cookie.service';
import { PlatformService } from './shared/services/platform.service';

/*
** -----------------------------------------------------------
** Export config of RouterList, ProviderList, DeclarationList
** @return Array()
** -----------------------------------------------------------
*/
export const RouterList = [
	// index component
	{ path: '', component: LandingComponent }
]

export const DeclarationList:any[] = [
	AppComponent,
	LandingComponent
];

export const ProviderList:any[] = [
	CookieService,
	PlatformService
];

export const AppBootstrap:any[] = [AppComponent];