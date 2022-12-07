const styles = require("./styles.js");

module.exports = () => {
  return {
    ckeditor: {
      enabled: true,
      config: {
        plugin: {
          // disable data-theme tag setting //
          // setAttribute:false,

          // disable strapi theme, will use default ckeditor theme //
          // strapiTheme:false,

          // styles applied to editor container, e.g:
          styles: `
                ${styles()}
                .ck-editor__styled__container{
                  background:red;
                }
                html[data-theme='light'] {
                --ck-scroll-track-background:red;
                --ck-scroll-thumb-background:red;
                --ck-scroll-thumb-border-color:red;
                --ck-scroll-thumb-hover-background:red;
                --ck-scroll-thumb-active-background:red;
                --ck-color-base-border: red;
                --ck-color-base-background:red;
                --ck-custom-background: red;
                --ck-custom-foreground: red;
                --ck-custom-border: red;
                --ck-custom-white: red;
                }
                `,
        },
        // editor default config
        editor: {
          //...
        },
        upload: {
          config: {
            breakpoints: {
              xlarge: 1920,
              large: 1000,
              medium: 750,
              small: 500,
              xsmall: 64,
            },
          },
        },
      },
    },
  };
};
