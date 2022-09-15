//Consulta de CEP na API
  const cep = document.getElementById("inputEntradaDeDados")
 

  console.log(cep)
  async function get_cep (cep) {
  if(cep.length !== 8) {
  alert("cep inválido")
  }
  const url = `http://viacep.com.br/ws/${cep}/json/`
  const response = await fetch (url)
  
  return response.json()
  
  }

  button.addEventListener("click",async () => {
    const cep_value = cep.value
    const data = await get_cep(cep_value)

    console.log(data);
    MostrarResultado(data);
    })
  
    
    
    
    function MostrarResultado(dados) {
    const result = document.getElementById("resultado");
    if(dados.erro){
      result.innerHTMl("Não foi possivel localizar endereço");
    }else{
      result.innerHTMl =    `<p>logradouro:${dados.logradouro}</p> 
                            <p>bairro:${dados.bairro} </p>
                            <p>uf:${dados.uf} </p>
                            <p>ibge:${dados.ibge} </p>
                            <p>ddd:${dados.ddd} </p> ` 
                    

    }

    
  }





