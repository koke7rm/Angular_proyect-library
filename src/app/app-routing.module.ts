import { NuevolibroComponent } from './pages/nuevolibro/nuevolibro.component';
import { AdminescritoresComponent } from './pages/adminescritores/adminescritores.component';
import { AdminlibrosComponent } from './pages/adminlibros/adminlibros.component';
import { LoginComponent } from './pages/login/login.component';
import { VistaescritorComponent } from './pages/vistaescritor/vistaescritor.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistadetallelibroComponent } from './pages/vistadetallelibro/vistadetallelibro.component';
import { EditlibroComponent } from './pages/editlibro/editlibro.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
},

{
  path: 'home',
  component: HomeComponent,
},
{
  path: 'detalle',
  component: VistadetallelibroComponent,
},

{
  path: 'detalleEscritor',
  component: VistaescritorComponent,
},

{
  path: 'login',
  component: LoginComponent,
},

{
  path: 'adminlibros',
  component: AdminlibrosComponent,
},

{
  path: 'adminescritores',
  component: AdminescritoresComponent,
},

{
  path: 'nuevolibro',
  component: NuevolibroComponent,
},

{
  path: 'editlibro',
  component: EditlibroComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
