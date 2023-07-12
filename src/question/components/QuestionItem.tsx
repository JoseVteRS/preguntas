import { Question } from "@prisma/client";

interface QuestionItemProps {
    question: Question;
}

const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('es-ES', {
        // dateStyle: 'medium',
        // timeStyle: 'short',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }).format(date);
}

const agoTime = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
        return interval + " años";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
        return interval + " meses";
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
        return interval + " días";
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        return interval + " horas";
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return interval + " minutos";
    }
    return Math.floor(seconds) + " segundos";
}


export const QuestionItem = ({ question }: QuestionItemProps) => {
    return (
        <article key={question.id} className="h-full">
            <div className="bg-fuchsia-800 p-2 rounded-t-xl">
                <p className="text-gray-200  flex items-center justify-between">
                    <span className="flex-1 text-xs opacity-50">{formatDate(question.createdAt)} </span>
                    <span className="flex-1 text-2xl">QME</span>
                    <small className="text-xs opacity-50 font-regular">{agoTime(question.createdAt)}</small>
                </p>
            </div>
            <div className="grid place-content-center h-full p-2 bg-fuchsia-100 rounded-b-xl" >
                <p className="text-gray-900 text-xl">{question.text}</p>
            </div>
        </article>
    )
}
