<script>
  import GetForm from "../layout/GetForm.svelte";
  import TranslateButton from "../layout/TranslateButton.svelte";
  import { db } from "../firebase.js";

  let arrList = [];
  let newLink = "";
  let date = new Date();

  db.collection("links")
    .orderBy("id", "asc")
    .onSnapshot(snapData => {
      arrList = snapData.docs;
    });

  function addLink() {
    alert(date.getTime());
    db.collection("links").add({ link: newLink, id: date.getTime() });
  }
</script>

<div class="container right-align" style="margin-top: 30px;">
  <TranslateButton />
</div>
<div class="container" style="margin-top: 150px;">
  <div class="row">
    <div class="center-align">
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s10">
              <textarea
                id="textarea1"
                class="materialize-textarea"
                bind:value={newLink} />
              <label for="textarea1">Put your URL here.</label>
            </div>
            <button
              class="btn waves-effect waves-light col s2"
              on:click={addLink}>
              Send
              <i class="material-icons right">arrow_forward</i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="center-align">
      <GetForm />
    </div>
  </div>

  <ul>
    {#each arrList as listItem}
      <li>{listItem.data().link}</li>
    {/each}
  </ul>

</div>
