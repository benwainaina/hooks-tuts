import React, { useState } from "react";

const HookedCounter = (props: any) => {
    const [count, updateCount] = useState(0);

    return (
        <React.Fragment>
            <div className="flex flex-col">
                <div className="text-4xl text-red-500 mb-10">
                    Parent Count Value is: <span className="font-bold">
                        {props.count}
                    </span>
                </div>

                <div className="text-4xl text-green-500">
                    Local Count Value is: {count}
                </div>
            </div>
            <div>
                <button
                    className='bg-purple-500 text-white w-full px-10 py-2 rounded-md'
                    onClick={() => updateCount(count + 1)}>Increment Hooked Counter</button>
            </div>
        </React.Fragment>
    )
}

export default HookedCounter;
