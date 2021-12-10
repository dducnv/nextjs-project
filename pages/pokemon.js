import {useEffect, useState} from "react";
import Link from "next/link";
import Skeleton from 'react-loading-skeleton'
// eslint-disable-next-line @next/next/no-document-import-in-page
import Head from 'next/head'
export default function pokemon(pokemon){
    const [loading,setLoad] = useState(true)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [allPokemon,setAllPokemon] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loadMore,setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
    async function getAllPokemon() {
        const res = await fetch(loadMore)
        const data = await res.json();
        setLoadMore(data.next)
        function createPokemonObject(result){
            result.forEach(async (pokemon) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json();
                setAllPokemon(curList => [...curList, data])
                setLoad(false)
            })
        }
        createPokemonObject(data.results)
    }
    console.log(allPokemon)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        getAllPokemon();
    },[])
    function renderItems(){
        if(loading){
            return (
                <>
                    <article className="flex flex-col bg-coolGray-50">
                       <Skeleton height={200}/>
                        <div className="flex flex-col flex-1 p-6">
                            <a href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-600"><Skeleton height={20} width={100}/></a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug"><Skeleton height={20}/></h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                                <span><Skeleton height={20} width={70}/></span>
                            </div>
                        </div>
                    </article>
                    <article className="flex flex-col bg-coolGray-50">
                        <Skeleton height={200}/>
                        <div className="flex flex-col flex-1 p-6">
                            <a href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-600"><Skeleton height={20} width={100}/></a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug"><Skeleton height={20}/></h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                                <span><Skeleton height={20} width={70}/></span>
                            </div>
                        </div>
                    </article>
                    <article className="flex flex-col bg-coolGray-50">
                        <Skeleton height={200}/>
                        <div className="flex flex-col flex-1 p-6">
                            <a href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-600"><Skeleton height={20} width={100}/></a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug"><Skeleton height={20}/></h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                                <span><Skeleton height={20} width={70}/></span>
                            </div>
                        </div>
                    </article>
                    <article className="flex flex-col bg-coolGray-50">
                        <Skeleton height={200}/>
                        <div className="flex flex-col flex-1 p-6">
                            <a href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-600"><Skeleton height={20} width={100}/></a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug"><Skeleton height={20}/></h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                                <span><Skeleton height={20} width={70}/></span>
                            </div>
                        </div>
                    </article>
                    <article className="flex flex-col bg-coolGray-50">
                        <Skeleton height={200}/>
                        <div className="flex flex-col flex-1 p-6">
                            <a href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-600"><Skeleton height={20} width={100}/></a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug"><Skeleton height={20}/></h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                                <span><Skeleton height={20} width={70}/></span>
                            </div>
                        </div>
                    </article>
                    <article className="flex flex-col bg-coolGray-50">
                        <Skeleton height={200}/>
                        <div className="flex flex-col flex-1 p-6">
                            <a href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-600"><Skeleton height={20} width={100}/></a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug"><Skeleton height={20}/></h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                                <span><Skeleton height={20} width={70}/></span>
                            </div>
                        </div>
                    </article>
                    <article className="flex flex-col bg-coolGray-50">
                        <Skeleton height={200}/>
                        <div className="flex flex-col flex-1 p-6">
                            <a href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-600"><Skeleton height={20} width={100}/></a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug"><Skeleton height={20}/></h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                                <span><Skeleton height={20} width={70}/></span>
                            </div>
                        </div>
                    </article>
                    <article className="flex flex-col bg-coolGray-50">
                        <Skeleton height={200}/>
                        <div className="flex flex-col flex-1 p-6">
                            <a href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-600"><Skeleton height={20} width={100}/></a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug"><Skeleton height={20}/></h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                                <span><Skeleton height={20} width={70}/></span>
                            </div>
                        </div>
                    </article>

                </>
            )
        }
        return(
            <>
                {allPokemon.map(pokemon => (

                    <>
                        <article className={`flex flex-col bg-coolGray-50 ${pokemon.types[0].type.name}`}>
                            <a href="#" className="px-2 md:py-2 lg:py-2" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-contain cover w-full h-52 bg-coolGray-500" src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-600">Type: {pokemon.types[0].type.name}</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{pokemon.name}</h3>

                            </div>
                        </article>
                    </>
                ))}
            </>
        )
    }
    return(
        <>
            <Head>
                <title>Pokemon</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/png" href="https://uploads-ssl.webflow.com/612a3d9cd9c35344a2460d68/61b2181355e88e77082f397d_Myloc.svg"/>
                <link rel="icon" type="image/png" href="https://uploads-ssl.webflow.com/612a3d9cd9c35344a2460d68/61b2181355e88e77082f397d_Myloc.svg"/>
            </Head>
            <section className=" max-w-7xl mx-auto py-6 sm:py-12 bg-coolGray-100 text-coolGray-800">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold capitalize " >Pokemon</h2>
                        <p className="font-serif text-sm text-coolGray-600">Dữ Liệu đươc sử dụng: <a className="text-indigo-500 " href={"https://pokeapi.co/docs/v2"}>Pokemon API</a></p>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
                        {renderItems()}
                    </div>
                </div>
                <div className="text-center">
                    <button type="button" disabled={loading} onClick={() =>getAllPokemon()} className="px-8 py-3 text-center font-semibold rounded bg-gray-900 hover:bg-gray-700 text-white">{!loading?"Load More" : "Loading..."}</button>
                </div>

            </section>
        </>
    )
}
