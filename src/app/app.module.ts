import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from './pipe.module';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

import { TranslateService } from './translate.service';

export function setupTranslateFactory(
	service: TranslateService): Function {
	return () => service.use('eng');
}

@NgModule({
	declarations: [
		AppComponent,
		FormComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		PipeModule
	],
	providers: [
		TranslateService,
		{
			provide: APP_INITIALIZER,
			useFactory: setupTranslateFactory,
			deps: [TranslateService],
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
