import {getDatabase, increment, child, get, ref, set} from 'firebase/database';

export const applyCounterApi = async (userId: string) => {
  const db = getDatabase();

  return set(ref(db, `users/${userId}`), {
    counter: increment(1),
  });
};

export const getCounterApi = async (userId: string) => {
  debugger;

  const dbRef = ref(getDatabase());
  let response: number;
  await get(child(dbRef, `users/${userId}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        response = snapshot.val().counter;
      }
    })
    .catch(error => {
      console.error(error);
    });
  // @ts-ignore
  return response;
};
