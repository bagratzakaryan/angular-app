import { Component, HostBinding } from '@angular/core';
import { TranslateService } from './translate.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	@HostBinding('attr.class') cssClass = 'row';

	public votes: number;
	public title: string;
	public link: string;

	constructor(private translate: TranslateService) {
		this.title = 'Angular 2';
		this.link = 'http://angular.io';
		this.votes = 10;
	}

 	public voteUp() {
		this.votes += 1;
	}
 	public voteDown() {
		this.votes -= 1;
	}

	public setLang(lang: string) {
		this.translate.use(lang);
	}
}
