
<template>
	<div>
		<h1 ref="myref"> 
 Hook Tutorial
<p>my name is {{name}}</p>
		</h1>
	</div>
</template>
<script type="text/javascript">
	
	export default{

		data(){

			return{

				name:"Afolabi"
			}
		},

    beforeCreate(){

        console.log(this.name);
    },
		created(){
       
      // console.log(this.$refs.myref);

      console.log("data and functions are available but not HTML", this.name);

		},

		mounted(){
			console.log(this.$refs.myref);
		}
	}
</script>