import Image from "next/image";
import LoiImage from "./loi.png";
import JoinTheWaitlist from "./JoinTheWaitList";
import Link from "next/link";

export default async function Index() {
    return (
        <div className="max-w-screen-3xl mx-auto w-full ">
            <div className="mt-16 md:mt-40 flex w-full flex-col items-center px-10 md:px-20 text-center">
                <div className="from-primary-light to-primary-dark bg-gradient-to-r bg-clip-text pb-6 text-3xl md:text-5xl font-semibold text-transparent">
                    <div>Grading 100s of assignments can</div>
                    <div>be tiring — let us give you a hand!</div>
                </div>
                <div className="text-secondary text-base md:text-lg">
                    <div className="max-w-2xl">
                        We at Klasium simplify education with technology,
                        creating innovative products that drive a better
                        educational experience for students and educators.
                    </div>
                </div>
                <Link href="#waitlist-form">
                    <div className="bg-primary-light transition duration-100 shadow border border-primary-light hover:bg-white hover:text-primary-light mt-5 flex cursor-pointer flex-row items-center space-x-2 rounded-md px-4 py-3 text-base font-medium text-white">
                        <div>Join the waitlist</div>
                        {/* <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5"
                            stroke="currentColor"
                        >
                            <path
                                d="M3.55 8.45583C3.32079 10.2105 3.18421 11.976 3.14083 13.745C5.53984 14.7471 7.83682 15.9778 10 17.42C12.1634 15.9777 14.4607 14.747 16.86 13.745C16.8166 11.976 16.68 10.2105 16.4508 8.45583M16.4508 8.45583C17.18 8.21083 17.9192 7.98416 18.6658 7.77749C15.9463 5.87104 13.0433 4.24073 10 2.91083C6.95666 4.24101 4.05367 5.87159 1.33417 7.77833C2.07856 7.98385 2.81717 8.20977 3.54917 8.45583C5.77302 9.2035 7.93075 10.1351 10 11.2408C12.069 10.135 14.2272 9.20349 16.4508 8.45583ZM5.625 12.5C5.79076 12.5 5.94973 12.4341 6.06694 12.3169C6.18415 12.1997 6.25 12.0408 6.25 11.875C6.25 11.7092 6.18415 11.5503 6.06694 11.4331C5.94973 11.3158 5.79076 11.25 5.625 11.25C5.45924 11.25 5.30027 11.3158 5.18306 11.4331C5.06585 11.5503 5 11.7092 5 11.875C5 12.0408 5.06585 12.1997 5.18306 12.3169C5.30027 12.4341 5.45924 12.5 5.625 12.5ZM5.625 12.5V9.43749C7.03895 8.55861 8.49941 7.75688 10 7.03583M4.16083 16.6608C4.62581 16.197 4.99453 15.6458 5.2458 15.039C5.49708 14.4322 5.62594 13.7818 5.625 13.125V11.875"
                                stroke="#E5EBFF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg> */}
                    </div>
                </Link>
                <div className="text-primary-dark mt-24 flex flex-col space-y-4 md:flex-row items-center space-x-8">
                    <div className="text-3xl">Proud to be a part of</div>
                    <div>
                        <Image src={LoiImage} className="w-36" alt="LOI" />
                    </div>
                </div>
                <div className="text-secondary mt-24">
                    World’s Best Rubric-Based
                </div>
                <div className="text-primary-dark mt-2 text-4xl">
                    AI Grading System
                </div>
                <div className="mt-14 md:mt-24 flex w-full flex-col *:w-full space-y-10 md:space-y-0 *:md:w-1/3 md:flex-row md:space-x-4">
                    <div className="flex flex-col items-center text-center">
                        <div>
                            <svg
                                className="h-10 w-10 md:h-12 md:w-12"
                                viewBox="0 0 50 50"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M25 4.6875C13.7812 4.6875 4.6875 13.7812 4.6875 25C4.6875 36.2188 13.7812 45.3125 25 45.3125C36.2188 45.3125 45.3125 36.2188 45.3125 25C45.3125 13.7812 36.2188 4.6875 25 4.6875ZM26.5625 12.5C26.5625 12.0856 26.3979 11.6882 26.1049 11.3951C25.8118 11.1021 25.4144 10.9375 25 10.9375C24.5856 10.9375 24.1882 11.1021 23.8951 11.3951C23.6021 11.6882 23.4375 12.0856 23.4375 12.5V25C23.4375 25.8625 24.1375 26.5625 25 26.5625H34.375C34.7894 26.5625 35.1868 26.3979 35.4799 26.1049C35.7729 25.8118 35.9375 25.4144 35.9375 25C35.9375 24.5856 35.7729 24.1882 35.4799 23.8951C35.1868 23.6021 34.7894 23.4375 34.375 23.4375H26.5625V12.5Z"
                                    fill="#365AD9"
                                />
                            </svg>
                        </div>
                        <div className="text-primary-dark mt-1 text-xl md:text-2xl font-semibold">
                            Time-efficiency
                        </div>
                        <div className="text-secondary mt-2.5 text-base md:text-lg font-medium">
                            Save time on grading and focus on what you love to
                            do most - educate!
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div>
                            <svg
                                className="h-10 w-10 md:h-12 md:w-12"
                                viewBox="0 0 50 50"
                                fill="none"
                            >
                                <g clipPath="url(#clip0_492_162)">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4.6875 1.6875C4.2731 1.6875 3.87567 1.85212 3.58265 2.14515C3.28962 2.43817 3.125 2.8356 3.125 3.25C3.125 3.6644 3.28962 4.06183 3.58265 4.35485C3.87567 4.64788 4.2731 4.8125 4.6875 4.8125H6.25V26.6875C6.25 28.3451 6.90848 29.9348 8.08058 31.1069C9.25269 32.279 10.8424 32.9375 12.5 32.9375H15.0208L12.5792 40.2562C12.4482 40.6497 12.4789 41.079 12.6645 41.4497C12.8501 41.8205 13.1753 42.1024 13.5687 42.2333C13.9622 42.3643 14.3915 42.3336 14.7622 42.148C15.133 41.9624 15.4149 41.6372 15.5458 41.2437L16.2312 39.1875H33.7687L34.4562 41.2437C34.5985 41.622 34.8818 41.9305 35.2466 42.1043C35.6115 42.2781 36.0295 42.3039 36.4129 42.1761C36.7962 42.0483 37.1152 41.7769 37.3028 41.4189C37.4903 41.0609 37.5319 40.6442 37.4188 40.2562L34.9812 32.9375H37.5C39.1576 32.9375 40.7473 32.279 41.9194 31.1069C43.0915 29.9348 43.75 28.3451 43.75 26.6875V4.8125H45.3125C45.7269 4.8125 46.1243 4.64788 46.4174 4.35485C46.7104 4.06183 46.875 3.6644 46.875 3.25C46.875 2.8356 46.7104 2.43817 46.4174 2.14515C46.1243 1.85212 45.7269 1.6875 45.3125 1.6875H4.6875ZM18.3125 32.9375H31.6875L32.7292 36.0625H17.2708L18.3125 32.9375ZM35.1562 14.1979C35.3354 14.0961 35.4926 13.9598 35.6189 13.7969C35.7451 13.6341 35.8379 13.4479 35.8919 13.249C35.9459 13.0501 35.96 12.8426 35.9334 12.6382C35.9069 12.4339 35.8402 12.2368 35.7371 12.0583C35.6341 11.8799 35.4968 11.7236 35.3331 11.5984C35.1694 11.4732 34.9826 11.3817 34.7834 11.329C34.5841 11.2763 34.3765 11.2636 34.1723 11.2915C33.9681 11.3194 33.7715 11.3875 33.5937 11.4917C30.7532 13.1359 28.2403 15.29 26.1812 17.8458L22.9792 14.6458C22.6862 14.3532 22.2891 14.1889 21.875 14.1889C21.4609 14.1889 21.0638 14.3532 20.7708 14.6458L14.5208 20.8958C14.3673 21.0389 14.2442 21.2114 14.1588 21.403C14.0734 21.5947 14.0275 21.8016 14.0238 22.0114C14.0201 22.2212 14.0587 22.4296 14.1372 22.6242C14.2158 22.8187 14.3328 22.9955 14.4812 23.1438C14.6295 23.2922 14.8063 23.4092 15.0008 23.4878C15.1954 23.5663 15.4038 23.6049 15.6136 23.6012C15.8234 23.5975 16.0303 23.5516 16.222 23.4662C16.4136 23.3808 16.5861 23.2577 16.7292 23.1042L21.875 17.9583L25.2437 21.3292C25.4054 21.4908 25.6005 21.615 25.8153 21.693C26.0301 21.771 26.2595 21.8009 26.4871 21.7807C26.7148 21.7604 26.9352 21.6904 27.1329 21.5757C27.3306 21.461 27.5007 21.3043 27.6312 21.1167C29.6032 18.2876 32.1719 15.9258 35.1562 14.1979Z"
                                        fill="#365AD9"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_492_162">
                                        <rect
                                            width="50"
                                            height="50"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>{" "}
                        <div className="text-primary-dark mt-1 text-xl md:text-2xl font-semibold">
                            Grade assignments at scale
                        </div>
                        <div className="text-secondary mt-2.5 text-base md:text-lg font-medium">
                            Too many assignments to grade this weekend? - No
                            problem. We’ve got you!
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div>
                            <svg
                                className="h-10 w-10 md:h-12 md:w-12"
                                viewBox="0 0 50 50"
                                fill="none"
                            >
                                <g clipPath="url(#clip0_492_170)">
                                    <path
                                        d="M43.75 13.2812C43.75 18.8896 35.3542 23.4375 25 23.4375C14.6458 23.4375 6.25 18.8896 6.25 13.2812C6.25 7.67292 14.6458 3.125 25 3.125C35.3542 3.125 43.75 7.67292 43.75 13.2812Z"
                                        fill="#365AD9"
                                    />
                                    <path
                                        d="M25 26.5625C30.5937 26.5625 35.8125 25.3417 39.7458 23.2104C41.1934 22.4419 42.5242 21.471 43.6979 20.3271C43.7313 20.5792 43.75 20.8354 43.75 21.0938C43.75 26.7021 35.3542 31.25 25 31.25C14.6458 31.25 6.25 26.7021 6.25 21.0938C6.25 20.8354 6.26875 20.5792 6.30208 20.3271C7.47587 21.471 8.80659 22.4418 10.2542 23.2104C14.1854 25.3417 19.4062 26.5625 25 26.5625Z"
                                        fill="#365AD9"
                                    />
                                    <path
                                        d="M25 34.375C30.5937 34.375 35.8125 33.1542 39.7458 31.0229C41.1935 30.2544 42.5242 29.2835 43.6979 28.1396C43.7313 28.3917 43.75 28.6479 43.75 28.9063C43.75 34.5146 35.3542 39.0625 25 39.0625C14.6458 39.0625 6.25 34.5146 6.25 28.9063C6.25 28.6479 6.26875 28.3917 6.30208 28.1396C7.47585 29.2835 8.80658 30.2543 10.2542 31.0229C14.1854 33.1542 19.4062 34.375 25 34.375Z"
                                        fill="#365AD9"
                                    />
                                    <path
                                        d="M25 42.1875C30.5937 42.1875 35.8125 40.9667 39.7458 38.8354C41.1935 38.0669 42.5242 37.096 43.6979 35.9521C43.7313 36.2042 43.75 36.4604 43.75 36.7188C43.75 42.3271 35.3542 46.875 25 46.875C14.6458 46.875 6.25 42.3271 6.25 36.7188C6.25 36.4604 6.26875 36.2042 6.30208 35.9521C7.47585 37.096 8.80658 38.0668 10.2542 38.8354C14.1854 40.9667 19.4062 42.1875 25 42.1875Z"
                                        fill="#365AD9"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_492_170">
                                        <rect
                                            width="50"
                                            height="50"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>{" "}
                        <div className="text-primary-dark mt-1 text-xl md:text-2xl font-semibold">
                            Data-driven Insights
                        </div>
                        <div className="text-secondary mt-2.5 text-base md:text-lg font-medium">
                            Identify where students struggle and adjust teaching
                            methods accordingly.
                        </div>
                    </div>
                </div>
                <div className="mt-28 md:mt-64 flex w-full flex-col text-left md:flex-row *:w-full *:md:w-1/2">
                    <div className="text-primary-dark md:pr-48 text-3xl md:text-4xl">
                        Why our automated AI grading system?
                    </div>
                    <div className="text-secondary text-lg text-justify md:text-2xl mt-5 md:mt-0">
                        Our platform empowers educators by streamlining the
                        grading process, enabling the delivery of{" "}
                        <span className="text-primary-dark font-bold">
                            personalized feedback
                        </span>{" "}
                        on assignments{" "}
                        <span className="text-primary-dark font-bold">
                            at scale.
                        </span>{" "}
                        This not only enhances the learning experience for
                        students but also significantly
                        <span className="text-primary-dark font-bold">
                            {" "}
                            reduces the time
                        </span>{" "}
                        educators spend on grading, allowing them to focus more
                        on teaching and student engagement.
                    </div>
                </div>
                <div className="text-secondary mt-40 text-base w-full">
                    Be the first 100 to try
                    <div className="from-primary-light to-primary-dark mt-2 bg-gradient-to-r bg-clip-text text-4xl font-semibold text-transparent">
                        Join the waitlist
                    </div>
                    <div className="flex justify-center w-full">
                        <JoinTheWaitlist />
                    </div>
                </div>
            </div>
        </div>
    );
}
