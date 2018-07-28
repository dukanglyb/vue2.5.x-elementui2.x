<template>
  <div>
    Tab页签
  </div>
</template>
<script>
  export default {
    data() {
      return{}
    },
    mounted() {
    	
    },
    created(){
    	
    },
    methods: {
      
    },
    components: {

    }
  }
</script>

<style lang="less">
 	.menu {
 	    width: 80px;
 	    border: 1px solid #ccc;
 	    position: absolute;
 	    box-shadow: 0 0 5px rgba(0,0,0,.2);
 	    padding: 10px 0;
 	    transition: all .1s ease;    
 	    display: none;    
 	    li {
     	    list-style: none;
     	    width: 100%;
     	    a {
 	     	    display: inline-block;
 	     	    text-decoration: none;
 	     	    color: #555;
 	     	    width: 100%;
 	     	    padding: 10px 0;
 	     	    text-align: center;
 	     	    &:hover,&:active{
 	     	    	background: #eee;
 	     	    	color: #0AAF88;
 	     	    }
 	     	}
 	     	&:first-of-type{
		 	    border-radius: 5px 5px 0 0;
		 	}
     	}
 	}
</style>