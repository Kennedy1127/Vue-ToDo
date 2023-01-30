<template>
  <div>
    <!-- email -->
    <div class="pt-5">
      <label for="email" class="inline-block pb-2 text-2xl font-medium"
        >Email</label
      >
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        class="w-full rounded border border-solid border-brand-grey-1 p-1 text-lg outline-brand-blue-1"
        v-model="inputEmail"
      />
    </div>
    <!-- email -->

    <!-- password -->
    <div class="pt-5">
      <label for="password" class="inline-block pb-2 text-2xl font-medium"
        >Password</label
      >
      <input
        type="text"
        id="password"
        placeholder="Enter your password"
        class="w-full rounded border border-solid border-brand-grey-1 p-1 text-lg outline-brand-blue-1"
        v-model="inputPassword"
      />
    </div>
    <!-- password -->

    <!-- error message -->
    <div class="pt-2 text-brand-red-2">
      <p v-if="!emailIsMatched">**Please enter the correct email format.</p>
      <p v-if="!passwordIsNotEmpty">**Password cannot be empty.</p>
      <p v-if="error">{{ error }}</p>
    </div>
    <!-- error message -->

    <AuthenticationButton buttonMode="Sign In" @click="handleSignin" />
    <ModalSpinning v-if="storeUser.isPending" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import router from '@/router';
import { useUserStore } from '@/stores/storeUser';
import AuthenticationButton from '@/components/Buttons/AuthenticationButton.vue';
import ModalSpinning from '@/components/Modals/ModalSpinning.vue';
import useSignin from '@/composables/useSignin';

// store
const storeUser = useUserStore();
//

// sign in
const { error, signin } = useSignin();

const handleSignin = async () => {
  if (!validateEmail() || !validatePassword()) {
    return;
  }

  storeUser.switchIsPendingMode(true);

  try {
    const data = {
      email: inputEmail.value,
      password: inputPassword.value,
    };

    await signin(data);

    if (!error.value) {
      router.push({ name: 'Home' });
    }
  } catch (err) {
    console.error(error.value);
  }

  storeUser.switchIsPendingMode(false);
};
//

// input
const inputEmail = ref('');
const inputPassword = ref('');
//

// validate email
const emailIsMatched = ref(true);
const validateEmail = () => {
  const mailFormat = /^\S+@\S+\.\S+$/;

  if (!inputEmail.value.trim().match(mailFormat)) {
    emailIsMatched.value = false;
    return false;
  }

  resetValidation();
  return true;
};
//

// validate password
const passwordIsNotEmpty = ref(true);

const validatePassword = () => {
  if (inputPassword.value === '') {
    passwordIsNotEmpty.value = false;
    return false;
  }

  resetValidation();
  return true;
};
//

const resetValidation = () => {
  emailIsMatched.value = true;
  passwordIsNotEmpty.value = true;
};
</script>
