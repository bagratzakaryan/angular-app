import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TranslateService {
	public data: any = {};

	constructor(private http: HttpClient) { }

	public use(lang: string): Promise<{}> {
		return new Promise<{}>((resolve, reject) => {
			const langPath = `assets/i18n/${lang || 'eng'}.json`;
			this.http.get<{}>(langPath).subscribe(
				translation => {
					this.data = Object.assign({}, translation || {});
					resolve(this.data);
				},
				error => {
					this.data = {};
					resolve(this.data);
				}
			);
		});
	}
}