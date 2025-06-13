# IG Posts & Comments Scraper

A simple Puppeteer script to scrape the pinned and most recent posts from an Instagram account.

```cs
// define credentials as environment variables in .env
USER=<instagram username>
PASS=<instagram password>
TARGET=<instagram account to scrape>
```
- run `./index.ts`
- links will output to `./data.json`

## TODO:
- [ ] Grab data and comments for each post
- [ ] Tally comments and format output
- [ ] Write data to JSON
- [ ] Web frontend
