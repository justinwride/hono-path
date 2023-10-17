# Path Parameter Bug

## Steps to replicate
1. `npm ci`
2. `npm run dev`
3. Send a GET or POST request to http://localhost:8787/example/assignments/38
4. Notice that the path parameter is not accessible