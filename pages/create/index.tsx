import {useState, useEffect, useRef, useCallback} from 'react'
import Image from 'next/image'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import nftContractABI from '../../abi/nftContract.json'
import SuccessMsg from '../../components/notifications/success'
import logo from '../../assets/logo.jpg'

function Create() {
    const inputFile = useRef(null) 
    const [imgFile, setImgFile] = useState(null)
    const [name, setName] = useState(String)
    const [desc, setDesc] = useState(String)
    const [price, setPrice] = useState(Number)
    const [quantity, setQuantity] = useState(Number)

    const { config } = usePrepareContractWrite({
        addressOrName: '0x209bC542c466e970de0deFe232aB24975E50CFEc',
        contractInterface: nftContractABI,
        functionName: 'mint',
        args: ['']
    })
    const { isSuccess, write } = useContractWrite(config)

    // Refer upload button click to file upload input
    const openFile = (e) => {
        e.preventDefault()
        inputFile.current.click();
    };

    // Initialize form after form submitting
    const initForm = () => {
        setImgFile(null)
        setName('')
        setDesc('')
        setPrice(0)
        setQuantity(0)
    }

    // Store metadata on the database using backend server
    const createNft = () => {
        var data = new FormData()
        data.append('file', imgFile)
        data.append('name', name)
        data.append('description', desc)
        data.append('price', price)
        try {
            fetch(
                process.env.NEXT_PUBLIC_API_URI + 'nfts',
                {
                    method: 'POST',
                    body: data
                }
            )
                .then( res => {
                    if (res.status == 200){
                        initForm()
                        return res.json()
                    }
                })
        } catch (error) {
            
        }
    }

    // If transactions is success, store metadata on database
    useEffect(() => {
        if(isSuccess)
            createNft()
    }, [isSuccess])

    return (
        <>
        {
            isSuccess?
            <SuccessMsg msg="Minted Successfully"/>
            :
            ""
        }
            <div className="flex w-full py-1 px-96">
                {/* Uploade Image Preview Block */}
                <div className="w-1/4 m-4 bg-slate-100 rounded-xl p-8">
                    <p className='text-2xl pb-5'>Preview Image</p>
                    <div className='w-full'>
                        {
                            imgFile == null ?
                            <Image src={logo}/>
                            :
                            <Image src={URL.createObjectURL(imgFile)} alt="preview image" width={500} height={500}/>
                        }
                    </div>
                </div>
                {/* NFT Create Form Block */}
                <div className="w-3/4 m-4 bg-slate-200 rounded-xl p-12">
                    <form onSubmit={createNft}>
                        <div className='mb-3'>
                            <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Upload NFT</label>
                            <input type="file" id="image" ref={inputFile} style={{display:"none"}} onChange={e => setImgFile(e.target.files[0])} />
                            <button className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onClick={openFile}>Upload File</button>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">NFT Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Input NFT Name"
                                value={name}
                                onChange={e => {setName(e.target.value)}}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                            <textarea 
                                id="desc" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Input NFT Description"
                                value={desc}
                                onChange={e => {setDesc(e.target.value)}}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Quantity</label>
                            <input 
                                id="quantity" 
                                type="number" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Input NFT Quantity" 
                                value={quantity}
                                onChange={e => {setQuantity(e.target.value)}}
                            />
                        </div>
                        <div className='mb-12'>
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
                            <input 
                                id="price" 
                                type="number" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Input NFT Price" 
                                value={price}
                                onChange={e => {setPrice(e.target.value)}}
                            />
                        </div>

                        <input 
                            type='button' 
                            className="bg-blue-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            value='Create'
                            onClick={() => write?.()}
                        />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Create