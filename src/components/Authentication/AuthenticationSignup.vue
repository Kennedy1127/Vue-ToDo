<template>
  <div class="">
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

    <!-- username -->
    <div class="pt-5">
      <label for="username" class="inline-block pb-2 text-2xl font-medium"
        >Username</label
      >
      <input
        type="text"
        id="username"
        placeholder="Enter your username"
        class="w-full rounded border border-solid border-brand-grey-1 p-1 text-lg outline-brand-blue-1"
        v-model="username"
      />
    </div>
    <!-- username -->

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
        v-model="password"
      />
    </div>
    <!-- password -->

    <!-- confirm password -->
    <div class="pt-5">
      <label
        for="confirmPassword"
        class="inline-block pb-2 text-2xl font-medium"
        >Confirm Password</label
      >
      <input
        type="text"
        id="confirmPassword"
        placeholder="Enter your password again"
        class="w-full rounded border border-solid border-brand-grey-1 p-1 text-lg outline-brand-blue-1"
        v-model="confirmPassword"
      />
    </div>
    <!-- confirm password -->

    <!-- error message -->
    <div class="pt-2 text-brand-red-2">
      <p v-if="!emailIsMatched">**Please enter the correct email format.</p>
      <p v-if="!usernameIsNotEmpty">**Username cannot be empty.</p>
      <p v-if="!passwordIsNotEmpty">
        **Please enter password and confirmation passowrd.
      </p>
      <p v-if="!passwordIsLessThanSixCharacters">
        **The password should be at least 6 characters.
      </p>
      <p v-if="!passwordIsMatched">
        **Your password and confirmation password does not match.
      </p>
      <p v-if="error">{{ error }}</p>
    </div>
    <!-- error message -->

    <AuthenticationButton buttonMode="Sign Up" @click="handleSignup" />
    <ModalSpinning v-if="storeUser.isPending" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import router from '@/router';
import { useUserStore } from '@/stores/storeUser';
import AuthenticationButton from '@/components/Buttons/AuthenticationButton.vue';
import ModalSpinning from '@/components/Modals/ModalSpinning.vue';
import useSignup from '@/composables/useSignup';

// store
const storeUser = useUserStore();
//

// sign up
const { error, signup } = useSignup();

const handleSignup = async () => {
  if (!validateEmail() || !validateUsername() || !validatePassword()) {
    return;
  }

  storeUser.switchIsPendingMode(true);

  try {
    const data = {
      email: inputEmail.value,
      username: username.value,
      password: password.value,
    };

    await signup(data);

    if (!error.value) {
      router.push({ name: 'Home' });
    }
  } catch (err) {
    console.error(error.value);
  }

  storeUser.switchIsPendingMode(false);
};
//

// input data
const inputEmail = ref('');
const username = ref('');
const password = ref('');
const confirmPassword = ref('');
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

// validate username
const usernameIsNotEmpty = ref(true);

const validateUsername = () => {
  if (username.value.trim() === '') {
    usernameIsNotEmpty.value = false;
    return false;
  }

  resetValidation();
  return true;
};
//

// validate password
const passwordIsNotEmpty = ref(true);
const passwordIsLessThanSixCharacters = ref(true);
const passwordIsMatched = ref(true);

const validatePassword = () => {
  if (password.value === '') {
    passwordIsNotEmpty.value = false;
    return false;
  }

  if (password.value.length < 6) {
    passwordIsLessThanSixCharacters.value = false;
    return false;
  }

  if (password.value !== confirmPassword.value) {
    passwordIsMatched.value = false;
    return false;
  }

  resetValidation();
  return true;
};
//

// reset
const resetValidation = () => {
  emailIsMatched.value = true;
  usernameIsNotEmpty.value = true;
  passwordIsNotEmpty.value = true;
  passwordIsLessThanSixCharacters.value = true;
  passwordIsMatched.value = true;
};
//
</script>
