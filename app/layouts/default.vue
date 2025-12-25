<template>
  <div class="shell">
    <LayoutAppHeader />

    <main class="main">
      <slot />
    </main>
    <LayoutAppFooter />

  </div>
</template>

<style scoped>
.shell { min-height: 100vh; display: flex; flex-direction: column; }
.main { flex: 1; }
</style>
  