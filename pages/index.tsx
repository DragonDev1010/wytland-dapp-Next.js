import type { NextPage } from 'next'
import {useState, useEffect} from 'react'
import Header from '../components/home/header'
import SideBar from '../components/home/sideBar'
import Item from '../components/home/item'

const Home: NextPage = () => {
  const [nfts, setNfts] = useState()

  useEffect(() => {
      try {
          fetch(process.env.NEXT_PUBLIC_API_URI + 'nfts')
              .then(res => res.json())
              .then(res => {
                  if(res.length > 0)
                      setNfts([...res])
              })
      } catch (error) {
          
      }
  }, [])

  return (
    <div className="p-4 bg-slate-300 m-1">
      <Header/>
      <div className="flex">
          <div className="basis-1/5">
              <SideBar/>
          </div>
          <div className="basis-4/5 border-solid border-l-2 border-white p-1 flex flex-wrap">
              {
                  nfts != undefined ?
                  nfts.map((nft, idx) => {
                      return (
                          <Item data={nft} idx={idx} />
                      )
                  })
                  :
                  ""
              }
          </div>
      </div>
  </div>
  )
}

export default Home
