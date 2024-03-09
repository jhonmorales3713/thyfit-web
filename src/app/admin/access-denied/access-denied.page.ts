import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewContainerRef } from '@angular/core';
import { SharedTranslations } from 'src/app/shared/shared';
import { Translations } from 'src/app/shared/translation';

@Component({
  templateUrl: './access-denied.page.html',
})
export class AccessDeniedPage{
  T = Translations;
}
