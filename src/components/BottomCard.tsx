import React from 'react';

const hideScrollbarStyles = {
    /* WebKit (Chrome, Safari) */
    scrollbarColor: 'transparent transparent',
};

import Image from "next/image";
import logo from "./assets/logo.svg"


export default function BottomCard() {
    return (
        <>
            <div className="flex flex-row justify-between hide-scrollbar relative" style={hideScrollbarStyles}>
                <div className="">
                <Image
                    loading="lazy"
                    src={logo}
                    className="aspect-[1.09] max-w-16 absolute bottom-10"
                    alt="new"
                />
                </div>
                <div className="flex justify-between gap-5 mt-10 items-end max-md:max-w-full max-md:flex-wrap max-md:justify-center w-[500px]">
                    <div className="flex p-5 space-x-4 overflow-x-scroll hide-scrollbar">
                        <div className="min-w-[300px] shadow bg-white self-stretch flex grow basis-[0%] flex-col p-5 rounded-xl hover:scale-105 transition">
                            <div className="items-stretch flex justify-between gap-2">
                                <div className="text-zinc-900 text-base font-semibold leading-5 whitespace-nowrap">
                                    Jack F
                                </div>
                                <div className="text-neutral-400 text-sm font-medium leading-4 self-center whitespace-nowrap my-auto">
                                    Ex Blackrock PM
                                </div>
                            </div>
                            <div className="text-neutral-800 text-base font-medium leading-5 mt-5">
                                “Love how Loch integrates portfolio analytics and whale
                                watching into one unified app.”
                            </div>
                        </div>
                        <div className="min-w-[300px] shadow bg-white self-stretch flex grow basis-[0%] flex-col p-5 rounded-xl hover:scale-105 transition">
                            <div className="items-stretch flex justify-between gap-2">
                                <div className="text-zinc-900 text-base font-semibold leading-5 whitespace-nowrap">
                                    Yash P
                                </div>
                                <div className="text-neutral-400 text-sm font-medium leading-4 self-center whitespace-nowrap my-auto truncate">
                                    Research, 3poch Crypto Hedge Fund
                                </div>
                            </div>
                            <div className="text-neutral-800 text-base font-medium leading-5 mt-5">
                                “I use Loch everyday now. I {`don't`} think I could analyze
                                crypto whale trends markets without it. {`I'm`} addicted!”
                            </div>
                        </div>
                        <div className="min-w-[300px] shadow bg-white self-stretch flex grow basis-[0%] flex-col p-5 rounded-xl hover:scale-105 transition">
                            <div className="items-stretch flex justify-between gap-2">
                                <div className="text-zinc-900 text-base font-semibold leading-5 whitespace-nowrap">
                                    Shiv S
                                </div>
                                <div className="text-neutral-400 text-sm font-medium leading-4 self-center whitespace-nowrap my-auto">
                                    Co-Founder Magik Labs
                                </div>
                            </div>
                            <div className="text-neutral-800 text-base font-medium leading-5 mt-5">
                                “Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
