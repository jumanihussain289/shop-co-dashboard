import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:"uliw8j2q",
  dataset:"production",
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:"sksSnfjYFLIWzQv0ZGZRqOfpuYb7xvz8cOBbcvGSHlaR90zV1SNkeKKSUOkTWm1LTvJoREAbAG4NvYf8SUHhRLSZxzCyLw7lCppqDfpt96VmLB2r8K2TVWF7DNtMrHAB4DNbNORMIhyuhznKmQKlyDk54xku1FzPgazaWyLRaPJWdYd35ecY"
})
