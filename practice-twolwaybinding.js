new Vue({

el:'#practice-twolwaybinding',
data:{
name :'Chinna Mallesh',
counter:0
},
methods:{
result(){
	
	return this.counter>5?'greater than 5':'less than 5'
}
	
}
});