import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',redirectTo:'about', pathMatch:'full'},
  {path:'about',component:AboutComponent , title:'about'},
  {path:'portfolio',component:PortfolioComponent , title:'portfolio'}, 
  {path:'contact',component:ContactComponent , title:'contact us'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
