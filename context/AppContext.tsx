import React, { createContext } from 'react';
import { Context } from '../Types';

const defaultData: Context = {
  user: null,
  searches: [],
};

const AppContext = createContext(defaultData);

export default AppContext;
