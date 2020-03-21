<script>
  import { auth, googleProvider } from "../firebase";
  import { authState } from "rxfire/auth";

  let user;
  const unsubscribe = authState(auth).subscribe(u => (user = u));

  export function logout() {
    auth().signOut;
  }

  export function login() {
    auth.signInWithPopup(googleProvider);
    console.log(user);
  }
</script>

{#if $user}
  <button
    on:click={login}
    class="btn-floating btn-large waves-effect waves-light red pulse"
    style="margin-left: 20px;">
    <i class="material-icons">person</i>
  </button>
{:else}
  <button
    on:click={logout}
    class="btn-floating btn-large waves-effect waves-light red"
    style="margin-left: 20px;">
    <i class="material-icons">exit_to_app</i>
  </button>
{/if}
