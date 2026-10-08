# Photos

Verónica's own event and inventory photos. Use the **exact filenames** below — each one appears on
the site automatically (optimized to WebP, lazy-loaded). Until a file exists, its card shows as a
finished text card (no placeholder). Alt text for each photo is in `src/data/photos.ts` — update
it to match the real photo.

**Before adding any photo: strip all metadata (EXIF, GPS location, XMP, ICC).** This repository is
public, and phone photos often contain the exact location where they were taken. Re-encoding with
`sharp` (without `.withMetadata()` / `.keepMetadata()`) removes everything. Keep originals outside
the repo (`Photos/` is git-ignored).

Never add stock or AI-generated images, photos with licensed characters (e.g. Winnie the Pooh), or
photos showing a child's name. `balloons-rodeo-first-birthday.jpg` is permanently excluded.

## In place

| Filename                                | Used for                                                   |
| --------------------------------------- | ---------------------------------------------------------- |
| `barrels-umbrellas-backyard.jpg`        | Signature Barrel Tables                                    |
| `barrel-table-umbrella-stools.jpg`      | Matching Barstools; Gallery (1st)                          |
| `barrels-umbrellas-patio-dusk.jpg`      | Hero photo; Weddings card; Gallery                         |
| `barrels-umbrellas-ranch.jpg`           | Gallery                                                    |
| `barrels-stools-lawn.jpg`               | Not shown right now (available)                            |
| `barrel-bar-wagon-wheel.jpg`            | Barrel Bar                                                 |
| `barrel-buffet-table-setup.jpg`         | Gallery; (unpublished) Barrel Buffet Table                 |
| `western-bar-hay-bale-longhorn.jpg`     | Western Longhorn Bar (cropped from the left)               |
| `wood-backdrop-birthday-salud.jpg`      | Birthdays card; Wood Backdrop; "Salud" display; Neon Signs |
| `birthday-backdrop-whiskey-barrels.jpg` | Gallery                                                    |
| `wood-backdrop-cactus.jpg`              | Cactus Accents; Gallery                                    |
| `sweet-16-light-wood-backdrop.jpg`      | Sweet 16 card; Gallery; (unpublished) Marquee Numbers      |
| `sweet-16-arched-backdrop-marquee.jpg`  | Arched Wood Backdrops; Gallery                             |
| `dessert-cart-night.jpg`                | Rustic Dessert Cart; Gallery                               |
| `dessert-cart-day.jpg`                  | Gallery                                                    |
| `balloons-black-gold-barrel-bar.jpg`    | Balloon Garlands; Gallery                                  |
| `balloons-bee-backdrop-pedestals.jpg`   | Baby Showers card; Gallery; (unpublished) White Pedestals  |
| `balloons-graduation-arch.jpg`          | Graduations card                                           |
| `balloons-sunflower-gold.jpg`           | Not shown right now (available)                            |
| `balloons-bee-column.jpg`               | Not shown right now (available)                            |
| `dessert-cart-greenery.jpg`             | Not shown right now (parked cars visible)                  |

## Not received yet (cards show as text until added)

| Filename                        | Would be used for                                |
| ------------------------------- | ------------------------------------------------ |
| `barrel-bar-horse-backdrop.jpg` | Horse & Horseshoe Cutouts (and Gallery)          |
| `saloon-facade-wanted.jpg`      | "Wanted" Photo Frame (and Gallery)               |
| `saloon-facade.jpg`             | Western Saloon Facade                            |
| `balloons-cowgirl-shower.jpg`   | Add-Ons feature photo; Rustic Dessert Table      |
| `photo-booth.jpg`               | Photo Booth                                      |
| `barrel-table-light.jpg`        | Light finish card (a clearly light-finish table) |
| `barrel-table-dark.jpg`         | Dark finish card (a clearly dark-finish table)   |
