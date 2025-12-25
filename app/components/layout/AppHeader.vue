<template>
  <header class="header">
    <div class="container">
      <!-- Left: Logo -->
      <NuxtLink to="/" class="brand" aria-label="Medmedica - Accueil">
      <img
          v-if="logoSrc"
          :src="logoSrc"
          alt="Medmedica"
          class="logo"
        />
        <span v-else class="brandText">Medmedica</span>
      </NuxtLink>

      <!-- Middle: Nav -->
      <nav class="nav" aria-label="Navigation principale">
        <NuxtLink to="/jobs">Offres</NuxtLink>
        <NuxtLink to="/publish">Publier une annonce</NuxtLink>
        <NuxtLink to="/about">À propos</NuxtLink>
      </nav>

      <!-- Right: Actions -->
      <div class="actions">
        <div class="language-switcher">
          <button
            @click="toggleLanguageMenu"
            :class="['btn', 'btnLanguage', { active: isLanguageMenuOpen }]"
            aria-label="Changer de langue"
          >
            {{ currentLanguage }}
            <svg class="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div :class="['language-menu', { active: isLanguageMenuOpen }]">
            <button
              v-for="lang in languages"
              :key="lang.code"
              @click="setLanguage(lang.code)"
              :class="['language-option', { active: currentLanguage === lang.code }]"
            >
              {{ lang.code }}
            </button>
          </div>
        </div>
        <NuxtLink to="/login" class="btn btnPrimary">Log In</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const logoSrc = "/logomedic4.png";

// Language switcher
const languages = [
  { code: 'FR', name: 'Français' },
  { code: 'NL', name: 'Nederlands' },
  { code: 'ENG', name: 'English' }
];

const currentLanguage = ref('FR');
const isLanguageMenuOpen = ref(false);

const toggleLanguageMenu = () => {
  isLanguageMenuOpen.value = !isLanguageMenuOpen.value;
};

const setLanguage = (langCode: string) => {
  currentLanguage.value = langCode;
  isLanguageMenuOpen.value = false;
  console.log(`Language changed to: ${langCode}`);
};

const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement;
  if (!target.closest('.language-switcher')) {
    isLanguageMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: #ffffff;
  border-bottom: 1px solid #e8e8e8;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 14px 16px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 16px;
}

/* Left */
.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
}

.logo {
  height: 42px;
  width: auto;
  display: block;
}

.brandText {
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 0.2px;
}

/* Middle */
.nav {
  display: flex;
  gap: 2rem; 
  align-items: center;
}

.nav a {
  position: relative;
  text-decoration: none;
  color: #334155; 
  font-weight: 650; 
  letter-spacing: 0.2px;
  padding: 6px 2px;
  transition: color 180ms ease, transform 180ms ease;
}

/* underline animé */
.nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 2px;
  height: 2px;
  width: 100%;
  transform: scaleX(0);
  transform-origin: left;
  border-radius: 999px;
  background: linear-gradient(90deg, #1f4fff, #4f8cff);
  transition: transform 220ms ease;
  opacity: 0.95;
}

.nav a:hover {
  color: #0f172a;
}

.nav a:hover::after {
  transform: scaleX(1);
}

/* actif (route courante) */
.nav a.router-link-active {
  color: #0f172a;
}

.nav a.router-link-active::after {
  transform: scaleX(1);
}

/* focus clavier */
.nav a:focus-visible {
  outline: 3px solid rgba(31, 79, 255, 0.25);
  outline-offset: 4px;
  border-radius: 10px;
}


/* Right */
.actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 18px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  border: 1px solid transparent;
}

.btnPrimary {
  background: #2563eb;
  color: #fff;
  border-color: #2563eb;
  transition: all 0.2s ease;
}

.btnPrimary:hover {
  background: #1d4ed8;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

.language-switcher {
  position: relative;
  margin-right: 12px;
}

.btnLanguage {
  background: #2563eb;
  color: #fff;
  border: 1px solid #2563eb;
  height: 40px;
  padding: 0 18px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btnLanguage:hover {
  background: #1d4ed8;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

.btnLanguage.active .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-arrow {
  transition: transform 0.2s ease;
}

.language-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(37, 99, 235, 0.1);
  min-width: 60px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s ease;
  z-index: 1000;
  margin-top: 4px;
}

.language-menu.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.language-option {
  display: block;
  width: 100%;
  padding: 10px 16px;
  background: none;
  border: none;
  text-align: center;
  font-weight: 600;
  color: #334155;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 6px;
  margin: 2px;
}

.language-option:hover {
  background: linear-gradient(135deg, rgba(31, 79, 255, 0.1) 0%, rgba(79, 140, 255, 0.1) 100%);
  color: #1f4fff;
}

.language-option.active {
  color: #1f4fff;
  font-weight: 700;
}

/* Responsive */
@media (max-width: 720px) {
  .container {
    grid-template-columns: 1fr auto;
  }
  .nav {
    display: none; 
  }
  .language-switcher {
    margin-right: 8px;
  }
}
</style>
