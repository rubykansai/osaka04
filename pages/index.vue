<template>
  <v-app class="fill-height">
    <AppHeader />
    <v-row>
      <v-col align="center">
        <v-card min-width="100vw" class="py-10" :elevation="0">
          <v-card-item class="justify-center">
            <v-img src="/logo.png" width="25vh"/>
            <div class="text-h1 d-none d-sm-block title mb-5">Osaka RubyKaigi 04</div>
            <div class="text-h3 d-none d-sm-block title mb-15">2024.8.24 (Saturday)</div>
            <div class="text-h3 d-none d-sm-block keynotes mb-4">Keynote Speakers</div>
            <div class="text-h4 d-none d-sm-block names">Yuichiro Kaneko / Hitoshi HASUMI</div>
            <div class="text-h2 d-block d-sm-none title mb-5">Osaka RubyKaigi 04</div>
            <div class="text-h4 d-block d-sm-none title mb-15">2024.8.24 (Saturday)</div>
            <div class="text-h4 d-block d-sm-none keynotes mb-4">Keynote Speakers</div>
            <div class="text-h5 d-block d-sm-none names">Yuichiro Kaneko / Hitoshi HASUMI</div>
          </v-card-item>
          <v-card-item class="mt-10 text-center justify-center">
            <div class="text-h4 d-none d-sm-block where">
              <a href="https://www.festival-city.jp/">
                @Nakanoshima Festival Tower West 4F<br>
                Nakanoshima Kaikan Hall
              </a>
            </div>
            <div class="text-h5 d-block d-sm-none where">
              <a href="https://www.festival-city.jp/">
                @Nakanoshima Festival Tower West 4F<br>
                Nakanoshima Kaikan Hall
              </a>
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

.keynotes {
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 1000;
}

.names {
  font-family: 'Saira Extra Condensed', sans-serif;
  font-weight: 800;
}

.where {
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
}

.where a {
  color: #000;
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
