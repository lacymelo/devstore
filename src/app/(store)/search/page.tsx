import Image from "next/image";
import Link from "next/link";

export default async function Search() {
    return (
        <div className="flex flex-col gap-4">
            <p className="text-sm">
                Resultados para: <span className="font-semibold">moletom</span>
            </p>

            <div className="grid grid-cols-3 gap-6">
                <Link
                    href={`/product/moletom-never-stop-learning`}
                    className="group relative items-end justify-center bg-zinc-900 rounded-lg overflow-hidden"
                >
                    <Image
                        src={'/moletom-never-stop-learning.png'}
                        width={480}
                        height={480}
                        quality={100}
                        alt=""
                        className="group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute bottom-10 right-10 h-12 p-1 max-w-[280px] flex items-center gap-2 border-2 border-zinc-500 rounded-full bg-black/60 pl-1">
                        <span className="text-sm truncate">Moletom Never Stop Learning</span>
                        <span className="bg-violet-500 px-4 h-full flex items-center justify-between rounded-full font-semibold">
                            {Number(129).toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            })}
                        </span>
                    </div>
                </Link>
                <Link
                    href={`/product/moletom-never-stop-learning`}
                    className="group relative items-end justify-center bg-zinc-900 rounded-lg overflow-hidden"
                >
                    <Image
                        src={'/moletom-never-stop-learning.png'}
                        width={480}
                        height={480}
                        quality={100}
                        alt=""
                        className="group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute bottom-10 right-10 h-12 p-1 max-w-[280px] flex items-center gap-2 border-2 border-zinc-500 rounded-full bg-black/60 pl-1">
                        <span className="text-sm truncate">Moletom Never Stop Learning</span>
                        <span className="bg-violet-500 px-4 h-full flex items-center justify-between rounded-full font-semibold">
                            {Number(129).toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            })}
                        </span>
                    </div>
                </Link>
                <Link
                    href={`/product/moletom-never-stop-learning`}
                    className="group relative items-end justify-center bg-zinc-900 rounded-lg overflow-hidden"
                >
                    <Image
                        src={'/moletom-never-stop-learning.png'}
                        width={480}
                        height={480}
                        quality={100}
                        alt=""
                        className="group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute bottom-10 right-10 h-12 p-1 max-w-[280px] flex items-center gap-2 border-2 border-zinc-500 rounded-full bg-black/60 pl-1">
                        <span className="text-sm truncate">Moletom Never Stop Learning</span>
                        <span className="bg-violet-500 px-4 h-full flex items-center justify-between rounded-full font-semibold">
                            {Number(129).toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            })}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}