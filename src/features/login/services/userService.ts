import { User } from '@/shared/types/user';
import { normalizeUser } from '../models/normalizeUser';

interface Usuario {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
    street: string;
  };
}

// esta interafaz es para simular tipo deuna API
// y en caso que no pues se coloca any solo para simular y lleguen los datos

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  console.log(data);


  return data.slice(0, 5).map((d: Usuario) => normalizeUser({
    _id: d.id.toString(),
    firstName: d.name.split(' ')[0],
    lastName: d.name.split(' ')[1] || '',
    email: d.email,
    city: d.address.street
  }));
};

