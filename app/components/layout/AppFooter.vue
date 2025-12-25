<template>
    <footer class="footer">
        <div class="container">
            <div class="top">
                <!-- Brand -->
                <div class="brand">
                    <NuxtLink to="/" class="brandLink" aria-label="MedMedica - Accueil">
                        <img v-if="logoSrc" :src="logoSrc" alt="MedMedica" class="logo" />
                        <span v-else class="brandText">MedMedica</span>
                    </NuxtLink>

                    <p class="tagline">
                        La plateforme jobs dédiée à la santé en Belgique.
                        <span class="highlight">Simple, rapide, spécialisée.</span>
                    </p>

                    <div class="social">
                        <a class="socialBtn" href="#" aria-label="LinkedIn">in</a>
                        <a class="socialBtn" href="#" aria-label="X / Twitter">𝕏</a>
                        <a class="socialBtn" href="#" aria-label="Instagram">⌁</a>
                    </div>
                </div>

                <!-- Links -->
                <div class="cols">
                    <div class="col">
                        <p class="colTitle">Explorer</p>
                        <NuxtLink to="/jobs" class="link">Offres</NuxtLink>
                        <NuxtLink to="/categories" class="link">Catégories</NuxtLink>
                        <NuxtLink to="/about" class="link">À propos</NuxtLink>
                    </div>

                    <div class="col">
                        <p class="colTitle">Recruteurs</p>
                        <NuxtLink to="/publish" class="link">Publier une annonce</NuxtLink>
                        <NuxtLink to="/pricing" class="link">Tarifs</NuxtLink>
                        <NuxtLink to="/contact" class="link">Contact</NuxtLink>
                    </div>

                    <div class="col">
                        <p class="colTitle">Légal</p>
                        <NuxtLink to="/privacy" class="link">Confidentialité</NuxtLink>
                        <NuxtLink to="/terms" class="link">Conditions</NuxtLink>
                        <NuxtLink to="/cookies" class="link">Cookies</NuxtLink>
                    </div>
                </div>

                <!-- CTA -->
                <div class="cta">
                    <div class="ctaCard">
                        <p class="ctaTitle">Vous recrutez dans la santé ?</p>
                        <p class="ctaText">
                            Publiez une annonce et gagnez en visibilité auprès de profils qualifiés.
                        </p>
                        <NuxtLink to="/publish" class="ctaBtn">Publier une annonce</NuxtLink>
                    </div>
                </div>
            </div>

            <div class="bottom">
                <p class="copy">© {{ year }} MedMedica. Tous droits réservés.</p>
                <div class="bottomLinks">
                    <NuxtLink to="/contact" class="miniLink">Support</NuxtLink>
                    <span class="dot">•</span>
                    <NuxtLink to="/privacy" class="miniLink">Privacy</NuxtLink>
                    <span class="dot">•</span>
                    <NuxtLink to="/terms" class="miniLink">Terms</NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
const logoSrc = "/logomedic3.png" // change si besoin
</script>

<style scoped>
.footer {
    margin-top: 40px;
    background:
        radial-gradient(900px 420px at 15% 0%, rgba(37, 99, 235, 0.10), transparent 60%),
        radial-gradient(700px 340px at 90% 0%, rgba(37, 99, 235, 0.06), transparent 55%),
        #0b1220;
    color: rgba(255, 255, 255, 0.82);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 34px 16px 18px 16px;
}

.top {
    display: grid;
    grid-template-columns: 1.1fr 1.2fr 0.9fr;
    gap: 18px;
    align-items: start;
}

/* Brand */
.brandLink {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: #fff;
}

.logo {
    height: 38px;
    width: auto;
    display: block;
    filter: drop-shadow(0 12px 26px rgba(0, 0, 0, 0.35));
}

.brandText {
    font-size: 20px;
    font-weight: 900;
    letter-spacing: -0.02em;
}

.tagline {
    margin: 12px 0 14px 0;
    color: rgba(255, 255, 255, 0.72);
    font-size: 14px;
    line-height: 1.6;
    max-width: 340px;
}

.highlight {
    display: inline-block;
    margin-left: 6px;
    padding: 5px 10px;
    border-radius: 999px;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.95), rgba(47, 107, 255, 0.95));
    color: #fff;
    box-shadow: 0 16px 40px rgba(37, 99, 235, 0.22);
}

/* Social */
.social {
    display: flex;
    gap: 10px;
}

.socialBtn {
    width: 38px;
    height: 38px;
    border-radius: 12px;
    display: grid;
    place-items: center;
    text-decoration: none;
    font-weight: 900;
    color: rgba(255, 255, 255, 0.92);
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.10);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;
}

.socialBtn:hover {
    transform: translateY(-1px);
    background: rgba(37, 99, 235, 0.16);
    border-color: rgba(37, 99, 235, 0.26);
}

/* Links */
.cols {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
}

.colTitle {
    margin: 0 0 10px 0;
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.70);
    font-weight: 900;
}

.link {
    display: block;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.78);
    font-weight: 800;
    font-size: 13px;
    padding: 8px 0;
    transition: color 180ms ease, transform 180ms ease;
}

.link:hover {
    color: #fff;
    transform: translateX(2px);
}

/* CTA card */
.ctaCard {
    border-radius: 18px;
    padding: 16px 16px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.10);
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.30);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
}

.ctaTitle {
    margin: 0 0 8px 0;
    font-size: 15px;
    font-weight: 900;
    color: #fff;
    letter-spacing: -0.01em;
}

.ctaText {
    margin: 0 0 14px 0;
    font-size: 13px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.72);
}

.ctaBtn {
    display: inline-flex;
    height: 42px;
    align-items: center;
    justify-content: center;
    padding: 0 14px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 900;
    color: #fff;
    background: linear-gradient(135deg, #2563eb, #2f6bff);
    box-shadow: 0 18px 48px rgba(37, 99, 235, 0.26);
    transition: transform 180ms ease, box-shadow 180ms ease, filter 180ms ease;
}

.ctaBtn:hover {
    transform: translateY(-1px);
    box-shadow: 0 22px 58px rgba(37, 99, 235, 0.34);
    filter: saturate(1.05);
}

/* Bottom */
.bottom {
    margin-top: 22px;
    padding-top: 14px;
    border-top: 1px solid rgba(255, 255, 255, 0.10);

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
}

.copy {
    margin: 0;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.65);
    font-weight: 800;
}

.bottomLinks {
    display: inline-flex;
    align-items: center;
    gap: 10px;
}

.miniLink {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.70);
    font-weight: 800;
    font-size: 12px;
}

.miniLink:hover {
    color: #fff;
}

.dot {
    opacity: 0.5;
}

/* Responsive */
@media (max-width: 980px) {
    .top {
        grid-template-columns: 1fr;
    }

    .cols {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 520px) {
    .cols {
        grid-template-columns: 1fr;
    }
}
</style>
