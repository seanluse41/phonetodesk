<script>
  import "../node_modules/materialize-css/dist/css/materialize.min.css";
  import "../node_modules/materialize-css/dist/js/materialize.min.js";
  import { Router, Route } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import Navbar from "./layout/Navbar.svelte";
</script>

<Router>
  <Navbar />
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
</Router>

