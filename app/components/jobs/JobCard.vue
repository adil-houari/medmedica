<template>
    <article class="card">
        <div class="top">
            <div class="badges">
                <span v-if="job.urgent" class="badge urgent">Urgent</span>
                <span v-if="isNew(job.postedAt)" class="badge new">Nouveau</span>
                <span v-if="job.remote" class="badge remote">Remote</span>
            </div>

            <NuxtLink class="title" :to="`/jobs/${job.id}`">{{ job.title }}</NuxtLink>
            <p class="meta">
                <span class="company">{{ job.company }}</span>
                <span class="dot">•</span>
                <span class="loc">{{ job.location }}</span>
            </p>
        </div>

        <div class="mid">
            <div class="pill">{{ job.contract }}</div>
            <div class="pill">{{ job.schedule }}</div>
            <div v-if="salary" class="pill salary">{{ salary }}</div>
        </div>

        <div v-if="job.tags?.length" class="tags">
            <span v-for="t in job.tags" :key="t" class="tag">{{ t }}</span>
        </div>

        <div class="bottom">
            <div class="role">
                <span class="roleDot" />
                {{ job.role }}
            </div>
            <NuxtLink class="cta" :to="`/jobs/${job.id}`">Voir l’offre →</NuxtLink>
        </div>
    </article>
</template>

<script setup lang="ts">
import type { Job } from '~/composables/useJobs'
const props = defineProps<{ job: Job }>()
const { isNew, formatSalary } = useJobs()

const salary = computed(() => formatSalary(props.job.salaryMin, props.job.salaryMax, props.job.currency ?? 'EUR'))
</script>

<style scoped>
.card {
    border-radius: 18px;
    padding: 16px 16px;
    background: rgba(255, 255, 255, .75);
    border: 1px solid rgba(15, 23, 42, .10);
    box-shadow: 0 18px 60px rgba(2, 6, 23, .08);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}

.card:hover {
    transform: translateY(-2px);
    box-shadow: 0 26px 85px rgba(2, 6, 23, .12);
    border-color: rgba(37, 99, 235, .20);
}

.badges {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 10px;
}

.badge {
    font-size: 12px;
    font-weight: 900;
    padding: 6px 10px;
    border-radius: 999px;
    border: 1px solid rgba(15, 23, 42, .10);
    color: rgba(15, 23, 42, .82);
    background: rgba(255, 255, 255, .65);
}

.badge.urgent {
    color: #fff;
    border-color: transparent;
    background: linear-gradient(135deg, #ff3b3b, #ff7a3b);
    box-shadow: 0 14px 34px rgba(255, 59, 59, .18);
}

.badge.new {
    color: #fff;
    border-color: transparent;
    background: linear-gradient(135deg, #2563eb, #2f6bff);
    box-shadow: 0 14px 34px rgba(37, 99, 235, .20);
}

.badge.remote {
    color: #0f172a;
    background: rgba(37, 99, 235, .10);
    border-color: rgba(37, 99, 235, .18);
}

.title {
    display: inline-block;
    text-decoration: none;
    color: #0f172a;
    font-weight: 950;
    letter-spacing: -0.02em;
    font-size: 16px;
    line-height: 1.25;
    margin-bottom: 6px;
}

.title:hover {
    color: #0b2f9d;
}

.meta {
    margin: 0;
    color: rgba(15, 23, 42, .62);
    font-weight: 800;
    font-size: 13px;
}

.dot {
    opacity: .55;
    margin: 0 8px;
}

.mid {
    margin-top: 12px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.pill {
    font-size: 12px;
    font-weight: 900;
    padding: 8px 10px;
    border-radius: 999px;
    background: rgba(15, 23, 42, .04);
    border: 1px solid rgba(15, 23, 42, .08);
    color: rgba(15, 23, 42, .82);
}

.salary {
    background: rgba(37, 99, 235, .08);
    border-color: rgba(37, 99, 235, .18);
}

.tags {
    margin-top: 12px;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.tag {
    font-size: 12px;
    font-weight: 850;
    padding: 7px 10px;
    border-radius: 12px;
    background: rgba(255, 255, 255, .60);
    border: 1px solid rgba(15, 23, 42, .10);
    color: rgba(15, 23, 42, .72);
}

.bottom {
    margin-top: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
}

.role {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 900;
    color: rgba(15, 23, 42, .78);
    font-size: 13px;
}

.roleDot {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: linear-gradient(135deg, #2563eb, #2f6bff);
    box-shadow: 0 10px 22px rgba(37, 99, 235, .22);
}

.cta {
    text-decoration: none;
    font-weight: 950;
    color: rgba(37, 99, 235, .95);
}

.cta:hover {
    color: #0b2f9d;
}
</style>
