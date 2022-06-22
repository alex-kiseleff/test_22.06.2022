import { configureStore } from '@reduxjs/toolkit';
import openBurgerMenuSlice from './slices/openBurgerMenuSlice';
import fetchContacts from './slices/fetchContacts';
import fetchInformationAbout from './slices/fetchInformationAbout';
import fetchMenu from './slices/fetchMenu';
import fetchNews from './slices/fetchNews';
import fetchOperatorsList from './slices/fetchOperatorsList';
import getIdSlice from './slices/getIdSlice';
import messengerSlice from './slices/messengerSlice';
import titleSlice from './slices/titleSlice';
import fetchPanelService from './slices/fetchPanelService';
import panelPayForPhoneSlice from './slices/panelPayForPhoneSlice';
import urlImageSlice from './slices/urlImageSlice';
import fetchSubmit from './slices/fetchSubmit';

const store = configureStore({
    reducer: {
        titles: titleSlice,
        id: getIdSlice,
        messenger: messengerSlice,
        operatorList: fetchOperatorsList,
        about: fetchInformationAbout,
        news: fetchNews,
        menu: fetchMenu,
        contacts: fetchContacts,
        burgerMenu: openBurgerMenuSlice,
        panelService: fetchPanelService,
        payForPhone: panelPayForPhoneSlice,
        urlImage: urlImageSlice,
        submit: fetchSubmit,
    },
});

export default store;
