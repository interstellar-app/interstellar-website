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
      social: {
        github: 'https://github.com/jwr1/interstellar',
        matrix: 'https://matrix.to/#/#interstellar-space:matrix.org',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', slug: 'guides/example' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
