import { createClient } from "@supabase/supabase-js";

const supabaseUrl =  "https://hqjxvdmpnbpnfnjqhfxa.supabase.co";
const supabaseToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhxanh2ZG1wbmJwbmZuanFoZnhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwOTI0MzYsImV4cCI6MjA0NDY2ODQzNn0.QKpwwzo2gR5qp6pAvOOjrswBun8MgIZ6Kp80fLu4EJU";
const databaseUrl = process.env.SUPABASE_DATABASE_URL;

export const supabaseClient = createClient(supabaseUrl, supabaseToken);