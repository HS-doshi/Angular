import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { DatesheetComponent } from './datesheet/datesheet.component';

const routes: Routes = [
  { path: 'result', component: ResultComponent },
  { path: 'datesheet', component: DatesheetComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EexamRoutingModule { }
