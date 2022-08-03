console.log("correcto");
$(document).ready(function(){


   const xhttp = new XMLHttpRequest();

   xhttp.open('GET',"https://jsonplaceholder.typicode.com/users",true);
   xhttp.send();
   xhttp.onreadystatechange = function(){

    if(this.readyState == 4 && this.status == 200)
        console.log(this.responseText);
        let datos = JSON.parse(this.responseText);
        console.log(datos);

        let res = document.querySelector('#res');
        res.innerHTML = '';

        for(let item of datos){
            res.innerHTML += `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.username}</td>
                    <td>${item.email}</td>
                    <td>${item.address.street}<br>${item.address.suite}<br>${item.address.city}<br>${item.address.zipcode}<br>${item.address.geo.lat},${item.address.geo.lng}</td>
                    <td>${item.phone}</td>
                    <td>${item.website}</td>
                    <td>${item.company}</td>
                </tr>
            
            
            `

        }

   }
});

function filtrarId(id){
    



}

