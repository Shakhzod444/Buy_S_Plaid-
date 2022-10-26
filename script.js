

let boxtop = document.querySelector('.top')
let boxtop2 = document.querySelector('.top2')
let boxtop3 = document.querySelector('.top3')
// let boxtop4 = document.querySelector('.top')
let left = document.querySelector('.left')
let right = document.querySelector('.right')
let left2 = document.querySelector('.left2')
let right2 = document.querySelector('.right2')
let container = document.querySelector('.container')
let cont = document.querySelector('.cont')

//// count
let kol1 = document.querySelector('.kol')
let kol2 = document.querySelector('.kol2')
let kol3 = document.querySelector('.kol3')
////// display none

let nnone = document.querySelector('.bttm')
let nnone1 = document.querySelector('.all')
let nnone1_2 = document.querySelector('.all2')
let nnone2 = document.querySelector('.all_bottom')
let nnooon = document.querySelector('.none')


axios.get("http://localhost:3001/arr")
   .then(res => {
      reload(res.data)
   })




const reload = (arr) => {
// for(let item of arr) {
   let count = 0
   let count2 = 0
   let count3 = 0


   for (let item of arr) {
      let box = document.createElement('div')
      let ttop = document.createElement('div')
      let input = document.createElement('div')
      let r = document.createElement('div')
      let lor = document.createElement('div')
      let day = document.createElement('div')

      input.setAttribute("type", "checkbox", "name", "checkbox"  );






      box.classList.add('box')
      ttop.classList.add('ttop')
      input.classList.add('input')
      r.classList.add('r')
      lor.classList.add('lor')
      day.classList.add('day')


      ttop.append(input, r)
      box.append(ttop, lor, day)
      r.innerHTML = item.name
      lor.innerHTML = item.title
      day.innerHTML = item.day
      
      
      
      if(item.completed === true  ) {
         input.onclick = () => {
            input.style.background = 'white'
            input.style.border = '1px solid black'

            item.completed === false
         }
         input.style.background = '#FFC700'


      }else {
         input.onclick = () => {
            input.style.background = '#FFC700'
         }
         input.style.background = 'white'
         input.style.border = '1px solid black'

      }
            //  axios.patch(item.completed === true)
               
            // }
            
            // input.onclick = () => {
            //    input.style.background = 'black'
            //    item.completed === true
  
        
        
            // }
            
            //        input.onkeyup = () => {
       
            //           localStorage.setItem('sdfsdf')
                   
            //        }
            
      



   //    if (item.completed === true) {
   //       input.style.background = '#FFC700'
         
   //   } else {
   //    input.type = 'checbox'
   //   }
      
 

   // input.checked === 'checked'






      if (item.left === 0) {
         count++
         kol1.innerHTML = count
         boxtop.append(box)
         day.innerHTML = 'Today'

         
      } else if (item.left === 1) {
         count2++
         
         kol2.innerHTML = count2
         boxtop2.append(box)
         day.innerHTML = 'Tomorrow'
      } else if (item.left > 1) {
         count3++
         kol3.innerHTML = count3

         let date = new Date()   

         date.setDate(date.getDate() + item.left)


         day.innerHTML = date

         boxtop3.append(box)


      }

   //    input.forEach(elem => {
   //       elem.onchange = (e) => {
   //           item.completed
   //       }
   //   })
     
      
   }
   



   left.onclick = () => {
      nnooon.style.display = 'block'
      nnone.style.display = 'block'
      nnone1.style.display = 'block'
      nnone2.style.display = 'block'
      nnone1_2.style.display = 'none'

   }

   right.onclick = () => {
      nnooon.style.display = 'none'
      nnone.style.display = 'none'
      nnone1.style.display = 'none'
      nnone2.style.display = 'none'
      nnone1_2.style.display = 'block'

   }




   // left2.onclick = () => {
   //    cont.style.display = 'none'
   //    container.style.display = 'block'
   // }

   // right2.onclick = () => {
   //    container.style.display = 'none'
   //    cont.style.display = 'block'

   // }


}















