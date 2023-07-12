'use client'

import { FormEvent, useState } from 'react'
import { createQuestion } from '../helper/question';
import { useRouter } from 'next/navigation';

export const NewQuesiton = () => {
    const router = useRouter();
    const [text, setText] = useState('');


    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (text.trim().length === 0) return;

        await createQuestion(text);
        router.refresh();

        setText('');
    }


    return (
        <form onSubmit={onSubmit} >
            <div className='w-full rounded-t-xl bg-fuchsia-900 p-2'>
                <p className="text-gray-200 font-bold uppercase text-2xl ">QME</p>
            </div>
            <input type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
                className="w-full text-xl pl-3 pr-3 py-2 border-2 min-h-[100px] rounded-b-xl border-gray-200 outline-none focus:border-fuchsia-500 transition-all text-gray-900"
                placeholder="Pregunta lo que quieras" />

            <button type='submit' className="w-full bg-fuchsia-500 hover:bg-fuchsia-600 transition-all py-2 rounded-lg mt-3">
                Crear
            </button>

        </form>
    )
}
