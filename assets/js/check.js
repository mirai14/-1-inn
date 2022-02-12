
//Остача від ділення контрольної суми на одинадцять буде контрольним числом: Кч = 

//Х - (11 * ціла частина від (Х/11)) 

//X-ROUND(X/11; 0)*11) або =ОСТАТ(X;11)


//Контрольне число може мати значення від нуля до десяти. У разі залишку 10 старша одиниця відкидається. Контрольною цифрою буде остання цифра контрольного числа (тобто, контрольне число за модулем 10):


//З = (Х%11)%10 


// З = MOD(MOD(X;11);10). 

11111 11111

    let sumCheck = (inputInn[0] * -1) + (inputInn[1] * 5) + (inputInn[2] * 7) + (inputInn[3] * 9) + (inputInn[4] * 4) + (inputInn[5] * 6)+ (inputInn[6] * 10) + (inputInn[7] * 5) + (inputInn[8] * 7);

        sumCheck = sumChek % 11;

    let numberCheck = 0;
    
        if(sumCheck < 10){
            numberCheck = sumCheck;
        }else{
            numberCheck = sumCheck % 10
        }
    

        figureCheck = 
        
        sumCheck = sumCheck - (11 * Math.floor(sumCheck / 11));

    if(inputInn.length != 10 && sumCheck !== inputInn[9]){

        -1 + 5 + 7 + 9 + 4 + 6 + 10 + 5 +7

        52 - 11 * 4

        52 / 11 = 44 
        52 - 44 = 8