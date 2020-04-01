<script>
  import GetForm from "../layout/GetForm.svelte";
  import TranslateButton from "../layout/TranslateButton.svelte";
  import TextForm from "../layout/TextForm.svelte";
  import { setupI18n, isLocaleLoaded, locale } from "../services/i18n";
</script>

<div class="container right-align" style="margin-top: 30px;">
  <TranslateButton
    value={$locale}
    on:locale-changed={e => setupI18n({ withLocale: e.detail })} />
</div>
<div class="container" style="margin-top: 150px;">
  <TextForm />
  <GetForm />
</div>