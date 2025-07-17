const LOCAL_USER_KEY = "boafo.user";
const LOCAL_TXNS_KEY = "boafo.txns";
const LOCAL_TIMESTAMP_KEY = "boafo.timestamp";
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

export function isCacheValid() {
  const saved = localStorage.getItem(LOCAL_TIMESTAMP_KEY);
  return saved && Date.now() - parseInt(saved) < CACHE_TTL;
}

export function getCachedUser() {
  const cached = localStorage.getItem(LOCAL_USER_KEY);
  return cached ? JSON.parse(cached) : null;
}

export function getCachedTransactions() {
  const cached = localStorage.getItem(LOCAL_TXNS_KEY);
  return cached ? JSON.parse(cached) : [];
}

export function saveToCache(user, transactions = []) {
  localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(user));
  localStorage.setItem(LOCAL_TXNS_KEY, JSON.stringify(transactions));
  localStorage.setItem(LOCAL_TIMESTAMP_KEY, Date.now().toString());
}

export function clearCache() {
  localStorage.removeItem(LOCAL_USER_KEY);
  localStorage.removeItem(LOCAL_TXNS_KEY);
  localStorage.removeItem(LOCAL_TIMESTAMP_KEY);
}
