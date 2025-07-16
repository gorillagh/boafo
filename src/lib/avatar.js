import API from "./axios";

export function useAvatar(user) {
  if (!user) return "";
  if (user.avatarUrl) {
    const base = API.defaults.baseURL;
    return user.avatarUrl.startsWith("http")
      ? `${user.avatarUrl}?t=${Date.now()}`
      : `${base}${user.avatarUrl}?t=${Date.now()}`;
  }
  // fallback to initials avatar
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  return `https://ui-avatars.com/api/?name=${initials}&background=34C759&color=fff`;
}
