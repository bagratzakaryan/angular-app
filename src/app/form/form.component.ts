import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms'

function nameValidator(control: FormControl): { [s: string]: boolean } {
	if (control.value.length < 5) {
		return { 'name': true };
	}
}
function mailValidators(control: FormControl): { [s: string]: boolean } {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (!re.test(String(control.value).toLowerCase())) {
		return { 'email': true };
	}
}

@Component({
	selector: 'form-root',
	templateUrl: './form.component.html'
})
export class FormComponent {
	public userForm: FormGroup;
	public formControlError: boolean[] = [];

	public firstname: AbstractControl;
	public lastname: AbstractControl;
	public email: AbstractControl;

	constructor(fb: FormBuilder) {
		this.userForm = fb.group({
			'firstname': ['', Validators.compose([Validators.required, nameValidator])],
			'lastname': ['',Validators.compose([ Validators.required, nameValidator])],
			'email': ['', Validators.compose([Validators.required, mailValidators])]
		});

		this.firstname = this.userForm.controls['firstname'];
		this.lastname = this.userForm.controls['lastname'];
		this.email = this.userForm.controls['email'];
	}

	public onSubmit(value) {
		console.log(value);
		this.formError();
	}

	public controlError(control) {
		return !control.valid && control.touched;
	}

	public formError() {
		return true;
	}
}
