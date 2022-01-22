import React from "react";

const NonHookedCounter = (props: any) => {
    let count = 0;
    let countRef: any = React.createRef();

    return (
        <React.Fragment>
            <div className="flex flex-col">
                <div className="text-4xl text-red-500 mb-10">
                    Parent Count Value is: <span className="font-bold">
                        {props.count}
                    </span>
                </div>

                <div className="text-4xl text-green-500">
                    Local Count Value is: <span ref={countRef}>{count}</span>
                </div>
            </div>
            <div>
                <div className="mb-10">
                    <button
                        className='bg-purple-500 text-white w-full px-10 py-2 rounded-md'
                        onClick={() => {
                            count += 1;
                            console.log('count.A', count)
                        }}>Try To Increment Non Hooked Counter - Clean Way</button>
                </div>

                <div>
                    <button
                        className='bg-slate-500 text-white w-full px-10 py-2 rounded-md'
                        onClick={() => {
                            count += 1;
                            console.log('count.B', count)
                            countRef.current.innerHTML = count;
                        }}>Try To Increment Non Hooked Counter - Dark Way</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NonHookedCounter;
