<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Signup - Simple Store</title>

  <!-- Load CSS using JSTL to generate dynamic URL -->
  <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>

  <div class="form-container">
    <h2>Sign Up</h2>

    <!-- Form can be updated to submit to a Spring controller -->
    <form action="<c:url value='/registerUser' />" method="post">
      <label for="name">Full Name</label>
      <input type="text" id="name" name="name" required />

      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />

      <label for="password">Password</label>
      <input type="password" id="password" name="password" required />

      <button type="submit">Create Account</button>
    </form>

    <div class="switch-link">
      <p>Already have an account? 
        <a href="<c:url value='/login' />">Login here</a>
      </p>
    </div>
  </div>

</body>
</html>
