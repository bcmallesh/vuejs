new Vue({

el:'#practice',
data:{
attachRed:false
},
computed:{
divClasses:function(){
	return {
		red:this.attachRed,
		blue:!this.attachRed
	}
}
},
methods:{

	
},
watch:{
	
}
});