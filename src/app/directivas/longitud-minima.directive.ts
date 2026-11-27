
import { Directive, forwardRef } from '@angular/core'

import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator
} from '@angular/forms'

@Directive({
  standalone: false,
  selector: '[appLongitudMinima]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(
        () => LongitudMinimaDirective
      ),
      multi: true
    }
  ]
})
export class LongitudMinimaDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {

    const texto = String(control.value ?? '').trim()

    const longitudMinima = 3

    // Permitir una búsqueda vacía
    if (texto.length === 0) {
      return null
    }

    // Validar la longitud mínima
    if (texto.length < longitudMinima) {

      return {
        longitudMinima: {
          requerida: longitudMinima,
          actual: texto.length
        }
      }

    }

    // El texto es válido
    return null
  }
}
