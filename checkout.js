let details1Ele = document.getElementById("details1")
let details2Ele = document.getElementById("details2")

let details3Ele = document.getElementById("details3")

let checkoutDiv1 = document.getElementById("checkout1");
let checkoutDiv2 = document.getElementById("checkout2");
let checkoutDiv3 = document.getElementById("checkout3");




document.addEventListener('DOMContentLoaded', function() { 

document.getElementById("radioButton1").addEventListener("click", function(){
    
let y = document.getElementById("checkout1");
if(document.getElementById("radioButton1").checked==true){
y.style.backgroundColor = "rgba(0, 127, 97, 0.1)"
y.style.border = "0.9px solid rgba(0, 127, 97, 1)"
checkoutDiv1.style.height = "162px"
checkoutDiv1.style.width = "341px"
let z = document.getElementById("radioButton1")
z.style.paddingTop= "0px"
z.style.marginBottom= "64px"
if(document.getElementById('represent1')){
  details1Ele.style.display = 'block'
}else{
const newDiv1 = document.createElement('div');
newDiv1.id = 'represent1';
newDiv1.innerHTML = `
<table>
<thead>
    <tr>
      <th> </th>
      <th>Size</th>
      <th>Colours</th>
    </tr>
   
</thead>
<tbody>

  <tr>
    <th>#1</th>
    <td><select id="sizes" name="Size">
      <option>S</option>
      <option>M</option>
      <option>L</option>
      <option>XL</option>
      <option>XXL</option>
    </select></td>
    <td>
      <select id="Colours" name="Color">
        <option>Colour</option>
        <option>Blue</option>
        <option>Green</option>
        <option>Yellow</option>
      </select>
    </td>
  </tr>
  <tr>
    <th>#2</th>
    <td><select id="sizes" name="Size">
      <option>S</option>
      <option>M</option>
      <option>L</option>
      <option>XL</option>
      <option>XXL</option>
    </select></td>
    <td>
    <select id="colours" name="Color">
    <option>Colour</option>
        <option>Blue</option>
        <option>Green</option>
        <option>Yellow</option>
      </select>
    </td>
  </tr>
</tbody>

</table>

 `

    details1Ele.style.display = 'block';

    details1Ele.appendChild(newDiv1)
}
    details2Ele.style.display = 'none';
    details3Ele.style.display = 'none';
    checkoutDiv2.style.backgroundColor = 'white';
    checkoutDiv3.style.backgroundColor = 'white';

    checkoutDiv2.style.borderColor = 'rgba(200, 200, 200, 1)';
    checkoutDiv3.style.borderColor = 'rgba(200, 200, 200, 1)';
}


    
})
document.getElementById("radioButton2").addEventListener("click", function(){
       let x = document.getElementById("checkout2") 
        x.style.backgroundColor = "rgba(0, 127, 97, 0.1)" 
        x.style.border = "0.9px solid rgba(0, 127, 97, 1)"
        x.style.height = "162px"
       x.style.width = "341px"
       let a = document.getElementById("radioButton2")
      a.style.paddingTop= "0px"
      a.style.marginBottom= "64px"
      if(document.getElementById('represent2')){
        details2Ele.style.display = 'block'
      }else{
     const newDiv2 = document.createElement('div');
     newDiv2.id = 'represent2';
     newDiv2.innerHTML = `
<table>
<thead>
    <tr>
      <th> </th>
      <th>Size</th>
      <th>Colours</th>
    </tr>
   
</thead>
<tbody>

  <tr>
    <th>#1</th>
    <td><select id="sizes" name="Size">
      <option>S</option>
      <option>M</option>
      <option>L</option>
      <option>XL</option>
      <option>XXL</option>
    </select></td>
    <td>
    <select id="colours" name="Color">
    <option>Colour</option>
        <option>Blue</option>
        <option>Green</option>
        <option>Yellow</option>
      </select>
    </td>
  </tr>
  <tr>
    <th>#2</th>
    <td><select id="sizes" name="Size">
      <option>S</option>
      <option>M</option>
      <option>L</option>
      <option>XL</option>
      <option>XXL</option>
    </select></td>
    <td>
    <select id="colours" name="Color">
    <option>Colour</option>
        <option>Blue</option>
        <option>Green</option>
        <option>Yellow</option>
      </select>
    </td>
  </tr>
</tbody>

</table>

 `
    // x.appendChild(newDiv2)
    details2Ele.style.display = 'block';

    details2Ele.appendChild(newDiv2)
      }
    details1Ele.style.display = 'none';
    details3Ele.style.display = 'none';
    checkoutDiv1.style.backgroundColor = 'white';
    checkoutDiv3.style.backgroundColor = 'white';
    checkoutDiv1.style.borderColor = 'rgba(200, 200, 200, 1)';
    checkoutDiv3.style.borderColor = 'rgba(200, 200, 200, 1)';
    })

    document.getElementById("radioButton3").addEventListener("click", function(){
        let c = document.getElementById("checkout3") 
         c.style.backgroundColor = "rgba(0, 127, 97, 0.1)" 
         c.style.border = "0.9px solid rgba(0, 127, 97, 1)"
        c.style.height = "162px"
        c.style.width = "341px"
        let b = document.getElementById("radioButton3")
       b.style.paddingTop= "0px"
       b.style.marginBottom= "64px"
      if(document.getElementById('represent3')){
        details3Ele.style.display = 'block'
      }else{
      const newDiv3 = document.createElement('div');
      newDiv3.id = 'represent3';
      newDiv3.innerHTML = `
 <table>
 <thead>
     <tr>
       <th> </th>
       <th>Size</th>
       <th>Colours</th>
     </tr>
    
 </thead>
 <tbody>
 
   <tr>
     <th>#1</th>
     <td><select id="sizes" name="Size">
       <option>S</option>
       <option>M</option>
       <option>L</option>
       <option>XL</option>
       <option>XXL</option>
     </select></td>
     <td>
     <select id="colours" name="Color">
     <option>Colour</option>
         <option>Blue</option>
         <option>Green</option>
         <option>Yellow</option>
       </select>
     </td>
   </tr>
   <tr>
     <th>#2</th>
     <td><select id="sizes" name="Size">
       <option>S</option>
       <option>M</option>
       <option>L</option>
       <option>XL</option>
       <option>XXL</option>
     </select></td>
     <td>
     <select id="colours" name="Color">
     <option>Colour</option>
         <option>Blue</option>
         <option>Green</option>
         <option>Yellow</option>
       </select>
     </td>
   </tr>
 </tbody>
 
 </table>
 
  `
    //  c.appendChild(newDiv3)
    details3Ele.style.display = 'block';
    details3Ele.appendChild(newDiv3)
      }
    details2Ele.style.display = 'none';
    details1Ele.style.display = 'none';
    checkoutDiv2.style.backgroundColor = 'white';
    checkoutDiv1.style.backgroundColor = 'white';
    checkoutDiv2.style.borderColor = 'rgba(200, 200, 200, 1)';
    checkoutDiv1.style.borderColor = 'rgba(200, 200, 200, 1)';
     })


})