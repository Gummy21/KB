import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from "./home/home.component"
import { DetailComponent} from "./detail/detail.component"
import { PayComponent} from "./pay/pay.component"

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'clothes/:id', component: DetailComponent },
  {path: 'checkout', component: PayComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
