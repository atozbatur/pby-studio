export const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  // Singleton behaviour is enforced by the fixed documentId in sanity.config.js
  fields: [
    // ── Hero ──────────────────────────────────────────────
    {
      name: 'heroTagline_en',
      title: 'Hero Tagline — English',
      description: 'Italic line under the PBY logo. e.g. "Stories shot, built, and understood."',
      type: 'string',
    },
    {
      name: 'heroTagline_tr',
      title: 'Hero Tagline — Turkish',
      type: 'string',
    },
    {
      name: 'heroSub_en',
      title: 'Hero Subtext — English',
      description: 'The paragraph beneath the tagline.',
      type: 'text',
      rows: 3,
    },
    {
      name: 'heroSub_tr',
      title: 'Hero Subtext — Turkish',
      type: 'text',
      rows: 3,
    },
    // ── About page ────────────────────────────────────────
    {
      name: 'aboutMission_en',
      title: 'About: "The Practice" text — English',
      type: 'text',
      rows: 5,
    },
    {
      name: 'aboutMission_tr',
      title: 'About: "Pratik" text — Turkish',
      type: 'text',
      rows: 5,
    },
    {
      name: 'aboutManifesto_en',
      title: 'About: "Why Pink Black Yellow" text — English',
      type: 'text',
      rows: 5,
    },
    {
      name: 'aboutManifesto_tr',
      title: 'About: "Neden Pembe Siyah Sarı" text — Turkish',
      type: 'text',
      rows: 5,
    },
    // ── Contact ───────────────────────────────────────────
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    },
    {
      name: 'location_en',
      title: 'Location — English',
      type: 'string',
    },
    {
      name: 'location_tr',
      title: 'Location — Turkish',
      type: 'string',
    },
    {
      name: 'instagramHandle',
      title: 'Instagram Handle',
      description: 'Without the @ symbol.',
      type: 'string',
    },
  ],
}
