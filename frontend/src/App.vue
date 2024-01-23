<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import NavLink from '@/components/NavLink.vue';
import SocialLink from '@/components/SocialLink.vue';
import MaxContainer from '@/components/MaxContainer.vue';
import { Linkedin, Github } from 'lucide-vue-next';
</script>

<template>
  <header className="relative z-10 w-full py-6">
    <MaxContainer>
      <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <RouterLink to="/">
          <div className="inline-flex items-center justify-center">
            <img
              src="@/assets/jack-monogram-light.svg"
              className="mr-2 h-10 w-10 dark:hidden"
            />
            <img
              src="@/assets/jack-monogram-dark.svg"
              className="hidden h-10 w-10 dark:block"
            />
          </div>
        </RouterLink>
        <!-- <div class="wrapper"> -->
        <!-- <HelloWorld msg="You did it!" /> -->
        <div class="flex items-center gap-16 sm:ml-auto">
          <nav class="flex gap-16">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>
        </div>
        <!-- </div> -->
      </div>
    </MaxContainer>
  </header>

  <RouterView />

  <footer class="pb-16 pt-5">
    <MaxContainer>
      <div className="flex w-full flex-col items-center justify-center">
        <div
          className="flex flex-row items-center gap-4 text-gray-800 dark:text-gray-200"
        >
          <SocialLink
            href="https://www.linkedin.com/in/jack-mckenz"
            label="LinkedIn"
          >
            <template #icon>
              <Linkedin />
            </template>
          </SocialLink>
          <SocialLink href="https://github.com/jackmckenzie" label="GitHub">
            <template #icon>
              <Github />
            </template>
          </SocialLink>
        </div>
        <small className="mt-4 font-medium text-gray-600 dark:text-gray-300">
          &copy; {{ new Date().getFullYear() }} Jack McKenzie
        </small>
      </div>
    </MaxContainer>
  </footer>
</template>

<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
