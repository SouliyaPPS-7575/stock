function Seo() {
  return (
    <article>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <title>Souvenir Stock</title>
      <meta name='description' content='Souvenir Stock Sale App' />
      <link rel='manifest' href='/manifest.json' />

      <meta property='og:title' content='Souvenir Stock' />
      <meta property='og:description' content='Souvenir Stock Sale App' />
      <meta
        property='og:image'
        content='https://souvenirstock.web.app/images/favicon.svg'
      />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://souvenirstock.web.app' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content='Souvenir Stock' />
      <meta name='twitter:description' content='Souvenir Stock Sale App' />
      <meta
        name='twitter:image'
        content='https://souvenirstock.web.app/images/favicon.svg'
      />

      <link rel='icon' type='image/png' href='/images/favicon.svg' />

      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='#fff' />
      <meta name='apple-mobile-web-app-title' content='souvenirstock' />
      <meta name='theme-color' content='#fff' />
      <link rel='apple-touch-icon' href='/images/favicon.svg' />
    </article>
  );
}

export default Seo;
