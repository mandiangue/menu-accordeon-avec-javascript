const article= document.querySelectorAll('.article')
const btnPlus= document.querySelector('.btn')




    
        article.forEach(item=>{
          const bouton = item.querySelector('.btn')
        bouton.addEventListener('click', ()=>{
          article.forEach(articleText=>{
            if(articleText !== item){
              articleText.classList.remove('showText')
            }
          })
            item.classList.toggle('showText')
        })


            
        })