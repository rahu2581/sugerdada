<template>
  <v-app>
    <v-container class="text-center">
      <h1 class="display-2 mt-5 mb-5">
        Your reliable sugar d₳d₳ staking pool in Europe
      </h1>
      <div class="mt-5 mb-5">
        <img src="@/assets/cardano-logo.png" width="25%" height="25%">
      </div>
      <v-btn
        class="mt-5 mb-5"
        color="#FAF33E"
        href="https://static.iohk.io/docs/testnet/Daedalus_Rewards_Wallet_Instructions.pdf"
        target="_blank"
      >
        Read the official guide on how to stake your ADA coins
      </v-btn>
      <h2 class="display-1 mt-5">
        And start delegating to our staking pool!
      </h2>
      <div class="fees-container mt-5">
        <p>Ticker: <b>SUGAR</b></p>
        <p>Fixed Fee: <b>40</b>₳</p>
        <p>Variable Fee: <b>1.5%</b></p>
      </div>
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>

<style lang="scss">
  /* Coolors Exported Palette - coolors.co/d6f8d6-7fc6a4-5d737e-2f2c33-faf33e */
  /* HSL */
  $color1: hsla(120%, 71%, 91%, 1);
  $color2: hsla(151%, 38%, 64%, 1);
  $color3: hsla(200%, 15%, 43%, 1);
  $color4: hsla(266%, 7%, 19%, 1);
  $color5: hsla(58%, 95%, 61%, 1);
  /* RGB */
  $color1: rgba(214, 248, 214, 1);
  $color2: rgba(127, 198, 164, 1);
  $color3: rgba(93, 115, 126, 1);
  $color4: rgba(47, 44, 51, 1);
  $color5: rgba(250, 243, 62, 1);

  h1, h2 {
    text-transform: uppercase;
    color: $color2;
  }

  p {
    color: #fff;
  }

  canvas {
    width: 100%;
    height: 92.5%;
    position: absolute;
  }

  .fees-container {
    display: flex;
    justify-content: center;
    width: 100%;
    > * {
      margin-left: 1em;
      margin-right: 1em;
    }
  }
</style>
