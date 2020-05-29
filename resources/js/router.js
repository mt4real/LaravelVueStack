import Vue from 'vue';
import Router from 'vue-router';
import firstPage from './components/pages/myFirstVuePage';
import newRoute from './components/pages/newRoutePage';
import hooks from './components/pages/basic/hooks.vue';

Vue.use(Router);

const routes=[
{


	path:'/my-new-view-router',
	component:firstPage
},

{


	path:'/new-route',
	component:newRoute
},

//vue hooks

{


	path:'/hooks',
	component:hooks
},


]

export default new Router({

	mode:'history',
	routes
})