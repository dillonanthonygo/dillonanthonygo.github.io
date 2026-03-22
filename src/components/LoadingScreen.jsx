import { useEffect, useState } from "react"

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "<Hello World! />";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index))
            index++;

            if(index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-100 text-slate-800">
            <div className="mb-4 font-mono text-4xl font-bold text-blue-700">
                {text} <span className="animate-blink ml-1 text-blue-500"> | </span>
            </div>

            <div className="relative h-[2px] w-[200px] overflow-hidden rounded-full bg-slate-300">
                <div className="h-full w-[40%] animate-loading-bar bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.45)]">
                    {" "}
                </div>
            </div>


        </div>
    );
}