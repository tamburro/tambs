/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // O produto foi renomeado de Maestria para Proficia; links do case
        // com o slug antigo continuam válidos.
        source: "/works/maestria-avaliacao-competencias-ux",
        destination: "/works/proficia-avaliacao-competencias-ux",
        permanent: true,
      },
      {
        // O case da Editora Globo ganhou novo título e slug.
        source: "/works/globo-ab-test-landing-page-aquisicao",
        destination: "/works/editora-globo-aquisicao-landing-pages-ia",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
