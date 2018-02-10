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
  grants: []
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
