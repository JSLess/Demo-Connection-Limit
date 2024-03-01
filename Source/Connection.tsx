
export { Middleware as handleConnection }

import { AsyncResponse } from './AsyncResponse.ts'
import { Context } from 'Oak'
import { user } from './State.ts'


function Middleware (
    context : Context
){

    const { response } = context

    const { headers } = response

    headers.set('Content-Type','text/html;charset=utf-8')
    headers.set('Transfer-Encoding','chunked')
    headers.set('Connection','keep-alive')
    headers.set('Keep-Alive',`timeout=${ 60 * 60 }`)

    const connection = new AsyncResponse
    user.connections.push(connection)

    response.body = connection.readable


    const html = `
        <!DOCTYPE html>
        <html>
            <head>
                <style>

                    body {
                        background : #438bff ;
                        position : absolute ;
                        inset : 0 ;
                    }

                </style>
            </head>
            <body>

            </body>
        </html>

    `

    connection.write(html)


    let show = false

    setInterval(() => {

        connection.write(`
            <style>
                body {
                    background : ${ ( show ) ? '#438bff' : 'none' } ;
                }
            </style>
        `)

        show = ! show ;

    },2000)
}
