import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { UsersService } from './users.service';
import { usersReducer } from './users.reducer';
import { UsersComponent } from './users.component';
import { UsersEffects } from './users.effects';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot({ users: usersReducer }),
    EffectsModule.forRoot([UsersEffects]),
    MatSidenavModule,
    MatListModule,
    MatCardModule 
  ],
  exports: [UsersComponent],
  providers: [UsersService]
})

export class UsersModule { }