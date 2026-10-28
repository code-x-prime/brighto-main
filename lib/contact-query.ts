export const KNOWN_SOURCES = ['Brighto India', 'Hubcheck', 'Truering', 'CrediScout', 'Credify'] as const

export const STATUS_VALUES = ['new', 'in_progress', 'contacted', 'resolved', 'closed'] as const

const SOURCE_VARIANTS: Record<string, string[]> = {
  'Brighto India': ['Brighto India', 'Brighto'],
  Hubcheck: ['Hubcheck'],
  Truering: ['Truering'],
  CrediScout: ['CrediScout', 'credi-scout'],
  Credify: ['Credify'],
}

// Older partner-site enquiries were saved with the default source; their subject starts with "[SiteName]".
const SUBJECT_PREFIXES: Record<string, string[]> = {
  Hubcheck: ['[Hubcheck'],
  Truering: ['[Truering'],
  CrediScout: ['[CrediScout', '[Credi-Scout'],
  Credify: ['[Credify'],
}

const STATUS_LABELS: Record<string, string> = {
  new: 'new',
  'in progress': 'in_progress',
  in_progress: 'in_progress',
  contacted: 'contacted',
  resolved: 'resolved',
  closed: 'closed',
}

type Where = Record<string, unknown>

const ci = (v: string) => ({ equals: v, mode: 'insensitive' })

function partnerWhere(name: string): Where {
  return {
    OR: [
      ...SOURCE_VARIANTS[name].map(v => ({ source: ci(v) })),
      ...SUBJECT_PREFIXES[name].map(p => ({ subject: { startsWith: p, mode: 'insensitive' } })),
    ],
  }
}

export function sourceWhere(source: string): Where | null {
  if (!source || source === 'all') return null
  if (source === 'Brighto India') {
    const allPrefixes = Object.values(SUBJECT_PREFIXES).flat()
    return {
      AND: [
        { OR: SOURCE_VARIANTS['Brighto India'].map(v => ({ source: ci(v) })) },
        ...allPrefixes.map(p => ({ NOT: { subject: { startsWith: p, mode: 'insensitive' } } })),
      ],
    }
  }
  if (SOURCE_VARIANTS[source]) return partnerWhere(source)
  return { source: ci(source) }
}

export function searchWhere(q: string): Where | null {
  const tokens = q.trim().split(/\s+/).filter(Boolean).slice(0, 6)
  if (tokens.length === 0) return null
  return {
    AND: tokens.map(token => {
      const contains = { contains: token, mode: 'insensitive' }
      const digits = token.replace(/\D/g, '')
      const status = STATUS_LABELS[token.toLowerCase()]
      return {
        OR: [
          { name: contains },
          { email: contains },
          { phone: contains },
          ...(digits.length >= 3 && digits !== token ? [{ phone: { contains: digits } }] : []),
          { subject: contains },
          { message: contains },
          { source: contains },
          { notes: { some: { content: contains } } },
          ...(status ? [{ status }] : []),
        ],
      }
    }),
  }
}

export function statusWhere(status: string): Where | null {
  return (STATUS_VALUES as readonly string[]).includes(status) ? { status } : null
}

export function combine(...parts: (Where | null)[]): Where {
  const used = parts.filter((p): p is Where => p !== null)
  return used.length ? { AND: used } : {}
}
