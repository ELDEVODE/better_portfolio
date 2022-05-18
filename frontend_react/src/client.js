import sanityClient from '@sanity/client';
import imageUrlBUilder from '@sanity/image-url';

export const Client = sanityClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN,
});

const builder = imageUrlBUilder(Client);

export const urlFor = (source) => builder.image(source);
