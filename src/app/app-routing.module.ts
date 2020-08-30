import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { GridComponent } from './grid/grid.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'cards', component: CardsComponent },
    { path: 'grid', component: GridComponent },
    { path: 'contact', component: ContactComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
