export function getAuthHeaders(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  const token = localStorage.getItem('admin-token')
  if (token) return { Authorization: `Bearer ${token}` }
  return {}
}

export async function authFetch(url: string, options: RequestInit = {}) {
  return fetch(url, {
    ...options,
    credentials: 'include',
    headers: {
      ...options.headers,
      ...getAuthHeaders(),
    },
  })
}
