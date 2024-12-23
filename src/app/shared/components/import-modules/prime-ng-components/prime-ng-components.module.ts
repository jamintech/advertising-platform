import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Button } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TreeModule } from 'primeng/tree';
import { CalendarModule } from 'primeng/calendar';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    DropdownModule,
    TooltipModule,
    CardModule,
    Button,
    ToastModule,
    InputTextModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule,
    TreeModule,
    CalendarModule,
    MessageModule,
    PasswordModule
  ],
  exports: [
    ButtonModule,
    DropdownModule,
    TooltipModule,
    CardModule,
    Button,
    ToastModule,
    InputTextModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule,
    TreeModule,
    CalendarModule,
    MessageModule,
    PasswordModule
  ]
})
export class PrimeNgComponentsModule { }
