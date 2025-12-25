export type ContractType = 'CDI' | 'CDD' | 'Indépendant' | 'Intérim' | 'Stage'
export type ScheduleType = 'Temps plein' | 'Temps partiel' | 'Nuit' | 'Week-end'
export type JobRole =
  | 'Infirmier(ère)'
  | 'Aide-soignant(e)'
  | 'Médecin'
  | 'Kinésithérapeute'
  | 'Pharmacien(ne)'
  | 'Psychologue'
  | 'Sage-femme'
  | 'Technicien(ne) de labo'

export type Job = {
  id: string
  title: string
  role: JobRole
  company: string
  location: string
  contract: ContractType
  schedule: ScheduleType
  salaryMin?: number
  salaryMax?: number
  currency?: 'EUR'
  remote?: boolean
  urgent?: boolean
  postedAt: string // ISO date
  tags?: string[]
}

export type JobFilters = {
  q: string
  role: string
  location: string
  contract: string
  schedule: string
  remoteOnly: boolean
  urgentOnly: boolean
  salaryMin: number | null
  sort: 'recent' | 'salary_desc' | 'salary_asc'
}

const nowMinusDays = (d: number) => new Date(Date.now() - d * 24 * 60 * 60 * 1000).toISOString()

const JOBS: Job[] = [
  {
    id: 'mdm-1001',
    title: 'Infirmier(ère) - Urgences',
    role: 'Infirmier(ère)',
    company: 'CHU Bruxelles',
    location: 'Bruxelles',
    contract: 'CDI',
    schedule: 'Temps plein',
    salaryMin: 3200,
    salaryMax: 4200,
    currency: 'EUR',
    remote: false,
    urgent: true,
    postedAt: nowMinusDays(1),
    tags: ['Urgences', 'Prime', 'Équipe dynamique'],
  },
  {
    id: 'mdm-1002',
    title: 'Aide-soignant(e) - Maison de repos',
    role: 'Aide-soignant(e)',
    company: 'Résidence NovaCare',
    location: 'Charleroi',
    contract: 'CDD',
    schedule: 'Temps partiel',
    salaryMin: 2100,
    salaryMax: 2500,
    currency: 'EUR',
    urgent: false,
    postedAt: nowMinusDays(2),
    tags: ['MRS', 'Horaires flexibles'],
  },
  {
    id: 'mdm-1003',
    title: 'Médecin Généraliste (Cabinet)',
    role: 'Médecin',
    company: 'Cabinet Santé Plus',
    location: 'Liège',
    contract: 'Indépendant',
    schedule: 'Temps plein',
    urgent: true,
    postedAt: nowMinusDays(4),
    tags: ['Patientèle', 'Start immédiat'],
  },
  {
    id: 'mdm-1004',
    title: 'Kinésithérapeute - Rééducation',
    role: 'Kinésithérapeute',
    company: 'Clinique Motion',
    location: 'Namur',
    contract: 'CDI',
    schedule: 'Temps plein',
    salaryMin: 2800,
    salaryMax: 3600,
    currency: 'EUR',
    postedAt: nowMinusDays(6),
    tags: ['Rééducation', 'Plateau technique'],
  },
  {
    id: 'mdm-1005',
    title: 'Technicien(ne) de labo - Biologie',
    role: 'Technicien(ne) de labo',
    company: 'Lab MedCore',
    location: 'Anvers',
    contract: 'CDD',
    schedule: 'Nuit',
    salaryMin: 2600,
    salaryMax: 3100,
    currency: 'EUR',
    remote: false,
    postedAt: nowMinusDays(1),
    tags: ['Biologie', 'Nuit', 'Prime'],
  },
]

export const defaultJobFilters = (): JobFilters => ({
  q: '',
  role: '',
  location: '',
  contract: '',
  schedule: '',
  remoteOnly: false,
  urgentOnly: false,
  salaryMin: null,
  sort: 'recent',
})

export function useJobs() {
  const jobs = computed(() => JOBS)

  const isNew = (postedAt: string) => {
    const days = (Date.now() - new Date(postedAt).getTime()) / (1000 * 60 * 60 * 24)
    return days <= 3
  }

  const formatSalary = (min?: number, max?: number, currency: 'EUR' = 'EUR') => {
    if (!min && !max) return ''
    const f = new Intl.NumberFormat('fr-BE', { style: 'currency', currency, maximumFractionDigits: 0 })
    if (min && max) return `${f.format(min)} – ${f.format(max)}`
    if (min) return `à partir de ${f.format(min)}`
    return `jusqu’à ${f.format(max as number)}`
  }

  const applyFilters = (list: Job[], filters: JobFilters) => {
    let out = [...list]

    const q = filters.q.trim().toLowerCase()
    if (q) {
      out = out.filter(j =>
        [j.title, j.company, j.location, j.role, ...(j.tags || [])]
          .join(' ')
          .toLowerCase()
          .includes(q)
      )
    }

    if (filters.role) out = out.filter(j => j.role === filters.role)
    if (filters.location) out = out.filter(j => j.location === filters.location)
    if (filters.contract) out = out.filter(j => j.contract === filters.contract)
    if (filters.schedule) out = out.filter(j => j.schedule === filters.schedule)
    if (filters.remoteOnly) out = out.filter(j => !!j.remote)
    if (filters.urgentOnly) out = out.filter(j => !!j.urgent)

    if (filters.salaryMin != null) {
      out = out.filter(j => (j.salaryMax ?? j.salaryMin ?? 0) >= (filters.salaryMin as number))
    }

    // sort
    if (filters.sort === 'recent') {
      out.sort((a, b) => +new Date(b.postedAt) - +new Date(a.postedAt))
    } else if (filters.sort === 'salary_desc') {
      out.sort((a, b) => (b.salaryMax ?? b.salaryMin ?? 0) - (a.salaryMax ?? a.salaryMin ?? 0))
    } else if (filters.sort === 'salary_asc') {
      out.sort((a, b) => (a.salaryMin ?? a.salaryMax ?? 0) - (b.salaryMin ?? b.salaryMax ?? 0))
    }

    return out
  }

  const meta = { isNew, formatSalary, applyFilters }
  return { jobs, ...meta }
}
