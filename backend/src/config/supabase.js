import { createClient } from '@supabase/supabase-js';
import WebSocket from 'ws';
import 'dotenv/config';

const supabaseUrl = process.env.SUPABASE_URL;
// ĐỔI DÒNG NÀY: Dùng SERVICE_ROLE_KEY thay vì ANON_KEY
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY; 

if (!supabaseUrl || !supabaseKey) {
    console.error('⚠️ Thiếu cấu hình Supabase URL hoặc Key');
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false },
    realtime: { transport: WebSocket }
});