// Regular Expression 
export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const NAME_REGEX = /^[A-z][A-z0-9-_]{2,23}$/;
export const PWD_REGEX = /^[A-z][A-z0-9-_]{8,24}$/;
export const PHONE_REGEX =  /^\d+$/; // only numbers

// Urls
export const REGISTER_URL = "/register";
export const LOGIN_URL = "/login"

