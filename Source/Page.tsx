
export { middleware as servePage }

import { AsyncResponse } from './AsyncResponse.ts'
import { Context } from 'Oak'
import { render } from 'Preact/Render'
import { user } from './State.ts'


const count = 9


function middleware (
    context : Context
){

    const { response } = context

    const frames = Array(count).fill(null).map(() =>
        <iframe src = '/Connection' />
    )

    response.body = `<!DOCTYPE html>` + render(
        <html>
            <head>
                <style
                    dangerouslySetInnerHTML = {{ __html : `

                        body {
                            flex-direction : column ;
                            align-items : center ;
                            display : flex ;
                            gap : 2rem ;
                        }

                        .Frames {
                            grid-template-columns : 100px 100px 100px ;
                            grid-auto-rows : 100px ;
                            grid-gap : 1rem ;
                            display : grid ;
                        }

                        iframe {
                            height : 100% ;
                            width : 100% ;
                        }
                    `}}
                />
            </head>
            <body>

                <p> Connection Limit Test </p>

                <div class = 'Frames' >
                    { frames }
                </div>

            </body>
        </html>
    )
}
