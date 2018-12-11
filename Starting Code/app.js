// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
	el: '#app',
	data: {
		title: 'Hello World!',
		link: 'https://google.com',
		finishedLink: '<a href="http://neti.ee">neti</a>'
	},
	methods: {
		hi: (name) => {
			this.title = 'hello!';
			return `hi ${this.title + name}`;
		}
	}
});
