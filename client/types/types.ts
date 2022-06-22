import store from "../store/store";

const initStore = () => store;

export type Store = ReturnType<typeof initStore>;

export type RootState = ReturnType<Store['getState']>;

export type AppDispatch = Store['dispatch'];