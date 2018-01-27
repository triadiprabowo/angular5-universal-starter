/*
** import core dependencies for ngModule
** @return Object {}
*/
import { BrowserModule, makeStateKey } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/*
** import required ngModule list modules
** @return Array()
*/
import { 
	DeclarationList, 
	ProviderList, 
	RouterList, 
	AppBootstrap 
} from './app.config.module';


// create request key to state transfer from server to client and vice versa
export const REQ_KEY = makeStateKey<string>('req')

// declare angular modules
@NgModule({
	declarations: DeclarationList,
	imports: [
		BrowserModule.withServerTransition({appId: 'my-app'}),
		HttpClientModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		RouterModule.forRoot(RouterList)
	],
	providers: ProviderList,
	bootstrap: AppBootstrap
})
export class AppModule { }
