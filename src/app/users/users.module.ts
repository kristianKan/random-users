import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UsersService } from './users.service';
import { usersReducer } from './users.reducer';
import { UsersComponent } from './users.component';
import { UsersEffects } from './users.effects';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot({ users: usersReducer }),
    EffectsModule.forRoot([UsersEffects]) 
  ],
  exports: [UsersComponent],
  providers: [UsersService]
})

export class UsersModule { }