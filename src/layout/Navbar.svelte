<script>
  import { Link } from "svelte-routing";
  import { _ } from "../services/i18n";

  document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, options);
  });
</script>

<nav>
  <div class="nav-wrapper">
    <a href="#" data-target="mobile-demo" class="sidenav-trigger">
      <i class="material-icons">menu</i>
    </a>
    <div class="container">
      <Link to="/">
        <span class="brand-logo">Phone to Desk</span>
      </Link>
      <ul id="nav-mobile" class="right hide-on-small-only">
        <li>
          <Link to="/">{$_('navigate-home')}</Link>
        </li>
        <li>
          <Link to="/about">{$_('navigate-about')}</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

<ul class="sidenav" id="mobile-demo">
  <li>
    <a href="sass.html">Sass</a>
  </li>
  <li>
    <a href="badges.html">Components</a>
  </li>
  <li>
    <a href="collapsible.html">Javascript</a>
  </li>
  <li>
    <a href="mobile.html">Mobile</a>
  </li>
</ul>
