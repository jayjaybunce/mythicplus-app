import React, { createContext } from 'react';
import { Context, User } from '../Types';

const defaultData = {
  user: null,
  searches: [],
};

const UserContext = createContext(defaultData);

export default UserContext;
