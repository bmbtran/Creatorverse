import { createClient } from '@supabase/supabase-js';

const URL = "https://bcbjnnszxeqyttytkvfr.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjYmpubnN6eGVxeXR0eXRrdmZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIyNTA4MzAsImV4cCI6MjAwNzgyNjgzMH0.hnqoMAwES_J0PjM8UCt7kPtRHxUDv-74ymrgO2f63CU"

export const supabase = createClient(URL, API_KEY);