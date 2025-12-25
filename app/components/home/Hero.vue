<template>
    <section class="hero" :style="heroBgStyle">
        <div class="container">
            <div class="panel">
                <p class="eyebrow">MedMedica • Emploi santé</p>

                <h1 class="title">
                    Trouve ton prochain job dans la santé
                </h1>

                <p class="subtitle">
                    Hôpitaux, maisons de repos, cliniques et soins à domicile en Belgique.
                </p>

                <form class="search" @submit.prevent="onSearch">
                    <label class="field">
                        <span class="label">Métier</span>
                        <input v-model.trim="form.role" class="input" type="text"
                            placeholder="Infirmier(ère), aide-soignant(e), médecin…" autocomplete="off" />
                    </label>

                    <label class="field">
                        <span class="label">Ville / Région</span>
                        <input v-model.trim="form.location" class="input" type="text"
                            placeholder="Bruxelles, Anvers, Liège…" autocomplete="off" />
                    </label>

                    <label class="field">
                        <span class="label">Type</span>
                        <select v-model="form.type" class="input">
                            <option value="">Peu importe</option>
                            <option value="full-time">Temps plein</option>
                            <option value="part-time">Temps partiel</option>
                            <option value="freelance">Indépendant</option>
                            <option value="internship">Stage</option>
                        </select>
                    </label>

                    <button class="btn" type="submit">
                        Rechercher
                    </button>

                    <p class="hint">
                        Ex: “Infirmier” + “Bruxelles” + “Temps plein”
                    </p>
                </form>
            </div>
        </div>

        <!-- overlay léger pour garder la lisibilité -->
        <div class="overlay" aria-hidden="true" />
    </section>
</template>

<script setup lang="ts">
const heroImage = "/hero2.jpg" // mets ton image dans /public/hero.jpg

const form = reactive({
    role: "",
    location: "",
    type: "",
})

const heroBgStyle = computed(() => ({
    backgroundImage: `url(${heroImage})`,
}))

function onSearch() {
    // Pour l’instant on log. Plus tard -> navigateTo('/jobs?...')
    console.log("search:", { ...form })
}
</script>

<style scoped>
.hero {
    position: relative;
    min-height: 660px;
    display: flex;
    align-items: center;
    overflow: hidden;

    /* image en fond, focalisée à droite pour voir les femmes */
    background-size: cover;
    background-position: right center;
    background-repeat: no-repeat;
}

/* Overlay global très léger */
.overlay {
    position: absolute;
    inset: 0;
    background: radial-gradient(900px 420px at 18% 45%,
            rgba(255, 255, 255, 0.72),
            rgba(255, 255, 255, 0.08)),
        linear-gradient(90deg,
            rgba(255, 255, 255, 0.55) 0%,
            rgba(255, 255, 255, 0.18) 45%,
            rgba(255, 255, 255, 0.0) 70%);
    pointer-events: none;
}

.container {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 28px 16px;
}

/* bloc gauche "glass" */
.panel {
    width: min(520px, 100%);
    padding: 22px 22px 18px 22px;
    border-radius: 18px;

    background: rgba(255, 255, 255, 0.18);
    border: 1px solid rgba(15, 23, 42, 0.10);
    box-shadow: 0 18px 50px rgba(2, 6, 23, 0.18);

    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
}

.eyebrow {
    margin: 0 0 10px 0;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(15, 23, 42, 0.72);
}

.title {
    margin: 0 0 10px 0;
    font-size: 40px;
    line-height: 1.08;
    letter-spacing: -0.02em;
    color: #0f172a;
}

.subtitle {
    margin: 0 0 18px 0;
    font-size: 15px;
    line-height: 1.55;
    color: rgba(15, 23, 42, 0.72);
}

.search {
    display: grid;
    gap: 12px;
}

.field {
    display: grid;
    gap: 6px;
}

.label {
    font-size: 12px;
    font-weight: 700;
    color: rgba(15, 23, 42, 0.72);
}

.input {
    height: 44px;
    border-radius: 12px;
    padding: 0 12px;
    font-size: 14px;

    background: rgba(255, 255, 255, 0.62);
    border: 1px solid rgba(15, 23, 42, 0.12);
    outline: none;

    transition: border-color 180ms ease, box-shadow 180ms ease, background 180ms ease;
}

.input:focus {
    border-color: rgba(37, 99, 235, 0.65);
    /* ton bleu */
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.16);
    background: rgba(255, 255, 255, 0.78);
}

.btn {
    height: 46px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 14px;

    color: #fff;
    background: linear-gradient(135deg, #2563eb, #2f6bff);
    box-shadow: 0 14px 34px rgba(37, 99, 235, 0.26);

    transition: transform 180ms ease, box-shadow 180ms ease, filter 180ms ease;
}

.btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 18px 44px rgba(37, 99, 235, 0.34);
    filter: saturate(1.05);
}

.btn:active {
    transform: translateY(0);
}

.btn:focus-visible {
    outline: 3px solid rgba(37, 99, 235, 0.35);
    outline-offset: 4px;
}

.hint {
    margin: 2px 0 0 0;
    font-size: 12px;
    color: rgba(15, 23, 42, 0.58);
}

/* Responsive */
@media (max-width: 840px) {
    .hero {
        min-height: 620px;
        background-position: 70% center;
    }

    .title {
        font-size: 34px;
    }
}

@media (max-width: 520px) {
    .panel {
        padding: 18px 16px 14px 16px;
        border-radius: 16px;
    }

    .title {
        font-size: 30px;
    }
}
</style>
