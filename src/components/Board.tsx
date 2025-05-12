import Square from "./Square";

interface Props {
    name: string
}

const Board = ({ name }: Props) => {
    // const identifiers = Array.from(
    //     { length: 10 }, (_, idx) => (idx+1).toString()
    // )

    const ident = Array.from({length: 9}, (_, name) => `Box ${name+1}`)
   
    return (
        <section id={name} className="container p-8 grid grid-cols-3 grid-rows-3 gap-4 border-2 border-green-500">
            {
                ident.map( (id) => {
                    return <Square key={id} sqId={id} sqContent={id}/>
                })
            }
        </section>
    )
};

export default Board;