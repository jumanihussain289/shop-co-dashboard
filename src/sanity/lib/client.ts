import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:"spwtutww",
  dataset:"production",
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:"skw4DVCc31A9iZf584xwVtlAP4seRFwRGDaLYA8lOkZFi7WYiuTSk5MI5JZqY52QvF1hFWYqlmCPiy1LkLnLDwKqYZerAQZ2MqkHctOAelUY5GCuHi9Zkncs0Tm46qnm5zz2N1XONKiLk9YQuFvq8fCRABXjZW7P2cmWIGKQ0aKQK1Jog4ku"
})
