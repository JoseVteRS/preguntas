import prisma from "@/lib/prisma"
import { NextResponse } from "next/server";


interface Segments {
    params: {
        id: string;
    }
}

const getQuestion = async (id: string) => {
    const question = await prisma.question.findFirst({
        where: { id }
    })

    return question
}


export async function GET(request: Request, { params }: Segments) {

    const question = await getQuestion(params.id)

    return NextResponse.json(question);

}