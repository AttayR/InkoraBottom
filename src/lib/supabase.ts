import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

// Prefer environment variables when available (Expo will inline EXPO_PUBLIC_*),
// but fall back to the provided URL and anon key for local development.
const SUPABASE_URL = (process.env.EXPO_PUBLIC_SUPABASE_URL as string) || 'https://zhqkhjpytatxaaonjxvx.supabase.co';
const SUPABASE_ANON_KEY = (process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY as string) || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpocWtoanB5dGF0eGFhb25qeHZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0ODUwMTAsImV4cCI6MjA3MzA2MTAxMH0.q6pgGiqdZEVVXanMViW_9OR3DpjVZKBM1tt6D0JdEO8';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: {
      getItem: (key) => AsyncStorage.getItem(key),
      setItem: (key, value) => AsyncStorage.setItem(key, value),
      removeItem: (key) => AsyncStorage.removeItem(key),
    },
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});