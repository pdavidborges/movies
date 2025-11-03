"use client";

import { getData } from "@/api/tmdb"

import { useEffect, useState } from "react"
import { Card } from "./Card";
import { BarLoader } from "react-spinners";

export function List({ categoria }) {

    //Estado, Função atualizadora = valor inicial
    const [items, setItems] = useState([]);
    //console.log(items);

    const [page, setPage] = useState(1);
    const [order, setOrder] = useState('popular');

    const [loading,setLoading] = useState(true);


    //Função(o que vai ser executado, [estado que fará o useEffect ser executado])
    useEffect(() => {
        //console.log('Componente totalmente renderizado');

        async function loadData() {
            const dados = await getData(categoria, page, order);
            //console.log(dados);
            setItems(dados);
            setLoading(false);
        }

        loadData();

    }, [order, page, loading])


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
        <div className="max-w-container-list mx-auto">

            <div className="flex justify-between my-4">

                <div>
                    <select
                        suppressHydrationWarning
                        onChange={(e) => setOrder(e.target.value)}
                        value={order}
                        className="text-brand-light border px-2">

                        <option value="popular">Populares</option>
                        <option value="top_rated">Melhores</option>

                        {
                            categoria == 'filmes' ?

                                <>
                                    <option value="now_playing">Em cartaz</option>
                                    <option value="upcoming">Em breve</option>
                                </>

                                :

                                <>
                                    <option value="on_the_air">No ar</option>
                                    <option value="airing_today">Lançamento</option>
                                </>
                        }

                    </select>
                </div>

                <div className="flex gap-1">
                    <button
                        disabled={page == 1}
                        onClick={() => setPage(page - 1)}
                        className="disabled:opacity-20 border border-brand-light px-3 text-white cursor-pointer"> &#8592;
                    </button>

                    <span className="text-brand-accent">{page}</span>

                    <button
                        onClick={() => setPage(page + 1)}
                        className="border border-brand-light px-3 text-white cursor-pointer"> &#8594;
                    </button>
                </div>

            </div>

            <div className="flex gap-5 flex-wrap justify-center">

                {
                    items.map(item => (
                        <Card item={item} key={item.id} categoria={categoria} />
                    ))
                }

            </div>

        </div>

    )

}