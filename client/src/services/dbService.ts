import { Talent } from '../types/talent';
import { store } from '../containers/Providers/Providers';

// TO DO: Replace with .env
const root = 'http://localhost:3001';

async function fetchRequest(path: string, options: any) {
  return await fetch(root + path, options)
    .then((res) => res.json())
    .catch((err) => {
      console.log('err', err);
    });
}

function postSignup(path: string, body: Talent): Promise<unknown> {
  console.log(path, body);
  return fetchRequest(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

export const saveInfo = async (
  info: Record<string, unknown>,
  type: string,
  id: string,
  kind = 'talents',
): Promise<unknown> => {
  store.dispatch({ type: 'ADD_TALENT', payload: info });
  const path = `/${kind}/${id}/${type}`;
  console.log('path', path);
  return await fetchRequest(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(info),
  });
};

export default {
  postSignup,
};
