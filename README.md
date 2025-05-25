# 🧩 Use JSON and Middleware

This lesson will show you how to handle JSON data and middleware in Express.

## 🔧 What You’ll Do

- Accept and parse JSON in your Express app.
- Add custom middleware.

## ✅ Activity Instructions

1. Add middleware to parse JSON:

   ```js
   app.use(express.json());
   ```
2. Add a POST route:

```
app.post('/api/users', (req, res) => {
  console.log(req.body);
  res.json({ message: 'User data received!' });
});
```

3. Use Postman or fetch to test it.

## 🎯 Success Criteria

* Your app accepts JSON data.

* You used express.json() correctly.

* You created a working POST endpoint!

# 🤓 Pro Tip
Add a custom logger middleware to log each request method and URL.
