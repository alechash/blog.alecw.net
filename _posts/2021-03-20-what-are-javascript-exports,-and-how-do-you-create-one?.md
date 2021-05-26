---
layout: post
category: tutorials
title: What Are Javascript Exports, And How Do You Create One?
tags: modules, exports, module-exports, javascript, nodejs, module
email: true
---

![exports](/assets/photos/exports.png)

# What are they?

Exports, or Module Exports, are functions, variables, classes, or other JavaScript that is written in one file, and accessed in another. You’ll see Exports in big projects like website. Maintainers of large projects will use these for structure of their project.

Lot’s of times there will be multiple Export files. Like a file for functions, a file for config, and maybe a file for API keys/sensitive data.

---

# How do I create one?

It is actually very simple, imagine you have this in a file called `functions.js`:
```javascript
function randomNumber() {
    const randomNumber = Math.random();
    return randomNumber;
};
```

Now, to turn this into an export, all you have to do is add the below code:
```javascript
module.exports = {
    randomNumber
};
```

This will tell NodeJS to make this file publicly available to other file, and also what variable, classes, or functions should be public.

Now let’s say you need to access the `randomNumber()` function in an Express routes file called `main.js` in the same folder You can “require” the functions file by adding `const config = require(‘./functions’)`

Remember above, we had the `module.exports` with the name of the function? Well, now in the `main.js` file, we can use of constant `config` to access that function. We can access it in the following manner:

```javascript
// note: you can call it whatever, it doesn't have to be 'config'
const config = require('./functions');  // now we can call the above function through our config constant: 
console.log(config.randomNumber()) // a random decimal
```

---

# Wrap Up

That is how you do it! It is as simple as that! Now you can go on the simplify and organize your files into exports!

If you’d like to know when I make more blog posts, you can input your email below and I’ll email you when a new one comes out!
