import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { GirisComponent } from './login/login-components/giris/giris.component';
import { PersonelHomeComponent } from './personel/personel-components/personel-home/personel-home.component';
import { AdminHomeComponent } from './admin/admin-components/admin-home/admin-home.component';
import { MusteriHomeComponent } from './musteri/musteri-components/musteri-home/musteri-home.component';

const routes: Routes = [
  {
    path: "admin", component: AdminHomeComponent,children: [
      { path:"", loadChildren: () => import("./admin/admin-components/admin-home/admin-home.module").then(module => module.AdminHomeModule)}
    ] 
  },

  {
    path: "personel", component: PersonelHomeComponent,children: [
      { path:"", loadChildren: () => import("./personel/personel-components/personel-home/personel-home.module").then(module => module.PersonelHomeModule)}
    ] 
  },

  {
    path: "musteri", component: MusteriHomeComponent,children: [
      { path:"", loadChildren: () => import("./musteri/musteri-components/musteri-home/musteri-home.module").then(module => module.MusteriHomeModule)}
    ] 
  },

  { path: "", component: GirisComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
