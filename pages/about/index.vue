<template>
  <v-app class="fill-height">
    <AppHeader />
    <v-row>
      <v-col align="center">
        <v-card max-width="70vw" min-width="70vw" class="py-10" :elevation="0">
          <v-card-item>
            <v-img src="/logo.png" width="10vh"/>
            <h1 class="text-h2 title mb-15">About</h1>
            <div align="left">
              <h2 class="text-h5 title mb-2">Osaka RubyKaigiとは</h2>
              <p class="text-body-1 mb-10">
                大阪Ruby会議は、大阪で定期的に開催しているRubyプログラミング言語に関するカンファレンスです。<br>
                Rubyに関する知見・技術を共有し、またRubyistの交流の場として、皆様に楽しんでいただけるカンファレンスを目指しています。<br>
                この夏、一番アツいRubyKaigiにぜひご参加ください！
              </p>
              <h2 class="text-h5 title mb-2">Contact</h2>
              <div class="text-body-1 mb-10">
                <a href="mailto:osaka04@rubykaigi.org">osaka04@rubykaigi.org</a>
              </div>
              <h2 class="text-h5 title mb-2">Team</h2>
              <v-row>
                <v-col md="4" sm="6" xs="6">
                  <v-card flat>
                    <div class="py-2 px-2">
                      <v-img src="/orgernizers/ydah.jpeg" height="250px" cover></v-img>
                      <v-card-title>ydah</v-card-title>
                      <v-card-subtitle>Cheif Organizer / Designer</v-card-subtitle>
                      <div class="d-flex justify-center">
                        <a href="https://twitter.com/ydah_"><v-btn class="mx-2" icon="mdi-twitter" flat></v-btn></a>
                        <a href="https://github.com/ydah"><v-btn class="mx-2" icon="mdi-github" flat></v-btn></a>
                      </div>
                    </div>
                  </v-card>
                </v-col>
                <v-col md="4" sm="6" xs="6">
                  <v-card flat>
                    <div class="py-2 px-2">
                      <v-img src="/orgernizers/hachi.jpg" height="250px" cover></v-img>
                      <v-card-title>hachi</v-card-title>
                      <v-card-subtitle>Organizer</v-card-subtitle>
                      <div class="d-flex justify-center">
                        <a href="https://twitter.com/hachiblog"><v-btn class="mx-2" icon="mdi-twitter" flat></v-btn></a>
                        <a href="https://github.com/hayaokimura"><v-btn class="mx-2" icon="mdi-github" flat></v-btn></a>
                      </div>
                    </div>
                  </v-card>
                </v-col>
                <v-col md="4" sm="6" xs="6">
                  <v-card flat>
                    <div class="py-2 px-2">
                      <v-img src="/orgernizers/ogom.jpeg" height="250px" cover></v-img>
                      <v-card-title>おごもり</v-card-title>
                      <v-card-subtitle>Organizer</v-card-subtitle>
                      <div class="d-flex justify-center">
                        <a href="https://twitter.com/ogomr"><v-btn class="mx-2" icon="mdi-twitter" flat></v-btn></a>
                        <a href="https://github.com/ogom"><v-btn class="mx-2" icon="mdi-github" flat></v-btn></a>
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </v-card-item>
        </v-card>
        <Wave />
        <div class="footer">
          Osaka RubyKaigi 04 ©2024 <br>
          Designed by <a href="https://twitter.com/ydah_">@ydah_</a>
        </div>
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

.footer {
  color: #fff;
  background-color: #419dbf;
  padding-top: 50px;
  padding-bottom: 15px;
}

.footer a {
  color: #fff;
}
</style>
