import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ysnkxsxwbxvkrvzaychg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlzbmt4c3h3Ynh2a3J2emF5Y2hnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU0NzYxMjYsImV4cCI6MjAyMTA1MjEyNn0.16rSrE5h_xCxaL257bukDN7mS5ERaaeHJdU4kfuCU14";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
