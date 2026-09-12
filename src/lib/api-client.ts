/**
 * LeaseIQ Societies API Client
 * Connects frontend to FastAPI backend, with graceful fallback to demo state if backend is offline.
 */

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

export interface UserSession {
  token: string;
  role: string;
  fullName: string;
  email: string;
  societyId: number;
}

// Local storage token helper
export function getStoredSession(): UserSession | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem("leaseiq_session");
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function setStoredSession(session: UserSession) {
  if (typeof window === "undefined") return;
  localStorage.setItem("leaseiq_session", JSON.stringify(session));
}

export function clearStoredSession() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("leaseiq_session");
}

export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const session = getStoredSession();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };

  if (session?.token) {
    headers["Authorization"] = `Bearer ${session.token}`;
  }

  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers,
    });
    if (!res.ok) {
      throw new Error(`API Error: ${res.status} ${res.statusText}`);
    }
    return await res.json();
  } catch (err) {
    console.warn(`Backend fetch to ${endpoint} failed, using local mock state:`, err);
    throw err;
  }
}
