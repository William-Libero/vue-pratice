import { ENVIRONMENT as ENV } from "../config";
import { createClient } from '@supabase/supabase-js'

export const supabaseApiClient = {
    async getSupabaseApiClient() {
        const supabaseUrl = ENV.API_URL
        const supabaseKey = ENV.API_KEY
        var apiClient = createClient(supabaseUrl, supabaseKey)

        return apiClient;
    }
}