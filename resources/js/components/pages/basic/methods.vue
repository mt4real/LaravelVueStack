
<template>
	<div>
		<h1>
			the number is:{{views}}</h1>
			<button @click="updateViews(1)">increase</button>
			<button @click="updateViews(-1)">decrease</button>

			<br><br>
            <div v-for="(blog,i) in blogs":key="i" v-if="blogs.length">
            	<h1>{{blog.title}}</h1>
            	<p>{{blog.post}}</p>
            </div>
             
		
	

	<br><br><br>


	<div>
		<h1 v-if="showItem">Show this item if "showItem" is true</h1>
		<h1 v-else>Show this item if "showItem" is false</h1>
	</div>

	<button @click="changeShowItem()">Change showItem</button>
</div>
</template>


<script type="text/javascript">
	
	export default{

		data(){

  return{

  	views:0,

  	blogs:[],

  	showItem:false
  }

		},
		methods:{

			updateViews(number){

             this.views+=number

			},

			changeShowItem(){

				this.showItem = !this.showItem
			}
		},

		created(){

			//call the server to get the views of this blog posts

			this.views=100

			//get the blogg post

			let posts= 
			[
			         {title:'this is blog title1', 'post':'this is the blog post1', id:1},
			         {title:'this is blog title2', 'post':'this is the blog post2', id:2},  
			         {title:'this is blog title3', 'post':'this is the blog post3', id:3},
			         {title:'this is blog title4', 'post':'this is the blog post4', id:4},
			         {title:'this is blog title5', 'post':'this is the blog post5', id:5},
			         {title:'this is blog title6', 'post':'this is the blog post6', id:6},
			         {title:'this is blog title7', 'post':'this is the blog post7', id:7},
			]

			this.blogs=posts
		}


	}
</script>