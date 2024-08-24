<template>
  <v-app class="fill-height">
    <AppHeader />
    <v-row>
      <v-col align="center" class="pb-0 mt-12">
        <v-card
          max-width="70vw"
          min-width="70vw"
          class="mt-12"
          :elevation="0"
        >
          <v-card-item>
            <v-img
              src="/logo.png"
              width="10vh"
            />
            <h1 class="text-h2 title mb-15">
              Goodies
            </h1>
            <div align="left">
              <h2 class="text-h5 title mb-5">
                Main Visual
              </h2>
              <v-img src="/ogp.png" />
              <v-divider class="my-15" />
              <h2 class="text-h5 title mb-5">
                Keynote Template
              </h2>
              <v-row class="justify-space-between">
                <v-col
                  md="6"
                  sm="6"
                  xs="12"
                >
                  <v-img
                    src="/keynote_template_osaka_rubykaigi04.png"
                    max-height="30rem"
                    max-width="30rem"
                    cover
                  />
                </v-col>
                <v-col>
                  <h3 class="text-h6">
                    This template requires the following fonts:
                  </h3>
                  <v-list>
                    <v-list-item>
                      <v-list-item-content>
                        <a
                          href="https://fonts.google.com/specimen/Federo"
                          target="_blank"
                          class="text-link"
                        >
                          <v-list-item-title>- Federo</v-list-item-title>
                        </a>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <a
                          href="https://fonts.google.com/specimen/Roboto"
                          target="_blank"
                          class="text-link"
                        >
                          <v-list-item-title>- Roboto</v-list-item-title>
                        </a>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                  <a
                    href="https://rubykansai.github.io/osaka04/keynote_template_osaka_rubykaigi04.key"
                    target="_blank"
                    download="keynote_template_osaka_rubykaigi04.key"
                  >
                    <v-btn
                      rounded="xl"
                      size="x-large"
                      color="indigo-darken-3"
                    >Download</v-btn>
                  </a>
                </v-col>
              </v-row>
              <v-divider class="my-15" />
              <h2 class="text-h5 title mb-5">
                Official Goods
              </h2>
              <v-row class="justify-space-between">
                <v-col
                  md="6"
                  sm="6"
                  xs="12"
                >
                  <v-img
                    src="/official_goods.png"
                    max-height="30rem"
                    max-width="30rem"
                    cover
                  />
                </v-col>
                <v-col>
                  <h3 class="text-h6 mb-5">
                    Official Shop on SUZURI
                  </h3>
                  <a
                    href="https://suzuri.jp/kyobashirb"
                    target="_blank"
                  >
                    <v-btn
                      rounded="xl"
                      size="x-large"
                      color="indigo-darken-3"
                    >Go to Shop</v-btn>
                  </a>
                </v-col>
              </v-row>
            </div>
          </v-card-item>
        </v-card>
        <FooterWave />
        <FooterBlock />
      </v-col>
    </v-row>
  </v-app>
</template>

<style>
* {
  box-sizing: border-box;
}

.title {
  font-family: 'Federo', sans-serif;
  font-weight: 1000;
}

.text-body-1 {
  line-height: 1.7;
}

.text-link {
  color: #000;
  text-decoration: none;
}

.text-link:hover {
  color: #419dbf;
  text-decoration: underline;
  box-sizing:border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  transition: all 0.1s ease-in-out;
}

.link:hover {
  border: #419dbf 0.5px solid;
  box-sizing:border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  transition: all 0.01s 0.01s ease-in-out;
}

.footer {
  color: #fff;
  background-color: #419dbf;
  padding-top: 50px;
  padding-bottom: 15px;
}

.footer a {
  color: #fff;
}

@media (max-width: 600px) {
.v-col {
    flex-basis: inherit !important;
  }
}
</style>
