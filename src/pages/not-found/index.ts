import Page from '../../core/templates/page'

export const enum ErrorTypes {
	Error_404 = 404,
}

class NotFoundPage extends Page {
	private errorType: ErrorTypes | string

	static TextObject: { [prop: string]: string } = {
		'404': 'Page not found!',
	}

	constructor(id: string, errorType: ErrorTypes | string) {
		super(id)
		this.errorType = errorType
	}

	render() {
		const title = this.createHeaderTitle(
			NotFoundPage.TextObject[this.errorType]
		)
		this.container.append(title)
		return this.container
	}
}

export default NotFoundPage
