"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Alexa
   Date:   1/6/2020
   Filename: tc_cart.js
	
*/

//calculate running total of the cost of the order
var orderTotal = 0;

//cartHTML variable will store the code for the contents of the shopping cart table
var cartHTML = "<table>";
cartHTML += "<tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

//a for loop that loops through the item array adding a table row for every item ordered
for (var i=0; i < item.length; i++) {
	cartHTML += "<tr>";
	cartHTML += "<td>" + "<img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
	cartHTML += "<td>" + itemDescription[i] + "</td>";
	cartHTML += "<td>$" + itemPrice[i] + "</td>";
	cartHTML += "<td>" + itemQty[i] + "</td>";
	
	//calculate the value of the current item
	var itemCost = itemPrice[i]*itemQty[i];
	cartHTML += "<td>$" + itemCost + "</td>";
	cartHTML += "</tr>";
	
	//calculate running total of the total cost of the customer order
	orderTotal += itemCost;
}

// add a table row for the total cost of the order
cartHTML += "<tr>";
cartHTML += "<td colspan='4'>Subtotal</td>";
cartHTML += "<td>$" + orderTotal + "</td>";
cartHTML += "</tr>";
cartHTML += "</table>";

// write HTML code into shopping cart table
document.getElementById("cart").innerHTML = cartHTML;