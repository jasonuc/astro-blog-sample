import type { APIRoute } from "astro"

export const GET: APIRoute = async ({ params }) => {
    return new Response(JSON.stringify({ msg: 'Hello World'}), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

export const POST: APIRoute = async ({ request }) => {
    const body = await request.json()

    return new Response(JSON.stringify(body), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    })
}