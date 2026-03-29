import { GraphQLClient } from 'graphql-request'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const endpoint = config.public.hygraphHost
  const headers = config.hygraphToken
    ? { Authorization: `Bearer ${config.hygraphToken}` }
    : undefined
  const client = new GraphQLClient(endpoint, { headers })

  return {
    provide: {
      graphql: {
        request: async (query: string, variables?: Record<string, unknown>) => {
          try {
            return await client.request(query, variables)
          } catch (err) {
            console.warn('GraphQL request failed during build/runtime', err)
            return {}
          }
        },
      },
    },
  }
})
