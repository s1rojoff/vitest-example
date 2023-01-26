import { defineStore } from "pinia";
interface State {
  contact: {
    name: string;
    email: string;
    phone: string;
    password: string;
  };
}
export const contact = defineStore("contact", {
  state(): State {
    return {
        contact:{
            name: '',
            email: '',
            phone: '',
            password: ''
        }
    };
  },
});
