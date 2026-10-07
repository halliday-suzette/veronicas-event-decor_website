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

| Filename                           | Used for                                                     |
| ---------------------------------- | ------------------------------------------------------------ |
| `barrels-umbrellas-backyard.jpg`   | Hero background; Signature Barrel Tables                     |
| `barrels-umbrellas-patio-dusk.jpg` | Gallery; Weddings card                                       |
| `barrels-umbrellas-ranch.jpg`      | Gallery                                                      |
| `barrels-stools-lawn.jpg`          | Matching Barstools; Gallery                                  |
| `barrel-bar-wagon-wheel.jpg`       | Barrel Bar; Gallery                                          |
| `wood-backdrop-birthday-salud.jpg` | Wood Backdrop; "Salud" display; Neon Signs; Birthdays card; Gallery |
| `wood-backdrop-cactus.jpg`         | Cactus Accents; Gallery                                      |
| `dessert-cart-night.jpg`           | Rustic Dessert Cart; Gallery                                 |
| `dessert-cart-day.jpg`             | Gallery                                                      |
| `dessert-cart-greenery.jpg`        | Gallery                                                      |
| `balloons-graduation-arch.jpg`     | Graduations card; Gallery                                    |
| `balloons-sunflower-gold.jpg`      | Balloon Garlands; Gallery                                    |
| `balloons-bee-column.jpg`          | Gallery                                                      |

## Not received yet (cards show as text until added)

| Filename                        | Would be used for                                         |
| ------------------------------- | --------------------------------------------------------- |
| `barrel-bar-horse-backdrop.jpg` | Horse & Horseshoe Cutouts (and Gallery)                   |
| `longhorn-bar.jpg`              | Western Longhorn Bar                                      |
| `arched-backdrops.jpg`          | Arched Wood Backdrops                                     |
| `saloon-facade-wanted.jpg`      | "Wanted" Photo Frame (and Gallery)                        |
| `saloon-facade.jpg`             | Western Saloon Facade                                     |
| `balloons-cowgirl-shower.jpg`   | Add-Ons feature photo; Baby Showers card; Rustic Dessert Table |
| `photo-booth.jpg`               | Photo Booth                                               |
| `barrel-table-light.jpg`        | Light finish card (a clearly light-finish table)          |
| `barrel-table-dark.jpg`         | Dark finish card (a clearly dark-finish table)            |
