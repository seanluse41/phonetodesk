<script>
  import TextForm from "../layout/TextForm.svelte";
  import GetForm from "../layout/GetForm.svelte";
  import LoginButton from "../layout/LoginButton.svelte";
  import TranslateButton from "../layout/TranslateButton.svelte";
</script>

<div class="container right-align" style="margin-top: 30px;">
  <LoginButton />
  <TranslateButton />
</div>
<div class="container" style="margin-top: 150px;">
  <div class="row">
    <div class="center-align">
      <TextForm />
    </div>
  </div>
  <div class="row">
    <div class="center-align">
      <GetForm />
    </div>
  </div>

</div>
