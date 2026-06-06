# Caveman Template Engine Guide

Caveman is a lightweight 1kb JavaScript templating engine with zero dependencies. It's perfect for both server-side and client-side rendering.

## Installation ✅

Caveman is already installed as a dev dependency:
```bash
npm install --save-dev caveman
```

## Quick Start

Run the example to see all features:
```bash
npm run caveman:example
```

## Syntax Overview

### Variables
Access data via the `d` (data) object:
```javascript
const Caveman = require('caveman');
const result = Caveman('Hello {{d.name}}!', { name: 'Alice' });
// Output: Hello Alice!
```

### Array Loops
Iterate with `{{- for }}`:
```html
{{- for d.items as item }}
  {{item.name}}
{{- end }}
```

**Loop variables:**
- `_i` = current index (0-based)
- `_len` = total length

```html
{{- for d.items as item }}
  Item {{_i + 1}} of {{_len}}: {{item.name}}
{{- end }}
```

### Conditionals
Use `{{? }}` for if, `{{^ }}` for unless:

```html
{{? d.role === 'admin' }}
  <p>Admin panel</p>
{{- else }}
  <p>User area</p>
{{/}}
```

Shorthand for end: `{{/}}`

### Nested Data
Access nested properties with dot notation:
```javascript
Caveman('From {{d.user.location.city}}', {
  user: {
    name: 'Bob',
    location: { city: 'NYC' }
  }
})
// Output: From NYC
```

### Nested Loops
Scoping works correctly with nested loops:
```html
{{- for d.users as user }}
  {{user.name}}:
  {{- for user.posts as post }}
    - {{post.title}}
  {{- end }}
{{- end }}
```

### Print Expressions
Use `{{- print }}` to output computed values:
```html
{{- for d.numbers }}
  {{d}} × {{d}} = {{- print d * d }}
{{- end }}
```

## API Methods

### Caveman(template, data)
Compile and render in one call:
```javascript
const result = Caveman(template, data);
```

### Caveman.compile(template)
Pre-compile for reuse:
```javascript
const compiled = Caveman.compile(template);
const render = function(data) {
  return compiled(Caveman, data);
};
```

### Caveman.register(name, template)
Register a reusable partial:
```javascript
Caveman.register('header', '<h1>{{d.title}}</h1>');
```

### Caveman.options
Configure behavior:
```javascript
Caveman.options.escapeByDefault = true;  // Escape HTML by default
Caveman.options.openTag = '<%';          // Change delimiters
Caveman.options.closeTag = '%>';
```

## Use Cases

### 1. Server-side Email Templates
```javascript
const emailTemplate = `
Hi {{d.user.name}},

Thanks for signing up! Your email is {{d.user.email}}.

Best regards,
The Team
`;

const email = Caveman(emailTemplate, {
  user: { name: 'Alice', email: 'alice@example.com' }
});
```

### 2. Client-side HTML Generation
```javascript
const blogPostTemplate = `
<article>
  <h2>{{d.title}}</h2>
  <p>by {{d.author}}</p>
  <div class="comments">
    {{- for d.comments as comment }}
      <div class="comment">{{comment.text}}</div>
    {{- end }}
  </div>
</article>
`;
```

### 3. Dynamic Code/File Generation
```javascript
const componentTemplate = `
export const {{d.componentName}} = () => {
  return <div>{{d.description}}</div>;
};
`;

const result = Caveman(componentTemplate, {
  componentName: 'MyComponent',
  description: 'A cool component'
});
```

## Useful Tips

1. **No dependencies** - Caveman has zero dependencies, making it lightweight
2. **1kb gzipped** - Extremely small for bundling
3. **Fast** - Nearly as fast as native JS concatenation
4. **Flexible** - Works server-side (Node.js) or client-side (browser)

## Escape HTML

By default, Caveman does NOT escape HTML. You can enable it globally or manually:

```javascript
// Global setting
Caveman.options.escapeByDefault = true;

// Manual escaping
const safe = Caveman.escapeHTML(userInput);
Caveman(`<p>{{d.content}}</p>`, { content: safe });
```

## Advanced: Custom Macros

Add custom behavior:
```javascript
Caveman.addMacro('upper', function(str) {
  return str.toUpperCase();
});

// Then use in templates: {{d.name|upper}}
```

## Performance Tips

- Pre-compile templates that are used multiple times
- Use server-side compilation for large applications
- Register reusable partials
- Avoid heavy computation inside templates

## Resources

- [Caveman on npm](https://www.npmjs.com/package/caveman)
- [GitHub Repo](https://github.com/andrewchilds/caveman)
- Run `npm run caveman:example` for working examples
