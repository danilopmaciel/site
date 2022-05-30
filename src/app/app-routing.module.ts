import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'', component:LayoutComponent,
    children: [{path:'home', component: HomeComponent},
               {path:'contato', component: ContatoComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
