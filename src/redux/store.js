import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contacts/contactsAPI';
import filterReduser from './contacts/contacts-reduser';

const store = configureStore({
  reducer: {
    filter: filterReduser,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
