import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS, ValidatorFn } from '@angular/forms';
import { Subscription } from 'rxjs';

export function compareValidator(controlNameToCompare: string): ValidatorFn {
  return (controlName: AbstractControl): ValidationErrors | null => {
    if (controlName.value === null || controlName.value.length === 0) {
      return null;
    }
    const controlToCompare = controlName.root.get(controlNameToCompare);
    if (controlToCompare) {
      const subscription: Subscription = controlToCompare.valueChanges.subscribe(() => {
        controlName.updateValueAndValidity();
        subscription.unsubscribe();
      });
    }
    return controlToCompare && controlToCompare.value !== controlName.value ? { 'appCompare': true } : null;
  }
}
@Directive({
  selector: '[appCompare]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CompareValidatorDirective, multi: true }]
})
export class CompareValidatorDirective implements Validator {
  @Input('appCompare') controlNameToCompare: string;

  validate(c: AbstractControl): ValidationErrors | null {
    return compareValidator(this.controlNameToCompare)(c);
  }

}
