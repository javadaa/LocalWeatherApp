import { AppPage } from './app.po'

xdescribe('LocalCast Weather App', () => {
  let page: AppPage

  beforeEach(() => {
    page = new AppPage()
  })

  it('should display welcome message', () => {
    page.navigateTo()
    expect(page.getTitleText()).toEqual('LocalCast Weather')
  })
})
