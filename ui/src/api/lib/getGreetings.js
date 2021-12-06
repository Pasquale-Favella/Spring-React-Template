import { api } from "./api";

export const getGreetings = async ()=> await api.get(`/greetings`);
