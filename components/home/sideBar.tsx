function SideBar() {
    return (
        <div className="mx-10">
            <div className="border-b-2 border-white pb-10 mb-10">
                <p className="mb-4 text-xl font-bold">Status</p>
                <div className="form-check pb-2">
                    <label className="form-check-label inline-block text-gray-800" htmlFor="buyNow">
                        Buy Now
                    </label>
                    <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-right mr-2 cursor-pointer" type="checkbox" value="" id="buyNow"/>
                </div>
                <div className="form-check pb-2">
                    <label className="form-check-label inline-block text-gray-800" htmlFor="onAuction">
                        On Auction
                    </label>
                    <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-right mr-2 cursor-pointer" type="checkbox" value="" id="onAuction"/>
                </div>
                <div className="form-check pb-2">
                    <label className="form-check-label inline-block text-gray-800" htmlFor="buyWithCard">
                        Buy with card
                    </label>
                    <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-right mr-2 cursor-pointer" type="checkbox" value="" id="buyWithCard"/>
                </div>
            </div>
            <div>
                <p className="mb-4 text-xl font-bold">Price</p>
                <div className="flex">
                    <select 
                        id="curOptions" 
                        className="basis-1/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value='eth'>ETH</option>
                        <option value="usd">USD</option>
                        <option value="sol">SOL</option>
                    </select>
                    <div className="basis-2/3 flex justify-between items-center pl-4">
                        <input 
                            id="min" 
                            type="number" 
                            className="w-2/5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Min" 
                        />
                        to
                        <input 
                            id="max" 
                            type="number" 
                            className="w-2/5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Max" 
                        />
                    </div>
                </div>
                <button
                    className="mt-4 bg-blue-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                >
                    Apply
                </button>
            </div>
        </div>
    )
}

export default SideBar