<script setup lang="ts">
import BaseButton from "../components/BaseButton.vue";
import BaseInput from "../components/BaseInput.vue";
import { storeToRefs } from "pinia";
import { contact } from "../store/";
import { useContact } from "../composable/contact";
const { addContact, contactArr } = useContact();

const store = contact();
storeToRefs(store);
</script>
<template>
  <div class="flex justify-between items-start">
    <div class="bg-blue-50 w-1/3 rounded py-5 px-8">
      <p class="text-center text-xl font-semibold">Contact us</p>
      <form @submit.prevent>
        <BaseInput v-model="store.contact.name" placeholder="Fullname" type="text" />
        <BaseInput v-model="store.contact.email" placeholder="Email" type="email" />
        <BaseInput v-model="store.contact.phone" placeholder="Your phone" type="number" />
        <BaseInput
          v-model="store.contact.password"
          placeholder="Password"
          type="password"
        />
        <BaseButton
          type="submit"
          @click.prevent="addContact"
          class="bg-red-500 w-full mt-3 hover:bg-red-600"
          >Create</BaseButton
        >
      </form>
    </div>
    <div class="w-2/3">
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-slate-100">
            <th>Fullname</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody class="bg-slate-50">
          <tr v-for="item in contactArr" class="text-center">
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.password }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
