import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "admin",    
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: "",
    redirectTo: "admin/active",
    pathMatch : "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
