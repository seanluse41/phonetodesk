<script>
  import { db } from "../firebase.js";
  let linkCode;
  let gotLink = "";
  const getLink = () => {
    db.collection("links")
      .where("id", "==", linkCode)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          gotLink = doc.data.link;
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
            placeholder="Enter your 5 digit code here"
            type="number"
            data-length="5"
            bind:value={linkCode} />
          <button
            class="btn waves-effect waves-light col s5"
            type="submit"
            name="action">
            Get
            <i class="material-icons right">arrow_back</i>
          </button>
        </form>
      </div>
    </div>
  </form>
</div>
