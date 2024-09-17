export const getPersonJsonLd = () => {
  return {
    "@context": "https://schema.org/",
    "@type": "Person",
    "url": "https://abhinavprkash.vercel.app/",
    "affiliation": [
      {
        "@type": "Organization",
        "@id": "https://www.wikidata.org/wiki/Q30284383",
        "url": "https://www.optum.com/",
        "name": "Optum"
      },
      {
        "@type": "Organization",
        "@id": "",
        "url": "https://www.uniqode.com/",
        "name": "Uniqode"
      },
      {
        "@type": "Organization",
        "@id": "https://www.wikidata.org/wiki/Q20716",
        "url": "https://research.samsung.com/sri-b",
        "name": "Samsung Research Institute Bangalore"
      }

    ],
    
  }
}