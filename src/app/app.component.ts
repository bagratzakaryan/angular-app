import { Component, HostBinding, OnInit } from '@angular/core';
import { TranslateService } from './translate.service';
import { TranslatePipe } from './translate.pipe';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [TranslatePipe]
})
export class AppComponent {
	public content: string = 'ng2';
	public fontSize: number = 35;

	@HostBinding('attr.class') cssClass = 'row';

	public votes: number;
	public title: string;
	public link: string;

	public first_name = "Jame";
	public last_name = "Jimis";
	public full_name = `Hello ${this.first_name} ${this.last_name}`;
	public identity_card: string;
	public text: string;

	constructor(private translate: TranslateService, private translatePipe: TranslatePipe) {
		this.title = 'Angular 2';
		this.link = 'http://angular.io';
		this.votes = 10;


		// this.text = translatePipe.transform('programVersion');
		

		// let nameControl = new FormControl("Nate");
		
		// let name = nameControl.value; // -> Nate
		
		// // now we can query this control for certain values:
		// nameControl.errors // -> StringMap<string, any> of errors
		// nameControl.dirty // -> false
		// nameControl.valid // -> true


		// let personInfo = new FormGroup({
		// 	firstName: new FormControl("Nate"),
		// 	lastName: new FormControl("Murray"),
		// 	zip: new FormControl("90210")
		// })

	}



 	public voteUp() {
		this.votes += 1;
		this.fontSize += 1;
	}
 	public voteDown() {
		this.votes -= 1;
		this.fontSize -= 1;
	}

	public setLang(lang: string) {
		this.translate.use(lang);
		this.text = this.translatePipe.transform('programVersion');
	}


	public isBordered: boolean;
	public classesObj: Object;
	public classList: string[];

	ngOnInit() {
		this.isBordered = true;
		this.classList = ['blue', 'round'];
		this.toggleBorder();
	}

	public toggleBorder(): void {
		this.isBordered = !this.isBordered;
		this.classesObj = {
			bordered: this.isBordered
		}
	}

}
