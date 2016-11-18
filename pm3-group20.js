var order = new Array();
var quantity = 0;
var orderTotal = 0;

document.getElementById('itemQuantity').innerHTML = quantity;
document.getElementById('totalPrice').innerHTML = "$" + orderTotal;


function addToOrder( item, price )
{
	order.push( item );	
	changeOrderTotal( price );
	changeQuantity( 1 );
}

function removeFromOrder( item, price )  
{	
	var found = false;
	
	for( var i = 0; i < order.length && !found; i++)  
	{	
		if ( order[i] == (item) )
		{
			found = true;
			changeOrderTotal( price );
			changeQuantity( -1 );
			order.splice(i, 1)
			
		}
	}
}

function changeQuantity( amount )
{
	var initialQuantity = parseInt( document.getElementById( "itemQuantity" ).innerHTML );
	
	var newQuantity = initialQuantity + amount;
	
	document.getElementById("itemQuantity").innerHTML = newQuantity;
}

function changeOrderTotal( price )  
{
	var initialPrice = parseInt( document.getElementById( "totalPrice" ).innerHTML.substring(1) );
	
	document.getElementById("totalPrice").innerHTML = "$" + ( initialPrice + price );
}

