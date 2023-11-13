import Header from '../../core/components/header'
import Page from '../../core/templates/page'

import CatalogPage from '../catalog'
import MainPage from '../main'
import NotFoundPage, { ErrorTypes } from '../not-found'
import ProfilePage from '../profile'

export const enum PageIds {
	MainPage = 'main-page',
	ProfilePage = 'profile-page',
	CatalogPage = 'catalog-page',
}

class App {
	private static container: HTMLElement = document.body
	private static defaultPageId: string = 'current-page'
	private initialPage: MainPage
	private header: Header

	static renderNewPage(pageId: string) {
		const currentPageHTML = document.getElementById(`${App.defaultPageId}`)

		if (currentPageHTML) {
			currentPageHTML.remove()
		}

		let page: Page | null = null

		if (pageId === PageIds.MainPage) page = new MainPage(pageId)
		if (pageId === PageIds.ProfilePage) page = new ProfilePage(pageId)
		if (pageId === PageIds.CatalogPage) page = new CatalogPage(pageId)

		if (
			pageId !== PageIds.MainPage &&
			pageId !== PageIds.ProfilePage &&
			pageId !== PageIds.CatalogPage
		) {
			page = new NotFoundPage(pageId, ErrorTypes.Error_404)
		}

		if (page) {
			const pageHTML = page.render()
			pageHTML.id = App.defaultPageId
			App.container.append(pageHTML)
		}
	}

	private enableRouteChange() {
		window.addEventListener('hashchange', () => {
			const hash = window.location.hash.slice(1)
			App.renderNewPage(hash)
		})
	}

	constructor() {
		this.initialPage = new MainPage('main-page')
		this.header = new Header('header', 'header__container')
	}

	run() {
		App.container.append(this.header.render())
		App.renderNewPage(window.location.hash.slice(1))
		this.enableRouteChange()
	}
}

export default App
