// src/config/supabase.js

const SUPABASE_URL='https://ctgklmuwoaydlwulmbdc.supabase.co'
 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0Z2tsbXV3b2F5ZGx3dWxtYmRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NzQyMTQsImV4cCI6MjEwMDQ1MDIxNH0.FTs2ih_VQPDcpEPi3wIAiyyPYu_L5afH43nWuTYNFhY'; 

export const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);