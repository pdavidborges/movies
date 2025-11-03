export function Banner({titulo, descricao, categoria}){
    
    // let bg = ''
    // if(categoria == 'filmes'){
    //     bg = 'bg-filmes';
    // }

    // else{
    //     bg = 'bg-series'
    // }

    let bg = categoria == 'filmes' ? 'bg-filmes' : 'bg-series';

    return(
        <div className={`${bg} h-80 md:h-[430px] bg-cover bg-center text-center flex items-center justify-center`}>
            <div className="mt-24">
                <h1 className="text-white text-4xl md:text-5xl font-bold">{titulo}</h1>
                <p className="text-brand-accent">{descricao}</p>                
            </div>
        </div>
    )

}