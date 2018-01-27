import { enableProdMode, CompilerOptions } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if(environment.production) {
	enableProdMode();
}

const compilerOptions: CompilerOptions = {
	providers: [
		{ provide: REQUEST, useValue: {} },
		{ provide: RESPONSE, useValue: {} }
	]
};

document.addEventListener('DOMContentLoaded', () => {
	platformBrowserDynamic().bootstrapModule(AppModule, compilerOptions);
});
