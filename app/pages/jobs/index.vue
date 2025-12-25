<template>
    <section class="page">
        <div class="container">
            <div class="headerRow">
                <div>
                    <h1 class="h1">Offres santé</h1>
                    <p class="sub">Filtre, trie, et trouve rapidement les offres qui te correspondent.</p>
                </div>

                <div class="sortWrap">
                    <label class="sortLabel">Trier</label>
                    <select class="sort" v-model="filters.sort">
                        <option value="recent">Plus récentes</option>
                        <option value="salary_desc">Salaire (haut → bas)</option>
                        <option value="salary_asc">Salaire (bas → haut)</option>
                    </select>
                </div>
            </div>

            <div class="grid">
                <JobsJobFilters v-model="filters" :roles="roles" :cities="cities" :contracts="contracts"
                    :schedules="schedules" @reset="reset" />

                <div class="list">
                    <div class="countRow">
                        <p class="count">{{ filtered.length }} offre(s)</p>
                        <div class="hint">
                            <span class="hintDot" />
                            Badges : Urgent / Nouveau / Remote
                        </div>
                    </div>

                    <div class="cards">
                        <JobsJobCard v-for="j in filtered" :key="j.id" :job="j" />
                    </div>

                    <div v-if="filtered.length === 0" class="empty">
                        <p class="emptyTitle">Aucun résultat</p>
                        <p class="emptyText">Essaie d’élargir les filtres ou de modifier la recherche.</p>
                        <button class="emptyBtn" type="button" @click="reset">Réinitialiser</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { defaultJobFilters, type JobFilters } from '~/composables/useJobs'

const route = useRoute()
const router = useRouter()
const { jobs, applyFilters } = useJobs()

const filters = ref<JobFilters>(defaultJobFilters())

const roles = computed(() => Array.from(new Set(jobs.value.map(j => j.role))).sort())
const cities = computed(() => Array.from(new Set(jobs.value.map(j => j.location))).sort())
const contracts = computed(() => Array.from(new Set(jobs.value.map(j => j.contract))).sort())
const schedules = computed(() => Array.from(new Set(jobs.value.map(j => j.schedule))).sort())

const filtered = computed(() => applyFilters(jobs.value, filters.value))

function reset() {
    filters.value = defaultJobFilters()
    router.replace({ query: {} })
}

/** Sync URL -> filters (refresh friendly) */
function readQueryToFilters(q: any) {
    const base = defaultJobFilters()
    return {
        ...base,
        q: typeof q.q === 'string' ? q.q : base.q,
        role: typeof q.role === 'string' ? q.role : base.role,
        locality: typeof q.locality === 'string' ? q.locality : base.locality,
        radiusKm: typeof q.radiusKm === 'string' ? Number(q.radiusKm) : base.radiusKm,
        contracts: typeof q.contracts === 'string' ? q.contracts.split(',').filter(Boolean) : base.contracts,
        schedules: typeof q.schedules === 'string' ? q.schedules.split(',').filter(Boolean) : base.schedules,
        provinces: typeof q.provinces === 'string' ? q.provinces.split(',').filter(Boolean) : base.provinces,
        languages: typeof q.languages === 'string' ? q.languages.split(',').filter(Boolean) : base.languages,
        remoteOnly: q.remote === '1',
        urgentOnly: q.urgent === '1',
        salaryMin: typeof q.salaryMin === 'string' && q.salaryMin !== '' ? Number(q.salaryMin) : base.salaryMin,
        sort: (q.sort === 'salary_desc' || q.sort === 'salary_asc' || q.sort === 'recent') ? q.sort : base.sort,
    } as JobFilters
}

function writeFiltersToQuery(f: JobFilters) {
    const q: any = {}
    if (f.q) q.q = f.q
    if (f.role) q.role = f.role
    if (f.locality) q.locality = f.locality
    if (f.radiusKm !== 50) q.radiusKm = String(f.radiusKm)
    if (f.contracts.length) q.contracts = f.contracts.join(',')
    if (f.schedules.length) q.schedules = f.schedules.join(',')
    if (f.provinces.length) q.provinces = f.provinces.join(',')
    if (f.languages.length) q.languages = f.languages.join(',')
    if (f.remoteOnly) q.remote = '1'
    if (f.urgentOnly) q.urgent = '1'
    if (f.salaryMin != null) q.salaryMin = String(f.salaryMin)
    if (f.sort !== 'recent') q.sort = f.sort
    return q
}

watch(
    () => route.query,
    (q) => { filters.value = readQueryToFilters(q) },
    { immediate: true }
)

watch(
    filters,
    (f) => { router.replace({ query: writeFiltersToQuery(f) }) },
    { deep: true }
)
</script>

<style scoped>
.page {
    padding: 26px 0 56px 0;
    background:
        radial-gradient(900px 420px at 15% 0%, rgba(37, 99, 235, .08), transparent 60%),
        radial-gradient(700px 340px at 85% 0%, rgba(37, 99, 235, .05), transparent 55%),
        #ffffff;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 16px;
}

.headerRow {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 16px;
}

.h1 {
    margin: 0;
    font-size: 28px;
    letter-spacing: -0.03em;
    color: #0f172a;
}

.sub {
    margin: 8px 0 0 0;
    color: rgba(15, 23, 42, .66);
    font-weight: 800;
    font-size: 13px;
}

.sortWrap {
    display: flex;
    align-items: center;
    gap: 10px;
}

.sortLabel {
    font-size: 12px;
    font-weight: 900;
    letter-spacing: .10em;
    text-transform: uppercase;
    color: rgba(15, 23, 42, .62);
}

.sort {
    height: 42px;
    border-radius: 12px;
    border: 1px solid rgba(15, 23, 42, .12);
    background: rgba(255, 255, 255, .85);
    padding: 0 12px;
    font-weight: 900;
    color: rgba(15, 23, 42, .85);
}

.grid {
    display: grid;
    grid-template-columns: 360px 1fr;
    gap: 16px;
    align-items: start;
}

.list {
    min-width: 0;
}

.countRow {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin: 6px 0 12px 0;
    flex-wrap: wrap;
}

.count {
    margin: 0;
    font-weight: 950;
    color: #0f172a;
    letter-spacing: -0.02em;
}

.hint {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 850;
    color: rgba(15, 23, 42, .62);
    font-size: 12px;
}

.hintDot {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: linear-gradient(135deg, #2563eb, #2f6bff);
    box-shadow: 0 10px 22px rgba(37, 99, 235, .22);
}

.cards {
    display: grid;
    gap: 12px;
}

.empty {
    margin-top: 14px;
    border-radius: 18px;
    padding: 18px;
    background: rgba(255, 255, 255, .75);
    border: 1px solid rgba(15, 23, 42, .10);
    box-shadow: 0 18px 60px rgba(2, 6, 23, .08);
}

.emptyTitle {
    margin: 0;
    font-weight: 950;
    color: #0f172a;
}

.emptyText {
    margin: 8px 0 14px 0;
    color: rgba(15, 23, 42, .66);
    font-weight: 850;
}

.emptyBtn {
    height: 42px;
    padding: 0 14px;
    border-radius: 12px;
    border: 1px solid rgba(37, 99, 235, .22);
    background: rgba(37, 99, 235, .08);
    font-weight: 950;
    color: rgba(37, 99, 235, .95);
    cursor: pointer;
}

.emptyBtn:hover {
    background: rgba(37, 99, 235, .12);
}

@media (max-width: 980px) {
    .grid {
        grid-template-columns: 1fr;
    }
}
</style>
