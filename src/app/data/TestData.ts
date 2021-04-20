import {MenuCategory} from '../model/MenuCategory';
import {Mailbox} from '../model/Mailbox';
import {Profile} from '../model/Profile';
import {ProfileSize} from '../model/ProfileSize';

export class TestData {

  static menuCategories: MenuCategory[] = [
    {id: 1, title: 'Dashboard'},
    {id: 2, title: 'Все ящики'},
    {id: 3, title: 'Все профили'},
    {id: 4, title: 'Создать ящик'},
    {id: 5, title: 'Создать профиль'},
    {id: 6, title: 'Выход'}
  ];

  static mailboxes: Mailbox[] = [
    {
      id: 1,
      fullName: 'Ivanov Ivan Ivanovich',
      address: 'aaa@ennova.energy',
      passwordHash: '',
      profile: new Profile(1, 'Безлимитный', ProfileSize.NONE),
      date: new Date(),
      disabled: false
    },
    {
      id: 2,
      fullName: 'Petrov Petor Petrovich',
      address: 'bbb@ennova.energy',
      passwordHash: '',
      profile: new Profile(2, 'Типовой 2Гб', ProfileSize.SIZE2),
      date: new Date(),
      disabled: false
    },
    {
      id: 3,
      fullName: 'Sidorov Sidor Sidorovich',
      address: 'ccc@ennova.energy',
      passwordHash: '',
      profile: new Profile(3, 'Типовой 5Гб', ProfileSize.SIZE5),
      date: new Date(),
      disabled: false
    }
  ];
}
