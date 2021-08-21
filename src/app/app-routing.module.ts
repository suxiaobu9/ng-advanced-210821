import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component },
      { path: 'utilities/color', loadChildren: () => import('./utilities/color/color.module').then(m => m.ColorModule) },
    ]
  },
  { path: 'login', component: LoginComponent },
  // {
  //   path: 'utilities',
  //   children: [
  //     { path: 'color', component: ColorComponent }
  //   ]
  // },
  // { path: 'color', loadChildren: () => import('./utilities/color/color.module').then(m => m.ColorModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
