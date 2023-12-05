import Image from "next/image";
import bell2 from "./assets/bell2.svg"
import analytics from "./assets/analytics.svg"
import time from "./assets/time.svg"





export default function TopBar() {
    const hideScrollbarStyles = {
        /* WebKit (Chrome, Safari) */
        scrollbarColor: 'transparent transparent',
    };
    return (
        <>
            <div className="flex flex-row justify-between overflow-x-scroll hide-scrollbar bg-opacity-40 rounded-lg relative" style={hideScrollbarStyles}>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col items-stretch min-w-[200px] ml-5">
                        <div className="shadow flex w-full flex-col items-stretch mt-1.5 mx-auto p-3.5 rounded-lg max-md:mt-5 bg-white h-[180px] hover:scale-105 transition">
                            <div className="flex items-stretch justify-between gap-5">
                                <Image
                                    loading="lazy"
                                    src={bell2}
                                    className="aspect-[1.09] max-w-8"
                                    alt="new"
                                />
                                <div className="text-zinc-900 text-right text-xs font-semibold leading-3 grow whitespace-nowrap self-start">
                                    Save
                                </div>
                            </div>
                            <div className="text-zinc-900 text-sm font-medium leading-4 mt-4">
                                We’ll be sending
                                <br />
                                notifications to you
                                <br />
                                here
                            </div>
                            <div className="items-stretch bg-white bg-opacity-50 self-stretch flex justify-between gap-1 mt-7 pl-1 pr-6 py-1.5 rounded-sm max-md:pr-5 text-sm  border border-[color:var(--grey-100,#E5E5E6)]">
                                hello@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch min-w-[200px] ml-5">
                        <div className="shadow flex w-full flex-col items-stretch mt-1.5 mx-auto p-3.5 rounded-lg max-md:mt-5 bg-white h-[180px] hover:scale-105 transition">
                            <div className="flex items-stretch justify-between gap-5">
                                <Image
                                    loading="lazy"
                                    src={analytics}
                                    className="aspect-[1.09] max-w-8"
                                    alt="new"
                                />
                                <div className="text-zinc-900 text-right text-xs font-semibold leading-3 grow whitespace-nowrap self-start">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox text-blue-500 h-5 w-5" checked />
                                    </label>
                                </div>
                            </div>
                            <div className="text-zinc-900 text-xs font-medium leading-3 self-stretch mt-14 max-md:mt-10">
                                Notify me when any wallets
                                <br />
                                move more than
                            </div>
                            <div className="items-stretch bg-neutral-200 bg-opacity-50 self-stretch flex justify-between gap-1 mt-4 pl-1 pr-6 py-1.5 rounded-sm max-md:pr-5">
                                <div className="text-zinc-800 text-xs font-medium leading-3 grow whitespace-nowrap">
                                    $1,000.00
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch min-w-[200px] ml-5">
                        <div className="shadow flex w-full flex-col items-stretch mt-1.5 mx-auto p-3.5 rounded-lg max-md:mt-5 bg-white h-[180px] hover:scale-105 transition">
                            <div className="flex items-stretch justify-between gap-5">
                                <Image
                                    loading="lazy"
                                    src={time}
                                    className="aspect-[1.09] max-w-8"
                                    alt="new"
                                />
                                <div className="text-zinc-900 text-right text-xs font-semibold leading-3 grow whitespace-nowrap self-start">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox text-blue-500 h-5 w-5" checked />
                                    </label>
                                </div>
                            </div>
                            <div className="text-zinc-900 text-xs font-medium leading-3 self-stretch mt-14 max-md:mt-10">
                                Notify me when any wallets
                                <br />
                                wallet dormant for
                            </div>
                            <div className="items-stretch bg-neutral-200 bg-opacity-50 self-stretch flex justify-between gap-1 mt-4 pl-1 pr-6 py-1.5 rounded-sm max-md:pr-5">
                                <div className="text-zinc-800 text-xs font-medium leading-3 grow whitespace-nowrap">
                                    $1,000.00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}