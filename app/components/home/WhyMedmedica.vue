<template>
    <section class="section">
        <div class="container">
            <div class="wrap">
                <!-- Left: Image stack -->
                <div class="media">
                    <div class="blob b1" aria-hidden="true"></div>
                    <div class="blob b2" aria-hidden="true"></div>

                    <div class="imageCard">
                        <img class="image" :src="imageSrc" alt="Professionnels de santé" />
                        <div class="imageOverlay" aria-hidden="true"></div>
                    </div>
                </div>

                <!-- Right: Content -->
                <div class="content">
                    <p class="eyebrow">Pourquoi MedMedica</p>
                    <h2 class="title">Travailler dans la santé, plus simplement.</h2>
                    <p class="subtitle">
                        MedMedica centralise les opportunités santé en Belgique et te permet de trouver rapidement
                        les offres qui te correspondent avec une expérience claire, moderne et efficace.
                    </p>

                    <ul class="list">
                        <li class="item">
                            <span class="check" aria-hidden="true">✓</span>
                            <div>
                                <p class="itemTitle">Offres ciblées santé</p>
                                <p class="itemText">Uniquement des métiers et institutions du secteur.</p>
                            </div>
                        </li>

                        <li class="item">
                            <span class="check" aria-hidden="true">✓</span>
                            <div>
                                <p class="itemTitle">Recherche rapide & filtres</p>
                                <p class="itemText">Métier, ville, contrat résultats clairs en quelques secondes.</p>
                            </div>
                        </li>

                        <li class="item">
                            <span class="check" aria-hidden="true">✓</span>
                            <div>
                                <p class="itemTitle">Expérience simple & moderne</p>
                                <p class="itemText">Interface clean, mobile-first, pensée pour aller droit au but.</p>
                            </div>
                        </li>
                    </ul>

                    <div class="actions">
                        <NuxtLink to="/jobs" class="btnPrimary">Découvrir les offres</NuxtLink>
                        <NuxtLink to="/publish" class="btnGhost">Publier une annonce</NuxtLink>
                    </div>

                    <p class="footnote">
                        Mise à jour quotidienne • Belgique • Santé
                        <span class="highlight">100% orienté métier</span>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const imageSrc = "/whymedmedica.jpg"
</script>

<style scoped>
.section {
    padding: 54px 0 62px 0;
    background:
        radial-gradient(900px 420px at 15% 10%, rgba(37, 99, 235, 0.08), transparent 60%),
        radial-gradient(700px 340px at 85% 0%, rgba(37, 99, 235, 0.06), transparent 55%),
        #ffffff;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 16px;
}

.wrap {
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    gap: 22px;
    align-items: center;
}

/* MEDIA (image) */
.media {
    position: relative;
    min-height: 420px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.blob {
    position: absolute;
    border-radius: 26px;
    filter: blur(0px);
    opacity: 0.95;
}

.b1 {
    width: 340px;
    height: 420px;
    left: 10px;
    top: 10px;
    background: linear-gradient(135deg, rgba(255, 200, 80, 0.95), rgba(255, 220, 140, 0.95));
    border-radius: 26px;
}

.b2 {
    width: 360px;
    height: 430px;
    left: 120px;
    top: 70px;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.20), rgba(37, 99, 235, 0.10));
    border-radius: 26px;
}

.imageCard {
    position: relative;
    width: min(360px, 92%);
    height: 440px;
    border-radius: 24px;
    overflow: hidden;

    border: 1px solid rgba(15, 23, 42, 0.12);
    box-shadow: 0 28px 80px rgba(2, 6, 23, 0.18);
    background: rgba(255, 255, 255, 0.35);
    z-index: 2;
}

.image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transform: scale(1.02);
}

/* overlay bleu tech doux */
.imageOverlay {
    position: absolute;
    inset: 0;
    background:
        radial-gradient(800px 380px at 30% 20%, rgba(37, 99, 235, 0.18), transparent 55%),
        linear-gradient(135deg, rgba(15, 23, 42, 0.12), rgba(15, 23, 42, 0.00) 60%);
    pointer-events: none;
}

/* CONTENT */
.content {
    padding: 6px 0;
}

.eyebrow {
    margin: 0 0 10px 0;
    font-weight: 800;
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(37, 99, 235, 0.95);
}

.title {
    margin: 0 0 10px 0;
    font-size: 36px;
    line-height: 1.08;
    letter-spacing: -0.03em;
    color: #0f172a;
}

.subtitle {
    margin: 0 0 18px 0;
    font-size: 15px;
    line-height: 1.65;
    color: rgba(15, 23, 42, 0.70);
    max-width: 560px;
}

/* LIST */
.list {
    list-style: none;
    padding: 0;
    margin: 0 0 18px 0;
    display: grid;
    gap: 12px;
}

.item {
    display: grid;
    grid-template-columns: 36px 1fr;
    gap: 10px;
    align-items: start;

    padding: 14px 14px;
    border-radius: 16px;

    background: rgba(255, 255, 255, 0.70);
    border: 1px solid rgba(15, 23, 42, 0.10);
    box-shadow: 0 18px 50px rgba(2, 6, 23, 0.07);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}

.item:hover {
    transform: translateY(-1px);
    box-shadow: 0 24px 70px rgba(2, 6, 23, 0.10);
    border-color: rgba(37, 99, 235, 0.20);
}

.check {
    width: 32px;
    height: 32px;
    border-radius: 12px;
    display: grid;
    place-items: center;

    font-weight: 900;
    color: #fff;
    background: linear-gradient(135deg, #2563eb, #2f6bff);
    box-shadow: 0 14px 34px rgba(37, 99, 235, 0.24);
}

.itemTitle {
    margin: 0;
    font-weight: 900;
    color: #0f172a;
    font-size: 14px;
    letter-spacing: -0.01em;
}

.itemText {
    margin: 4px 0 0 0;
    font-size: 13px;
    line-height: 1.55;
    color: rgba(15, 23, 42, 0.68);
}

/* ACTIONS */
.actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 10px;
}

.btnPrimary {
    height: 46px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 18px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 900;
    color: #fff;
    background: linear-gradient(135deg, #2563eb, #2f6bff);
    box-shadow: 0 14px 34px rgba(37, 99, 235, 0.26);
    transition: transform 180ms ease, box-shadow 180ms ease, filter 180ms ease;
}

.btnPrimary:hover {
    transform: translateY(-1px);
    box-shadow: 0 18px 44px rgba(37, 99, 235, 0.34);
    filter: saturate(1.05);
}

.btnGhost {
    height: 46px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 18px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 900;

    color: rgba(15, 23, 42, 0.86);
    background: rgba(255, 255, 255, 0.70);
    border: 1px solid rgba(15, 23, 42, 0.12);

    transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;
}

.btnGhost:hover {
    transform: translateY(-1px);
    background: rgba(37, 99, 235, 0.06);
    border-color: rgba(37, 99, 235, 0.22);
}

/* FOOTNOTE highlight */
.footnote {
    margin: 14px 0 0 0;
    font-size: 13px;
    color: rgba(15, 23, 42, 0.62);
    font-weight: 800;
}

.highlight {
    display: inline-block;
    margin-left: 8px;
    padding: 6px 10px;
    border-radius: 12px;
    color: #fff;
    background: linear-gradient(135deg, #2563eb, #2f6bff);
    box-shadow: 0 14px 34px rgba(37, 99, 235, 0.20);
}

/* Responsive */
@media (max-width: 980px) {
    .wrap {
        grid-template-columns: 1fr;
    }

    .media {
        min-height: 380px;
    }

    .imageCard {
        height: 420px;
    }

    .title {
        font-size: 32px;
    }
}

@media (max-width: 520px) {
    .imageCard {
        width: 100%;
        height: 380px;
    }
}
</style>
