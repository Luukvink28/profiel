import { createClient } from "@supabase/supabase-js";

const supabaseUrl =  "https://hmoporozxfsternscrrt.supabase.co";
const supabaseToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhtb3Bvcm96eGZzdGVybnNjcnJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MzQ4MDcsImV4cCI6MjAwOTQxMDgwN30.8xq7Uxgh0Bcd_-osaPMPGp7J9MI_bwJ_QJuLwmq34v0";

export const supabaseClient = createClient(supabaseUrl, supabaseToken);