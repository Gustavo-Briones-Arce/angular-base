import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ControlItem } from '@app/models/frontend';
import { NotificationService } from '@app/services';
import { markFormGroupTouched, regex, regexErrors } from '@app/shared/utils';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html',
  styleUrls: ['./componentes.component.scss']
})
export class ComponentesComponent implements OnInit {
  form!: FormGroup;
  isInline!: boolean;
  regexError = regexErrors;
  showSpinner: boolean = false;

  items!: ControlItem[];

  constructor(
    private fb: FormBuilder,
    private notification: NotificationService
    ) {
    this.items = [
      {label: 'Uno', value: 1},
      {label: 'Dos', value: 2},
      {label: 'Tres', value: 3},
      {label: 'Cuatro', value: 4},
      {label: 'Cinco', value: 5},
      {label: 'Seis', value: 6}
    ];
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(regex.number)
        ]
      }],
      password: [null, {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }],
      autocomplete: [null, {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }],
      select: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }],
      checkboxes: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }],
      radios: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }],
      date: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }],
      dateRange: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }]
    });
  }

  onPatchValue(): void {
    this.form.patchValue({input: 'Ingrese'});
  }

  cambioPosicion(){
    this.isInline = !this.isInline;
  }

  onSubmit(){
    if(!this.form.valid){
      markFormGroupTouched(this.form);
    }
  }

  spinner(){
    this.showSpinner = !this.showSpinner;
  }

  success():void {
    this.notification.success('Procedimiento Exitoso');
  }

  error(): void {
    this.notification.error('Ups! Aqui hubo un error');
  }

}
