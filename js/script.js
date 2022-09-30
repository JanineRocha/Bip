 
            //Primeira coisa: definir as variáveis recuperando os elementos
          
            //<script type="text/javascript">
            //recuperando o elemento com base no id

        var display = document.getElementById("display"); //recuperando id display

        var mnts = document.getElementById("mnts");     //recuperando id minutos mnts
        var sgnds = document.getElementById("sgnds");   //recuperando id segundos sgds


        var iniciar = document.getElementById("iniciar");    //recuperando id começar 

            // Variáveis de atualização

        var cronometroSeg;

        var mntAtual;
        var sgndAtual;

        var interval;


        // Preencher o que está vazio 


        for(var i = 0; i <= 60; i++){ //minutos

            mnts.innerHTML += '<option value="'+i+'">'+i+'</option>';

        }

        for(var i=1; i<=60; i++){ // segundos
        
             sgnds.innerHTML += '<option value="'+i+'">'+i+'</option>';

        }

        iniciar.addEventListener("click", function(){

            mntAtual = mnts.value;
            sgndAtual = sgnds.value;

            display.childNodes[1].innerHTML = mntAtual + ":"+sgndAtual;

            interval = setInterval (function(){

                sgndAtual--;
                if(sgndAtual <= 0){
                    if(mntAtual >0){

                        mntAtual--;
                        sgndAtual=59;

                    }else{

                        alert("Finalizou!");
                        document.getElementById("sound").play();
                        clearInterval(interval); // para limpar ao finalizar o cronômetro
                        
                    }
                }

                 display.childNodes[1].innerHTML = mntAtual + ":"+sgndAtual; 
                 //recuperando id display

            }, 1000);

            })

