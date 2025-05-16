<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Simple E-Commerce Store</title>

  <!-- Dynamic path for CSS using JSTL -->
  <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>

<header>
  <div class="brand">
    <h1>Simple Store</h1>
  </div>

  <nav class="nav-container" role="navigation" aria-label="Product categories">
    <button type="button" data-cat="mens" class="active">Mens</button>
    <button type="button" data-cat="womens">Womens</button>
    <button type="button" data-cat="kids">Kids</button>
    <button type="button" data-cat="electronics">Electronics</button>
  </nav>

  <!-- login and cart -->
  <div class="right-section">
    <select class="location-dropdown" aria-label="Select location">
      <option selected disabled>Select Location</option>
      <option value="delhi">Delhi</option>
      <option value="mumbai">Mumbai</option>
      <option value="bangalore">Bangalore</option>
      <option value="kolkata">Kolkata</option>
    </select>

    <!-- Use JSTL to generate the login page path -->
    <a href="<c:url value='/login' />">
      <button class="login-btn">Login</button>
    </a>

    <span class="cart-icon">
      <img src="<c:url value='/assets/images/carticon.png' />" alt="cart image" />
    </span>
  </div>
</header>

<main>
  <section aria-live="polite" aria-relevant="additions removals" aria-atomic="true">
    <div class="products" id="products-container">
      <!-- Dynamically inserted products here -->
    </div>
  </section>
</main>

<aside id="cart-button-panel" role="region" aria-label="Shopping cart overview">
  <div>Cart: <span id="cart-count">0</span></div>
  <button id="open-cart-btn" aria-haspopup="dialog" aria-controls="cart-modal" aria-expanded="false">
    View Cart
  </button>
</aside>

<div id="cart-modal" role="dialog" aria-modal="true" aria-labelledby="cart-header" aria-hidden="true" tabindex="-1">
  <div id="cart-content">
    <header id="cart-header">
      <h2>Your Cart</h2>
      <button id="cart-close-btn" aria-label="Close cart" type="button">&times;</button>
    </header>

    <div id="cart-list" tabindex="0" aria-live="polite" aria-relevant="all" aria-atomic="true">
      <!-- Cart items will be dynamically inserted here -->
    </div>

    <footer id="cart-footer">
      <div id="cart-total">Total: $0.00</div>
      <button id="buy-now-cart-btn" type="button">Buy Now</button>
    </footer>
  </div>
</div>

<!-- JavaScript file using dynamic path -->
<script src="<c:url value='/assets/js/script.js' />"></script>
</body>
</html>
