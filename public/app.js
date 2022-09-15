
  const cep = document.getElementById("inputEntradaDeDados")
  const button = document.getElementById("btn")


  button.addEventListener("click",async () => {
    const cep_value = cep.value
    const data = await get_cep(cep_value)

    console.log(data);
    MostrarResultado(data);
   
    })
  
    
//Consulta de CEP na API
  async function get_cep (cep) {
  if(cep.length !== 8) {
  alert("cep inválido")
  }
  const url = `http://viacep.com.br/ws/${cep}/json/`
  const response = await fetch (url)
  
  return response.json()
  
  }

  
  //Mostrar Resultado no HTML
    function MostrarResultado(dados) {
    const result = document.getElementById("resultado");
  
      result.innerHTML =    `<p>logradouro:${dados.logradouro}</p> 
                            <p>bairro:${dados.bairro} </p>
                            <p>uf:${dados.uf} </p>
                            <p>ibge:${dados.ibge} </p>
                            <p>ddd:${dados.ddd} </p> ` 
                    

    }

    






