'use client'

export default function CopyToClipboard() {


    async function handleClick() {
        const image = await fetch(`${location.pathname}/opengraph-image`).then(res => res.blob())
        await navigator.clipboard.write([
            new ClipboardItem({
                [image.type]: image,
            })
        ])
    }


    return (
        <button
            onClick={handleClick}
            className="w-full bg-fuchsia-500 hover:bg-fuchsia-600 transition-all py-2 rounded-lg mt-3">
            Copiar al portapapeles
        </button>
    )
}
