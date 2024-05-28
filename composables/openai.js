export const env = ()=>{
    const OPENAI_API_KEY = useRuntimeConfig().public.OPENAI_API_KEY;
    return { OPENAI_API_KEY }
}