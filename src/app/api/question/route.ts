import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"
import * as yup from 'yup'

const questionSchema = yup.object({
    text: yup.string().required()
})

export async function POST(request: Request) {


    try {
        const { text } = await questionSchema.validate(await request.json());

        const todo = await prisma.question.create({ data: { text } })

        return NextResponse.json(todo);

    } catch (error) {
        return NextResponse.json(error, { status: 400 });
    }
}