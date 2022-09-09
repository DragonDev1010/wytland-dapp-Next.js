function Header() {
    return (
        <div className="w-full h-12 flex justify-between mb-4 pl-10 pr-3">
            <input 
                type='text' 
                placeholder="Search by name or attribute"
                className="w-3/5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <select 
                id="sortOptions" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option selected>Price low to high</option>
                <option value="listed">Recently listed</option>
                <option value="created">Recently created</option>
                <option value="sold">Recently sold</option>
                <option value="received">Recently received</option>
            </select>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Make Collection Offer</button>
        </div>
    )
}

export default Header