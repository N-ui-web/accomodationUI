import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

export function InfoDropDown({ title, body }) {
    const [opened, setOpened] = useState(true);
    return (
        <div className="bg-teal-200 border-2 border-green-300 rounded-lg text-green-900 divide-y-4 divide-green-500/20 mx-auto my-3 w-full">
            <button
                className="p-3 gap-3 flex items-center justify-between pb-2 w-full hover:bg-green-300 transition-all duration-300"
                onClick={() => setOpened(!opened)}
            >
                <h1 className="text-xl font-bold text-center">{title}</h1>
                <ChevronDownIcon
                    className={`h-6 w-6 transition-all duration-300 ${opened ? "rotate-0" : "rotate-180"}`} />
            </button>
            {opened && <div className="text-start pt-3 p-3">{body}</div>}
        </div>
    );
}
