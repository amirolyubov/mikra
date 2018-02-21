const initialState = {
  news: [
    {
      title: 'Vse sef srf sef s',
      body: 'Ffw f rf w987f wef wef 987w ef wef 7 w ew we wrg wrf wefwr few gwrg eg'
    },
    {
      title: 'Rrvsrvs ef ',
      body: 'Trgwgpij nj[okvr etdgpij 08u gpj pojerg pojerg'
    },
    {
      title: '$brbgsr srg',
      body: 'SS pijg prjsvpsrj vspejf vsepfj vsepfj sepifj sepign sronsoengojvn srjov'
    },
    {
      title: 'RG bdtbdrbdt',
      body: 'Knbpeij pisrjg '
    },
    {
      title: 'Wgbntgmymg',
      body: 'Apsrbsnvrojvnsr ojn'
    },
    {
      title: 'Qe tndtb',
      body: 'Rndrgrtdg kjdt gdrjg sepig jsrpij'
    }
  ],
  grants: [
    {
      title: 'Mirror',
      description: 'Yay',
      status: 'NEW',
      image: 'https://uploads.guim.co.uk/2017/10/06/Gaby-Hinsliff,-L.png'
    },
    {
      title: 'Helled',
      description: 'Some one',
      status: 'NEW',
      image: 'https://bloximages.chicago2.vip.townnews.com/billingsgazette.com/content/tncms/assets/v3/editorial/e/9f/e9f555b2-fd83-5f8e-aa88-a9739bbc5129/595ee11f782f0.image.jpg'
    },
    {
      title: 'Near',
      description: 'Close to you',
      status: 'BIDS_START',
      image: 'https://lh4.googleusercontent.com/-etMsOMsUMN8/Uow0Ts9RRMI/AAAAAAAAEOM/8A8lDY2HEXo/w300-h400-no/Weird-Africa-animals-Okapi.jpg'
    },
  ]
}

const main = (state = initialState, action) => {
  switch (action.type) {
    case 'test':
      return state
    default:
      return state
  }
}

export default main
