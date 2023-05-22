/*
 * Copyright 2015-2020 Ritense BV, the Netherlands.
 *
 * Licensed under EUPL, Version 1.2 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {
  FunctionConfigurationComponent,
  FunctionConfigurationData,
  PluginConfigurationComponent,
  PluginConfigurationData,
} from '@valtimo/plugin';
import {BehaviorSubject, combineLatest, Observable, Subscription, take} from 'rxjs';
import {SampleActionConfig} from '../models';
import {FormOutput} from '@valtimo/user-interface';

@Component({
  selector: 'valtimo-sample-action-configuration',
  templateUrl: './sample-action-configuration.component.html',
  styleUrls: ['./sample-action-configuration.component.scss'],
})
export class SampleActionConfigurationComponent
  implements FunctionConfigurationComponent, OnInit, OnDestroy
{
  @Input() save$: Observable<void>;
  @Input() disabled$: Observable<boolean>;
  @Input() pluginId: string;
  @Input() prefillConfiguration$: Observable<SampleActionConfig>;
  @Output() valid: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() configuration: EventEmitter<SampleActionConfig> =
    new EventEmitter<SampleActionConfig>();


  private saveSubscription!: Subscription;
  private readonly formValue$ = new BehaviorSubject<SampleActionConfig | null>(null);
  private readonly valid$ = new BehaviorSubject<boolean>(false);

  ngOnInit(): void {
    this.openSaveSubscription();
  }

  ngOnDestroy(): void {
    this.saveSubscription?.unsubscribe();
  }

  // formValueChange(formValue: FormOutput): void {
  //   this.formValue$.next(formValue);
  //   this.handleValid(formValue);
  // }

  private handleValid(formValue: SampleActionConfig): void {
    const valid = !!(
      formValue.sampleString
    );

    this.valid$.next(valid);
    this.valid.emit(valid);
  }

  private openSaveSubscription(): void {
    this.saveSubscription = this.save$?.subscribe(save => {
      combineLatest([this.formValue$, this.valid$])
        .pipe(take(1))
        .subscribe(([formValue, valid]) => {
          if (valid) {
            this.configuration.emit(formValue);
          }
        });
    });
  }
}
