import { RouterModule, Routes, PreloadAllModules, PreloadingStrategy, } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { NotesComponent } from './notes/containers/notes/notes.component';
// Guards
import * as fromAuthGuards from './auth/quards';

const routes: Routes = [
  { path: 'notes', canActivate: [fromAuthGuards.AuthenticatedGuard], loadChildren: './notes/notes.module#NotesModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: '**', redirectTo: 'notes', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [ fromAuthGuards.AuthenticatedGuard ],
})
export class AppRoutingModule {}
