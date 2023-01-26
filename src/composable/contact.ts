import { ref } from "vue";
import { contact } from "../store";

interface contactForm {
  name: string;
  email: string;
  phone: string;
  password: string;
}
export function useContact() {
  const store = contact();

  const contactArr = ref<contactForm[]>([]);
  function addContact(): void {
    if (
      store.$state.contact.name &&
      store.$state.contact.email &&
      store.$state.contact.password &&
      store.$state.contact.phone
    ) {
      contactArr.value.push(store.$state.contact);
      store.$state.contact = {
        name: "",
        email: "",
        phone: "",
        password: "",
      };
    }
  }

  return {
    contactArr,
    addContact,
  };
}
