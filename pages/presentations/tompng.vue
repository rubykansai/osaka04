<template>
  <v-app class="fill-height">
    <AppHeader />
    <v-row>
      <v-col align="center">
        <v-card
          max-width="70vw"
          min-width="70vw"
          class="py-10"
          :elevation="0"
        >
          <v-card-item>
            <v-img
              src="/logo.png"
              width="10vh"
            />
            <h1 class="text-h2 title mb-15">
              Schedule
            </h1>
            <div align="left">
              <v-row>
                <v-col
                  md="6"
                  sm="12"
                  xs="12"
                >
                  <v-card
                    class="speaker px-10 py-5"
                    align="center"
                    flat
                  >
                    <div class="py-2 px-2">
                      <v-img
                        :src="speaker.image"
                        max-height="10rem"
                        max-width="10rem"
                        cover
                      />
                      <v-card-title>{{ speaker.name }}</v-card-title>
                      <div class="d-flex justify-center">
                        <a :href="speaker.twitter"><v-btn
                          class="mx-2"
                          icon="mdi-twitter"
                          flat
                        /></a>
                        <a :href="speaker.github"><v-btn
                          class="mx-2"
                          icon="mdi-github"
                          flat
                        /></a>
                      </div>
                      <div align="left">
                        <p class="text-body-2 mt-5">
                          {{ speaker.description }}
                        </p>
                      </div>
                    </div>
                  </v-card>
                </v-col>
                <v-col>
                  <h2 class="text-h5 title mb-2">
                    {{ speaker.title }}
                  </h2>
                  <v-divider class="mb-5" />
                  <p class="text-body-1 abstract">
                    {{ speaker.abstract }}
                  </p>
                </v-col>
              </v-row>
            </div>
          </v-card-item>
        </v-card>
        <FooterWave />
        <div class="footer">
          OsakaRubyKaigi04 ©2024 <br>
          Designed by <a href="https://twitter.com/ydah_">@ydah_</a>
        </div>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    speaker: {
      name: 'ぺん！',
      twitter: 'https://twitter.com/tompng',
      github: 'https://github.com/tompng',
      description: 'Maintainer of IRB and Reline. TRICK 2022 Gold Medalist. CTO at codeTakt Inc.',
      image: 'https://avatars.githubusercontent.com/u/1780201?v=4',
      title: 'Re-line 〜 IRB・Reline 複数行編集の裏側',
      abstract: 'IRBの複数行入力は、Rubyの標準ライブラリであるRelineが担っています。\nこのトークでは、Relineがどのように複数行入力や補完ダイアログなどを描画しているのか、そしてその描画方式が最近のリアーキテクチャリングでどう変わったかを比較しながら解説します。\nまた、Relineの行数を800行減らしたリアーキテクチャリングから得られた知見も紹介します。',
    },
  }),
}
</script>

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

.speaker {
  background-color: #fbfbfb !important;
}

.abstract {
  white-space: pre-wrap;
}

@media (max-width: 600px) {
.v-col {
    flex-basis: inherit !important;
  }
}
</style>
