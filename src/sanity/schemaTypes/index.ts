import { type SchemaTypeDefinition } from 'sanity'
import orders from './orders'
import contactForm from './contact'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [orders,contactForm],
}
