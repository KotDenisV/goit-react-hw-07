export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter.filter;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;