<template>
  <aside class="filters">
    <div class="head">
      <div>
        <div class="title">Filtres</div>
        <div class="subtitle">Affiner ta recherche</div>
      </div>

      <button class="reset" type="button" @click="resetAll">Réinitialiser</button>
    </div>

    <!-- Search -->
    <div class="block">
      <div class="label">Recherche</div>
      <input class="input" :value="modelValue.q" placeholder="Poste, hôpital, mot-clé…"
        @input="update({ q: ($event.target as HTMLInputElement).value })" />
    </div>

    <!-- Role -->
    <div class="block">
      <div class="label">Type de poste</div>
      <select class="select" :value="modelValue.role"
        @change="update({ role: ($event.target as HTMLSelectElement).value as any })">
        <option value="">Tous</option>
        <option v-for="r in options.roles" :key="r" :value="r">{{ r }}</option>
      </select>
    </div>

    <!-- Locality + radius -->
    <div class="block">
      <div class="label">Localité</div>
      <input class="input" :value="modelValue.locality" placeholder="Ex: Bruxelles"
        @input="update({ locality: ($event.target as HTMLInputElement).value })" />

      <div class="label" style="margin-top: 10px;">Périmètre</div>
      <select class="select" :value="modelValue.radiusKm"
        @change="update({ radiusKm: Number(($event.target as HTMLSelectElement).value) as any })">
        <option v-for="r in options.radius" :key="r" :value="r">{{ r }} km</option>
      </select>
    </div>

    <!-- Contracts (chips) -->
    <div class="block">
      <div class="label">Contrat</div>
      <div class="chips">
        <button v-for="c in options.contracts" :key="c" type="button" class="chip"
          :class="{ active: modelValue.contracts.includes(c) }" @click="toggle('contracts', c)">
          {{ c }}
          <span class="count">[{{ counts.contracts.get(c) ?? 0 }}]</span>
        </button>
      </div>
    </div>

    <!-- Schedules (chips) -->
    <div class="block">
      <div class="label">Horaire</div>
      <div class="chips">
        <button v-for="s in options.schedules" :key="s" type="button" class="chip"
          :class="{ active: modelValue.schedules.includes(s) }" @click="toggle('schedules', s)">
          {{ s }}
          <span class="count">[{{ counts.schedules.get(s) ?? 0 }}]</span>
        </button>
      </div>
    </div>

    <!-- Options -->
    <div class="block">
      <div class="label">Options</div>

      <label class="check">
        <input type="checkbox" :checked="modelValue.urgentOnly"
          @change="update({ urgentOnly: ($event.target as HTMLInputElement).checked })" />
        Urgent uniquement
      </label>

      <label class="check">
        <input type="checkbox" :checked="modelValue.remoteOnly"
          @change="update({ remoteOnly: ($event.target as HTMLInputElement).checked })" />
        Remote uniquement
      </label>
    </div>

    <!-- Province (checkbox list) -->
    <div class="block">
      <div class="label">Province</div>
      <div class="list">
        <label v-for="p in options.provinces" :key="p" class="row">
          <input type="checkbox" :checked="modelValue.provinces.includes(p)" @change="toggle('provinces', p)" />
          <span class="rowText">{{ p }}</span>
          <span class="rowCount">[{{ counts.provinces.get(p) ?? 0 }}]</span>
        </label>
      </div>
    </div>

    <!-- Language (checkbox list) -->
    <div class="block">
      <div class="label">Langue de l’annonce</div>
      <div class="list">
        <label v-for="l in options.languages" :key="l" class="row">
          <input type="checkbox" :checked="modelValue.languages.includes(l)" @change="toggle('languages', l)" />
          <span class="rowText">{{ l }}</span>
          <span class="rowCount">[{{ counts.languages.get(l) ?? 0 }}]</span>
        </label>
      </div>
    </div>

    <!-- Salary -->
    <div class="block">
      <div class="label">Salaire minimum (€ / mois)</div>
      <input class="input" type="number" :value="modelValue.salaryMin ?? ''" placeholder="ex: 2500"
        @input="onSalaryInput" />
    </div>
  </aside>
</template>

<script setup lang="ts">
import type { JobFilters } from '~/composables/useJobs'
import { defaultJobFilters, useJobs } from '~/composables/useJobs'

const props = defineProps<{ modelValue: JobFilters }>()
const emit = defineEmits<{ 'update:modelValue': [JobFilters] }>()

const { options, getCounts } = useJobs()

const counts = computed(() => getCounts(props.modelValue))

function update(patch: Partial<JobFilters>) {
  emit('update:modelValue', { ...props.modelValue, ...patch })
}

type MultiKey = 'contracts' | 'schedules' | 'provinces' | 'languages'
type MultiValue<K extends MultiKey> = JobFilters[K][number]

function toggle<K extends MultiKey>(key: K, value: MultiValue<K>) {
  const current = props.modelValue[key] as MultiValue<K>[]
  const next = current.includes(value) ? current.filter(v => v !== value) : [...current, value]
  update({ [key]: next } as Partial<JobFilters>)
}

function resetAll() {
  emit('update:modelValue', defaultJobFilters())
}

function onSalaryInput(e: Event) {
  const raw = (e.target as HTMLInputElement).value
  update({ salaryMin: raw ? Number(raw) : null })
}
</script>

<style scoped lang="scss">
.filters {
  border-radius: 18px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(15, 23, 42, 0.1);
  box-shadow: 0 18px 60px rgba(2, 6, 23, 0.08);
  backdrop-filter: blur(10px);
}

.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;

  .title {
    font-weight: 950;
    font-size: 16px;
    letter-spacing: -0.01em;
  }

  .subtitle {
    margin-top: 2px;
    font-size: 12px;
    font-weight: 800;
    color: rgba(15, 23, 42, 0.55);
  }
}

.reset {
  height: 36px;
  padding: 0 14px;
  border-radius: 12px;
  border: 1px solid rgba(15, 23, 42, 0.12);
  background: rgba(255, 255, 255, 0.75);
  font-weight: 900;
  cursor: pointer;

  &:hover {
    border-color: rgba(37, 99, 235, 0.25);
  }
}

.block {
  &+& {
    margin-top: 14px;
    padding-top: 14px;
    border-top: 1px solid rgba(15, 23, 42, 0.06);
  }
}

.label {
  font-size: 12px;
  font-weight: 950;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(15, 23, 42, 0.55);
  margin-bottom: 10px;
}

.input,
.select {
  width: 100%;
  height: 44px;
  border-radius: 14px;
  border: 1px solid rgba(15, 23, 42, 0.12);
  padding: 0 14px;
  font-weight: 800;
  outline: none;
  background: rgba(255, 255, 255, 0.85);

  &:focus {
    border-color: rgba(37, 99, 235, 0.35);
    box-shadow: 0 0 0 5px rgba(37, 99, 235, 0.12);
  }
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.chip {
  height: 40px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid rgba(15, 23, 42, 0.12);
  background: rgba(255, 255, 255, 0.75);
  font-weight: 950;
  cursor: pointer;
  display: inline-flex;
  gap: 8px;
  align-items: center;

  .count {
    font-weight: 900;
    color: rgba(15, 23, 42, 0.45);
  }

  &:hover {
    border-color: rgba(37, 99, 235, 0.25);
  }

  &.active {
    border-color: rgba(37, 99, 235, 0.28);
    background: rgba(37, 99, 235, 0.08);
    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.12);
  }
}

.check {
  display: flex;
  gap: 10px;
  align-items: center;
  font-weight: 900;
  color: rgba(15, 23, 42, 0.75);

  &+& {
    margin-top: 10px;
  }

  input {
    width: 18px;
    height: 18px;
  }
}

.list {
  display: grid;
  gap: 10px;
}

.row {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: 10px;

  input {
    width: 18px;
    height: 18px;
  }

  .rowText {
    font-weight: 900;
    color: rgba(15, 23, 42, 0.78);
  }

  .rowCount {
    font-weight: 900;
    color: rgba(15, 23, 42, 0.35);
  }
}
</style>
