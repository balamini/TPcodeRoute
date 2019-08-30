import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'categorie', loadChildren: './categorie/categorie.module#CategoriePageModule' },
  { path: 'panneau', loadChildren: './panneau/panneau.module#PanneauPageModule' },
  { path: 'detail-categorie', loadChildren: './detail-categorie/detail-categorie.module#DetailCategoriePageModule' },
  { path: 'detail-panneau', loadChildren: './detail-panneau/detail-panneau.module#DetailPanneauPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
