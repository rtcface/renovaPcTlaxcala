export function env() {
  // En Netlify, usar variables de entorno automáticas
  // SITE_URL se puede configurar manualmente en Netlify
  // Si no está configurado, Netlify proporciona URL automáticamente
  const netlifyUrl = process.env.DEPLOY_PRIME_URL || process.env.URL;
  
  const SITE_URL = 
    process.env.SITE_URL || 
    (netlifyUrl ? netlifyUrl : "http://localhost:4321");

  return {
    SITE_URL,
  };
}
