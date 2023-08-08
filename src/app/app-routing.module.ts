import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CardsComponent } from './cards/cards.component';
import { ReachUsComponent } from './reach-us/reach-us.component';


const routes: Routes = [
  {path: 'about-us',component: AboutUsComponent},
  {path: 'banner',component: BannerComponent},
  {path: 'case-study',component : CardsComponent},
  {path: 'reach-us',component: ReachUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
