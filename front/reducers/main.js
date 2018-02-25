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
      description: `Тема данной статьи актуальна, так как отличительной чертой инновационного развития предпринимательства в России яв-
ляется постепенный, но уверенный переход от нецивилизованных форм бизнеса к современным международным формам с исполь-
зованием методов и средств бизнес-планирования. Как показывает опыт западных предпринимателей, обязательным условием
успешности создания бизнеса с нуля, является разработка бизнес-плана, позволяющего уточнить как саму сущность и цель про-
екта, так и количество необходимых инвестиционных средств. `,
      status: 'NEW',
      image: 'https://uploads.guim.co.uk/2017/10/06/Gaby-Hinsliff,-L.png'
    },
    {
      title: 'Helled',
      description: `Результаты. Подготовка бизнес-плана для стартап проекта является комплексным и трудозатратным процессом, где бизнес-
план является визитной карточкой, необходимой для привлечения внешнего финансирования, дорожной картой для инициатора
проекта, поэтому при его подготовке нет мелочей. Как показывает опыт западных предпринимателей, ошибки, которые могут
быть допущены при разработке бизнес-плана: недостоверность и неполнота входящей информации; игнорирование необходи-
мости подготовки анализа рынка либо использование при его подготовке недостоверных источников; ошибки в проведенных рас-
четах, их неполнота; ошибки в текстовой части бизнес-плана, а также несоблюдение логики подачи материала, его скудность,
непрофессиональность выкладки; отсутствие анализа рисков`,
      status: 'NEW',
      image: 'https://bloximages.chicago2.vip.townnews.com/billingsgazette.com/content/tncms/assets/v3/editorial/e/9f/e9f555b2-fd83-5f8e-aa88-a9739bbc5129/595ee11f782f0.image.jpg'
    },
    {
      title: 'Near',
      description: `При правильном подходе к подготовке бизнес-плана он сможет стать не только формальным документом, но и практическим
руководством по реализации бизнес-идеи, которое позволит проводить своевременную оценку результативности проекта, а
также корректировать первоначальные планы в процессе реализации проекта, и отслеживать влияние изменений на прибыль-
ность проекта, его рентабельность и инвестиционную привлекательность.`,
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
