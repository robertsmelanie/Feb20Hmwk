// Apply Functional Programming to Convert Strings to URL Slugs

function slugify(title) {
    return title
      .toLowerCase()
      .trim()
      .split(/\s+/)
      .join('-');
  }
  
  const title = 'Hello World from JavaScript';
  const slug = slugify(title);
  console.log(slug); // Output: 'hello-world-from-javascript'
  