# Charlie Groll — Portfolio

**Website:** https://cgroll04.github.io/

A record-inspired personal portfolio with selected work, experience and two résumé versions. Built with HTML, CSS and JavaScript; no build step, paid hosting, analytics or server-side services.

## Preview locally

From this folder, run:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Then visit http://127.0.0.1:4173/.

## Update

- `index.html`: overview, skills, experience, interests and links.
- `app.js`: the four project stories, screenshot captions and dated project metrics.
- `styles.css`: layout, colours and responsive styles.
- `assets/`: images used by the site.
- `resume.pdf`: General Software résumé.
- `resume-applied-ai.pdf`: Applied AI / Product résumé.

Keep the résumé filenames unchanged when replacing them. Check the phone and desktop layouts, project stories and both PDF links before publishing. Preserve the distinction between first-time downloads and registered accounts; update their verification dates alongside any new figures.

## Publish

GitHub Pages publishes the root of `main`. Committing and pushing updates to that branch automatically deploys them. `.nojekyll` keeps the website as plain static files. Check **Settings → Pages** for the public address and **Actions** for deployment results.

## Assets and scope

The headshot and SweetSpots logo were supplied by Charlie. Employer and platform logos identify the relevant experience or integration; they do not imply endorsement. Third-party logos and album covers remain the property of their respective owners; no licence to those assets is granted by this repository.

SweetSpots screenshots come from its [public App Store listing](https://apps.apple.com/ca/app/sweetspots/id6747997071). The iOS source remains private. No IBM source code, client material, internal screenshots, or Obsidian notes are included.

Album thumbnails are sourced from the following Apple Music listings, also linked from the website:

- [The Stranger — Billy Joel](https://music.apple.com/ca/album/the-stranger/158617952)
- [Abbey Road — The Beatles](https://music.apple.com/ca/album/abbey-road-remastered/1441164426)
- [OK Computer — Radiohead](https://music.apple.com/ca/album/ok-computer/1097861387)
- [Songs in the Key of Life — Stevie Wonder](https://music.apple.com/ca/album/songs-in-the-key-of-life/1440788438)
- [Rumours — Fleetwood Mac](https://music.apple.com/ca/album/rumours/594061854)

Helm is presented as a personal Mac project with screenshots from its isolated fictional-data showcase. Its source link should be published alongside the Helm repository. No real calendar, chat, school document, or application data is used in the new media.

## Record-crate browsing

The project collection progressively enhances into an open wooden record crate, with perspective side walls, slatted faces and sleeves leaning inside the box. The crate is drawn in SVG and the interactive sleeves remain normal accessible buttons. Back / Flip next, direct title tabs, arrow keys and horizontal swipes select a record; clicking the front cover opens the project story. Without JavaScript, all project cards remain readable. The selected story is separate from the physical cover stack, and reduced-motion preferences disable the transitions.

Helm’s artwork is a generated adaptation inspired by *Songs in the Key of Life*, matching the album-homage direction of the other three covers. It uses original compass imagery and replacement project lettering. The generation prompt is in `assets/album-helm-prompt.txt`. The artwork is presented as a portfolio homage, not an endorsement by an artist or label.

Helm’s story leads with its purpose as an evolving personal app. The NeetCode tracker is one example of extending the same codebase when a new need appears; current tracking and planning tools are examples of that broader idea.
