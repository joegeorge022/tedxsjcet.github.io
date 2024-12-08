import type { Component } from 'solid-js';

const App: Component = () => {
    return (
        <div class='flex w-full h-screen bg-black overflow-auto text-white'>
            {/* Initial Section */}
            <div class='flex flex-col w-full h-screen md:flex-row-reverse'>
                <div class='h-1/2 md:h-full md:w-1/2 flex bg-slate-300'>

                </div>
                <div class='h-1/2 md:h-full md:w-1/2'>
                    <div class='h-2/3 flex flex-row'>
                        <div class='flex w-1/2 bg-slate-200'>

                        </div>
                        <div class='flex w-1/2 bg-slate-700 justify-center items-center'>
                            <h1 class='-rotate-90 w-fit h-fit text-3xl md:text-5xl font-bold'>Excellence<br/>beyond notice</h1>
                        </div>
                    </div>
                    <div class='h-1/3 flex flex-row'>
                        <div class='flex w-1/2 bg-white justify-center items-center'>
                            <h2 class='text-black text-2xl md:text-4xl w-fit h-fit font-bold'>
                                Different<br/> Perspectives
                            </h2>
                        </div>
                        <div class='flex w-1/2'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
