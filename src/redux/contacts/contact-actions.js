import { createAction } from '@reduxjs/toolkit';
const shortid = require('shortid');

export const addContact = createAction('contact/add', (name, number) => ({
  payload: { id: String(shortid.generate()), name, number },
}));

export const deleteContact = createAction('contsct/delete');
export const chengeFilter = createAction('contact/filter');
