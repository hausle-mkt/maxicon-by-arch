/**
 * BY ARCH Maxicon — Cliente de Integração com o Sanity CMS
 * 
 * Permite buscar dados de Casas e Escritórios diretamente da nuvem
 * do Sanity e preencher as páginas automaticamente.
 */

const SANITY_CONFIG = {
  // Project ID obtido em sanity.io/manage
  projectId: "soyi4quf",
  dataset: "production",
  apiVersion: "2023-08-01",
  useCdn: true,
};

/**
 * Constrói a URL do endpoint público do Sanity CDN para consultas GROQ
 */
function getSanityQueryUrl(groqQuery, params = {}) {
  const { projectId, dataset, apiVersion, useCdn } = SANITY_CONFIG;
  const subdomain = useCdn ? `${projectId}.apicdn` : `${projectId}.api`;
  const encodedQuery = encodeURIComponent(groqQuery);
  
  let url = `https://${subdomain}.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodedQuery}`;
  
  // Adiciona parâmetros à URL (ex: $slug="casa-alva")
  Object.keys(params).forEach((key) => {
    url += `&$${key}=${encodeURIComponent(JSON.stringify(params[key]))}`;
  });

  return url;
}

/**
 * Converte referências de imagem do Sanity (image asset) em URLs CDN com WebP automático
 */
function urlForSanityImage(source, width = null, height = null) {
  if (!source) return "";
  
  // Se já for uma URL completa externa
  if (typeof source === "string" && source.startsWith("http")) {
    return source;
  }

  // Se for um asset com URL direta
  if (source.asset && source.asset.url) {
    return source.asset.url;
  }

  // Se for uma referência do tipo "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg"
  const ref = source.asset ? source.asset._ref : (typeof source === "string" ? source : null);
  if (!ref) return "";

  const parts = ref.split("-");
  if (parts.length >= 4) {
    const id = parts[1];
    const dimensions = parts[2];
    const format = parts[3];
    let url = `https://cdn.sanity.io/images/${SANITY_CONFIG.projectId}/${SANITY_CONFIG.dataset}/${id}-${dimensions}.${format}?auto=format`;
    if (width) url += `&w=${width}`;
    if (height) url += `&h=${height}`;
    return url;
  }

  return "";
}

/**
 * Executa uma consulta GROQ genérica no Sanity
 */
async function querySanity(groq, params = {}) {
  if (!SANITY_CONFIG.projectId || SANITY_CONFIG.projectId === "SEU_PROJECT_ID_AQUI") {
    console.warn("[Sanity] projectId não configurado. Utilizando dados locais de fallback.");
    return null;
  }

  try {
    const url = getSanityQueryUrl(groq, params);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Sanity API error: ${response.status}`);
    }
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("[Sanity] Erro ao buscar dados:", error);
    return null;
  }
}

/**
 * Busca uma casa pelo seu identificador (slug)
 */
async function fetchHouseBySlug(slug) {
  const query = `*[_type == "casa" && slug.current == $slug][0]{
    ...,
    architect->{
      name,
      titular,
      "slug": slug.current,
      logo,
      photo,
      headline,
      bio,
      instagramUser,
      instagramUrl,
      address
    }
  }`;
  return await querySanity(query, { slug });
}

/**
 * Busca todas as casas cadastradas e publicadas
 */
async function fetchAllHouses() {
  const query = `*[_type == "casa"] | order(_createdAt desc){
    name,
    "slug": slug.current,
    status,
    tagline,
    headline,
    lot,
    lotArea,
    privateArea,
    suites,
    garage,
    highlights,
    heroImage,
    architect->{
      name,
      titular,
      "slug": slug.current,
      logo
    }
  }`;
  return await querySanity(query);
}

/**
 * Busca um escritório de arquitetura pelo slug
 */
async function fetchOfficeBySlug(slug) {
  const query = `*[_type == "escritorio" && (slug.current == $slug || slug.current match $slug || name match $slug)][0]{
    ...,
    associatedHouse->{
      name,
      "slug": slug.current,
      status,
      tagline,
      headline,
      privateArea,
      suites,
      heroImage
    }
  }`;
  return await querySanity(query, { slug });
}

/**
 * Busca todos os escritórios de arquitetura
 */
async function fetchAllOffices() {
  const query = `*[_type == "escritorio"] | order(order asc, name asc){
    name,
    titular,
    "slug": slug.current,
    logo,
    photo,
    headline,
    bio,
    instagramUser,
    instagramUrl,
    address,
    associatedHouse->{
      name,
      "slug": slug.current
    }
  }`;
  return await querySanity(query);
}

/**
 * Converte blocos de texto rico do Sanity em HTML simples
 */
function sanityBlocksToHtml(blocks) {
  if (!blocks || !Array.isArray(blocks)) return "";
  return blocks
    .map((block) => {
      if (block._type !== "block" || !block.children) return "";
      const text = block.children.map((c) => c.text).join("");
      return `<p>${text}</p>`;
    })
    .join("");
}

// Exportações globais para uso nas páginas HTML
window.SanityClient = {
  config: SANITY_CONFIG,
  urlForImage: urlForSanityImage,
  query: querySanity,
  fetchHouseBySlug,
  fetchAllHouses,
  fetchOfficeBySlug,
  fetchAllOffices,
  blocksToHtml: sanityBlocksToHtml,
};
