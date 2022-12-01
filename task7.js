var request = new XMLHttpRequest();
        request.open('GET','https://restcountries.com/v3.1/all',true);
        request.send();
        request.onload = function(){
            var data = JSON.parse(request.response)
            //console.log(data);

         //  Get all the countries from the Asia continent /region using the Filter function

              data.filter((element)=>{
                    if(element.continents=='Asia')
                    {
                        console.log(element.name.common);
                    }
               })

         //  Get all the countries with a population of less than 2 lakhs using Filter function
         
            data.filter((ele)=> {
                   if(ele.population<200000)
                   {
                    console.log(ele.name.common);
                   }
                })

         // Print the following details name, capital, flag using forEach function
         
         data.forEach((element) => {

            console.log(`${element.name.common}, ${element.capital}, ${element.flags.png}`);
        });
               
        // Print the total population of countries using reduce function
        
        let total =data.reduce((acc,ele)=>{
           return acc + ele.population;

        },0)
       console.log(total);
         
       //Print the country which uses US Dollars as currency.

       var res = data.filter((ele)=> ele?.currencies?.USD?.name)
       res.map((ele)=>{
         console.log(ele.name.common);
       })
       
   //     data.filter((ele)=> {

   //       if(ele?.currencies?.USD?.name =='United States dollar')
   //       {
   //           console.log(ele.name.common);
   //       }
   //   })

    
       
               
           }
          

       

         
       
   