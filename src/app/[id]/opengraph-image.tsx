import prisma from '@/lib/prisma'
import { ImageResponse } from 'next/server'
import { useEffect } from 'react'

export const runtime = 'edge'

export const contentType = 'image/png'


export default async function Image({ params: { id } }: { params: { id: string } }) {


    const question = await fetch(`http://localhost:3000/api/question/${id}`).then(res => res.json())

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 64,
                    background: "white",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >

                <div
                    style={{
                        backgroundColor: 'fuchsia',
                        color: 'white',
                        padding: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                    }}
                >
                    <p>QME</p>
                </div>

                <div style={{
                    flex: 1,
                    padding: '5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }} >
                    <p>{question.text}</p>

                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }

    )
}