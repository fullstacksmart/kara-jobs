import { incompleteTalent } from '../types/talent';

// TO DO: Replace with .env
const root = 'http://localhost:3001';

function fetchRequest(path: string, options: any) {
  return fetch(root + path, options)
    .then((res) => res.json())
    .catch((err) => {
      console.log('err', err);
    });
}

function postToDB(path: string, body: incompleteTalent) {
  console.log(path, body);
  return fetchRequest(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

export default {
  postToDB,
};
