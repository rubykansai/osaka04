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
          Osaka RubyKaigi 04 ©2024 <br>
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
      name: 'willnet',
      twitter: 'https://twitter.com/netwillnet',
      github: 'https://github.com/willnet',
      description: '株式会社ウィルネット代表。複数の会社の技術顧問しています。ginza.rb主催。著書にパーフェクトRuby on Rails(共著)、Ruby on Rails6エンジニア養成読本(共著)、WEB+DB PRESS で Ruby 記事連載(Vol 93~95)',
      image: 'https://avatars.githubusercontent.com/u/82371?v=4',
      title: 'どうしてこうなった？から理解するActive Recordの関連の裏側',
      abstract: 'Active Recordは便利なライブラリです。Active Recordは一見すると魔法のように振る舞いますが、当然ながら実際にはRubyのコードが決められた仕様で動いています。Active Recordが実際どのように動くのかを知っていると、Active Recordが期待通り動かないエッジケースに遭遇したときのデバッグや修正に役立ちます。\n\n今回の発表では、私が実際に遭遇した「Active Recordが期待通り動かないエッジケース」を元にActive Recordにおける関連の裏側について解説します。具体的には(1)特定のモデルをsaveしたときに関連モデルも同時にsaveされる仕組み、(2)関連のinverse_ofオプションの仕組みについて説明した上で、(1)と(2)が合わさったときに発生する想定外の挙動について詳しく説明していく予定です。\n\nこの発表を聞くことで、Active Recordの魔法の一端を理解できるようになるはずです。',
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
