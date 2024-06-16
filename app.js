let qrt = prompt("Selet item sold") 
let sum = 0


for(var i = 1; i <= qrt; i++)
    {
        let item_price = prompt("Price item number" + i)

        sum = sum + parseInt(item_price)

        document.getElementById("price-list").innerHTML += "Item number" + i + ":" + item_price + "$" + "<br>"
    }

document.getElementById("result").innerHTML = "Price" + ":" + sum + "$"