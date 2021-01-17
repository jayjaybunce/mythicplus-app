import React, { useState, useRef } from 'react';
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
import realmList from '../data/realms';
import fetchCharacterData from '../data/getters/characterInfo';
import { CharacterInformation, Run } from '../Types';

const data = realmList;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 15,
    backgroundColor: '#0e1014',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '98%',
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
    width: '40%',
  },
  searchIcon: {
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
  updater: () => void;
  setOverallScore: () => void;
};

const SearchableDropdown = ({
  placeholderOne,
  placeholderTwo,
  updater,
  setOverallScore,
}: // setIsDataFetched,
Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [valueOne, setValueOne] = useState('');
  const [valueTwo, setValueTwo] = useState('');
  const [items, setItems] = useState([]);

  const inputEl = useRef(null);

  const verificationChecker = () => {
    if (valueOne.length >= 2 && valueTwo.length >= 2) {
      return '#36a84d';
    }
    return '#3776A8';
  };

  const updateHigherState = charInfo => {
    updater(charInfo);
    const runs = charInfo.mythic_plus_best_runs;
    let temp = 0;
    runs.forEach((run: Run) => {
      temp += run.score;
    });
    setOverallScore(temp);
    // setIsDataFetched(true);
  };

  const onValueSelect = selection => {
    setValueOne(selection);
    inputEl.current.focus();
    if (isFocused === true) {
      setIsFocused(false);
    }
  };

  const onInputChange = (e: any) => {
    if (e === ' ') {
      setItems([]);
    }
    setValueOne(e);
    const temp: string[] | [] = [];
    data.forEach((item: string) => {
      if (item.slice(0, valueOne.length) === valueOne) {
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
      .then(result => updateHigherState(result));
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
          onChangeText={e => onInputChange(e)}
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
            style={styles.searchIcon}
            onPress={onSearchPress}
          />
        ) : (
          <ActivityIndicator style={styles.activity} />
        )}
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
              key={item}
              onPress={() => onValueSelect(item)}
              style={styles.popoutOption}
            >
              <Text style={styles.popoutOptionText}>{item}</Text>
            </TouchableHighlight>
          );
        })}
      </View>
    </View>
  );
};

export default SearchableDropdown;
