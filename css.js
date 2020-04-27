 new Vue({
        el: '#practice',
        data: {
            
            color: 'gray',
			width:100
           
        },
        computed: {
 mystyle:function(){
	 
	 return{
		 
		 backgroundColor:this.color,
		 width:this.width+'px'
	 };
 }
            
         }
    })