import axios from "axios";
import { NextRequest } from "next/server";
import { jwtVerify } from 'jose'


export async function GET(req: NextRequest) {
    try {
        const jwt = req.cookies.get("session")?.value;
        if (!jwt) {
            throw new Error("JWT token is missing");
        }
        const data = await jwtVerify(jwt, new TextEncoder().encode(process.env.JWT_SECRET));
        console.log(data)
        //const userId = data.payload.userId
        const res = await axios.get(`https://dlbackendtws.azurewebsites.net/reservations/${1}`, {
            headers: {
                "x-api-key": process.env.API_KEY
            }
        })
        console.log(res.data)

        const reservations = res.data;
        return new Response(JSON.stringify(reservations), {
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch (e) {
        console.log(e)
    }
}