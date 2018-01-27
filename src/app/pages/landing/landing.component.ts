import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
	templateUrl: './landing.component.html'
})
export class LandingComponent {

	constructor(private title:Title, private meta:Meta) {
		title.setTitle('PT Bangun Daya Persada - Solusi Logistik');
	}
}