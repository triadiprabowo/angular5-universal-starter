import { REQUEST } from '@nguniversal/express-engine/tokens'
import { PlatformService } from './platform.service'
import { Inject, Injectable, Injector, InjectionToken } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import { CookieAttributes, getJSON, remove, set } from 'js-cookie'

export interface ICookieService {
	cookies$: Observable<{ [key: string]: any }>
	getAll(): any
	get(name: string): any
	set(name: string, value: any, options?: CookieAttributes): void
	remove(name: string, options?: CookieAttributes): void
}

@Injectable()
export class CookieService implements ICookieService {
	private cookieSource = new Subject<{ [key: string]: any }>()
	public cookies$ = this.cookieSource.asObservable()
	public req:any;

	constructor(private platformService: PlatformService, private injector:Injector) { 
		try {
			this.req = this.injector.get(REQUEST);  
		}
		catch(exception) { }
	}

	public set(name: string, value: any, options?: CookieAttributes): void {
		if (this.platformService.isBrowser) {
			set(name, value, options)
			this.updateSource()
		}
	}

	public remove(name: string, options?: CookieAttributes): void {
		if (this.platformService.isBrowser) {
			remove(name, options)
			this.updateSource()
		}
	}

	public get(name: string): any {
		if(this.platformService.isBrowser) {
			return getJSON(name)
		} else {
			try {
				return JSON.parse(this.req.cookies[name])
			} catch(exception) {
				return this.req ? this.req.cookies[name] : undefined
			}
		}
	}

	public getAll(): any {
		if(this.platformService.isBrowser) {
			return getJSON()
		} else {
			if(this.req) return this.req.cookies
		}
	}

	private updateSource() {
		this.cookieSource.next(this.getAll())
	}
}