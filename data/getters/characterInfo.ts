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

const fetchCharacterData = async ({ realm, name }: QueryData) => {
  const query = `https://raider.io/api/v1/characters/profile?region=us&realm=${simplifyString(
    realm,
  )}&name=${name}&fields=mythic_plus_best_runs`;
  return fetch(query).then(response => response);
};

export default fetchCharacterData;
