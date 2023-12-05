import * as React from "react";
import bg_image from "./bg_img.svg"
import BottomCard from "./BottomCard";
import TopBar from "./TopCard";
import bell from "./assets/bell.svg"
import feature from "./assets/feature.svg"
import eye from "./assets/eye.svg"
import logo from "./assets/logo.svg"



import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LandingPage() {
    const [email, setEmail] = React.useState<string>('');
    const router = useRouter();
  
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
  
      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Invalid email format. Please enter a valid email address.');
        return;
      }
  
      // Redirect if the email is valid
      router.push('https://app.loch.one/welcome'); // Replace '/welcome' with your desired redirect path
  
      // If you want to perform additional actions before redirecting, do them here
  
      // Form submission logic (replace this with your actual form submission code)
      console.log('Email:', email);
      // Your form submission code goes here
    };

    return (
        <div className="bg-black ">
            <div className="bg-new-bg">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 bg-dark-bg">
                    <div className="flex flex-col items-stretch w-3/5 max-md:w-full max-md:ml-0">
                        <div className="flex grow flex-col items-stretch w-full py-6 max-md:max-w-full">
                            <div className="flex flex-col px-16 items-end max-md:max-w-full max-md:px-5">
                                <div className="self-stretch max-md:max-w-full max-md:pr-5">
                                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                        <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0 justify-between">
                                            <div className="flex grow flex-col items-start mt-2 max-md:mt-3.5 w-[80%]">
                                                <Image
                                                    loading="lazy"
                                                    src={bell}
                                                    className="aspect-[1.06]"
                                                    alt="new"
                                                />
                                                <div className="text-zinc-100 text-3xl font-medium leading-9 self-stretch mt-4">
                                                    Get notified when a highly correlated whale makes a move
                                                </div>
                                                <div className="text-zinc-100 text-base font-medium leading-5 self-stretch mt-5 opacity-70 w-max">
                                                    Find out when a certain whale moves<br /> more than any preset
                                                    amount on-chain or<br /> when a dormant whale you care about<br />
                                                    becomes active.
                                                </div>
                                            </div>
                                        </div>
                                        <TopBar />
                                    </div>
                                </div>
                                <div className="self-stretch max-md:max-w-full max-md:pr-5">
                                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                        <div className="flex flex-col  max-md:w-full max-md:ml-0">
                                            <Image
                                                    loading="lazy"
                                                    src={feature}
                                                    className="min-w-[500px] -ml-20"
                                                    alt="new"
                                            />
                                        </div>
                                        <div className="flex flex-col items-stretch w-[57%] ml-5 max-md:w-full max-md:ml-0 mt-6">
                                            <div className="flex flex-col mt-10 items-end max-md:max-w-full max-md:mt-10">
                                                <div className="flex w-[249px] max-w-full flex-col items-end">
                                                        <Image
                                                            loading="lazy"
                                                            src={eye}
                                                            className="aspect-[1.09] object-contain  overflow-hidden grow max-md:mt-10"
                                                            alt="new"
                                                    />
                                                    <div className="text-zinc-100 text-right text-3xl font-medium leading-9 self-stretch mt-6">
                                                        Watch what the whales are doing
                                                    </div>
                                                </div>
                                                <div className="text-zinc-100 text-right text-base font-medium leading-5 self-stretch mt-5 max-md:max-w-full opacity-70">
                                                    All whales are not equal. Know exactly <br />what the whales impacting YOUR <br />portfolio are doing.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-zinc-100 text-right text-2xl font-medium leading-8 w-[400px] max-w-full max-md:mr-2.5">
                                    Testimonials
                                </div>
                            </div>
                            <div className="flex flex-col items-stretch mt-6 mb-2.5 px-16 max-md:max-w-full max-md:px-5">
                                <div className="bg-neutral-200 bg-opacity-50 shrink-0 h-px max-md:max-w-full" />
                                <BottomCard />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-2/5 ml-5 max-md:w-full max-md:ml-0">
                        <div className="shadow-2xl bg-white flex-grow flex-col justify-center items-center w-full px-16 py-12 max-md:max-w-full max-md:px-5">
                            <div className="flex w-[365px] max-w-full flex-col items-stretch mt-80 mb-52 max-md:my-10">
                                <div className="flex flex-col items-stretch px-3.5">
                                    <div className="text-zinc-400 text-4xl font-medium leading-10">
                                        Sign up for exclusive access.
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <input
                                            type="text"
                                            className="text-stone-300 text-base font-medium leading-5 whitespace-nowrap border border-[color:var(--grey-100,#E5E5E6)] shadow bg-white justify-center mt-10 pl-6 pr-16 py-5 rounded-lg border-solid items-start max-md:mt-10 max-md:px-5"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={handleEmailChange}
                                            required // Make the email field required
                                        />
                                        <button
                                            type="submit"
                                            className="text-white text-center text-base font-semibold leading-5 whitespace-nowrap justify-center items-center border border-[color:var(--grey-900,#19191A)] bg-zinc-900 mt-6 px-16 py-5 rounded-lg border-solid max-md:px-5 hover:scale-105 transition hover:bg-white hover:text-black"
                                        >
                                            Get started
                                        </button>
                                    </form>
                                </div>
                                <div className="text-zinc-900 text-center text-base font-semibold leading-5 whitespace-nowrap mt-11 max-md:mt-10">
                                    You’ll receive an email with an invite link to join.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}


