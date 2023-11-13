import Page from '../../core/templates/page'

class ProfilePage extends Page {
	static TextObject = {
		MainTitle: 'Profile Page',
	}

	constructor(id: string) {
		super(id)
	}

	render() {
		const title = this.createHeaderTitle(ProfilePage.TextObject.MainTitle)
		this.container.append(title)
		return this.container
	}
}

export default ProfilePage
