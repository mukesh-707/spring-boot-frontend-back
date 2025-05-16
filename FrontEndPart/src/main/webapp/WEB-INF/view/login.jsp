<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Login - Simple Store</title>

  <!-- Load CSS using JSTL (so it works correctly with Spring MVC) -->
  <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>

  <div class="form-container">
    <h2>Login</h2>
    <!-- You can change action to a Spring MVC controller endpoint -->
    <form action="loginUser" method="post">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />

      <label for="password">Password</label>
      <input type="password" id="password" name="password" required />

      <button type="submit">Login</button>
    </form>

    <div class="switch-link">
      <p>Don't have an account? <a href="<c:url value='/signup' />">Sign up here</a></p>
    </div>
  </div>

</body>
</html>
