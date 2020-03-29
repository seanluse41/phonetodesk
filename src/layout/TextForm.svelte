<script>
  import { db } from "../firebase.js";
  export let newLink = "";
  export let date = new Date();

  const addLink = () => {
    db.collection("links").add({ link: newLink, id: date.getTime() });

    newLink = "";
  };
</script>

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
