"use client"

import { baseImageURL, getDataId } from "@/api/tmdb";
import { dateItem, getImage, voteItem } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";

export default function PageDetalhes() {
    const params = useParams();
    //console.log(params)

    const [items, setItems] = useState([]);
    const imageBaseURL = baseImageURL();
    const itemVote = voteItem(items);
    const [loading,setLoading] = useState(true);
    
    useEffect(() => {

        async function loadData() {
            const dados = await getDataId(params.categoria, params.id);
            setItems(dados);                        
            setLoading(false);                        
            //console.log(dados);

        }

        loadData();
        
    }, [])


    if(loading){
        return (
            <BarLoader
            color="#00b4eb"
            height={5}
            width={'100%'}
            />
        )
    }

    return (
        <>
            <div className="w-full">
                <Image
                    className="object-cover w-full h-[500px] object-center"
                    src={`${imageBaseURL}/${items.backdrop_path}`}
                    width={1440}
                    height={500}                    
                    alt={`Poster: ${items.title || items.name}`}
                    loading="lazy"
                />
            </div>

            <div
                className="max-w-[850px] min-h-[500px] mx-auto
                relative lg:top-[-200px] flex items-center justify-between p-7 mb-12 lg:mb-0 bg-transparent lg:bg-brand-dark/60 backdrop-blur-md rounded">

                <Image
                    className="hidden lg:block object-cover w-[300px] h-[450px]"
                    src={getImage(imageBaseURL, items.poster_path)}
                    width={300}
                    height={450}
                    alt={`Poster: ${items.title || items.name}`}
                    loading="lazy"
                />


                <div className="lg:max-w-[460px] text-white ">
                    <h1 className="text-4xl font-bold">{items.title || items.name}</h1>

                    <ul className="list-disc list-inside my-3">
                        <li>Ano: {dateItem(items)}</li>
                        <li>Avaliação: {itemVote}</li>
                    </ul>

                    <p>{items.overview}</p>

                    <Link href={`/${params.categoria}`} className="block lg:inline-block text-center bg-brand-light px-6 py-1 text-brand-dark mt-3 rounded 
                    cursor-pointer hover:bg-brand hover:text-white">Voltar</Link>

                    {/* <button onClick={()=> history.go(-1) } className="bg-brand-light px-6 py-1 text-brand-dark mt-3 rounded 
                    cursor-pointer hover:bg-brand hover:text-white">Voltar</button> */}
                </div>
            </div>
        </>

    )
}