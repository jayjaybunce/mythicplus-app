type QueryData = {
  realm: string;
  name: string;
};

type strArr = string[] | [];

const simplifyString = (str: string) => {
  const temp = str.toLowerCase().split('');
  const newArr: strArr = [];
  temp.forEach(letter => {
    if (letter === "'" || letter === ' ') {
      return;
    }
    newArr.push(letter);
  });
  return newArr.join('');
};

export const fetchCharacterData = async ({ realm, name }: QueryData) => {
  const query = `https://raider.io/api/v1/characters/profile?region=us&realm=${simplifyString(
    realm,
  )}&name=${name}&fields=gear%2Cmythic_plus_best_runs`;
  return fetch(query).then(response => response);
};

export const updateCharacterData = async ({ realm, name }: QueryData) => {
  const query = `https://raider.io/api/crawler/characters`;
  let realmId;
  let region;
  const data = {
    realmId,
    realm,
    region,
    character: name,
  };
  return fetch(query, { method: 'POST', body: data }).then(response =>
    console.log(response),
  );
};
