### Lab 1 :- Build a Basic Express.js Server

1. What is the difference between res.send() and res.sendFile()? When would you use one over the other?

res.send() just sends a quick text message or string straight to the browser, while res.sendFile() actually loads and sends a whole HTML file from my project. I'd use res.send() for simple text responses, but in my lab, I used res.sendFile('index.html', { root: './public' }) so it loads my actual coffee shop web pages.

2. Why is the path module (or root option) necessary when serving files? What could go wrong if you just used a relative path like 'public/index.html'?

It tells Express the exact place to look for my files. If I just used 'public/index.html' without { root: './public' }, Express would get confused depending on where I opened my terminal. Using the root option makes sure it always looks inside the correct folder so it doesn't throw a "file not found" error.


3. How would you add a third page (e.g., a menu page) to this server? What steps would you take?

I would do these three steps:

    Make a menu.html file and put it inside my public folder.

    Add a new route in index.js:

    app.get('/menu', (req, res) => {
    res.sendFile('menu.html', { root: './public' });
});

Restart my server with node index.js and open http://localhost:3000/menu in my browser to check it.