<template>
    <section class="section">
        <div class="container">
            <div class="wrap">
                <!-- Left: text + categories -->
                <div class="left">
                    <h2 class="title">Catégories populaires</h2>
                    <p class="subtitle">Explore vite les métiers les plus recherchés.</p>

                    <div class="chips">
                        <NuxtLink v-for="c in categories" :key="c.value" class="chip"
                            :to="`/jobs?role=${encodeURIComponent(c.value)}`">
                            <span class="dot" />
                            <span class="label">{{ c.label }}</span>
                            <span class="arrow">→</span>
                        </NuxtLink>
                    </div>
                    <p class="note">
                        Des opportunités santé mises à jour chaque jour cherche par métier, ville, contrat,
                        <span class="highlight">et postule vite</span>
                    </p>

                </div>

                <!-- Right: image -->
                <div class="right">
                    <div class="imageCard">
                        <img class="image" :src="imageSrc" alt="Professionnels de santé" />
                        <div class="imageOverlay" aria-hidden="true" />

                        <div class="imageBadge">
                            <span class="badgeDot" />
                            Santé • Belgique • Opportunités
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
type Category = { label: string; value: string }

const categories: Category[] = [
    { label: "Infirmier(ère)", value: "infirmier" },
    { label: "Aide-soignant(e)", value: "aide-soignant" },
    { label: "Médecin", value: "medecin" },
    { label: "Kinésithérapeute", value: "kinesitherapeute" },
    { label: "Pharmacien(ne)", value: "pharmacien" },
    { label: "Psychologue", value: "psychologue" },
    { label: "Sage-femme", value: "sage-femme" },
    { label: "Technicien(ne) de labo", value: "technicien-labo" },
]

const imageSrc = "/aide-chirurg.jpg"
</script>

<style scoped>
.section {
    padding: 42px 0 54px 0;
    background:
        radial-gradient(900px 420px at 10% 15%, rgba(37, 99, 235, 0.08), transparent 60%),
        radial-gradient(700px 340px at 90% 0%, rgba(37, 99, 235, 0.06), transparent 55%),
        #ffffff;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 16px;
}

.wrap {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 18px;
    align-items: stretch;
}

.left {
    padding: 4px 0;
}

.title {
    margin: 0;
    font-size: 28px;
    letter-spacing: -0.02em;
    color: #0f172a;
}

.subtitle {
    margin: 6px 0 16px 0;
    color: rgba(15, 23, 42, 0.66);
    font-size: 16px;
    line-height: 1.5;
}

.chips {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

/* chips premium */
.chip {
    display: inline-flex;
    align-items: center;
    gap: 10px;

    padding: 12px 14px;
    border-radius: 999px;

    text-decoration: none;
    font-weight: 800;
    font-size: 15px;
    color: rgba(15, 23, 42, 0.86);

    background: rgba(255, 255, 255, 0.72);
    border: 1px solid rgba(15, 23, 42, 0.10);
    box-shadow: 0 14px 34px rgba(2, 6, 23, 0.06);

    transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease, background 180ms ease;
}

.dot {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: linear-gradient(135deg, #2563eb, #2f6bff);
    box-shadow: 0 10px 22px rgba(37, 99, 235, 0.22);
}

.arrow {
    color: rgba(37, 99, 235, 0.95);
    opacity: 0.9;
    transition: transform 180ms ease, opacity 180ms ease;
}

.chip:hover {
    transform: translateY(-1px);
    box-shadow: 0 20px 52px rgba(2, 6, 23, 0.10);
    border-color: rgba(37, 99, 235, 0.22);
    background: rgba(37, 99, 235, 0.06);
}

.chip:hover .arrow {
    transform: translateX(2px);
    opacity: 1;
}

.chip:focus-visible {
    outline: 3px solid rgba(37, 99, 235, 0.30);
    outline-offset: 4px;
}

/* Right image */
.right {
    display: flex;
    align-items: stretch;
}

.imageCard {
    position: relative;
    width: 100%;
    border-radius: 18px;
    overflow: hidden;

    border: 1px solid rgba(15, 23, 42, 0.10);
    box-shadow: 0 24px 70px rgba(2, 6, 23, 0.12);
    background: rgba(255, 255, 255, 0.35);
}

.image {
    width: 100%;
    height: 100%;
    min-height: 220px;
    object-fit: cover;
    object-position: center;
    transform: scale(1.02);
}

/* overlay tech bleu + lisibilité */
.imageOverlay {
    position: absolute;
    inset: 0;
    background:
        radial-gradient(700px 320px at 30% 20%, rgba(37, 99, 235, 0.20), transparent 55%),
        linear-gradient(135deg, rgba(15, 23, 42, 0.10), rgba(15, 23, 42, 0.00) 55%);
    pointer-events: none;
}

/* badge sur image */
.imageBadge {
    position: absolute;
    left: 14px;
    bottom: 14px;
    display: inline-flex;
    align-items: center;
    gap: 10px;

    padding: 10px 12px;
    border-radius: 999px;

    background: rgba(255, 255, 255, 0.22);
    border: 1px solid rgba(255, 255, 255, 0.30);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);

    color: rgba(255, 255, 255, 0.92);
    font-weight: 800;
    font-size: 12px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

.badgeDot {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: #2563eb;
    box-shadow: 0 10px 22px rgba(37, 99, 235, 0.35);
}

.note {
    margin: 16px 0 0 0;
    font-size: 44px;
    line-height: 1.6;
    font-weight: 750;
    color: rgba(15, 23, 42, 0.70);
    max-width: 520px;
}

.highlight {
    display: inline-block;
    padding: 6px 10px;
    border-radius: 12px;
    margin-left: 6px;

    color: #fff;
    background: linear-gradient(135deg, #2563eb, #2f6bff);
    box-shadow: 0 14px 34px rgba(37, 99, 235, 0.24);
}


/* Responsive */
@media (max-width: 900px) {
    .wrap {
        grid-template-columns: 1fr;
    }

    .image {
        min-height: 260px;
    }
}

@media (max-width: 520px) {
    .chip {
        width: 100%;
        justify-content: space-between;
    }
}
</style>
