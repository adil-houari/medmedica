<template>
    <section class="section">
        <div class="container">
            <div class="top">
                <div>
                    <h2 class="title">Offres récentes</h2>
                    <p class="subtitle">Les dernières opportunités publiées sur MedMedica.</p>
                </div>

                <NuxtLink to="/jobs" class="linkTop">
                    Voir toutes les offres →
                </NuxtLink>
            </div>

            <div class="grid">
                <article v-for="job in jobs" :key="job.id" class="card">
                    <div class="cardTop">
                        <div class="badges">
                            <span v-if="job.urgent" class="badge urgent">Urgent</span>
                            <span class="badge type">{{ job.typeLabel }}</span>
                        </div>

                        <div class="metaRight">
                            <span class="time">{{ job.posted }}</span>
                        </div>
                    </div>

                    <h3 class="jobTitle">{{ job.title }}</h3>

                    <p class="company">
                        <span class="dot" />
                        {{ job.company }}
                    </p>

                    <div class="details">
                        <span class="pill">{{ job.location }}</span>
                        <span v-if="job.salary" class="pill">{{ job.salary }}</span>
                    </div>

                    <div class="cardBottom">
                        <NuxtLink :to="`/jobs/${job.id}`" class="cta">
                            Voir l’offre
                        </NuxtLink>

                        <button class="ghost" type="button" @click="save(job.id)">
                            Enregistrer
                        </button>
                    </div>
                </article>
            </div>

            <div class="bottom">
                <NuxtLink to="/jobs" class="btnPrimary">
                    Voir plus d’offres
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
type JobCard = {
    id: string
    title: string
    company: string
    location: string
    typeLabel: string
    salary?: string
    urgent?: boolean
    posted: string
}

const jobs: JobCard[] = [
    {
        id: "1001",
        title: "Infirmier(ère) — Service Urgences",
        company: "Hôpital Saint-Charles",
        location: "Bruxelles",
        typeLabel: "Temps plein",
        salary: "€3.2k–€4.1k/mois",
        urgent: true,
        posted: "Publié il y a 2h",
    },
    {
        id: "1002",
        title: "Aide-soignant(e) — Maison de repos",
        company: "Résidence Les Amandiers",
        location: "Uccle",
        typeLabel: "Temps partiel",
        posted: "Publié hier",
    },
    {
        id: "1003",
        title: "Médecin Généraliste (H/F)",
        company: "Centre Médical NovaCare",
        location: "Anvers",
        typeLabel: "Indépendant",
        salary: "Rétrocession attractive",
        posted: "Publié il y a 3j",
    },
    {
        id: "1004",
        title: "Kinésithérapeute — Rééducation",
        company: "Clinique Horizon",
        location: "Liège",
        typeLabel: "Temps plein",
        posted: "Publié il y a 5j",
    },
]

function save(id: string) {
    console.log("saved job", id)
}
</script>

<style scoped>
.section {
    padding: 46px 0 58px 0;
    background:
        radial-gradient(900px 420px at 20% 10%, rgba(37, 99, 235, 0.08), transparent 60%),
        radial-gradient(700px 340px at 90% 20%, rgba(37, 99, 235, 0.06), transparent 55%),
        #ffffff;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 16px;
}

.top {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 14px;
    margin-bottom: 18px;
}

.title {
    margin: 0;
    font-size: 26px;
    letter-spacing: -0.02em;
    color: #0f172a;
}

.subtitle {
    margin: 6px 0 0 0;
    color: rgba(15, 23, 42, 0.66);
    font-size: 14px;
    line-height: 1.5;
}

.linkTop {
    text-decoration: none;
    font-weight: 700;
    color: #2563eb;
    padding: 8px 10px;
    border-radius: 10px;
    transition: background 180ms ease, transform 180ms ease;
}

.linkTop:hover {
    background: rgba(37, 99, 235, 0.08);
    transform: translateY(-1px);
}

.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
}

.card {
    border-radius: 16px;
    padding: 14px 14px 12px 14px;
    background: rgba(255, 255, 255, 0.72);
    border: 1px solid rgba(15, 23, 42, 0.10);
    box-shadow: 0 18px 50px rgba(2, 6, 23, 0.08);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
    min-height: 210px;
    display: flex;
    flex-direction: column;
}

.card:hover {
    transform: translateY(-2px);
    box-shadow: 0 24px 70px rgba(2, 6, 23, 0.12);
    border-color: rgba(37, 99, 235, 0.22);
}

.cardTop {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 10px;
}

.badges {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.badge {
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 6px 10px;
    border-radius: 999px;
    border: 1px solid rgba(15, 23, 42, 0.10);
    background: rgba(255, 255, 255, 0.65);
    color: rgba(15, 23, 42, 0.80);
}

.badge.urgent {
    border-color: rgba(255, 59, 48, 0.24);
    background: rgba(255, 59, 48, 0.10);
    color: rgba(180, 0, 0, 0.92);
}

.badge.type {
    border-color: rgba(37, 99, 235, 0.20);
    background: rgba(37, 99, 235, 0.10);
    color: rgba(37, 99, 235, 0.95);
}

.time {
    font-size: 12px;
    color: rgba(15, 23, 42, 0.55);
    font-weight: 700;
}

.jobTitle {
    margin: 0 0 8px 0;
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.01em;
    color: #0f172a;
}

.company {
    margin: 0 0 10px 0;
    font-size: 13px;
    color: rgba(15, 23, 42, 0.70);
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: linear-gradient(135deg, #2563eb, #2f6bff);
    box-shadow: 0 10px 20px rgba(37, 99, 235, 0.25);
}

.details {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: auto;
    margin-bottom: 12px;
}

.pill {
    font-size: 12px;
    padding: 7px 10px;
    border-radius: 999px;
    border: 1px solid rgba(15, 23, 42, 0.10);
    background: rgba(255, 255, 255, 0.65);
    color: rgba(15, 23, 42, 0.72);
}

.cardBottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
}

.cta {
    text-decoration: none;
    font-weight: 800;
    color: #0f172a;
    padding: 8px 10px;
    border-radius: 12px;
    transition: background 180ms ease, transform 180ms ease;
}

.cta:hover {
    background: rgba(15, 23, 42, 0.06);
    transform: translateY(-1px);
}

.ghost {
    border: 1px solid rgba(15, 23, 42, 0.14);
    background: rgba(255, 255, 255, 0.40);
    border-radius: 12px;
    padding: 8px 10px;
    font-weight: 800;
    cursor: pointer;
    transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;
    color: rgba(15, 23, 42, 0.78);
}

.ghost:hover {
    transform: translateY(-1px);
    background: rgba(37, 99, 235, 0.08);
    border-color: rgba(37, 99, 235, 0.22);
}

.bottom {
    display: flex;
    justify-content: center;
    margin-top: 18px;
}

.btnPrimary {
    height: 46px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 18px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 800;
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

@media (max-width: 1020px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 560px) {
    .top {
        align-items: flex-start;
        flex-direction: column;
    }

    .grid {
        grid-template-columns: 1fr;
    }
}
</style>
