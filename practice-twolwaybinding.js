new Vue({

el:'#practice-twolwaybinding',
data:{
name :'Chinna Mallesh',
counter:0,
secondCounter:0
},
computed:{
output:function(){
	console.log('computed');
return this.counter>5?'greater than 5':'less than 5'	
}	
	
},
methods:{
result:function(){
		console.log('method');

	return this.counter>5?'greater than 5':'less than 5'
}
	
}
});