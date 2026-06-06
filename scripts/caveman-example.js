#!/usr/bin/env node
/**
 * Caveman Template Engine Examples
 *
 * A lightweight 1kb templating engine for JavaScript with zero dependencies.
 * Perfect for server-side or client-side template compilation.
 */

const Caveman = require('caveman');

// Example 1: Simple variable substitution
console.log('\n=== Example 1: Variables ===');
const template1 = 'Hello {{d.name}}, welcome to {{d.project}}!';
const result1 = Caveman(template1, {
  name: 'User',
  project: 'My Portfolio'
});
console.log(result1);

// Example 2: Array iteration with loop variables
console.log('\n=== Example 2: Array Loop ===');
const template2 = `Skills:
{{- for d.skills as skill }}
  {{_i + 1}}. {{skill}}
{{- end }}`;
const result2 = Caveman(template2, {
  skills: ['React', 'Next.js', 'Node.js', 'MongoDB']
});
console.log(result2);

// Example 3: Object array iteration
console.log('\n=== Example 3: Object Array Loop ===');
const template3 = `Projects:
{{- for d.projects as project }}
  - {{project.title}} ({{project.year}})
{{- end }}`;
const result3 = Caveman(template3, {
  projects: [
    { title: 'Portfolio Site', year: 2025 },
    { title: 'Chat App', year: 2024 }
  ]
});
console.log(result3);

// Example 4: Conditional rendering
console.log('\n=== Example 4: Conditionals ===');
const template4 = `
{{? d.user.role === 'admin' }}
  <p>Welcome Admin {{d.user.name}}</p>
{{- else }}
  <p>Welcome {{d.user.name}}</p>
{{/}}`;
const result4 = Caveman(template4, {
  user: {
    name: 'Arafat',
    role: 'admin'
  }
});
console.log(result4);

// Example 5: Nested loops
console.log('\n=== Example 5: Nested Loops ===');
const template5 = `Users:
{{- for d.users as user }}
  {{user.name}}:
  {{- for user.skills as skill }}
    - {{skill}}
  {{- end }}
{{- end }}`;
const result5 = Caveman(template5, {
  users: [
    { name: 'Alice', skills: ['React', 'Node.js'] },
    { name: 'Bob', skills: ['Vue', 'Python'] }
  ]
});
console.log(result5);

// Example 6: Escaped HTML
console.log('\n=== Example 6: HTML Escaping ===');
const template6 = `Content: {{d.content}}`;
const result6 = Caveman(template6, {
  content: '<script>alert("xss")</script>'
});
console.log(result6);

console.log('\n✅ Caveman is working! Install complete.');
