import { SearchPipe } from './search.pipe';
import { RegisterForm } from 'src/app/shared/models';

describe('SearchPipe', () => {
  let form:RegisterForm[] = [{
    firstName: 'Ricky',
    lastName: 'thakur',
    city: 'mohali',
    email: 'test@email.com',
    gender: 'male'
  },{
    firstName: 'Ricky',
    lastName: 'thakur',
    city: 'gurdaspur',
    email: 'test@email.com',
    gender: 'male'
  }]

  it('create an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return array of object', () => {
    const pipe = new SearchPipe();
    expect(pipe.transform(form,'')).toEqual(form)
  });

  it('should return matching array of object', () => {
    const pipe = new SearchPipe();
    expect(pipe.transform(form,'mohali')).toEqual([{
      firstName: 'Ricky',
      lastName: 'thakur',
      city: 'mohali',
      email: 'test@email.com',
      gender: 'male'
    }])
  });
});
