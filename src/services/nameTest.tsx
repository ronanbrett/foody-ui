import { ajax } from 'rxjs/ajax';
import { map, shareReplay, tap } from 'rxjs/operators';

const api = `https://randomuser.me/api/?results=5&seed=rx-react&nat=us&inc=name&noinfo`;
const getName = (user: any) => `${user.name.first} ${user.name.last}`;

const names$ = ajax.getJSON(api).pipe(
  tap(x => console.log(x)),
  map(({ results: users }: any) => users.map(getName)),
  shareReplay(),
);

Object.freeze(names$);
export default names$;
