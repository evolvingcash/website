const baseUrl = "https://github.com/evolvingcash"

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} evolving-protocol core team. All Rights Reserved.`,
  algolia: {
    apiKey: "df1dcc41f7b8e5d68e73dd56d1e19701",
    indexName: "evolving.cash",
    inputSelector: "#algolia-search",
  },
  author: {
    name: "evolving-protocol core team",
    github: "https://github.com/evolvingcash",
    twitter: "https://twitter.com/Evolving_cash",
    linkedin: "",
    email: "evolving.cash@gmail.com",
  },
  repo: {
    url: baseUrl,
    editUrl: `${baseUrl}/edit/main/website/pages`,
    blobUrl: `${baseUrl}/blob/main`,
  },
  openCollective: {
    url: "https://opencollective.com/evolving.cash",
  },
  discord: {
    url: "https://discord.gg/evolving.cash",
  },
  seo: {
    title: "evolving cash",
    titleTemplate: "%s - evolving cash",
    description:
      "evolving protocol: Decentralized Stablecoin With Algorithmic Reserve Currency.",
    siteUrl: "https://www.evolving.cash",
    twitter: {
      handle: "@Evolving_cash",
      site: "@Evolving_cash",
      cardType: "Evolving_cash",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://www.evolving.cash",
      title: "evolving cash",
      description:
        "evolving protocol: Decentralized Stablecoin With Algorithmic Reserve Currency.",
      site_name:
        "evolving protocol: Decentralized Stablecoin With Algorithmic Reserve Currency.",
      images: [
        {
          url: "https://www.evolving.cash/og-image.png",
          width: 1240,
          height: 480,
          alt:
            "evolving protocol: Decentralized Stablecoin With Algorithmic Reserve Currency.",
        },
        {
          url: "https://www.evolving.cash/twitter-og-image.png",
          width: 1012,
          height: 506,
          alt:
            "evolving protocol: Decentralized Stablecoin With Algorithmic Reserve Currency.",
        },
      ],
    },
  },
}

export default siteConfig