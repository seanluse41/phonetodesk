<script>
  import { db } from "../firebase.js";
  let newLink = "";
  let linkSent = false;
  export let idNum = 0;

  const addLink = () => {
    idNum = Math.round(Math.random() * 99999);
    db.collection("links")
      .add({ link: newLink, id: idNum })
      .then(function() {
        console.log("Link sent!");
        linkSent = true;
      });

    newLink = "";
  };
</script>

<style>
  p {
    color: #ee6e73;
  }
</style>

<div class="row">
  <form class="col s12">
    <div class="row">
      <div class="input-field col s10">
        <form on:submit|preventDefault={addLink}>
          <input
            class="validate"
            placeholder="Enter your link or text here"
            type="text"
            bind:value={newLink} />
          <button
            class="btn waves-effect waves-light col s2"
            type="submit"
            name="action">
            Submit
            <i class="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  </form>
</div>
<div class="row">
  {#if linkSent}
    <h1>Your code is: {idNum}</h1>
    <p>Remember your code to get your text back later.</p>
  {/if}
</div>
