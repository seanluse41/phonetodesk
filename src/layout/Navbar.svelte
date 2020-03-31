<script>
  import { Link } from "svelte-routing";
  import { _ } from "../services/i18n";
</script>

<nav>
  <div class="nav-wrapper">
    <div class="container">
      <Link to="/">
        <span class="brand-logo">Phone to Desk</span>
      </Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
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
