import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: "1lh5yxd7",  // sanity.json ya manage.sanity.io se copy karo
  dataset: "production",         // default dataset
  apiVersion: "2023-08-01",      // koi recent date daal do
  useCdn: false,
})

const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)

export default client;