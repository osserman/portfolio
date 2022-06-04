import adapter from "@sveltejs/adapter-static"; 

// the check for "production" === "development" isn't working. 
const dev = 1; // "production" === "development";

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
