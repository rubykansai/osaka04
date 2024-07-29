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
              Venue
            </h1>
            <h2 class="text-h6 mb-4">
              Nakanoshima Festival Tower West 4F Nakanoshima Kaikan Hall<br>中之島フェスティバルタワーウエスト 4F 中之島会館
            </h2>
            <div class="mb-8">
              <a href="https://www.festival-city.jp/access/"><v-btn
                size="x-large"
                color="indigo-darken-3"
              >Official Page</v-btn></a>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6560.915221356305!2d135.4967709!3d34.6936362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e6f1d726ccd5%3A0xe4034b01a194816f!2sNakanoshima%20Festival%20Tower!5e0!3m2!1sen!2sjp!4v1716563343967!5m2!1sen!2sjp"
              width="100%"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
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
</style>
