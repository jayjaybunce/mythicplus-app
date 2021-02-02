import React, { useState, useRef, useContext } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ActivityIndicator,
  Button,
  TouchableHighlight,
} from 'react-native';
import { Icon, withTheme } from 'react-native-elements';
import Toast from 'react-native-toast-message';
import realmList from '../data/realms';
import {
  fetchCharacterData,
  updateCharacterData,
} from '../data/getters/characterInfo';
import { CharacterInformation, Run } from '../Types';
import CharacterContext from '../context/CharacterContext';
import getTimeSinceUpdate from '../utils/TimeAndDate';

const data = realmList;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 5,
    backgroundColor: '#0e1014',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    zIndex: 1,
  },
  statusBar: {
    height: 5,
  },
  input: {
    fontSize: 16,
    padding: 10,
    backgroundColor: '#181C24',
    fontFamily: 'Helvetica',
    fontWeight: '400',
    borderRadius: 5,
    color: 'white',
    width: '36%',
  },
  icon: {
    padding: 7,
    backgroundColor: '#181C24',
    borderRadius: 5,
  },
  activity: {
    padding: 9,
  },
  popout: {
    backgroundColor: '#0e1014',
    width: '37.5%',
    position: 'absolute',
    marginTop: 60,
    marginLeft: 15,
    padding: 5,
    zIndex: 1,
    borderRadius: 5,
  },
  popoutOption: {
    color: 'white',
    padding: 8,
    backgroundColor: '#181C24',
    borderBottomColor: '#0e1014',
    borderBottomWidth: 4,
    borderRadius: 5,
  },
  popoutOptionText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Helvetica',
    fontWeight: '400',
  },
});

type Props = {
  placeholderOne: string;
  placeholderTwo: string;
};

const SearchableDropdown = ({
  placeholderOne,
  placeholderTwo,
  displayToast,
}: Props) => {
  const [characterContext, setCharacterContext] = useContext(CharacterContext);
  const [isFocused, setIsFocused] = useState(false);
  const [valueOne, setValueOne] = useState('');
  const [valueTwo, setValueTwo] = useState('');
  const [region, setRegion] = useState('');
  const [realmId, setRealmId] = useState('');
  const [items, setItems] = useState([]);
  const inputEl = useRef(null);

  const updateCharacterContext = charInfo => {
    const runs = charInfo.mythic_plus_best_runs;
    let temp = 0;
    runs.forEach((run: Run) => {
      temp += run.score;
    });
    setCharacterContext({
      ...charInfo,
      score: temp,
      role: charInfo.active_spec_role,
      spec: charInfo.active_spec_name,
      charClass: charInfo.class,
      itemLevel: charInfo.gear.item_level_equipped,
      timeSinceUpdate: getTimeSinceUpdate(charInfo.last_crawled_at),
    });
  };

  const verificationChecker = () => {
    if (valueOne.length >= 2 && valueTwo.length >= 2) {
      return '#36a84d';
    }
    return '#3776A8';
  };

  const requestCharUpdate = async () => {
    const arg = {
      realmId,
      region,
      realm: valueOne,
      name: valueTwo,
    };
    await updateCharacterData(arg)
      .then(res => res.json())
      .then(result => {
        if (result.success === true) {
          displayToast(
            'Success',
            `Requested update on ${valueTwo}-${valueOne}`,
          );
        } else {
          displayToast('Error', `An error occured, try again`);
        }
      });
  };

  const onValueSelect = selection => {
    setValueOne(selection.name);
    setRealmId(selection.realmId);
    setRegion(selection.region);
    inputEl.current.focus();
    if (isFocused === true) {
      setIsFocused(false);
    }
  };

  const onInputChange = (e: string) => {
    setValueOne(e);
    if (e === ' ' || e === '') {
      setItems([]);
      return;
    }
    const temp: string[] | [] = [];
    data.forEach(item => {
      const name = item.name.slice(0, valueOne.length);
      if (name === valueOne) {
        temp.push(item);
      }
    });
    setItems(temp);
  };

  const onSearchPress = async () => {
    const queryData = {
      realm: valueOne,
      name: valueTwo,
    };
    await fetchCharacterData(queryData)
      .then(res => res.json())
      .then(result =>
        result.statusCode === 400 ? '' : updateCharacterContext(result),
      );
  };

  return (
    <View
      style={{
        position: 'absolute',
      }}
    >
      <View style={styles.container}>
        <TextInput
          style={{
            ...styles.input,
          }}
          placeholder={placeholderOne || 'Search'}
          placeholderTextColor="#828181"
          value={valueOne}
          onChangeText={onInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <TextInput
          style={{
            ...styles.input,
          }}
          autoCorrect={false}
          placeholder={placeholderTwo || 'Search'}
          placeholderTextColor="#828181"
          value={valueTwo}
          onChangeText={setValueTwo}
          ref={inputEl}
        />
        {verificationChecker() === '#36a84d' ? (
          <Icon
            name="search"
            type="material"
            color="#3776A8"
            style={styles.icon}
            onPress={onSearchPress}
          />
        ) : (
          <ActivityIndicator style={styles.activity} />
        )}
        <Icon
          name="autorenew"
          type="material"
          color={characterContext.name ? '#00FD3A' : '#5c5c5c'}
          style={styles.icon}
          disabled={!characterContext.name}
          disabledStyle={{
            backgroundColor: '#181C24',
          }}
          onPress={requestCharUpdate}
        />
      </View>
      <View
        style={{
          ...styles.statusBar,
          backgroundColor: verificationChecker(),
        }}
      >
        <Text />
      </View>
      <View
        style={{
          ...styles.popout,
          display: isFocused && items.length > 0 ? 'flex' : 'none',
        }}
      >
        {items.map(item => {
          return (
            <TouchableHighlight
              key={item.name}
              onPress={() => onValueSelect(item)}
              style={styles.popoutOption}
            >
              <Text style={styles.popoutOptionText}>{item.name}</Text>
            </TouchableHighlight>
          );
        })}
      </View>
    </View>
  );
};

export default SearchableDropdown;
