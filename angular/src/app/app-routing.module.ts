import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from "./home/home.component";
import { DetailComponent} from "./detail/detail.component";
import { PayComponent} from "./pay/pay.component";
import { WomenComponent } from "./women/women.component";
import { MenComponent } from "./men/men.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'clothes/:id', component: DetailComponent },
  {path: 'checkout', component: PayComponent },
  {path: 'womens', component: WomenComponent },
  {path: 'mens', component: MenComponent },
  {path: 'about', component: AboutComponent },
  {path: 'detail', component: DetailComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
