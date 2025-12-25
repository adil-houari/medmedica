<template>
    <aside class="panel">
        <div class="panelHead">
            <p class="title">Filtres</p>
            <button class="reset" type="button" @click="$emit('reset')">Réinitialiser</button>
        </div>

        <div class="section">
            <p class="label">Contrat</p>
            <div class="chips">
                <button v-for="c in contracts" :key="c" class="chip" :class="{ active: modelValue.contract === c }"
                    type="button" @click="toggle('contract', c)">
                    {{ c }}
                </button>
            </div>
        </div>

        <div class="section">
            <p class="label">Horaire</p>
            <div class="chips">
                <button v-for="s in schedules" :key="s" class="chip" :class="{ active: modelValue.schedule === s }"
                    type="button" @click="toggle('schedule', s)">
                    {{ s }}
                </button>
            </div>
        </div>

        <div class="section">
            <p class="label">Options</p>

            <label class="check">
                <input type="checkbox" :checked="modelValue.urgentOnly"
                    @change="set('urgentOnly', ($event.target as HTMLInputElement).checked)" />
                <span>Urgent uniquement</span>
            </label>

            <label class="check">
                <input type="checkbox" :checked="modelValue.remoteOnly"
                    @change="set('remoteOnly', ($event.target as HTMLInputElement).checked)" />
                <span>Remote uniquement</span>
            </label>
        </div>

        <div class="section">
            <p class="label">Salaire minimum (€ / mois)</p>
            <input class="input" type="number" min="0" :value="modelValue.salaryMin ?? ''"
                @input="set('salaryMin', toNumberOrNull(($event.target as HTMLInputElement).value))"
                placeholder="ex: 2500" />
        </div>
    </aside>
</template>

<script setup lang="ts">
import type { JobFilters } from '~/composables/useJobs'

const props = defineProps<{
    modelValue: JobFilters
    contracts: string[]
    schedules: string[]
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', v: JobFilters): void
    (e: 'reset'): void
}>()

function set<K extends keyof JobFilters>(key: K, value: JobFilters[K]) {
    emit('update:modelValue', { ...props.modelValue, [key]: value })
}

function toggle<K extends 'contract' | 'schedule'>(key: K, value: string) {
    set(key, props.modelValue[key] === value ? '' : (value as any))
}

function toNumberOrNull(v: string) {
    const n = Number(v)
    return Number.isFinite(n) && v !== '' ? n : null
}
</script>

<style scoped>
.panel {
    position: sticky;
    top: 90px;
    border-radius: 18px;
    background: rgba(255, 255, 255, .75);
    border: 1px solid rgba(15, 23, 42, .10);
    box-shadow: 0 18px 60px rgba(2, 6, 23, .08);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 14px;
}

.panelHead {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 10px;
}

.title {
    margin: 0;
    font-weight: 950;
    color: #0f172a;
}

.reset {
    border: 1px solid rgba(15, 23, 42, .12);
    background: rgba(15, 23, 42, .04);
    color: rgba(15, 23, 42, .78);
    font-weight: 900;
    border-radius: 12px;
    padding: 8px 10px;
    cursor: pointer;
}

.section {
    margin-top: 14px;
}

.label {
    margin: 0 0 10px 0;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: rgba(15, 23, 42, .62);
}

.chips {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.chip {
    border: 1px solid rgba(15, 23, 42, .12);
    background: rgba(255, 255, 255, .75);
    border-radius: 999px;
    padding: 10px 12px;
    font-weight: 900;
    color: rgba(15, 23, 42, .72);
    cursor: pointer;
    transition: transform 150ms ease, background 150ms ease, border-color 150ms ease;
}

.chip:hover {
    transform: translateY(-1px);
    border-color: rgba(37, 99, 235, .22);
    background: rgba(37, 99, 235, .06);
}

.chip.active {
    border-color: rgba(37, 99, 235, .35);
    background: rgba(37, 99, 235, .10);
    color: rgba(37, 99, 235, .95);
}

.check {
    display: flex;
    gap: 10px;
    align-items: center;
    font-weight: 900;
    color: rgba(15, 23, 42, .75);
    margin-top: 10px;
}

.check input {
    width: 16px;
    height: 16px;
    accent-color: #2563eb;
}

.input {
    width: 100%;
    height: 44px;
    border-radius: 12px;
    border: 1px solid rgba(15, 23, 42, .12);
    background: rgba(255, 255, 255, .85);
    padding: 0 12px;
    font-weight: 900;
    outline: none;
}

.input:focus {
    border-color: rgba(37, 99, 235, .30);
    box-shadow: 0 0 0 4px rgba(37, 99, 235, .14);
}
</style>
