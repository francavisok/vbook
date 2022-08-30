import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import userReducer from "./user";
import bookReducer from "./book";
import booksReducer from "./books";
import favoritesReducer from "./favorites";
import cartReducer from "./cart";
import boughtItemsReducer from "./boughtItems";
import genresReducer from "./genres";
import genreReducer from "./genre";
import orderReducer from "./order";

const store = configureStore({
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    book: bookReducer,
    books: booksReducer,
    favorites: favoritesReducer,
    cart: cartReducer,
    order:orderReducer,
    boughtItems: boughtItemsReducer,
    genre: genreReducer,
    genres: genresReducer
  },
});

export default store;