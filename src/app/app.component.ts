import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
	selector: 'app-root',
	template: `
		<!-- Set routing outlet -->
		<router-outlet></router-outlet>
	`
})
export class AppComponent { }
