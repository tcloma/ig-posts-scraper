import type { Page } from 'puppeteer'

export default async function login(page: Page, username: string, password: string) {
	await page
		.locator(
			'#loginForm > div.x9f619.xjbqb8w.x78zum5.x15mokao.x1ga7v0g.x16uus16.xbiv7yw.xqui205.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1 > div:nth-child(1) > div > label > input'
		)
		.fill(username)
	await page
		.locator('div.x11gldyt:nth-child(2) > div:nth-child(1) > label:nth-child(1) > input:nth-child(2)')
		.fill(password)
	await page
		.locator(
			'#loginForm > div.x9f619.xjbqb8w.x78zum5.x15mokao.x1ga7v0g.x16uus16.xbiv7yw.xqui205.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1 > div:nth-child(3) > button > div'
		)
		.click()
	await page.locator('div.x1i10hfl').click()
}
