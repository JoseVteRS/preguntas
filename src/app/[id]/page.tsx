import prisma from "@/lib/prisma";
import CopyToClipboard from "@/question/components/CopyToClipboard";
import { QuestionItem } from "@/question/components/QuestionItem";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function QuestionPage({ params: { id } }: { params: { id: string } }) {

    const question = await prisma.question.findUnique({
        where: {
            id
        }
    })

    if (!question) return notFound();

    return (

        <div className="w-1/2 mx-auto my-10" >
            <Link href="/" className="text-gray-200"> ← Volver atrás </Link>
            <QuestionItem question={question} />
            <CopyToClipboard />
        </div>

    );
}