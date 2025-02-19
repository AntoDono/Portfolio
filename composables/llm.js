export const env = ()=>{
    const LLM_API_KEY = useRuntimeConfig().public.LLM_API_KEY;
    return { LLM_API_KEY }
}