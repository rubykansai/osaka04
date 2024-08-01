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
              About
            </h1>
            <div align="left">
              <h2 class="text-h5 title mb-2">
                大阪Ruby会議とは
              </h2>
              <p class="text-body-1 mb-10">
                大阪Ruby会議は、大阪で定期的に開催しているRubyプログラミング言語に関するカンファレンスです。<br>
                Rubyに関する知見・技術を共有し、またRubyistの交流の場として、皆様に楽しんでいただけるカンファレンスを目指しています。<br>
                この夏、一番アツいRubyKaigiにぜひご参加ください！
              </p>
              <h2 class="text-h5 title mb-2">
                Contact
              </h2>
              <div class="text-body-1 mb-10">
                <a href="mailto:osaka04@rubykaigi.org">osaka04@rubykaigi.org</a>
              </div>
              <h2 class="text-h5 title mb-2">
                Team
              </h2>
              <v-row>
                <v-col
                  md="4"
                  sm="6"
                  xs="12"
                >
                  <v-card flat>
                    <div class="py-2 px-2">
                      <v-img
                        src="https://avatars.githubusercontent.com/u/13041216"
                        height="250px"
                        cover
                      />
                      <v-card-title>ydah</v-card-title>
                      <v-card-subtitle>Cheif Organizer / Designer</v-card-subtitle>
                      <div class="d-flex justify-center">
                        <a href="https://twitter.com/ydah_"><v-btn
                          class="mx-2"
                          icon="mdi-twitter"
                          flat
                        /></a>
                        <a href="https://github.com/ydah"><v-btn
                          class="mx-2"
                          icon="mdi-github"
                          flat
                        /></a>
                      </div>
                    </div>
                  </v-card>
                </v-col>
                <v-col
                  md="4"
                  sm="6"
                  xs="12"
                >
                  <v-card flat>
                    <div class="py-2 px-2">
                      <v-img
                        src="https://avatars.githubusercontent.com/u/8371588"
                        height="250px"
                        cover
                      />
                      <v-card-title>hachi</v-card-title>
                      <v-card-subtitle>Organizer</v-card-subtitle>
                      <div class="d-flex justify-center">
                        <a href="https://twitter.com/hachiblog"><v-btn
                          class="mx-2"
                          icon="mdi-twitter"
                          flat
                        /></a>
                        <a href="https://github.com/hayaokimura"><v-btn
                          class="mx-2"
                          icon="mdi-github"
                          flat
                        /></a>
                      </div>
                    </div>
                  </v-card>
                </v-col>
                <v-col
                  md="4"
                  sm="6"
                  xs="12"
                >
                  <v-card flat>
                    <div class="py-2 px-2">
                      <v-img
                        src="https://avatars.githubusercontent.com/u/471923"
                        height="250px"
                        cover
                      />
                      <v-card-title>おごもり</v-card-title>
                      <v-card-subtitle>Organizer</v-card-subtitle>
                      <div class="d-flex justify-center">
                        <a href="https://twitter.com/ogomr"><v-btn
                          class="mx-2"
                          icon="mdi-twitter"
                          flat
                        /></a>
                        <a href="https://github.com/ogom"><v-btn
                          class="mx-2"
                          icon="mdi-github"
                          flat
                        /></a>
                      </div>
                    </div>
                  </v-card>
                </v-col>
                <v-col
                  md="4"
                  sm="6"
                  xs="12"
                >
                  <v-card flat>
                    <div class="py-2 px-2">
                      <v-img
                        src="https://avatars.githubusercontent.com/u/911903"
                        height="250px"
                        cover
                      />
                      <v-card-title>むらじゅん</v-card-title>
                      <v-card-subtitle>Organizer</v-card-subtitle>
                      <div class="d-flex justify-center">
                        <a href="https://twitter.com/murajun1978"><v-btn
                          class="mx-2"
                          icon="mdi-twitter"
                          flat
                        /></a>
                        <a href="https://github.com/murajun1978"><v-btn
                          class="mx-2"
                          icon="mdi-github"
                          flat
                        /></a>
                      </div>
                    </div>
                  </v-card>
                </v-col>
                <v-col
                  md="4"
                  sm="6"
                  xs="12"
                >
                  <v-card flat>
                    <div class="py-2 px-2">
                      <v-img
                        src="https://secure.gravatar.com/avatar/f95dd1e4bb869baf82e1e622488ae30e"
                        height="250px"
                        cover
                      />
                      <v-card-title>smantani</v-card-title>
                      <v-card-subtitle>Organizer</v-card-subtitle>
                    </div>
                  </v-card>
                </v-col>
                <v-col
                  md="4"
                  sm="6"
                  xs="12"
                >
                  <v-card flat>
                    <div class="py-2 px-2">
                      <v-img
                        src="https://avatars.githubusercontent.com/u/194263"
                        height="250px"
                        cover
                      />
                      <v-card-title>spring_kuma</v-card-title>
                      <v-card-subtitle>Organizer</v-card-subtitle>
                    </div>
                  </v-card>
                </v-col>
                <v-col
                  md="4"
                  sm="6"
                  xs="12"
                >
                  <v-card flat>
                    <div class="py-2 px-2">
                      <v-img
                        src="/orgernizers/khori.png"
                        height="250px"
                        cover
                      />
                      <v-card-title>khori</v-card-title>
                      <v-card-subtitle>Organizer</v-card-subtitle>
                      <div class="d-flex justify-center">
                        <a href="https://twitter.com/khoriosk"><v-btn
                          class="mx-2"
                          icon="mdi-twitter"
                          flat
                        /></a>
                      </div>
                    </div>
                  </v-card>
                </v-col>
                <v-col
                  md="4"
                  sm="6"
                  xs="12"
                >
                  <v-card flat>
                    <div class="py-2 px-2">
                      <v-img
                        src="https://avatars.githubusercontent.com/u/11857"
                        height="250px"
                        cover
                      />
                      <v-card-title>znz</v-card-title>
                      <v-card-subtitle>Organizer</v-card-subtitle>
                      <div class="d-flex justify-center">
                        <a href="https://twitter.com/znz"><v-btn
                          class="mx-2"
                          icon="mdi-twitter"
                          flat
                        /></a>
                        <a href="https://github.com/znz"><v-btn
                          class="mx-2"
                          icon="mdi-github"
                          flat
                        /></a>
                      </div>
                    </div>
                  </v-card>
                </v-col>
                <v-col
                  md="4"
                  sm="6"
                  xs="12"
                >
                  <v-card flat>
                    <div class="py-2 px-2">
                      <v-img
                        src="https://avatars.githubusercontent.com/u/7349115"
                        height="250px"
                        cover
                      />
                      <v-card-title>すぎうり</v-card-title>
                      <v-card-subtitle>Organizer</v-card-subtitle>
                      <div class="d-flex justify-center">
                        <a href="https://twitter.com/uproad3"><v-btn
                          class="mx-2"
                          icon="mdi-twitter"
                          flat
                        /></a>
                        <a href="https://github.com/uproad"><v-btn
                          class="mx-2"
                          icon="mdi-github"
                          flat
                        /></a>
                      </div>
                    </div>
                  </v-card>
                </v-col>
                <v-col
                  md="4"
                  sm="6"
                  xs="12"
                >
                  <v-card flat>
                    <div class="py-2 px-2">
                      <v-img
                        src="https://avatars.githubusercontent.com/u/42272942"
                        height="250px"
                        cover
                      />
                      <v-card-title>舘林 秀和</v-card-title>
                      <v-card-subtitle>Organizer</v-card-subtitle>
                      <div class="d-flex justify-center">
                        <a href="https://twitter.com/shutooike"><v-btn
                          class="mx-2"
                          icon="mdi-twitter"
                          flat
                        /></a>
                        <a href="https://github.com/shutooike"><v-btn
                          class="mx-2"
                          icon="mdi-github"
                          flat
                        /></a>
                      </div>
                    </div>
                  </v-card>
                </v-col>
                <v-col
                  md="4"
                  sm="6"
                  xs="12"
                >
                  <v-card flat>
                    <div class="py-2 px-2">
                      <v-img
                        src="https://avatars.githubusercontent.com/u/57053236"
                        height="250px"
                        cover
                      />
                      <v-card-title>haruguchi</v-card-title>
                      <v-card-subtitle>Organizer</v-card-subtitle>
                      <div class="d-flex justify-center">
                        <a href="https://twitter.com/haruguchiyuma"><v-btn
                          class="mx-2"
                          icon="mdi-twitter"
                          flat
                        /></a>
                        <a href="https://github.com/haruguchi-yuma"><v-btn
                          class="mx-2"
                          icon="mdi-github"
                          flat
                        /></a>
                      </div>
                    </div>
                  </v-card>
                </v-col>
                <v-col
                  md="4"
                  sm="6"
                  xs="12"
                >
                  <v-card flat>
                    <div class="py-2 px-2">
                      <v-img
                        src="https://avatars.githubusercontent.com/u/17219700"
                        height="250px"
                        cover
                      />
                      <v-card-title>k-yoshida</v-card-title>
                      <v-card-subtitle>Organizer</v-card-subtitle>
                      <div class="d-flex justify-center">
                        <a href="https://twitter.com/8maim0"><v-btn
                          class="mx-2"
                          icon="mdi-twitter"
                          flat
                        /></a>
                      </div>
                    </div>
                  </v-card>
                </v-col>
                <v-col
                  md="4"
                  sm="6"
                  xs="12"
                >
                  <v-card flat>
                    <div class="py-2 px-2">
                      <v-img
                        src="https://avatars.githubusercontent.com/u/67820904"
                        height="250px"
                        cover
                      />
                      <v-card-title>okeysea</v-card-title>
                      <v-card-subtitle>Organizer</v-card-subtitle>
                      <div class="d-flex justify-center">
                        <a href="https://twitter.com/okeysea1"><v-btn
                          class="mx-2"
                          icon="mdi-twitter"
                          flat
                        /></a>
                        <a href="https://github.com/okeysea"><v-btn
                          class="mx-2"
                          icon="mdi-github"
                          flat
                        /></a>
                      </div>
                    </div>
                  </v-card>
                </v-col>
                <v-col
                  md="4"
                  sm="6"
                  xs="12"
                >
                  <v-card flat>
                    <div class="py-2 px-2">
                      <v-img
                        src="https://avatars.githubusercontent.com/u/46985135"
                        height="250px"
                        cover
                      />
                      <v-card-title>nishi_okashi</v-card-title>
                      <v-card-subtitle>Organizer</v-card-subtitle>
                      <div class="d-flex justify-center">
                        <a href="https://twitter.com/nishi_okashi"><v-btn
                          class="mx-2"
                          icon="mdi-twitter"
                          flat
                        /></a>
                        <a href="https://github.com/nishioka-shinji"><v-btn
                          class="mx-2"
                          icon="mdi-github"
                          flat
                        /></a>
                      </div>
                    </div>
                  </v-card>
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
