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
    ];
  },
};

export default nextConfig;
