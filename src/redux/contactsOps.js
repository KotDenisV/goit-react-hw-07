import axios from "axios";
import { deleteContacts, fetchContacts, setError, setLoading } from "./contactsSlice";

axios.defaults.baseURL = 'https://66b9241c3ce57325ac78ff7c.mockapi.io/';


export const fetchContactsThunk = () => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const responce = await axios.get('contacts');
        console.log(responce.data);
        dispatch(fetchContacts(responce.data));
    } catch (error) {
        dispatch(setError(true));
    } finally {
        dispatch(setLoading(false));
    }

};

export const deleteContactsThunk = (id) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        await axios.delete(`contacts/${id}`);
        dispatch(deleteContacts(id));        
    } catch (error) {
        dispatch(setError(true));
    } finally {
        dispatch(setLoading(false));
    }

};
