import axios from "axios";
import { fetchContacts, setError } from "./contactsSlice";

axios.defaults.baseURL = 'https://66b9241c3ce57325ac78ff7c.mockapi.io/';


export const fetchContactsThunk = () => async (dispatch) => {
    try {
        const responce = await axios.get('contacts')
        console.log(responce.data);
        dispatch(fetchContacts(responce.data));
    } catch (error) {
        dispatch(setError(true));
    }

};
