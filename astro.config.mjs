// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://interstellar.jwr.one',
  integrations: [
    starlight({
      title: 'Interstellar',
      favicon: '/favicon.png',
      logo: {
        src: './public/favicon.png',
      },
      editLink: {
        baseUrl:
          'https://github.com/interstellar-app/interstellar-website/edit/main/',
      },
      social: {
        github: 'https://github.com/interstellar-app/interstellar',
        matrix: 'https://matrix.to/#/#interstellar-space:matrix.org',
      },
      sidebar: [
        {
          slug: 'install',
        },
        {
          slug: 'docs',
        },
        {
          label: 'Features',
          autogenerate: { directory: 'features' },
        },
        {
          label: 'Contributing',
          autogenerate: { directory: 'contributing' },
        },
      ],
    }),
  ],
});
