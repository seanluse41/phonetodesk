<script>
  import { _ } from "../services/i18n";
  import { db } from "../firebase.js";
  let linkCode;
  let userLink = "";
  let gotLink = false;
  let data;
  let userData;
  let userDataParsed;

  const getLink = () => {
    db.collection("links")
      .where("id", "==", linkCode)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(async function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          var data = await doc.data();
          userData = JSON.stringify(data);
          userDataParsed = JSON.parse(userData);
          userLink = userDataParsed.link;
          gotLink = true;
        });
      });
  };
</script>

<div class="row">
  <form class="col s12">
    <div class="row">
      <div class="input-field col s4">
        <form on:submit|preventDefault={getLink}>
          <input
            class="validate"
            placeholder={$_('get-form-hint')}
            type="number"
            data-length="5"
            bind:value={linkCode} />
          <button
            class="btn waves-effect waves-light col s5"
            type="submit"
            name="action">
            {$_('get-form-button')}
            <i class="material-icons right">arrow_back</i>
          </button>
        </form>
      </div>
    </div>
  </form>
</div>

<div class="row">
  {#if gotLink}
    {#await userLink}
      <p>...querying...</p>
    {:then userLink}
      <h1>{$_('get-form-your-text')} {userLink}</h1>
      <p>{$_('get-form-here-you-go')}</p>
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}
  {/if}
</div>
