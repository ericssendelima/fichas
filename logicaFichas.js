var nV;
var nF;


function digitou(e){
    if(e.keyCode == 13){
        nV = document.getElementById('entradaVirolas').value;
        gerarVirolas();
    }
}

function digitouTramos(e){
    if(e.keyCode == 13){
        nF = document.getElementById('entradaTramos').value;
        gerarFlanges();
        rugBend();
        metBend();
    }
}



function gerarVirolas(){    
    let flanges = [];
    let somas = 0;
    let media = 0;
    let num2;
    let novaLabel1;

    for(let i = 0; i < nV; i++){
        num2 = 0;
        flanges = [];
        media = 0;
        somas = 0;

        for(let i = 0; i < 4; i++){
            num2 = Math.floor(Math.random() * 40 + 61); 
            //{[random(de 0 à 1) * (máx-mín)] + mín}
            // armazenando um aleatório em 'num2'
            if(num2 % 2 != 0){
                num2++;/*verivicando se o aleatório gerado é par e somando
                +1 caso seja impar */
            }

            let c = flanges.indexOf(num2);//indice do elemento gerado
            if(c == -1){
                flanges.push(num2);//armazenando o aleatório no array
            }else{
                num2 = Math.floor(Math.random() * 40 + 61); 
            //{[random(de 0 à 1) * (máx-mín)] + mín}
            // armazenando um aleatório em 'num2'
                if(num2 % 2 != 0){
                    num2++;/*verivicando se o aleatório gerado é par e somando
                    +1 caso seja impar */
                }
                flanges.push(num2);//armazenando o aleatório no array


            }
           

    /*  1° cria um novo elemento 'td'(coluna) e o armazena dentro da
    variável 'novaLabel1';
        2° cria o que vai ser escrito dentro de cada célula, no caso
    o respectivo aleatório criado dentro de flanges[i] e o adiciona dentro 
    da variável 'dadosFlanges';
        3° adiciona o 'dadosFlanges' em 'novaLabel1';
        4° por fim, adiciona a coluna criada, 'novaLabel', com seu respectivo 
    conteúdo já adicionado nela (dadosFlanges), dentro da tag HTML já existente,
    <table id='contVirolas></table>.    
    */
        novaLabel1 = document.createElement('td');
        let dadosFlanges = document.createTextNode(flanges[i]);
        novaLabel1.appendChild(dadosFlanges);
        document.getElementById('contVirolas').appendChild(novaLabel1);

        


        }

        //document.getElementById('contVirolas').appendChild(document.createElement('td').appendChild(document.createTextNode(flanges[i])));


        for(let i in flanges){
        somas += flanges[i];/*somando todos os números armazenados nas posições
        do array flanges*/
        }

        media = somas/flanges.length;/* calculando a média dos números gerados
        dentro do array flanges[]*/
    
        //criando a célula para o texto 'Média: '
        let novaBr = document.createElement('td');
        let mediaNew = document.createTextNode('Média: ');
        novaBr.appendChild(mediaNew);
        document.getElementById('contVirolas').appendChild(novaBr);

        //criando a célula para o resultado da média em si 
        novaBr = document.createElement('td');
        mediaNew = document.createTextNode(media.toFixed(2));
        novaBr.appendChild(mediaNew);
        document.getElementById('contVirolas').appendChild(novaBr);

        //criando uma nova linha na tabela
        novaBr = document.createElement('tr');
        document.getElementById('contVirolas').appendChild(novaBr);

    }

}

function gerarFlanges(){    
    let flanges = [];
    let somas = 0;
    let media = 0;
    let num2;
    let novaLabel1;

    for(let i = 0; i < nF*2; i++){
        num2 = 0;
        flanges = [];
        media = 0;
        somas = 0;

 
        for(let i = 0; i < 4; i++){
            num2 = Math.floor(Math.random() * 48 + 100); 
            //{[random(de 0 à 1) * (máx-mín)] + mín}
            // armazenando um aleatório em 'num2'
            if(num2 % 2 != 0){
                num2++;/*verivicando se o aleatório gerado é par e somando
                +1 caso seja impar */
            }

            let c = flanges.indexOf(num2);//indice do elemento gerado
            if(c == -1){
                flanges.push(num2);//armazenando o aleatório no array
            }else{
                num2 = Math.floor(Math.random() * 48 + 100); 
            //{[random(de 0 à 1) * (máx-mín)] + mín}
            // armazenando um aleatório em 'num2'
                if(num2 % 2 != 0){
                    num2++;/*verivicando se o aleatório gerado é par e somando
                    +1 caso seja impar */
                }
                flanges.push(num2);//armazenando o aleatório no array


            }
           

        novaLabel1 = document.createElement('td');
        let dadosFlanges = document.createTextNode(flanges[i]);
        novaLabel1.appendChild(dadosFlanges);
        document.getElementById('contFlanges').appendChild(novaLabel1);

        


        }

        //document.getElementById('contVirolas').appendChild(document.createElement('td').appendChild(document.createTextNode(flanges[i])));


        for(let i in flanges){
        somas += flanges[i];/*somando todos os números armazenados nas posições
        do array flanges*/
        }

        media = somas/flanges.length;/* calculando a média dos números gerados
        dentro do array flanges[]*/
    
        //criando a célula para o texto 'Média: '
        let novaBr = document.createElement('td');
        let mediaNew = document.createTextNode('Média: ');
        novaBr.appendChild(mediaNew);
        document.getElementById('contFlanges').appendChild(novaBr);

        //criando a célula para o resultado da média em si 
        novaBr = document.createElement('td');
        mediaNew = document.createTextNode(media.toFixed(2));
        novaBr.appendChild(mediaNew);
        document.getElementById('contFlanges').appendChild(novaBr);

        //criando uma nova linha na tabela
        novaBr = document.createElement('tr');
        document.getElementById('contFlanges').appendChild(novaBr);

    }

}

function rugBend(){
    

    for(let i = 0; i < nF; i++){
       
        let flanges = [];

        for(let h = 0; h < 5; h++){
           
            let flanges2 = [];

          

            for(let i = 0; i < 3; i++){
                let num2 = 0;
                num2 = Math.floor(Math.random() * 50 + 100); 
                //{[random(de 0 à 1) * (máx-mín)] + mín}
                // armazenando um aleatório em 'num2'
                if(num2 % 2 != 0){
                    num2++;/*verivicando se o aleatório gerado é par e somando
                    +1 caso seja impar */
                }

                let c = flanges.indexOf(num2);//indice do elemento gerado
                if(c == -1){
                    flanges2.push(num2);//armazenando o aleatório no array
                }else{
                    num2 = Math.floor(Math.random() * 50 + 100); 
                //{[random(de 0 à 1) * (máx-mín)] + mín}
                // armazenando um aleatório em 'num2'
                    if(num2 % 2 != 0){
                        num2++;
                    }
                    flanges2.push(num2);//armazenando o aleatório no array
                }       
            


            novaLabel1 = document.createElement('td');
            let dadosFlanges = document.createTextNode(flanges2[i]);
            novaLabel1.appendChild(dadosFlanges);
            document.getElementById('contRug').appendChild(novaLabel1);
            }
            flanges[h] = flanges2;
            //document.getElementById('contVirolas').appendChild(document.createElement('td').appendChild(document.createTextNode(flanges[i])));
            //criando uma nova linha na tabela
            novaBr = document.createElement('tr');
            document.getElementById('contRug').appendChild(novaBr);
            
        }

        console.table(flanges);


        for(let i=0; i<8; i++){
            novaBr = document.createElement('tr');
            document.getElementById('contRug').appendChild(novaBr);


        }

        novaBr = document.createElement('tr');
        document.getElementById('contRug').appendChild(novaBr);



    }


}

function metBend(){
    

    for(let i = 0; i < nF; i++){
       
        let flanges = [];

        for(let h = 0; h < 5; h++){
           
            let flanges2 = [];

          

            for(let i = 0; i < 3; i++){
                let num2 = 0;
                num2 = Math.floor(Math.random() * 70 + 60); 
                //{[random(de 0 à 1) * (máx-mín)] + mín}
                // armazenando um aleatório em 'num2'
                if(num2 % 2 != 0){
                    num2++;/*verivicando se o aleatório gerado é par e somando
                    +1 caso seja impar */
                }

                let c = flanges.indexOf(num2);//indice do elemento gerado
                if(c == -1){
                    flanges2.push(num2);//armazenando o aleatório no array
                }else{
                    num2 = Math.floor(Math.random() * 70 + 60); 
                //{[random(de 0 à 1) * (máx-mín)] + mín}
                // armazenando um aleatório em 'num2'
                    if(num2 % 2 != 0){
                        num2++;
                    }
                    flanges2.push(num2);//armazenando o aleatório no array
                }       
            


            novaLabel1 = document.createElement('td');
            let dadosFlanges = document.createTextNode(flanges2[i]);
            novaLabel1.appendChild(dadosFlanges);
            document.getElementById('contMet').appendChild(novaLabel1);
            }
            flanges[h] = flanges2;
            //document.getElementById('contVirolas').appendChild(document.createElement('td').appendChild(document.createTextNode(flanges[i])));
            //criando uma nova linha na tabela
            novaBr = document.createElement('tr');
            document.getElementById('contMet').appendChild(novaBr);
            
        }

        console.table(flanges);


        for(let i=0; i<8; i++){
            novaBr = document.createElement('tr');
            document.getElementById('contMet').appendChild(novaBr);


        }

        novaBr = document.createElement('tr');
        document.getElementById('contMet').appendChild(novaBr);



    }


}
