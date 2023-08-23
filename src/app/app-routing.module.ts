import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GirisComponent } from './login/login-components/giris/giris.component';
import { PersonelHomeComponent } from './personel/personel-components/personel-home/personel-home.component';
import { AdminHomeComponent } from './admin/admin-components/admin-home/admin-home.component';
import { MusteriHomeComponent } from './musteri/musteri-components/musteri-home/musteri-home.component';

const routes: Routes = [
  {
    path: "admin", children: [
      { path:"", loadChildren: () => import("./admin/admin-components/admin-home/admin-home.module").then(module => module.AdminHomeModule)}
    ] 
  },

  {
    path: "personel", children: [
      { path:"", loadChildren: () => import("./personel/personel-components/personel-home/personel-home.module").then(module => module.PersonelHomeModule)},

      { path:"personel-kayit", loadChildren: () => import("./personel/personel-components/personel-kayit/personel-kayit.module").then(module => module.PersonelKayitModule)}
    ] 
  },

  {
    path: "musteri",children: [
      { path:"", loadChildren: () => import("./musteri/musteri-components/musteri-home/musteri-home.module").then(module => module.MusteriHomeModule)},

      { path:"istek-kayit", loadChildren: () => import("./musteri/musteri-components/musteri-istek-kayit/musteri-istek-kayit.module").then(module => module.MusteriIstekKayitModule)},

      { path:"istek-liste", loadChildren: () => import("./musteri/musteri-components/musteri-istek-liste/musteri-istek-liste.module").then(module => module.MusteriIstekListeModule)},
      
      { path:"kayit", loadChildren: () => import("./musteri/musteri-components/musteri-kayit/musteri-kayit.module").then(module => module.MusteriKayitModule)},
    ] 
  },

  {
    path: "demirbas",children: [
      { path:"", loadChildren: () => import("./demirbas/demirbas-components/demirbas-home/demirbas-home.module").then(module => module.DemirbasHomeModule)},

      { path:"demirbas-kayit", loadChildren: () => import("./demirbas/demirbas-components/demirbas-kayit/demirbas-kayit.module").then(module => module.DemirbasKayitModule)},

      { path:"demirbas-liste", loadChildren: () => import("./demirbas/demirbas-components/demirbas-liste/demirbas-liste.module").then(module => module.DemirbasListeModule)},
    ] 
  },

  { path: "", loadChildren: () => import("./login/login-components/giris/giris.module").then(module => module.GirisModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
