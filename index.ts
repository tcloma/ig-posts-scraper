import fs from 'fs'
import puppeteer from 'puppeteer'
import login from './utils/login'

const user = process.env.USER as string
const pass = process.env.PASS as string
const target = process.env.TARGET as string

async function run() {
	const browser = await puppeteer.launch({ headless: false })
	const page = await browser.newPage()

	await page.goto('https://www.instagram.com/')

	// LOGIN
	login(page, user, pass)
	await page.locator('div.x1i10hfl').click()

	// GET POSTS
	await page.goto(`https://www.instagram.com/${target}/`)
	const postsSelector =
		'div.x1lliihq.x1n2onr6.xh8yej3.x4gyw5p.x14z9mp.xzj7kzq.xbipx2v.x1j53mea > a.x1i10hfl.xjbqb8w.x1ejq31n.x18oe1m7.x1sy0etr.xstzfhl.x972fbf.x10w94by.x1qhh985.x14e42zd.x9f619.x1ypdohk.xt0psk2.xe8uvvx.xdj266r.x14z9mp.xat24cr.x1lziwak.xexx8yu.xyri2b.x18d9i69.x1c1uobl.x16tdsg8.x1hl2dhg.xggy1nq.x1a2a7pz._a6hd'

	await page.waitForSelector(postsSelector)
	const hrefHandles = await page.$$(postsSelector)

	const posts: string[] = []
	for (const handle of hrefHandles) {
		const hrefHandle = await handle.getProperty('href')
		const href = (await hrefHandle.jsonValue()) as string
		posts.push(href)
	}

	// fs.writeFileSync('data.json', JSON.stringify(posts))
	console.log(posts)
	await browser.close()
}

run()
