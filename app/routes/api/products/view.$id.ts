import { Products } from '@/model/products'
import { fetchPocketbaseDocument } from '@/services/pocketbaseService'
import { json } from '@tanstack/start'
import { createAPIFileRoute } from '@tanstack/start/api'

export const APIRoute = createAPIFileRoute('/api/products/view/$id')({
  GET: async ({ params }) => {
    const id = params.id;
    const data = await fetchPocketbaseDocument<Products>('products', id);
    return json(data);
  },
})
