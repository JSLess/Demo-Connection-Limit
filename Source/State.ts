
export { user }

import { AsyncResponse } from './AsyncResponse.ts'


interface User {
    connections : Array<AsyncResponse>
}

const user = {
    connections : []
} as User
