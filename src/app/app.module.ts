import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PipeModule } from './pipe.module';

import { AppComponent } from './app.component';

import { TranslateService } from './translate.service';
import { TranslatePipe } from './translate.pipe';

export function setupTranslateFactory(
	service: TranslateService): Function {
	return () => service.use('eng');
}

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
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
