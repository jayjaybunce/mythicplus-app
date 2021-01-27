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

export const updateCharacterData = async charInfo => {
  const { name, realm, realmId, region } = charInfo;
  const payload = {
    character: name,
    realmId,
    realm,
    region,
  };
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  return fetch('https://raider.io/api/crawler/characters', requestOptions);
};
