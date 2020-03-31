<script>
  import { _ } from "../services/i18n";
  import TranslateButton from "../layout/TranslateButton.svelte";
  import { setupI18n, isLocaleLoaded, locale } from "../services/i18n";
</script>

<div class="container">
  <div class="container right-align" style="margin-top: 30px;">
    <TranslateButton
      value={$locale}
      on:locale-changed={e => setupI18n({ withLocale: e.detail })} />
  </div>
  <h4>{$_('about-title')}</h4>

  <p>{$_('about-framework')}</p>
  <p>{$_('about-why-made-site')}</p>
  <p>{$_('about-want-job')}</p>

  <p>
    <a href="http://www.seanbase.com">{$_('about-main-site-link')}</a>
  </p>
</div>
