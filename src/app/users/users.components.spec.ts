import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { UsersComponent } from './users.component';
import { usersSelector, selectUserById } from './users.selectors';
import { selectUser, flagUser } from './users.actions';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let store: MockStore;
  const initialState = { users: [] };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch selectUser action on selectUser', () => {
    const id = '1';
    const spy = spyOn(store, 'dispatch');
    component.selectUser(id);
    expect(spy).toHaveBeenCalledWith(selectUser(id));
  });

  it('should dispatch flagUser action on flagUser', () => {
    const id = '1';
    const flag = true;
    const to = '';
    const from = '';
    const spy = spyOn(store, 'dispatch');
    component.flagUser(id, flag);
    expect(spy).toHaveBeenCalledWith(flagUser({ id, flag, to, from }));
  });
});