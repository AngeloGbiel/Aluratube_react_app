import { useState } from "react";
import { StyledRegisterVideo } from "./styles";

 
function useForm(){
    const [values, setValues] = useState({title:"",URL:""});
    return{
        values,
        handleChange: e => {
            const value = e.target.value
            const name = e.target.name
            setValues({
                ...values,
                [name]:value
            })
        },
        clearForm(){
            setValues({})
        }
    }
}

export default function RegisterVideo(){
    const formCadastro = useForm()
    const [formVisivel, setFormVisivel] = useState(false);
    return(
        <StyledRegisterVideo>
            <button className="add-video" onClick={()=>setFormVisivel(true)}>
                +
            </button>
            {
                formVisivel && (
                <form onSubmit={(e)=>{ //toda vez q o formulário for submetido, executar o preventDefault
                    e.preventDefault()
                    setFormVisivel(false)
                    formCadastro.clearForm()
                    console.log(formCadastro.values)
                }}>
                    <div>
                        <button type="button" className="close-modal" onClick={()=>setFormVisivel(false)}>
                            x
                        </button>
                        <input 
                        placeholder="Título do Vídeo" 
                        value={formCadastro.values.titulo}
                        name = "title"
                        onChange={formCadastro.handleChange}
                        />
                        <input 
                        placeholder="URL" 
                        value={formCadastro.values.url}
                        name = "URL"
                        onChange={formCadastro.handleChange}
                        />
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
                )
            }
        </StyledRegisterVideo>
    )
}
{/* <input
    onChange={(e)=>{
        const value = e.target.value
        setValues({
            ...values,
            titulo: value
        })
    }}
/> */}