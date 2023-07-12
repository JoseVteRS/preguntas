import prisma from "@/lib/prisma";
import { NewQuesiton } from "@/question/components/NewQuesiton";
import { QuestionItem } from "@/question/components/QuestionItem";
import Link from "next/link";

export default async function Home() {

  const questions = await prisma.question.findMany();

  return (
    <main className="min-h-screen p-24 mx-auto w-full md:w-2/3 xl:w-1/2">
      <h1 className="text-4xl font-bold text-center">QME</h1>

      <section className="mt-10">
        <NewQuesiton />

      </section>


      <hr className="opacity-20 my-10" />

      <section className="flex flex-wrap gap-5" >

        {
          questions.map((question) => (

            <Link href={`/${question.id}`} key={question.id} className="h-full" >
              <QuestionItem question={question} />
            </Link>

          ))
        }
      </section>

    </main>
  )
}
