import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { SearchbarComponent } from './components/header/searchbar/searchbar.component';

const routes: Routes = [
  {
    path:'',
    component:SearchbarComponent
  },{
    path:'',
    component:NavigationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
