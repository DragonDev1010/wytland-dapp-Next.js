import {useState, useEffect} from 'react'
import Image from 'next/image'
import getImageData from '../getImageData'

function Item(props) {
    const [nftImg, setNftImg] = useState()

    // Parse image data fetched from db into image file
    useEffect(() => {
        if( props.data.img !== null) {
            let temp = getImageData(props.data.img.data.data)
            setNftImg(temp)
        }
    }, [])
    
    return (
        <div className='basis-1/4'>
            <div className='bg-slate-100 p-4 m-2 shadow-xl rounded-lg'>
                <div className='flex justify-center mb-4'>
                    <Image src={nftImg} width={150} height={200}/>
                </div>
                <p className='text-xl font-bold capitalize'>{props.data.name}</p>
                <p className='text-gray-600'>Price</p>
                <p className='text-gray-600'>{props.data.price} MATIC</p>
                <button className="mt-4 bg-blue-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                    Buy NFT
                </button>
            </div>
        </div>
    )
}

export default Item