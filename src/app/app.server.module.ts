import { APP_BOOTSTRAP_LISTENER, ApplicationRef, enableProdMode, Inject, NgModule, NgZone } from '@angular/core'
import {ServerModule, ServerTransferStateModule} from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { TransferState } from '@angular/platform-browser';
import { CookieService } from './shared/services/cookie.service'
import {AppModule, REQ_KEY} from './app.module';
import {AppComponent} from './app.component';
import * as express from 'express';

import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/first'

export function onBootstrap(appRef: ApplicationRef, transferState: TransferState, req: express.Request) {
	return () => {
		appRef.isStable
			.filter(stable => stable)
			.first()
			.subscribe(() => {
				transferState.set<any>(REQ_KEY, {
					hostname: req.hostname,
					originalUrl: req.originalUrl,
					referer: req.get('referer')
				})
			})
	}
}

@NgModule({
	imports: [
		// The AppServerModule should import your AppModule followed
		// by the ServerModule from @angular/platform-server.
		AppModule,
		ServerModule,
		ServerTransferStateModule,
		ModuleMapLoaderModule,
	],
	// Since the bootstrapped component is not inherited from your
	// imported AppModule, it needs to be repeated here.
	bootstrap: [AppComponent],
	providers: [
		{
			provide: APP_BOOTSTRAP_LISTENER,
			useFactory: onBootstrap,
			multi: true,
			deps: [
				ApplicationRef,
				TransferState,
				REQUEST,
				CookieService
			]
		}
	]
})
export class AppServerModule {}
