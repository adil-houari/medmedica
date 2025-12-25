<template>
    <section class="section">
        <div class="container">
            <div class="card">
                <!-- Left -->
                <div class="content">
                    <p class="eyebrow">Institutions & recruteurs</p>

                    <h2 class="title">
                        Publiez une annonce santé et recrutez
                        <span class="titleHighlight">plus rapidement</span>
                    </h2>

                    <p class="subtitle">
                        Hôpitaux, maisons de repos, cliniques, cabinets — diffusez vos offres sur une plateforme
                        dédiée à la santé, pensée pour des résultats clairs.
                    </p>

                    <ul class="list">
                        <li class="item">
                            <span class="icon" aria-hidden="true">✓</span>
                            <div>
                                <p class="itemTitle">Publication simple</p>
                                <p class="itemText">Une annonce prête en quelques minutes.</p>
                            </div>
                        </li>
                        <li class="item">
                            <span class="icon" aria-hidden="true">✓</span>
                            <div>
                                <p class="itemTitle">Ciblage santé</p>
                                <p class="itemText">Atteignez des profils du secteur, plus facilement.</p>
                            </div>
                        </li>
                        <li class="item">
                            <span class="icon" aria-hidden="true">✓</span>
                            <div>
                                <p class="itemTitle">Offre mise en avant</p>
                                <p class="itemText">Boost possible (plus tard) + visibilité premium.</p>
                            </div>
                        </li>
                    </ul>

                    <div class="actions">
                        <NuxtLink to="/publish" class="btnPrimary">Publier une annonce</NuxtLink>
                        <NuxtLink to="/contact" class="btnGhost">Parler à l’équipe</NuxtLink>
                    </div>

                    <p class="footnote">
                        Recrutement santé • Belgique
                        <span class="highlight">Plateforme spécialisée</span>
                    </p>
                </div>

                <!-- Right -->
                <div class="media">
                    <div class="mediaCard">
                        <img class="image" :src="imageSrc" alt="Recruteur sur ordinateur" />
                        <div class="overlay" aria-hidden="true"></div>

                        <div class="badge">
                            <span class="badgeDot" />
                            Publier • Gérer • Recruter
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const imageSrc = "/homerecruitercta.jpg" 
</script>

<style scoped>
.section {
    padding: 56px 0 68px 0;
    background:
        radial-gradient(900px 420px at 20% 15%, rgba(37, 99, 235, 0.08), transparent 60%),
        radial-gradient(700px 340px at 90% 10%, rgba(37, 99, 235, 0.06), transparent 55%),
        #ffffff;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 16px;
}

.card {
    position: relative;
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 18px;
    align-items: stretch;

    border-radius: 22px;
    padding: 18px;
    background: rgba(255, 255, 255, 0.72);
    border: 1px solid rgba(15, 23, 42, 0.10);
    box-shadow: 0 28px 90px rgba(2, 6, 23, 0.10);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
}

/* subtle glow */
.card::before {
    content: "";
    position: absolute;
    inset: -2px;
    background: radial-gradient(900px 380px at 20% 10%, rgba(37, 99, 235, 0.14), transparent 60%);
    pointer-events: none;
    z-index: 0;
}

.content,
.media {
    position: relative;
    z-index: 1;
}

.content {
    padding: 10px 8px 10px 8px;
}

.eyebrow {
    margin: 0 0 10px 0;
    font-weight: 900;
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(37, 99, 235, 0.95);
}

.title {
    margin: 0 0 10px 0;
    font-size: 34px;
    line-height: 1.08;
    letter-spacing: -0.03em;
    color: #0f172a;
}

.titleHighlight {
    display: inline-block;
    margin-left: 8px;
    padding: 6px 10px;
    border-radius: 14px;
    color: #fff;
    background: linear-gradient(135deg, #2563eb, #2f6bff);
    box-shadow: 0 14px 34px rgba(37, 99, 235, 0.22);
}

.subtitle {
    margin: 0 0 16px 0;
    font-size: 15px;
    line-height: 1.65;
    color: rgba(15, 23, 42, 0.70);
    max-width: 620px;
}

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

    background: rgba(255, 255, 255, 0.72);
    border: 1px solid rgba(15, 23, 42, 0.10);
    box-shadow: 0 18px 50px rgba(2, 6, 23, 0.07);

    transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}

.item:hover {
    transform: translateY(-1px);
    box-shadow: 0 24px 70px rgba(2, 6, 23, 0.10);
    border-color: rgba(37, 99, 235, 0.20);
}

.icon {
    width: 32px;
    height: 32px;
    border-radius: 12px;
    display: grid;
    place-items: center;
    font-weight: 900;
    color: #fff;
    background: linear-gradient(135deg, #2563eb, #2f6bff);
    box-shadow: 0 14px 34px rgba(37, 99, 235, 0.20);
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
    background: rgba(255, 255, 255, 0.72);
    border: 1px solid rgba(15, 23, 42, 0.12);

    transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;
}

.btnGhost:hover {
    transform: translateY(-1px);
    background: rgba(37, 99, 235, 0.06);
    border-color: rgba(37, 99, 235, 0.22);
}

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

/* MEDIA */
.media {
    display: flex;
    align-items: stretch;
}

.mediaCard {
    position: relative;
    width: 100%;
    border-radius: 18px;
    overflow: hidden;
    border: 1px solid rgba(15, 23, 42, 0.10);
    box-shadow: 0 24px 70px rgba(2, 6, 23, 0.14);
    background: rgba(255, 255, 255, 0.35);
}

.image {
    width: 100%;
    height: 100%;
    min-height: 360px;
    object-fit: cover;
    object-position: center;
    transform: scale(1.02);
}

.overlay {
    position: absolute;
    inset: 0;
    background:
        radial-gradient(800px 380px at 30% 20%, rgba(37, 99, 235, 0.18), transparent 55%),
        linear-gradient(135deg, rgba(15, 23, 42, 0.12), rgba(15, 23, 42, 0.00) 60%);
    pointer-events: none;
}

.badge {
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
    font-weight: 900;
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

/* Responsive */
@media (max-width: 980px) {
    .card {
        grid-template-columns: 1fr;
    }

    .image {
        min-height: 280px;
    }

    .title {
        font-size: 30px;
    }
}
</style>
