import adapter from "@sveltejs/adapter-static"; 

const dev = (process.env.NODE_ENV == 'development') 

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: "docs",
            assets: "docs"
		}),
        paths: {
            base: dev ? "": "/portfolio",
        },
        vite: { 
            optimizeDeps: { 
                include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep'] 
            } 
        }

        // hydrate the <div id="svelte"> element in src/app.html
        // target: "#svelte"
    }
};

export default config;
