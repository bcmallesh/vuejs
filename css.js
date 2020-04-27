 new Vue({
        el: '#practice',
        data: {
            attachRed: false,
            color: 'green'
           
        },
        computed: {
 
            divClasses: function () {
                return {
                    red: this.attachRed,
                    blue: !this.attachRed
                };
 
            }
         }
    })